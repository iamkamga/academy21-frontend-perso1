import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'node:crypto';
import Stripe from 'stripe';
import { db, initDb, seed } from './db';

dotenv.config(); initDb(); seed();
const app = express();
const PORT = Number(process.env.PORT || 5000);
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';

app.use(cors({ origin: FRONTEND_URL, credentials: true }));
app.use('/api/payments/stripe/webhook', express.raw({type:'application/json'}));
app.use(express.json({limit:'1mb'}));

const stripe = process.env.STRIPE_SECRET_KEY ? new Stripe(process.env.STRIPE_SECRET_KEY) : null;

type AuthReq = Request & { user?: {id:string,email:string,role:string} };
function auth(req: AuthReq, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.replace(/^Bearer\s+/i,'');
  if (!token) return res.status(401).json({message:'Authentification requise'});
  try { req.user = jwt.verify(token, JWT_SECRET) as AuthReq['user']; next(); }
  catch { return res.status(401).json({message:'Session expirée ou invalide'}); }
}
function admin(req: AuthReq,res:Response,next:NextFunction){ if(req.user?.role!=='admin') return res.status(403).json({message:'Accès administrateur requis'}); next(); }
function publicUser(id:string){ return db.prepare('SELECT id,email,name,role,created_at as createdAt FROM users WHERE id=?').get(id); }

app.get('/api/health',(_req,res)=>res.json({ok:true,service:'academy21-backend'}));

app.post('/api/auth/register',(req,res)=>{
  const {email,password,name} = req.body || {};
  if(typeof email!=='string'||!email.includes('@')||typeof password!=='string'||password.length<6) return res.status(400).json({message:'Email ou mot de passe invalide'});
  const normalized=email.trim().toLowerCase();
  if(db.prepare('SELECT id FROM users WHERE email=?').get(normalized)) return res.status(409).json({message:'Cette adresse email est déjà utilisée'});
  const id=crypto.randomUUID();
  db.prepare('INSERT INTO users(id,email,name,password_hash,role) VALUES(?,?,?,?,?)').run(id,normalized,typeof name==='string'?name.trim():null,bcrypt.hashSync(password,12),'member');
  const user=publicUser(id) as any;
  const token=jwt.sign({id:user.id,email:user.email,role:user.role},JWT_SECRET,{expiresIn:'7d'});
  res.status(201).json({token,user});
});

app.post('/api/auth/login',(req,res)=>{
  const {email,password}=req.body||{}; const user=db.prepare('SELECT * FROM users WHERE email=?').get(String(email||'').trim().toLowerCase()) as any;
  if(!user||!bcrypt.compareSync(String(password||''),user.password_hash)) return res.status(401).json({message:'Email ou mot de passe incorrect'});
  const safe={id:user.id,email:user.email,name:user.name,role:user.role};
  const token=jwt.sign(safe,JWT_SECRET,{expiresIn:'7d'}); res.json({token,user:safe});
});
app.get('/api/auth/me',auth,(req:AuthReq,res)=>res.json(publicUser(req.user!.id)));

app.get('/api/formations',(_req,res)=>res.json(db.prepare('SELECT id,title,description,price,image_url as imageUrl FROM formations ORDER BY title').all()));
app.get('/api/formations/:id',(req,res)=>{const f=db.prepare('SELECT id,title,description,price,image_url as imageUrl FROM formations WHERE id=?').get(req.params.id); if(!f)return res.status(404).json({message:'Formation introuvable'});res.json(f);});
app.post('/api/formations',auth,admin,(req,res)=>{const {id,title,description,price,imageUrl}=req.body; if(!id||!title||!description||!Number.isInteger(price)||price<0)return res.status(400).json({message:'Données formation invalides'}); db.prepare('INSERT INTO formations VALUES(?,?,?,?,?)').run(id,title,description,price,imageUrl||null);res.status(201).json({id,title,description,price,imageUrl});});
app.put('/api/formations/:id',auth,admin,(req,res)=>{const f=db.prepare('SELECT * FROM formations WHERE id=?').get(req.params.id) as any;if(!f)return res.status(404).json({message:'Formation introuvable'});const next={...f,...req.body};db.prepare('UPDATE formations SET title=?,description=?,price=?,image_url=? WHERE id=?').run(next.title,next.description,next.price,next.imageUrl||null,req.params.id);res.json({id:req.params.id,title:next.title,description:next.description,price:next.price,imageUrl:next.imageUrl});});
app.delete('/api/formations/:id',auth,admin,(req,res)=>{try{db.prepare('DELETE FROM formations WHERE id=?').run(req.params.id);res.status(204).end()}catch{res.status(409).json({message:'Formation utilisée par un paiement'})}});

app.get('/api/events',(_req,res)=>res.json([]));
app.get('/api/events/:id',(_req,res)=>res.status(404).json({message:'Événement introuvable'}));
app.post('/api/events',auth,admin,(req,res)=>res.status(201).json({id:crypto.randomUUID(),...req.body}));

function createPendingPayment(userId:string, formationId:string, method:string){
  const f=db.prepare('SELECT * FROM formations WHERE id=?').get(formationId) as any; if(!f) throw new Error('Formation introuvable');
  const paymentId=crypto.randomUUID(); db.prepare('INSERT INTO payments(id,user_id,formation_id,amount,method,status) VALUES(?,?,?,?,?,?)').run(paymentId,userId,formationId,f.price,method,'pending'); return {paymentId,formation:f};
}
function markPaid(paymentId:string, providerId?:string){
  const payment=db.prepare('SELECT * FROM payments WHERE id=?').get(paymentId) as any; if(!payment)return;
  db.prepare("UPDATE payments SET status='paid',provider_id=?,paid_at=CURRENT_TIMESTAMP WHERE id=?").run(providerId||null,paymentId);
  const exists=db.prepare('SELECT id FROM enrollments WHERE user_id=? AND formation_id=?').get(payment.user_id,payment.formation_id);
  if(!exists) db.prepare('INSERT INTO enrollments(id,user_id,formation_id,payment_id) VALUES(?,?,?,?)').run(crypto.randomUUID(),payment.user_id,payment.formation_id,paymentId);
}

app.post('/api/payments/checkout',auth,async(req:AuthReq,res)=>{
  if(!stripe)return res.status(503).json({message:'Stripe n’est pas configuré. Ajoutez STRIPE_SECRET_KEY au backend.'});
  try { const {paymentId,formation}=createPendingPayment(req.user!.id,String(req.body.formationId),'stripe');
    const session=await stripe.checkout.sessions.create({mode:'payment',line_items:[{price_data:{currency:'eur',product_data:{name:formation.title},unit_amount:formation.price*100},quantity:1}],customer_email:req.user!.email,success_url:`${FRONTEND_URL}/paiement/succes?session_id={CHECKOUT_SESSION_ID}`,cancel_url:`${FRONTEND_URL}/paiement/echec`,metadata:{paymentId,formationId:formation.id,userId:req.user!.id}});
    db.prepare('UPDATE payments SET provider_id=? WHERE id=?').run(session.id,paymentId); res.json({url:session.url,paymentId});
  } catch(e:any){res.status(400).json({message:e.message||'Erreur Stripe'})}
});

app.post('/api/payments/stripe/webhook',(req,res)=>{
  if(!stripe||!process.env.STRIPE_WEBHOOK_SECRET)return res.status(503).send('Stripe webhook non configuré');
  try { const event=stripe.webhooks.constructEvent(req.body,req.headers['stripe-signature'] as string,process.env.STRIPE_WEBHOOK_SECRET);
    if(event.type==='checkout.session.completed'){const s=event.data.object as Stripe.Checkout.Session; if(s.metadata?.paymentId) markPaid(s.metadata.paymentId,s.id);}
    res.json({received:true});
  } catch(e:any){res.status(400).send(`Webhook Error: ${e.message}`)}
});

app.get('/api/payments/stripe/confirm',auth,async(req:AuthReq,res)=>{
  if(!stripe)return res.status(503).json({message:'Stripe n’est pas configuré'});
  const sessionId=String(req.query.session_id||'');
  if(!sessionId)return res.status(400).json({message:'session_id manquant'});
  try { const session=await stripe.checkout.sessions.retrieve(sessionId); const payment=db.prepare('SELECT * FROM payments WHERE provider_id=? AND user_id=?').get(session.id,req.user!.id) as any;
    if(!payment)return res.status(404).json({message:'Paiement introuvable'});
    if(session.payment_status==='paid') markPaid(payment.id,session.id);
    res.json({status:session.payment_status==='paid'?'paid':payment.status,paymentId:payment.id});
  } catch(e:any){res.status(400).json({message:e.message||'Impossible de vérifier le paiement'})}
});

app.post('/api/payments/paypal/create',auth,async(req:AuthReq,res)=>{
  const cid=process.env.PAYPAL_CLIENT_ID, secret=process.env.PAYPAL_CLIENT_SECRET; if(!cid||!secret)return res.status(503).json({message:'PayPal n’est pas configuré. Ajoutez les clés sandbox au backend.'});
  try { const {paymentId,formation}=createPendingPayment(req.user!.id,String(req.body.formationId),'paypal'); const base=process.env.PAYPAL_ENV==='live'?'https://api-m.paypal.com':'https://api-m.sandbox.paypal.com';
    const basic=Buffer.from(`${cid}:${secret}`).toString('base64'); const authR=await fetch(`${base}/v1/oauth2/token`,{method:'POST',headers:{Authorization:`Basic ${basic}`,'Content-Type':'application/x-www-form-urlencoded'},body:'grant_type=client_credentials'}); const authJ:any=await authR.json();
    const orderR=await fetch(`${base}/v2/checkout/orders`,{method:'POST',headers:{Authorization:`Bearer ${authJ.access_token}`,'Content-Type':'application/json'},body:JSON.stringify({intent:'CAPTURE',purchase_units:[{reference_id:paymentId,amount:{currency_code:'EUR',value:formation.price.toFixed(2)},description:formation.title}],application_context:{return_url:`${FRONTEND_URL}/paiement/succes?paypal_payment_id=${paymentId}&paypal_order_id=ORDER_ID_PLACEHOLDER`,cancel_url:`${FRONTEND_URL}/paiement/echec`}})}); const order:any=await orderR.json();
    if(!orderR.ok)throw new Error(order.message||'Erreur PayPal'); db.prepare('UPDATE payments SET provider_id=? WHERE id=?').run(order.id,paymentId); const approve=order.links?.find((x:any)=>x.rel==='approve')?.href; const url=approve ? `${approve}${approve.includes('?')?'&':'?'}academy21_payment_id=${paymentId}` : undefined; res.json({url,orderId:order.id,paymentId});
  }catch(e:any){res.status(400).json({message:e.message||'Erreur PayPal'})}
});
app.post('/api/payments/paypal/capture',auth,async(req:AuthReq,res)=>{
  const cid=process.env.PAYPAL_CLIENT_ID, secret=process.env.PAYPAL_CLIENT_SECRET; if(!cid||!secret)return res.status(503).json({message:'PayPal n’est pas configuré'});
  const {orderId,paymentId}=req.body||{}; if(!orderId||!paymentId)return res.status(400).json({message:'orderId et paymentId sont requis'});
  const payment=db.prepare('SELECT * FROM payments WHERE id=? AND user_id=?').get(paymentId,req.user!.id) as any; if(!payment)return res.status(404).json({message:'Paiement introuvable'});
  try { const base=process.env.PAYPAL_ENV==='live'?'https://api-m.paypal.com':'https://api-m.sandbox.paypal.com'; const basic=Buffer.from(`${cid}:${secret}`).toString('base64'); const authR=await fetch(`${base}/v1/oauth2/token`,{method:'POST',headers:{Authorization:`Basic ${basic}`,'Content-Type':'application/x-www-form-urlencoded'},body:'grant_type=client_credentials'}); const authJ:any=await authR.json();
    const cap=await fetch(`${base}/v2/checkout/orders/${orderId}/capture`,{method:'POST',headers:{Authorization:`Bearer ${authJ.access_token}`,'Content-Type':'application/json'}}); const body:any=await cap.json(); if(!cap.ok)throw new Error(body.message||'Capture PayPal impossible');
    if(body.status==='COMPLETED') markPaid(paymentId,orderId); res.json({status:body.status,paymentId});
  } catch(e:any){res.status(400).json({message:e.message||'Erreur capture PayPal'})}
});

app.get('/api/payments/my',auth,(req:AuthReq,res)=>res.json(db.prepare(`SELECT p.id,p.formation_id as formationId,p.amount,p.status,p.method,p.created_at as createdAt,f.title as formationTitle FROM payments p JOIN formations f ON f.id=p.formation_id WHERE p.user_id=? ORDER BY p.created_at DESC`).all(req.user!.id).map((p:any)=>({...p,formation:{title:p.formationTitle}}))));

app.get('/api/member/dashboard',auth,(req:AuthReq,res)=>{const user=publicUser(req.user!.id) as any;const payments=db.prepare(`SELECT p.id,p.formation_id as formationId,p.amount,p.status,p.method,p.created_at as createdAt,f.title as formationTitle FROM payments p JOIN formations f ON f.id=p.formation_id WHERE p.user_id=? ORDER BY p.created_at DESC`).all(req.user!.id).map((p:any)=>({...p,formation:{title:p.formationTitle}}));const totalSpent=payments.filter((p:any)=>p.status==='paid').reduce((s:number,p:any)=>s+p.amount,0);res.json({user:{...user,memberSince:user.createdAt},payments,totalSpent});});
app.get('/api/member/payments',auth,(req:AuthReq,res)=>res.json(db.prepare('SELECT * FROM payments WHERE user_id=? ORDER BY created_at DESC').all(req.user!.id)));
app.get('/api/member/enrollments',auth,(req:AuthReq,res)=>res.json(db.prepare(`SELECT e.id,e.created_at as createdAt,f.id as formationId,f.title,f.description,f.price FROM enrollments e JOIN formations f ON f.id=e.formation_id WHERE e.user_id=?`).all(req.user!.id)));

app.get('/api/admin/members',auth,admin,(_req,res)=>res.json(db.prepare(`SELECT u.id,u.email,u.name,u.role,u.created_at as createdAt,(SELECT COUNT(*) FROM payments p WHERE p.user_id=u.id AND p.status='paid') as paymentCount FROM users u ORDER BY u.created_at DESC`).all()));
app.get('/api/admin/payments',auth,admin,(_req,res)=>res.json(db.prepare(`SELECT p.id,p.amount,p.status,p.method,p.created_at as createdAt,u.email as userEmail,f.title as formationTitle FROM payments p JOIN users u ON u.id=p.user_id JOIN formations f ON f.id=p.formation_id ORDER BY p.created_at DESC`).all().map((p:any)=>({...p,user:{email:p.userEmail},formation:{title:p.formationTitle}})));
app.get('/api/admin/stats',auth,admin,(_req,res)=>{const members=(db.prepare("SELECT COUNT(*) c FROM users WHERE role='member'").get() as any).c;const payments=(db.prepare("SELECT COUNT(*) c FROM payments WHERE status='paid'").get() as any).c;const revenue=(db.prepare("SELECT COALESCE(SUM(amount),0) c FROM payments WHERE status='paid'").get() as any).c;res.json({members,payments,revenue});});

app.use((err:Error,_req:Request,res:Response,_next:NextFunction)=>{console.error(err);res.status(500).json({message:'Erreur interne du serveur'});});
app.listen(PORT,()=>console.log(`Academy 21 backend: http://localhost:${PORT}`));
