import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { requireAdmin } from '@/lib/auth';

export async function GET() {
  const rows = await sql`
    SELECT id, title, description, price, image_url AS "imageUrl"
    FROM formations
    ORDER BY title
  `;
  return NextResponse.json(rows);
}

export async function POST(req: NextRequest) {
  const auth = await requireAdmin();
  if (auth instanceof NextResponse) return auth;

  const body = await req.json().catch(() => ({}));
  const { id, title, description, price, imageUrl } = body ?? {};

  if (!id || !title || !description || !Number.isInteger(price) || price < 0) {
    return NextResponse.json({ message: 'Données formation invalides' }, { status: 400 });
  }

  await sql`
    INSERT INTO formations (id, title, description, price, image_url)
    VALUES (${id}, ${title}, ${description}, ${price}, ${imageUrl || null})
  `;
  return NextResponse.json({ id, title, description, price, imageUrl }, { status: 201 });
}
