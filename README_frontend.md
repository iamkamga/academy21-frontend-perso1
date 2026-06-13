# Academy 21 France — Frontend

Interface utilisateur développée avec Next.js 16 (App Router) pour la plateforme Academy 21 France.

## Stack technique

- **Framework** : Next.js 16 (App Router)
- **Langage** : TypeScript
- **Style** : CSS personnalisé
- **Tests E2E** : Playwright
- **CI/CD** : GitHub Actions

---

## Structure du projet

```
academy21-frontend/
├── public/
│   └── logo-a21-france.png
├── src/
│   └── app/
│       ├── page.tsx                          # Accueil
│       ├── login/page.tsx                    # Connexion
│       ├── register/page.tsx                 # Inscription
│       ├── dashboard/page.tsx                # Dashboard LMS
│       ├── admin/page.tsx                    # Dashboard Admin
│       ├── formations/
│       │   ├── page.tsx                      # Liste formations
│       │   └── ia-marketing-reseau/
│       │       ├── page.tsx                  # Détail formation
│       │       └── inscription/page.tsx      # Paiement
│       ├── rejoindre-academie/
│       │   ├── page.tsx                      # Programmes
│       │   ├── a21-training/page.tsx
│       │   ├── leadercamp/page.tsx
│       │   └── business-show/page.tsx
│       ├── candidature/page.tsx              # Formulaire candidature
│       ├── nos-valeurs/page.tsx              # 9 valeurs A21
│       ├── temoignages/page.tsx              # Témoignages
│       └── paiement/
│           ├── succes/page.tsx
│           └── echec/page.tsx
├── tests/
│   ├── enrollment.spec.ts                    # Tests E2E inscription
│   └── e2e.spec.ts                           # Tests E2E parcours complet
├── playwright.config.ts
└── .github/
    └── workflows/
        └── ci.yml
```

---

## Installation

### Prérequis

- Node.js >= 18
- npm >= 9

### 1. Cloner le dépôt

```bash
git clone https://github.com/Aubierg/academy21-frontend.git
cd academy21-frontend
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configurer les variables d'environnement

Créer un fichier `.env.local` :

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### 4. Lancer le serveur de développement

```bash
npm run dev
```

L'application est disponible sur [http://localhost:3000](http://localhost:3000)

---

## Pages disponibles

| Page | Route | Description |
|------|-------|-------------|
| Accueil | `/` | Page principale avec hero, programmes, stats |
| Connexion | `/login` | Formulaire de connexion |
| Inscription | `/register` | Création de compte |
| Formations | `/formations` | Liste des formations |
| Formation IA | `/formations/ia-marketing-reseau` | Détail formation (490€) |
| Paiement | `/formations/ia-marketing-reseau/inscription` | Stripe + PayPal |
| Dashboard | `/dashboard` | LMS : modules, quiz, certificat |
| Admin | `/admin` | Gestion membres, paiements, candidatures |
| Rejoindre | `/rejoindre-academie` | 3 programmes + CTA candidature |
| Candidature | `/candidature` | Formulaire 2 étapes |
| Nos valeurs | `/nos-valeurs` | 9 valeurs Academy 21 |
| Témoignages | `/temoignages` | Vidéos + témoignages écrits |
| Succès | `/paiement/succes` | Confirmation paiement |
| Échec | `/paiement/echec` | Erreur paiement |

---

## Dashboard LMS

Le dashboard membre intègre un système de formation complet :

- **5 modules** avec vidéo YouTube, contenus pédagogiques et TP
- **Quiz** de 3 questions par module
- **Progression** sauvegardée dans `localStorage`
- **Certificat** de complétion généré automatiquement quand tous les modules sont terminés

---

## Tests E2E (Playwright)

```bash
# Installer les navigateurs Playwright
npx playwright install

# Lancer tous les tests E2E
npx playwright test

# Mode interactif (UI)
npx playwright test --ui

# Un seul fichier
npx playwright test tests/enrollment.spec.ts
npx playwright test tests/e2e.spec.ts

# Rapport HTML
npx playwright show-report
```

**Scénarios testés :**
- Page d'accueil (hero, programmes)
- Authentification (login, erreurs, redirection)
- Rejoindre l'académie (CTA, navigation)
- Candidature (formulaire, validation)
- Flux inscription formation (étapes, paiement)
- Nos valeurs (contenu)

---

## Build de production

```bash
npm run build
npm start
```

---

## Déploiement (Vercel)

1. Connecter le dépôt GitHub sur [vercel.com](https://vercel.com)
2. Ajouter la variable d'environnement `NEXT_PUBLIC_API_URL` pointant vers l'API backend
3. Déploiement automatique à chaque push sur `main`

---

## CI/CD — GitHub Actions

Le pipeline s'exécute à chaque push sur `main` :

1. **Install** — `npm install`
2. **Build** — `npm run build`
3. **Tests E2E** — `npx playwright test`
4. **Deploy** — Déploiement vers Vercel

Secrets GitHub à configurer :

```
NEXT_PUBLIC_API_URL
VERCEL_TOKEN (optionnel)
```

---

## Auteur

**Aubierge Ndjiya** — Projet Academy 21 France  
Titre visé : Concepteur Développeur d'Applications (CDA)  
Entreprise : A.T.O Paris — Période : 20/04/2026 → 15/06/2026
