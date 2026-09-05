# Academy 21 — Backend

Backend Express + SQLite pour Academy 21.

## Installation

```bash
cd backend
cp .env.example .env
npm install
npm run seed
npm run dev
```

API: `http://localhost:5000`

Base SQLite: `backend/data/academy21.sqlite`

## Compte administrateur

Les identifiants sont définis dans `.env` via `ADMIN_EMAIL` et `ADMIN_PASSWORD`. Changez-les avant toute utilisation réelle.

## Paiements

- Stripe: renseigner `STRIPE_SECRET_KEY` et `STRIPE_WEBHOOK_SECRET`.
- PayPal: renseigner `PAYPAL_CLIENT_ID`, `PAYPAL_CLIENT_SECRET`, `PAYPAL_ENV=sandbox` ou `live`.

Le montant n'est jamais accepté depuis le navigateur: le backend récupère le prix officiel de la formation en base.

Stripe valide le paiement via webhook avant de passer la commande à `paid` et de créer l'inscription.
