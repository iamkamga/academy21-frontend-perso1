# Academy 21 France

Application web full-stack déployée sur **Vercel**, avec une base **Neon Postgres**.
Frontend et backend sont dans le **même projet Next.js** : les API vivent dans
`src/app/api/` comme routes App Router, et l'authentification passe par un
cookie httpOnly (pas de token exposé au JavaScript).

---

## Stack

- **Framework** : Next.js 16 (App Router)
- **Langage** : TypeScript strict
- **Base de données** : Postgres via Neon serverless (`@neondatabase/serverless`)
- **Auth** : JWT signé (`jsonwebtoken`) dans un cookie httpOnly
- **Paiements** : Stripe + PayPal (optionnels)
- **Tests E2E** : Playwright
- **Déploiement** : Vercel (Hobby suffit — gratuit)

---

## Prérequis

- Node.js ≥ 18
- Un compte gratuit **Neon** : https://console.neon.tech
- Un compte gratuit **Vercel** : https://vercel.com

---

## Installation locale

### 1. Cloner et installer

```bash
git clone <ton-repo>
cd academy21
npm install
```

### 2. Créer un projet Neon

Sur https://console.neon.tech → **New Project** → région Europe (`eu-central-1`
recommandé). Récupère la connection string dans **Connection Details →
Pooled connection** (garde le `?sslmode=require` à la fin).

### 3. Configurer les variables d'environnement

```bash
cp .env.local.example .env.local
# ouvre .env.local et remplis :
#   - DATABASE_URL       (depuis Neon)
#   - JWT_SECRET         (openssl rand -base64 48)
#   - ADMIN_EMAIL        (ton email)
#   - ADMIN_PASSWORD     (mot de passe fort)
```

Les clés Stripe/PayPal sont optionnelles : sans elles, les endpoints paiement
répondent proprement 503 et le reste de l'app marche.

### 4. Initialiser la base

```bash
npm run db:init
```

Crée les tables (idempotent), le compte admin et la formation par défaut.

### 5. Lancer

```bash
npm run dev
```

App disponible sur http://localhost:3000

---

## Structure

```
academy21/
├── src/
│   ├── app/
│   │   ├── api/                    # ← Backend : toutes les API routes
│   │   │   ├── auth/               #   register, login, logout, me
│   │   │   ├── formations/         #   CRUD formations
│   │   │   ├── events/             #   Événements (stub)
│   │   │   ├── payments/           #   Stripe (checkout, webhook, confirm)
│   │   │   │                       #   PayPal (create, capture)
│   │   │   ├── member/             #   dashboard, payments, enrollments
│   │   │   ├── admin/              #   members, payments, stats
│   │   │   ├── candidatures/       #   Réception formulaire candidature
│   │   │   └── health/             #   Ping
│   │   ├── (pages)                 # Toutes les pages publiques
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── lib/
│   │   ├── db.ts                   # Client Neon Postgres
│   │   ├── auth.ts                 # JWT + cookies + gardes route
│   │   ├── payments.ts             # Helpers Stripe/PayPal partagés
│   │   └── api.ts                  # Client HTTP frontend
│   ├── hooks/useAuth.tsx
│   └── components/                 # Navbar, Footer
├── scripts/
│   └── init-db.ts                  # Migration + seed (npm run db:init)
├── public/                         # Images statiques
├── tests/                          # Specs Playwright
├── vercel.json
└── next.config.js
```

---

## Déploiement Vercel

### 1. Créer la base de prod

Sur Neon : soit un **branch de prod** (Neon a des branches DB comme Git),
soit un projet séparé. Récupère la connection string.

### 2. Déployer sur Vercel

1. https://vercel.com → **New Project** → importe le dépôt GitHub.
2. **Framework Preset** : Next.js (auto-détecté).
3. **Environment Variables** — ajoute toutes celles de `.env.local.example` :
   - `DATABASE_URL` (Neon prod)
   - `JWT_SECRET` (nouvelle valeur, différente de dev)
   - `ADMIN_EMAIL`, `ADMIN_PASSWORD`
   - `STRIPE_*` et `PAYPAL_*` si tu actives les paiements
4. **Deploy**.

### 3. Initialiser la base de prod

Depuis ta machine, avec la `DATABASE_URL` de prod dans un `.env.local.prod` temporaire :

```bash
DATABASE_URL="postgres://...neon.tech/..." \
ADMIN_EMAIL="prod-admin@example.com" \
ADMIN_PASSWORD="un-mot-de-passe-solide" \
npm run db:init
```

### 4. Configurer Stripe (si activé)

Sur https://dashboard.stripe.com/webhooks → **Add endpoint** :
- URL : `https://<ton-app>.vercel.app/api/payments/stripe/webhook`
- Event : `checkout.session.completed`
- Copie le **signing secret** dans `STRIPE_WEBHOOK_SECRET` sur Vercel, puis redeploy.

---

## Endpoints API

| Méthode | Chemin                          | Auth        | Rôle                          |
| ------- | ------------------------------- | ----------- | ----------------------------- |
| GET     | `/api/health`                   | Public      | Ping                          |
| POST    | `/api/auth/register`            | Public      | Inscription (cookie posé)     |
| POST    | `/api/auth/login`               | Public      | Connexion (cookie posé)       |
| POST    | `/api/auth/logout`              | Public      | Efface le cookie              |
| GET     | `/api/auth/me`                  | Cookie      | Profil courant                |
| GET     | `/api/formations`               | Public      | Liste                         |
| GET     | `/api/formations/[id]`          | Public      | Détail                        |
| POST    | `/api/formations`               | Admin       | Créer                         |
| PUT     | `/api/formations/[id]`          | Admin       | Modifier                      |
| DELETE  | `/api/formations/[id]`          | Admin       | Supprimer                     |
| POST    | `/api/payments/checkout`        | Cookie      | Créer session Stripe          |
| POST    | `/api/payments/stripe/webhook`  | Signature   | Webhook Stripe                |
| GET     | `/api/payments/stripe/confirm`  | Cookie      | Confirmer paiement Stripe     |
| POST    | `/api/payments/paypal/create`   | Cookie      | Créer ordre PayPal            |
| POST    | `/api/payments/paypal/capture`  | Cookie      | Capturer ordre PayPal         |
| GET     | `/api/payments/my`              | Cookie      | Mes paiements                 |
| GET     | `/api/member/dashboard`         | Cookie      | Données dashboard             |
| GET     | `/api/member/payments`          | Cookie      | Liste paiements               |
| GET     | `/api/member/enrollments`       | Cookie      | Mes inscriptions              |
| GET     | `/api/admin/members`            | Admin       | Liste membres                 |
| GET     | `/api/admin/payments`           | Admin       | Tous les paiements            |
| GET     | `/api/admin/stats`              | Admin       | KPIs                          |
| POST    | `/api/candidatures`             | Public      | Soumettre candidature         |

---

## Notes

**Upload de CV.** L'endpoint `/api/candidatures` reçoit bien le multipart mais
ne stocke que le nom du fichier. Vercel Functions ont un filesystem éphémère —
pour vraiment recevoir les CV il faut brancher **Vercel Blob** (`@vercel/blob`)
ou un bucket S3. Marqué TODO dans le code.

**Cold start.** Neon serverless + Vercel Functions : premier appel après une
période d'inactivité prend ~500 ms (au lieu de ~50 ms). Négligeable pour ce
projet.

**Coût.** Vercel Hobby + Neon Free = **0 € / mois** dans les limites (100 GB
bande passante Vercel, 0.5 GB stockage Neon).

---

## Tests

```bash
npx playwright install
npx playwright test
```

Les tests supposent que l'app tourne localement (`npm run dev` sur `:3000`).
