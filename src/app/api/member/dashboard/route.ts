import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { requireAuth } from '@/lib/auth';

export async function GET() {
  const auth = await requireAuth();
  if (auth instanceof NextResponse) return auth;

  const userRows = await sql`
    SELECT id, email, name, role, created_at AS "createdAt"
      FROM users WHERE id = ${auth.id}
  `;
  if (userRows.length === 0) {
    return NextResponse.json({ message: 'Utilisateur introuvable' }, { status: 404 });
  }
  const user = userRows[0];

  const paymentsRaw = await sql`
    SELECT p.id,
           p.formation_id AS "formationId",
           p.amount,
           p.status,
           p.method,
           p.created_at AS "createdAt",
           f.title AS "formationTitle"
      FROM payments p
      JOIN formations f ON f.id = p.formation_id
     WHERE p.user_id = ${auth.id}
     ORDER BY p.created_at DESC
  `;
  type PaymentRow = {
    id: number | string;
    formationId: number | string;
    amount: number | string;
    status: string;
    method: string;
    createdAt: string;
    formationTitle: string;
  };
  const payments = (paymentsRaw as PaymentRow[]).map((p) => ({ ...p, formation: { title: p.formationTitle } }));
  const totalSpent = payments
    .filter((p) => p.status === 'paid')
    .reduce((sum, p) => sum + Number(p.amount), 0);

  return NextResponse.json({
    user: { ...user, memberSince: user.createdAt },
    payments,
    totalSpent,
  });
}
