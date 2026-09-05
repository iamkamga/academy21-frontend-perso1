import Database from 'better-sqlite3';
import fs from 'node:fs';
import path from 'node:path';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import crypto from 'node:crypto';
dotenv.config();

const file = process.env.DATABASE_FILE || './data/academy21.sqlite';
const dbPath = path.resolve(file);
fs.mkdirSync(path.dirname(dbPath), { recursive: true });
export const db = new Database(dbPath);
db.pragma('foreign_keys = ON');
db.pragma('journal_mode = WAL');

export function initDb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT NOT NULL UNIQUE,
      name TEXT,
      password_hash TEXT NOT NULL,
      role TEXT NOT NULL DEFAULT 'member' CHECK(role IN ('member','admin')),
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE IF NOT EXISTS formations (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      price INTEGER NOT NULL,
      image_url TEXT
    );
    CREATE TABLE IF NOT EXISTS payments (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      formation_id TEXT NOT NULL,
      amount INTEGER NOT NULL,
      currency TEXT NOT NULL DEFAULT 'eur',
      method TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'pending',
      provider_id TEXT,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      paid_at TEXT,
      FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
      FOREIGN KEY(formation_id) REFERENCES formations(id) ON DELETE RESTRICT
    );
    CREATE TABLE IF NOT EXISTS enrollments (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      formation_id TEXT NOT NULL,
      payment_id TEXT NOT NULL UNIQUE,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(user_id, formation_id),
      FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
      FOREIGN KEY(formation_id) REFERENCES formations(id) ON DELETE RESTRICT,
      FOREIGN KEY(payment_id) REFERENCES payments(id) ON DELETE CASCADE
    );
    CREATE INDEX IF NOT EXISTS idx_payments_user ON payments(user_id);
    CREATE INDEX IF NOT EXISTS idx_payments_status ON payments(status);
  `);
}

export function seed() {
  const formation = db.prepare('SELECT id FROM formations WHERE id=?').get('ia-marketing-reseau');
  if (!formation) db.prepare('INSERT INTO formations(id,title,description,price,image_url) VALUES(?,?,?,?,?)').run(
    'ia-marketing-reseau','IA appliquée au Marketing de Réseau','Formation complète en IA appliquée au marketing de réseau.',490,'/kcc-team.jpg'
  );
  const email = (process.env.ADMIN_EMAIL || 'admin@academy21france.fr').toLowerCase();
  const existing = db.prepare('SELECT id FROM users WHERE email=?').get(email) as {id:string}|undefined;
  if (!existing) {
    const hash = bcrypt.hashSync(process.env.ADMIN_PASSWORD || 'ChangeMe123!', 12);
    db.prepare('INSERT INTO users(id,email,name,password_hash,role) VALUES(?,?,?,?,?)').run(crypto.randomUUID(), email, 'Administrateur Academy 21', hash, 'admin');
    console.log(`Admin créé: ${email}`);
  }
}
