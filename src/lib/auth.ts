/**
 * Auth helpers pour les API routes Next.js.
 *
 * Modèle : JWT stocké dans un cookie httpOnly (plus sûr que localStorage,
 * inaccessible depuis JS donc XSS = pas de vol de token). Le cookie est
 * envoyé automatiquement à chaque requête même origine, donc aucun header
 * Authorization à gérer côté client.
 */

import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const JWT_SECRET = process.env.JWT_SECRET;
const COOKIE_NAME = 'a21_session';
const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 jours

if (!JWT_SECRET) {
  // On échoue dès l'import plutôt que sur la première requête auth,
  // ça évite les 500 mystérieux en prod si l'env var est oubliée.
  throw new Error(
    'JWT_SECRET manquant. Génère une valeur aléatoire (`openssl rand -base64 48`) ' +
      'et ajoute-la dans .env.local et sur Vercel.',
  );
}

export interface SessionUser {
  id: string;
  email: string;
  role: 'member' | 'admin';
}

// ------------------------------------------------------------------
// Signature / vérification
// ------------------------------------------------------------------

export function signSession(user: SessionUser): string {
  return jwt.sign(user, JWT_SECRET!, { expiresIn: `${SESSION_MAX_AGE}s` });
}

export function verifySession(token: string): SessionUser | null {
  try {
    const payload = jwt.verify(token, JWT_SECRET!) as jwt.JwtPayload & SessionUser;
    return { id: payload.id, email: payload.email, role: payload.role };
  } catch {
    return null;
  }
}

// ------------------------------------------------------------------
// Lecture / écriture du cookie de session
// ------------------------------------------------------------------

export async function setSessionCookie(user: SessionUser): Promise<void> {
  const token = signSession(user);
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: SESSION_MAX_AGE,
  });
}

export async function clearSessionCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export async function getCurrentUser(): Promise<SessionUser | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return null;
  return verifySession(token);
}

// ------------------------------------------------------------------
// Gardes pour les handlers de route
// ------------------------------------------------------------------

/**
 * Renvoie soit l'utilisateur, soit une NextResponse 401 à retourner tel quel.
 * Usage :
 *   const user = await requireAuth();
 *   if (user instanceof NextResponse) return user;
 *   // ici user est typé SessionUser
 */
export async function requireAuth(): Promise<SessionUser | NextResponse> {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ message: 'Authentification requise' }, { status: 401 });
  }
  return user;
}

export async function requireAdmin(): Promise<SessionUser | NextResponse> {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ message: 'Authentification requise' }, { status: 401 });
  }
  if (user.role !== 'admin') {
    return NextResponse.json({ message: 'Accès administrateur requis' }, { status: 403 });
  }
  return user;
}
