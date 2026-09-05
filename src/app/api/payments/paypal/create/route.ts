import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { requireAuth } from '@/lib/auth';
import { createPendingPayment, requestOrigin } from '@/lib/payments';

interface PayPalOrder {
  id: string;
  links?: Array<{ rel: string; href: string }>;
  message?: string;
}

export async function POST(req: NextRequest) {
  const auth = await requireAuth();
  if (auth instanceof NextResponse) return auth;

  const cid = process.env.PAYPAL_CLIENT_ID;
  const secret = process.env.PAYPAL_CLIENT_SECRET;
  if (!cid || !secret) {
    return NextResponse.json(
      { message: 'PayPal n’est pas configuré. Ajoute PAYPAL_CLIENT_ID et PAYPAL_CLIENT_SECRET.' },
      { status: 503 },
    );
  }

  const body = await req.json().catch(() => ({}));
  const formationId = String(body?.formationId || '');
  const origin = requestOrigin(req.url);

  try {
    const { paymentId, formation } = await createPendingPayment(auth.id, formationId, 'paypal');
    const base =
      process.env.PAYPAL_ENV === 'live'
        ? 'https://api-m.paypal.com'
        : 'https://api-m.sandbox.paypal.com';
    const basic = Buffer.from(`${cid}:${secret}`).toString('base64');

    const authRes = await fetch(`${base}/v1/oauth2/token`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    });
    const authJson = (await authRes.json()) as { access_token: string };

    const orderRes = await fetch(`${base}/v2/checkout/orders`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authJson.access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [
          {
            reference_id: paymentId,
            amount: { currency_code: 'EUR', value: formation.price.toFixed(2) },
            description: formation.title,
          },
        ],
        application_context: {
          return_url: `${origin}/paiement/succes?paypal_payment_id=${paymentId}`,
          cancel_url: `${origin}/paiement/echec`,
        },
      }),
    });
    const order = (await orderRes.json()) as PayPalOrder;
    if (!orderRes.ok) throw new Error(order.message || 'Erreur PayPal');

    await sql`UPDATE payments SET provider_id = ${order.id} WHERE id = ${paymentId}`;

    const approveLink = order.links?.find((x) => x.rel === 'approve')?.href;
    const url = approveLink
      ? `${approveLink}${approveLink.includes('?') ? '&' : '?'}academy21_payment_id=${paymentId}`
      : undefined;

    return NextResponse.json({ url, orderId: order.id, paymentId });
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Erreur PayPal';
    return NextResponse.json({ message: msg }, { status: 400 });
  }
}
