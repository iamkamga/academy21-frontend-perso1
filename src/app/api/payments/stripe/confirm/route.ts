import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { sql } from '@/lib/db';
import { requireAuth } from '@/lib/auth';
import { markPaid } from '@/lib/payments';

const stripe = process.env.STRIPE_SECRET_KEY ? new Stripe(process.env.STRIPE_SECRET_KEY) : null;

export async function GET(req: NextRequest) {
  const auth = await requireAuth();
  if (auth instanceof NextResponse) return auth;

  if (!stripe) {
    return NextResponse.json({ message: 'Stripe n’est pas configuré' }, { status: 503 });
  }

  const sessionId = new URL(req.url).searchParams.get('session_id') || '';
  if (!sessionId) {
    return NextResponse.json({ message: 'session_id manquant' }, { status: 400 });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const rows = await sql`
      SELECT * FROM payments WHERE provider_id = ${session.id} AND user_id = ${auth.id}
    `;
    if (rows.length === 0) {
      return NextResponse.json({ message: 'Paiement introuvable' }, { status: 404 });
    }
    const payment = rows[0];
    if (session.payment_status === 'paid') {
      await markPaid(payment.id, session.id);
    }
    return NextResponse.json({
      status: session.payment_status === 'paid' ? 'paid' : payment.status,
      paymentId: payment.id,
    });
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Impossible de vérifier le paiement';
    return NextResponse.json({ message: msg }, { status: 400 });
  }
}
