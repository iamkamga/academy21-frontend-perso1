/**
 * Client Postgres via le driver serverless Neon.
 *
 * Neon serverless est optimisé pour Vercel Functions : chaque appel `sql`
 * ouvre une connexion HTTP/WebSocket éphémère, ce qui évite les problèmes
 * de pool de connexions typiques du serverless.
 *
 * Usage :
 *   import { sql } from '@/lib/db';
 *   const users = await sql`SELECT id, email FROM users WHERE id = ${userId}`;
 *   const [user] = await sql`SELECT ... WHERE id = ${id}`;
 *
 * Pour les transactions multi-requêtes (rare dans ce projet) :
 *   await sql.transaction([
 *     sql`UPDATE payments SET status='paid' WHERE id = ${id}`,
 *     sql`INSERT INTO enrollments ...`,
 *   ]);
 */

import { neon } from '@neondatabase/serverless';

if (!process.env.DATABASE_URL) {
  throw new Error(
    'DATABASE_URL manquant. Récupère la connection string sur https://console.neon.tech ' +
      'puis ajoute-la dans .env.local (dev) et dans Vercel → Project Settings → Environment Variables (prod).',
  );
}

export const sql = neon(process.env.DATABASE_URL);
