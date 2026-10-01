/**
 * Programmes payables en ligne (Bachelor, Mastère, Executive MBA).
 *
 * `price` est le montant réellement encaissé en ligne (acompte d'inscription).
 * `tuition` est le coût total affiché à titre informatif.
 * Ces lignes sont créées automatiquement dans la table `formations` au premier
 * paiement si elles n'existent pas encore (voir lib/payments.ts) — le montant
 * reste donc toujours défini côté serveur, jamais par le client.
 */
export interface ProgrammePayant {
  id: string;
  title: string;
  description: string;
  price: number;       // acompte encaissé en ligne (€)
  tuition: string;     // coût total affiché
  imageUrl: string | null;
}

export const PROGRAMMES_PAYANTS: ProgrammePayant[] = [
  {
    id: 'bachelor-management',
    title: 'Bachelor Management Stratégique & Opérationnel — Acompte d’inscription',
    description: 'Acompte d’inscription au Bachelor Bac+3 (420 h). Déduit des frais de scolarité de 6 900 €.',
    price: 500,
    tuition: '6 900 €',
    imageUrl: null,
  },
  {
    id: 'mastere-strategie-leadership',
    title: 'Mastère Stratégie, Leadership & Transformation — Acompte d’inscription',
    description: 'Acompte d’inscription au Mastère Bac+5 (2 ans, 900 h). Déduit des frais de scolarité de 8 500 € par an.',
    price: 800,
    tuition: '8 500 € / an',
    imageUrl: null,
  },
  {
    id: 'executive-mba',
    title: 'Executive MBA Gouvernance, Leadership & Transformation — Acompte d’inscription',
    description: 'Acompte d’inscription à l’Executive MBA (12 mois). Déduit des frais de scolarité de 19 500 €.',
    price: 1500,
    tuition: '19 500 €',
    imageUrl: null,
  },
];

export const PROGRAMME_IDS = new Set(PROGRAMMES_PAYANTS.map(p => p.id));

export function getProgramme(id: string): ProgrammePayant | undefined {
  return PROGRAMMES_PAYANTS.find(p => p.id === id);
}
