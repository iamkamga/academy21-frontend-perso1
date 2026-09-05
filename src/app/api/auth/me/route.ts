import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { getCurrentUser } from '@/lib/auth';

export async function GET() {
  const session = await getCurrentUser();
  if (!session) {
    return NextResponse.json({ message: 'Non authentifié' }, { status: 401 });
  }

  // On recharge depuis la DB pour renvoyer aussi le nom et la date d'inscription.
  const rows = await sql`
    SELECT id, email, name, role, created_at AS "createdAt"
    FROM users WHERE id = ${session.id}
  `;
  if (rows.length === 0) {
    return NextResponse.json({ message: 'Utilisateur introuvable' }, { status: 404 });
  }
  return NextResponse.json(rows[0]);
}
