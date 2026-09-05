import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { requireAdmin } from '@/lib/auth';

export async function GET() {
  const auth = await requireAdmin();
  if (auth instanceof NextResponse) return auth;

  const rows = await sql`
    SELECT p.id,
           p.amount,
           p.status,
           p.method,
           p.created_at AS "createdAt",
           u.email AS "userEmail",
           f.title AS "formationTitle"
      FROM payments p
      JOIN users u      ON u.id = p.user_id
      JOIN formations f ON f.id = p.formation_id
     ORDER BY p.created_at DESC
  `;
  const formatted = rows.map((p) => ({
    ...p,
    user: { email: p.userEmail },
    formation: { title: p.formationTitle },
  }));
  return NextResponse.json(formatted);
}
