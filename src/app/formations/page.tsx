'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { api, Formation } from '@/lib/api';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

export default function FormationsPage() {
  const [formations, setFormations] = useState<Formation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [paying, setPaying] = useState<string | null>(null);
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    api.formations.list()
      .then(setFormations)
      .catch(() => setError('Impossible de charger les formations.'))
      .finally(() => setLoading(false));
  }, []);

  const handleBuy = async (f: Formation, method: 'stripe' | 'paypal') => {
    if (!user) { router.push('/login'); return; }
    setPaying(f.id);
    try {
      if (method === 'stripe') {
        const { url } = await api.payments.stripeCheckout(f.id, f.price, f.title);
        window.location.href = url;
      } else {
        const { url } = await api.payments.paypalCreate(f.id, f.price, f.title);
        window.location.href = url;
      }
    } catch (e: unknown) {
      alert(e instanceof Error ? e.message : 'Erreur paiement');
      setPaying(null);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f7f8fa' }}>

      {/* Header blanc — compact */}
      <div style={{
        background: 'white',
        borderBottom: '3px solid #C8102E',
        padding: '32px 0 24px',
      }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <div style={{ width: '32px', height: '3px', background: '#C8102E', borderRadius: '2px' }} />
            <span style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C8102E' }}>Catalogue</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(26px,4vw,40px)', color: '#1a1a1a', marginBottom: '8px' }}>
            Nos <span style={{ color: '#C8102E' }}>Formations</span>
          </h1>
          <p style={{ color: '#888', fontSize: '15px' }}>
            Investissez dans votre développement avec des programmes d&apos;excellence
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: 'clamp(24px,4vw,40px) 24px' }}>

        {loading && <div className="loading-spinner" />}


        {/* FORMATION IA — card moderne */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{
            background: 'white', borderRadius: '12px', overflow: 'hidden',
            border: '1px solid #e0e2e6', boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          }}>
            {/* Image band */}
            <div style={{
              height: '180px',
              background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0010 50%, #0d0005 100%)',
              position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {/* Fond décoratif */}
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(200,16,46,0.25) 0%, transparent 65%)' }} />
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 30px)' }} />

              {/* Icône IA */}
              <div style={{ textAlign: 'center', zIndex: 1 }}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ marginBottom: '8px' }}>
                  <rect x="8" y="14" width="32" height="24" rx="4" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none"/>
                  <rect x="14" y="8" width="20" height="8" rx="2" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none"/>
                  <circle cx="18" cy="26" r="3" fill="#C8102E"/>
                  <circle cx="30" cy="26" r="3" fill="#C8102E"/>
                  <path d="M20 32h8" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="24" y1="8" x2="24" y2="4" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                  <circle cx="24" cy="3" r="2" fill="rgba(255,255,255,0.4)"/>
                </svg>
                <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '11px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                  Intelligence Artificielle
                </div>
              </div>

              {/* Badges */}
              <div style={{ position: 'absolute', top: '14px', right: '14px', display: 'flex', gap: '6px' }}>
                <span style={{ background: '#C8102E', color: 'white', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '10px', padding: '3px 10px', borderRadius: '3px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Formation Pro</span>
                <span style={{ background: 'rgba(126,200,42,0.2)', color: '#7EC82A', border: '1px solid rgba(126,200,42,0.4)', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '10px', padding: '3px 10px', borderRadius: '3px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>CPF</span>
              </div>

              {/* Prix */}
              <div style={{ position: 'absolute', bottom: '14px', left: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ background: 'white', color: '#C8102E', fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '13px', padding: '4px 12px', borderRadius: '4px' }}>490 €</span>
                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', fontFamily: 'Montserrat,sans-serif' }}>20 heures · Distanciel</span>
              </div>
            </div>

            {/* Contenu */}
            <div style={{ padding: 'clamp(16px,3vw,28px)', display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '240px' }}>
                <h3 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(16px,2.5vw,20px)', marginBottom: '10px', color: '#1a1a1a', lineHeight: 1.3 }}>
                  IA appliquée au Marketing de Réseau
                </h3>
                <p style={{ color: '#777', fontSize: '14px', lineHeight: 1.7, marginBottom: '16px' }}>
                  Intégrez l&apos;intelligence artificielle dans votre activité commerciale. 5 modules pratiques pour maîtriser la prospection, le contenu, la conversion et l&apos;automatisation.
                </p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {['5 modules', '20h', 'Distanciel', '12-20 pers.'].map(tag => (
                    <span key={tag} style={{ background: '#f0f1f3', color: '#555', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '11px', padding: '4px 10px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{tag}</span>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flexShrink: 0, minWidth: '180px' }}>
                <Link href="/formations/ia-marketing-reseau" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  background: '#C8102E', color: 'white',
                  fontFamily: 'Montserrat,sans-serif', fontWeight: 700,
                  fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.06em',
                  padding: '12px 24px', borderRadius: '6px',
                }}>
                  Voir le programme
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
                <Link href="/formations/ia-marketing-reseau/inscription" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: '10px 24px', border: '1.5px solid #e0e2e6', borderRadius: '6px',
                  fontFamily: 'Montserrat,sans-serif', fontWeight: 700,
                  fontSize: '12px', color: '#555', textTransform: 'uppercase', letterSpacing: '0.05em',
                }}>
                  S&apos;inscrire
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* FORMATIONS API */}
        {!loading && formations.length > 0 && (
          <div className="grid-2">
            {formations.map((f, i) => (
              <FormationCard key={f.id} formation={f} index={i} paying={paying === f.id} onBuy={handleBuy} isLoggedIn={!!user} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function FormationCard({ formation: f, index, paying, onBuy, isLoggedIn }: {
  formation: Formation; index: number; paying: boolean;
  onBuy: (f: Formation, method: 'stripe' | 'paypal') => void; isLoggedIn: boolean;
}) {
  const [showPayOptions, setShowPayOptions] = useState(false);

  return (
    <div className="card" style={{ overflow: 'hidden', animation: `fadeUp 0.5s ease ${index * 0.1}s both` }}>
      <div style={{
        height: 'clamp(160px,20vw,220px)',
        background: f.imageUrl ? `url(${f.imageUrl}) center/cover` : 'linear-gradient(135deg, #1a0202 0%, #2a0a0a 100%)',
        position: 'relative',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)' }} />
        <div style={{ position: 'absolute', bottom: '14px', left: '18px', fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(18px,3vw,24px)', color: '#C8102E', background: 'white', padding: '4px 12px', borderRadius: '4px' }}>
          {f.price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
        </div>
      </div>
      <div style={{ padding: 'clamp(16px,3vw,24px)' }}>
        <h3 style={{ fontSize: 'clamp(16px,2.5vw,20px)', marginBottom: '10px', fontFamily: 'Montserrat,sans-serif', fontWeight: 800 }}>{f.title}</h3>
        <p style={{ color: '#777', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>{f.description}</p>
        {!showPayOptions ? (
          <button onClick={() => isLoggedIn ? setShowPayOptions(true) : onBuy(f, 'stripe')} disabled={paying} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            {paying ? 'Redirection...' : isLoggedIn ? 'Acheter cette formation' : 'Se connecter pour acheter'}
          </button>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button onClick={() => onBuy(f, 'stripe')} disabled={paying} className="btn btn-primary" style={{ justifyContent: 'center' }}>
              {paying ? 'Redirection...' : 'Payer par carte (Stripe)'}
            </button>
            <button onClick={() => onBuy(f, 'paypal')} disabled={paying} style={{ background: '#f0a500', color: '#1a1a1a', border: 'none', borderRadius: '6px', padding: '13px', cursor: 'pointer', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {paying ? 'Redirection...' : 'Payer via PayPal'}
            </button>
            <button onClick={() => setShowPayOptions(false)} style={{ background: 'none', border: 'none', color: '#aaa', fontSize: '13px', textDecoration: 'underline', cursor: 'pointer' }}>Annuler</button>
          </div>
        )}
      </div>
      <style>{`@keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }`}</style>
    </div>
  );
}
