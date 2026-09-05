import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { sql } from '@/lib/db';
import { setSessionCookie } from '@/lib/auth';

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const { email, password } = body ?? {};

  const normalized = String(email || '').trim().toLowerCase();
  const rows = await sql`SELECT id, email, name, role, password_hash FROM users WHERE email = ${normalized}`;
  const user = rows[0];

  if (!user || !bcrypt.compareSync(String(password || ''), user.password_hash)) {
    return NextResponse.json({ message: 'Email ou mot de passe incorrect' }, { status: 401 });
  }

  const safe = {
    id: user.id as string,
    email: user.email as string,
    role: user.role as 'member' | 'admin',
  };
  await setSessionCookie(safe);

  return NextResponse.json({
    user: { ...safe, name: user.name },
  });
}
