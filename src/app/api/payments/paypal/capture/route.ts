import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { requireAuth } from '@/lib/auth';
import { markPaid } from '@/lib/payments';

interface PayPalCapture {
  status?: string;
  message?: string;
}

export async function POST(req: NextRequest) {
  const auth = await requireAuth();
  if (auth instanceof NextResponse) return auth;

  const cid = process.env.PAYPAL_CLIENT_ID;
  const secret = process.env.PAYPAL_CLIENT_SECRET;
  if (!cid || !secret) {
    return NextResponse.json({ message: 'PayPal n’est pas configuré' }, { status: 503 });
  }

  const body = await req.json().catch(() => ({}));
  const { orderId, paymentId } = body ?? {};
  if (!orderId || !paymentId) {
    return NextResponse.json({ message: 'orderId et paymentId sont requis' }, { status: 400 });
  }

  const rows = await sql`SELECT * FROM payments WHERE id = ${paymentId} AND user_id = ${auth.id}`;
  if (rows.length === 0) {
    return NextResponse.json({ message: 'Paiement introuvable' }, { status: 404 });
  }

  try {
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

    const capRes = await fetch(`${base}/v2/checkout/orders/${orderId}/capture`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authJson.access_token}`,
        'Content-Type': 'application/json',
      },
    });
    const captureBody = (await capRes.json()) as PayPalCapture;
    if (!capRes.ok) throw new Error(captureBody.message || 'Capture PayPal impossible');

    if (captureBody.status === 'COMPLETED') await markPaid(paymentId, orderId);
    return NextResponse.json({ status: captureBody.status, paymentId });
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Erreur capture PayPal';
    return NextResponse.json({ message: msg }, { status: 400 });
  }
}
