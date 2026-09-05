# Academy 21 France — Frontend

Interface utilisateur développée avec **Next.js 16 (App Router) + TypeScript** pour la plateforme Academy 21 France.

Le backend (Express + SQLite) est dans `backend/` et se déploie séparément (voir plus bas).

---

## Stack

- **Framework** : Next.js 16 (App Router)
- **Langage** : TypeScript (strict)
- **Style** : CSS personnalisé + polices auto-hébergées via `next/font`
- **Tests E2E** : Playwright
- **Déploiement** : Vercel (frontend) + hébergeur au choix (backend)

---

## Installation locale

Prérequis : Node.js ≥ 18, npm ≥ 9.

```bash
npm install
cp .env.local.example .env.local
# éditer .env.local si besoin
npm run dev
```

Application disponible sur http://localhost:3000

Pour lancer le backend en parallèle :

```bash
cd backend
npm install
npm run seed
npm run dev   # écoute sur http://localhost:5000
```

---

## Variables d'environnement

| Variable                    | Rôle                                     | Exemple dev              |
| --------------------------- | ---------------------------------------- | ------------------------ |
| `NEXT_PUBLIC_API_URL`       | URL du backend, appelée depuis le client | `http://localhost:5000`  |
| `NEXT_PUBLIC_FRONTEND_URL`  | URL publique du frontend (CORS, retours) | `http://localhost:3000`  |

Sur Vercel, ces deux variables se définissent dans **Project Settings → Environment Variables** (Production + Preview + Development).

---

## Déploiement Vercel

1. **Créer le projet** sur https://vercel.com en important le dépôt GitHub.
2. **Root Directory** : la racine du dépôt (le `package.json` frontend est au top).
3. **Framework Preset** : Next.js (auto-détecté).
4. **Environment Variables** :
   - `NEXT_PUBLIC_API_URL` = URL publique de ton backend déployé
   - `NEXT_PUBLIC_FRONTEND_URL` = URL Vercel de la prod (ex. `https://academy21.vercel.app`)
5. **Deploy**. Vercel construit et déploie automatiquement à chaque push sur `main` (prod) et sur chaque PR (preview).

Le fichier `vercel.json` fixe la région `cdg1` (Paris) et ajoute quelques en-têtes de sécurité de base.

---

## Déploiement du backend

Le backend utilise `better-sqlite3` (module natif, filesystem persistant requis) : **il ne peut pas tourner sur Vercel Functions**. Options recommandées :

- **Render** ou **Railway** : les plus simples, disque persistant pour SQLite inclus.
- **Fly.io** : un peu plus technique, volumes persistants.
- **VPS** (Hetzner, OVH, Scaleway) : contrôle total, à toi de gérer.

Variables à définir sur l'hébergeur backend :

- `PORT` (souvent injecté par la plateforme)
- `FRONTEND_URL` = URL Vercel du frontend (indispensable pour CORS)
- `JWT_SECRET` = chaîne aléatoire longue
- `ADMIN_EMAIL`, `ADMIN_PASSWORD` = compte admin initial
- `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET` (si paiements activés)
- `DATABASE_FILE` = chemin sur le disque persistant

⚠️ **Après déploiement du backend, mets à jour `FRONTEND_URL` avec l'URL Vercel** pour que CORS accepte les requêtes.

---

## Tests E2E (Playwright)

```bash
npx playwright install
npx playwright test          # tous les tests
npx playwright test --ui     # mode interactif
```

Les tests supposent que le frontend tourne en local (`npm run start`). Certains scénarios nécessitent aussi le backend démarré.

---

## Structure

```
academy21-frontend/
├── src/
│   ├── app/                  # Pages App Router
│   ├── components/           # Navbar, Footer
│   ├── hooks/useAuth.tsx     # Contexte d'authentification
│   └── lib/api.ts            # Client HTTP (utilise NEXT_PUBLIC_API_URL)
├── public/                   # Images statiques
├── backend/                  # API Express + SQLite (déployée séparément)
├── tests/                    # Specs Playwright
├── .github/workflows/ci.yml  # Vérification build sur PR
├── vercel.json               # Config Vercel (région + headers)
└── next.config.js
```

---

## Auteur

Projet Academy 21 France — Titre visé : Concepteur Développeur d'Applications (CDA).
