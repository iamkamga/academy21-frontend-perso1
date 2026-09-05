import { NextRequest, NextResponse } from 'next/server';
import crypto from 'node:crypto';
import { requireAdmin } from '@/lib/auth';

// Les événements ne sont pas encore stockés en base : on renvoie une liste vide,
// comportement identique à l'ancien backend Express.
export async function GET() {
  return NextResponse.json([]);
}

export async function POST(req: NextRequest) {
  const auth = await requireAdmin();
  if (auth instanceof NextResponse) return auth;

  const body = await req.json().catch(() => ({}));
  return NextResponse.json({ id: crypto.randomUUID(), ...body }, { status: 201 });
}
