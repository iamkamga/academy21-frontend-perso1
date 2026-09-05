import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { requireAdmin } from '@/lib/auth';

export async function GET() {
  const auth = await requireAdmin();
  if (auth instanceof NextResponse) return auth;

  const [members, payments, revenue] = await Promise.all([
    sql`SELECT COUNT(*)::int AS c FROM users WHERE role = 'member'`,
    sql`SELECT COUNT(*)::int AS c FROM payments WHERE status = 'paid'`,
    sql`SELECT COALESCE(SUM(amount), 0)::int AS c FROM payments WHERE status = 'paid'`,
  ]);

  return NextResponse.json({
    members: members[0].c,
    payments: payments[0].c,
    revenue: revenue[0].c,
  });
}
