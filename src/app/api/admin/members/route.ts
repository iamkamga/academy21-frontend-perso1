import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { requireAdmin } from '@/lib/auth';

export async function GET() {
  const auth = await requireAdmin();
  if (auth instanceof NextResponse) return auth;

  const rows = await sql`
    SELECT u.id,
           u.email,
           u.name,
           u.role,
           u.created_at AS "createdAt",
           (SELECT COUNT(*) FROM payments p WHERE p.user_id = u.id AND p.status = 'paid') AS "paymentCount"
      FROM users u
     ORDER BY u.created_at DESC
  `;
  return NextResponse.json(rows);
}
