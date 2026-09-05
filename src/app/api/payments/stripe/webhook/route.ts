import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { markPaid } from '@/lib/payments';

const stripe = process.env.STRIPE_SECRET_KEY ? new Stripe(process.env.STRIPE_SECRET_KEY) : null;

// Force le runtime Node (Stripe SDK n'est pas compatible edge)
export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  if (!stripe || !process.env.STRIPE_WEBHOOK_SECRET) {
    return new NextResponse('Stripe webhook non configuré', { status: 503 });
  }

  // IMPORTANT : Stripe vérifie la signature sur le corps brut, pas sur du JSON parsé.
  const body = await req.text();
  const signature = req.headers.get('stripe-signature') || '';

  try {
    const event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET);
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;
      const paymentId = session.metadata?.paymentId;
      if (paymentId) await markPaid(paymentId, session.id);
    }
    return NextResponse.json({ received: true });
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Erreur inconnue';
    return new NextResponse(`Webhook Error: ${msg}`, { status: 400 });
  }
}
