import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { requireAuth } from '@/lib/auth';

export async function GET() {
  const auth = await requireAuth();
  if (auth instanceof NextResponse) return auth;

  const rows = await sql`
    SELECT * FROM payments
     WHERE user_id = ${auth.id}
     ORDER BY created_at DESC
  `;
  return NextResponse.json(rows);
}
