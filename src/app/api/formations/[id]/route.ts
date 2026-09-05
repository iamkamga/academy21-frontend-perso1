import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { requireAdmin } from '@/lib/auth';

type Ctx = { params: Promise<{ id: string }> };

export async function GET(_req: NextRequest, { params }: Ctx) {
  const { id } = await params;
  const rows = await sql`
    SELECT id, title, description, price, image_url AS "imageUrl"
    FROM formations WHERE id = ${id}
  `;
  if (rows.length === 0) {
    return NextResponse.json({ message: 'Formation introuvable' }, { status: 404 });
  }
  return NextResponse.json(rows[0]);
}

export async function PUT(req: NextRequest, { params }: Ctx) {
  const auth = await requireAdmin();
  if (auth instanceof NextResponse) return auth;

  const { id } = await params;
  const existing = await sql`SELECT * FROM formations WHERE id = ${id}`;
  if (existing.length === 0) {
    return NextResponse.json({ message: 'Formation introuvable' }, { status: 404 });
  }

  const patch = await req.json().catch(() => ({}));
  const merged = { ...existing[0], ...patch };

  await sql`
    UPDATE formations
       SET title = ${merged.title},
           description = ${merged.description},
           price = ${merged.price},
           image_url = ${merged.imageUrl || merged.image_url || null}
     WHERE id = ${id}
  `;

  return NextResponse.json({
    id,
    title: merged.title,
    description: merged.description,
    price: merged.price,
    imageUrl: merged.imageUrl || merged.image_url || null,
  });
}

export async function DELETE(_req: NextRequest, { params }: Ctx) {
  const auth = await requireAdmin();
  if (auth instanceof NextResponse) return auth;

  const { id } = await params;
  try {
    await sql`DELETE FROM formations WHERE id = ${id}`;
    return new NextResponse(null, { status: 204 });
  } catch {
    // Contrainte FK : la formation est référencée par des paiements
    return NextResponse.json({ message: 'Formation utilisée par un paiement' }, { status: 409 });
  }
}
