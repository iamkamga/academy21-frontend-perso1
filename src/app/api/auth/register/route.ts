import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import crypto from 'node:crypto';
import { sql } from '@/lib/db';
import { setSessionCookie } from '@/lib/auth';

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const { email, password, name } = body ?? {};

  if (typeof email !== 'string' || !email.includes('@') || typeof password !== 'string' || password.length < 6) {
    return NextResponse.json({ message: 'Email ou mot de passe invalide' }, { status: 400 });
  }

  const normalized = email.trim().toLowerCase();

  const existing = await sql`SELECT id FROM users WHERE email = ${normalized}`;
  if (existing.length > 0) {
    return NextResponse.json({ message: 'Cette adresse email est déjà utilisée' }, { status: 409 });
  }

  const id = crypto.randomUUID();
  const hash = bcrypt.hashSync(password, 12);
  const displayName = typeof name === 'string' ? name.trim() : null;

  await sql`
    INSERT INTO users (id, email, name, password_hash, role)
    VALUES (${id}, ${normalized}, ${displayName}, ${hash}, 'member')
  `;

  const user = { id, email: normalized, role: 'member' as const };
  await setSessionCookie(user);

  return NextResponse.json({ user }, { status: 201 });
}
