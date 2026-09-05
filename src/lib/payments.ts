/**
 * Helpers partagés entre les routes de paiement Stripe et PayPal.
 * Toute logique DB touchant `payments` et `enrollments` passe par ici.
 */

import crypto from 'node:crypto';
import { sql } from '@/lib/db';

export interface Formation {
  id: string;
  title: string;
  description: string;
  price: number;
  image_url: string | null;
}

/**
 * Récupère la formation en base et crée un paiement `pending`.
 * Le montant est toujours pris depuis la DB, jamais depuis le client.
 */
export async function createPendingPayment(
  userId: string,
  formationId: string,
  method: 'stripe' | 'paypal',
): Promise<{ paymentId: string; formation: Formation }> {
  const rows = await sql`SELECT * FROM formations WHERE id = ${formationId}`;
  if (rows.length === 0) throw new Error('Formation introuvable');
  const formation = rows[0] as unknown as Formation;

  const paymentId = crypto.randomUUID();
  await sql`
    INSERT INTO payments (id, user_id, formation_id, amount, method, status)
    VALUES (${paymentId}, ${userId}, ${formationId}, ${formation.price}, ${method}, 'pending')
  `;

  return { paymentId, formation };
}

/**
 * Marque un paiement comme payé et crée l'inscription si elle n'existe pas.
 * Idempotent : peut être appelé plusieurs fois (webhook + confirm) sans doublon.
 */
export async function markPaid(paymentId: string, providerId?: string): Promise<void> {
  const rows = await sql`SELECT * FROM payments WHERE id = ${paymentId}`;
  if (rows.length === 0) return;
  const payment = rows[0];

  await sql`
    UPDATE payments
       SET status = 'paid',
           provider_id = ${providerId || null},
           paid_at = NOW()
     WHERE id = ${paymentId}
  `;

  const existing = await sql`
    SELECT id FROM enrollments WHERE user_id = ${payment.user_id} AND formation_id = ${payment.formation_id}
  `;
  if (existing.length === 0) {
    await sql`
      INSERT INTO enrollments (id, user_id, formation_id, payment_id)
      VALUES (${crypto.randomUUID()}, ${payment.user_id}, ${payment.formation_id}, ${paymentId})
    `;
  }
}

/**
 * Construit l'origin (protocol + host) depuis l'URL de la requête.
 * Sert à générer les success_url / cancel_url des passerelles de paiement
 * sans avoir à hardcoder ni gérer NEXT_PUBLIC_FRONTEND_URL.
 */
export function requestOrigin(reqUrl: string): string {
  return new URL(reqUrl).origin;
}
