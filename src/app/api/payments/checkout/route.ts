import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { sql } from '@/lib/db';
import { requireAuth } from '@/lib/auth';
import { createPendingPayment, requestOrigin } from '@/lib/payments';

const stripe = process.env.STRIPE_SECRET_KEY ? new Stripe(process.env.STRIPE_SECRET_KEY) : null;

export async function POST(req: NextRequest) {
  const auth = await requireAuth();
  if (auth instanceof NextResponse) return auth;

  if (!stripe) {
    return NextResponse.json(
      { message: 'Stripe n’est pas configuré. Ajoute STRIPE_SECRET_KEY à ton env.' },
      { status: 503 },
    );
  }

  const body = await req.json().catch(() => ({}));
  const formationId = String(body?.formationId || '');
  const origin = requestOrigin(req.url);

  try {
    const { paymentId, formation } = await createPendingPayment(auth.id, formationId, 'stripe');

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: { name: formation.title },
            unit_amount: formation.price * 100,
          },
          quantity: 1,
        },
      ],
      customer_email: auth.email,
      success_url: `${origin}/paiement/succes?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/paiement/echec`,
      metadata: { paymentId, formationId: formation.id, userId: auth.id },
    });

    await sql`UPDATE payments SET provider_id = ${session.id} WHERE id = ${paymentId}`;
    return NextResponse.json({ url: session.url, paymentId });
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Erreur Stripe';
    return NextResponse.json({ message: msg }, { status: 400 });
  }
}
