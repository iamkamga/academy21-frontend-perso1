import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { requireAuth } from '@/lib/auth';

export async function GET() {
  const auth = await requireAuth();
  if (auth instanceof NextResponse) return auth;

  const rows = await sql`
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
  const formatted = rows.map((p) => ({ ...p, formation: { title: p.formationTitle } }));
  return NextResponse.json(formatted);
}
