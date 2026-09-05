import { NextRequest, NextResponse } from 'next/server';
import crypto from 'node:crypto';
import { sql } from '@/lib/db';

export const runtime = 'nodejs';

/**
 * Réception du formulaire de candidature (multipart/form-data).
 *
 * Note : on stocke uniquement le NOM du fichier CV. Vercel Functions ont un
 * filesystem éphémère, on ne peut pas persister un upload sans stockage
 * externe. Pour vraiment recevoir les CV il faut brancher Vercel Blob
 * (`@vercel/blob`) ou un bucket S3 — TODO quand la fonctionnalité sera prioritaire.
 */
export async function POST(req: NextRequest) {
  const form = await req.formData();

  const prenom = String(form.get('prenom') || '').trim();
  const nom = String(form.get('nom') || '').trim();
  const email = String(form.get('email') || '').trim().toLowerCase();
  const telephone = String(form.get('telephone') || '').trim();
  const diplome = String(form.get('diplome') || '').trim();
  const motivation = String(form.get('motivation') || '').trim();
  const cvFile = form.get('cv');
  const cvFilename = cvFile instanceof File ? cvFile.name : null;

  if (!prenom || !nom || !email || !email.includes('@')) {
    return NextResponse.json(
      { message: 'Prénom, nom et email sont obligatoires' },
      { status: 400 },
    );
  }

  const id = crypto.randomUUID();
  await sql`
    INSERT INTO candidatures (id, prenom, nom, email, telephone, diplome, motivation, cv_filename)
    VALUES (${id}, ${prenom}, ${nom}, ${email}, ${telephone}, ${diplome}, ${motivation}, ${cvFilename})
  `;

  return NextResponse.json({ ok: true, id }, { status: 201 });
}
