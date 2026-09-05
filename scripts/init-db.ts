/**
 * Script d'initialisation de la base Neon Postgres.
 *
 * À exécuter UNE FOIS après avoir créé le projet Neon et rempli
 * DATABASE_URL, ADMIN_EMAIL et ADMIN_PASSWORD dans .env.local :
 *
 *   npm run db:init
 *
 * Idempotent : peut être relancé sans casser les données existantes.
 * Crée les tables si absentes, insère l'admin et la formation par défaut
 * si absents.
 */

import { config } from 'dotenv';
import { neon } from '@neondatabase/serverless';

config({ path: '.env.local' });
import bcrypt from 'bcryptjs';
import crypto from 'node:crypto';

if (!process.env.DATABASE_URL) {
  console.error('❌ DATABASE_URL manquant dans .env.local');
  process.exit(1);
}

const sql = neon(process.env.DATABASE_URL);

async function main() {
  console.log('📦 Création des tables…');

  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id            TEXT PRIMARY KEY,
      email         TEXT NOT NULL UNIQUE,
      name          TEXT,
      password_hash TEXT NOT NULL,
      role          TEXT NOT NULL DEFAULT 'member' CHECK (role IN ('member','admin')),
      created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS formations (
      id          TEXT PRIMARY KEY,
      title       TEXT NOT NULL,
      description TEXT NOT NULL,
      price       INTEGER NOT NULL,
      image_url   TEXT
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS payments (
      id           TEXT PRIMARY KEY,
      user_id      TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      formation_id TEXT NOT NULL REFERENCES formations(id) ON DELETE RESTRICT,
      amount       INTEGER NOT NULL,
      currency     TEXT NOT NULL DEFAULT 'eur',
      method       TEXT NOT NULL,
      status       TEXT NOT NULL DEFAULT 'pending',
      provider_id  TEXT,
      created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      paid_at      TIMESTAMPTZ
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS enrollments (
      id           TEXT PRIMARY KEY,
      user_id      TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      formation_id TEXT NOT NULL REFERENCES formations(id) ON DELETE RESTRICT,
      payment_id   TEXT NOT NULL UNIQUE REFERENCES payments(id) ON DELETE CASCADE,
      created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      UNIQUE (user_id, formation_id)
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS candidatures (
      id          TEXT PRIMARY KEY,
      prenom      TEXT NOT NULL,
      nom         TEXT NOT NULL,
      email       TEXT NOT NULL,
      telephone   TEXT,
      diplome     TEXT,
      motivation  TEXT,
      cv_filename TEXT,
      created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;

  await sql`CREATE INDEX IF NOT EXISTS idx_payments_user   ON payments(user_id)`;
  await sql`CREATE INDEX IF NOT EXISTS idx_payments_status ON payments(status)`;
  await sql`CREATE INDEX IF NOT EXISTS idx_enrollments_user ON enrollments(user_id)`;

  console.log('🌱 Seed formation par défaut…');
  await sql`
    INSERT INTO formations (id, title, description, price, image_url)
    VALUES (
      'ia-marketing-reseau',
      'IA appliquée au Marketing de Réseau',
      'Formation complète en IA appliquée au marketing de réseau.',
      490,
      '/kcc-team.jpg'
    )
    ON CONFLICT (id) DO NOTHING
  `;

  console.log('👤 Seed compte administrateur…');
  const adminEmail = (process.env.ADMIN_EMAIL || 'admin@academy21france.fr').toLowerCase();
  const adminPassword = process.env.ADMIN_PASSWORD || 'ChangeMe123!';

  const existing = await sql`SELECT id FROM users WHERE email = ${adminEmail}`;
  if (existing.length === 0) {
    const hash = bcrypt.hashSync(adminPassword, 12);
    await sql`
      INSERT INTO users (id, email, name, password_hash, role)
      VALUES (${crypto.randomUUID()}, ${adminEmail}, 'Administrateur Academy 21', ${hash}, 'admin')
    `;
    console.log(`   ✅ Admin créé : ${adminEmail}`);
    if (adminPassword === 'ChangeMe123!') {
      console.warn('   ⚠️  Mot de passe par défaut utilisé. Change ADMIN_PASSWORD !');
    }
  } else {
    console.log(`   ↩︎  Admin déjà présent : ${adminEmail}`);
  }

  console.log('✨ Base initialisée avec succès.');
}

main().catch((err) => {
  console.error('❌ Erreur init DB :', err);
  process.exit(1);
});
