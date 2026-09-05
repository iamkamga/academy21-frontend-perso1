import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { requireAuth } from '@/lib/auth';

export async function GET() {
  const auth = await requireAuth();
  if (auth instanceof NextResponse) return auth;

  const rows = await sql`
    SELECT e.id,
           e.created_at AS "createdAt",
           f.id AS "formationId",
           f.title,
           f.description,
           f.price
      FROM enrollments e
      JOIN formations f ON f.id = e.formation_id
     WHERE e.user_id = ${auth.id}
  `;
  return NextResponse.json(rows);
}
