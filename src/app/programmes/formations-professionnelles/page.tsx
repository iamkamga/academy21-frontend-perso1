import type { Metadata } from 'next';
import ProgrammePage, { Programme } from '@/components/ProgrammePage';

export const metadata: Metadata = {
  title: 'Formation professionnelle — IA appliquée au Marketing de Réseau | Academy 21 University',
  description: 'Formation professionnelle de 20 h en distanciel synchrone : intégrer l’intelligence artificielle dans la prospection, la communication et le développement de son réseau.',
};

const programme: Programme = {
  category: 'Formations professionnelles',
  tags: ['Formation professionnelle', 'Distanciel synchrone', '20 heures', '8 à 15 participants'],
  titleStart: 'Intelligence Artificielle appliquée au',
  titleAccent: 'Marketing de Réseau',
  subtitle: 'Transformer la prospection, la communication et le développement du réseau par l’IA.',
  keyInfos: [
    { label: 'Format', val: 'Distanciel synchrone' },
    { label: 'Durée', val: '20 heures' },
    { label: 'Rythme', val: '5 séances de 4 h' },
    { label: 'Effectif conseillé', val: '8 à 15 participants' },
  ],
  intro: {
    title: 'Une formation directement orientée métier',
    paragraphs: [
      'L’objectif est de permettre aux professionnels du marketing de réseau d’intégrer l’intelligence artificielle dans leurs pratiques quotidiennes afin de gagner en efficacité, en régularité et en qualité relationnelle, sans déshumaniser la relation commerciale.',
      'La formation privilégie les mises en situation, les cas concrets et la production de livrables immédiatement réutilisables.',
    ],
  },
  publics: [
    { title: 'Public cible', text: 'Marketeurs de réseau • Leaders et animateurs d’équipe • Entrepreneurs et indépendants • Professionnels de la vente relationnelle • Responsables de développement de réseau.' },
    { title: 'Prérequis', text: 'Maîtriser les usages numériques courants • Disposer d’un ordinateur connecté • Avoir une activité, un projet ou une expérience en marketing de réseau • Aucun prérequis technique en IA ou en programmation.' },
  ],
  dimensions: {
    title: 'Les 5 axes de la formation',
    items: [
      { title: 'Fondamentaux de l’IA', text: 'IA générative, cas d’usage, prompting, fiabilité, limites, confidentialité et bonnes pratiques.' },
      { title: 'Prospection augmentée', text: 'Personas, segmentation, ciblage, messages d’approche, qualification et scénarios de relance.' },
      { title: 'Personal Branding', text: 'Positionnement, storytelling, ligne éditoriale, posts, scripts vidéo et cohérence de marque.' },
      { title: 'Conversion & recrutement', text: 'Argumentaires, objections, relances, recrutement, onboarding et duplication.' },
      { title: 'Automatisation & pilotage', text: 'Workflows, tableaux de suivi, KPI, analyse des résultats et amélioration continue.' },
    ],
  },
  objectives: {
    title: 'Objectifs pédagogiques',
    items: [
      'Comprendre les principes essentiels de l’IA générative, ses possibilités et ses limites.',
      'Maîtriser l’art du prompt pour obtenir des productions pertinentes, contextualisées et exploitables.',
      'Structurer une prospection assistée par l’IA : ciblage, personas, qualification et personnalisation.',
      'Créer plus efficacement des contenus de communication et développer un personal branding cohérent.',
      'Améliorer les scripts de prise de contact, de présentation, de relance et de traitement des objections.',
      'Concevoir des processus de recrutement, d’onboarding et de duplication plus structurés.',
      'Mettre en place des workflows simples d’automatisation et des indicateurs de pilotage.',
      'Adopter un usage responsable de l’IA respectueux des données, de l’éthique et de la relation humaine.',
    ],
  },
  curriculum: {
    title: 'Architecture pédagogique — 20 heures',
    blocks: [
      {
        name: 'Modules',
        total: '20 h',
        rows: [
          { label: 'Module 01 — Fondamentaux de l’IA & marketing de réseau', hours: '3 h', detail: 'IA générative, cas d’usage, prompting, fiabilité, limites, confidentialité et bonnes pratiques.', deliverable: 'Créer une bibliothèque de prompts adaptée à son activité.' },
          { label: 'Module 02 — Prospection augmentée par l’IA', hours: '5 h', detail: 'Personas, segmentation, ciblage, messages d’approche, qualification, personnalisation et scénarios de relance.', deliverable: 'Construire une mini-campagne de prospection multicanale.' },
          { label: 'Module 03 — Communication & Personal Branding', hours: '4 h', detail: 'Positionnement, storytelling, ligne éditoriale, posts, scripts vidéo, calendrier de contenus et cohérence de marque.', deliverable: 'Produire un calendrier éditorial et plusieurs contenus prêts à publier.' },
          { label: 'Module 04 — Conversion, recrutement & développement du réseau', hours: '4 h', detail: 'Argumentaires, découverte des besoins, objections, relances, recrutement, onboarding et duplication.', deliverable: 'Élaborer un kit de conversation et d’intégration pour son réseau.' },
          { label: 'Module 05 — Automatisation & pilotage de la performance', hours: '4 h', detail: 'Workflows, organisation, tableaux de suivi, KPI, analyse des résultats et amélioration continue.', deliverable: 'Concevoir son système personnel de prospection et de suivi assisté par IA.' },
        ],
      },
    ],
  },
  admission: [
    { title: 'Accès', text: 'Ouvert aux professionnels ayant une activité, un projet ou une expérience en marketing de réseau. Aucun prérequis technique en IA ou en programmation.' },
    { title: 'Outils mobilisés', text: 'Assistants d’IA générative, outils de création de contenus, solutions de présentation et de productivité, tableurs et outils de suivi. Le choix est adapté au niveau des participants ; la pédagogie reste centrée sur des méthodes transférables plutôt que sur une plateforme unique.' },
  ],
  pedagogy: {
    title: 'Approche pédagogique',
    intro: 'Une logique « apprendre – tester – produire – améliorer » : apports courts, démonstrations guidées, exercices, analyse critique des résultats produits par l’IA et transposition immédiate dans l’activité.',
    items: ['Démonstrations en direct', 'Cas réels de marketing de réseau', 'Ateliers de prompting', 'Jeux de rôle et traitement des objections', 'Production de contenus', 'Construction d’un workflow final'],
  },
  evaluation: {
    title: 'Évaluation et validation',
    rows: [
      { title: 'Diagnostic initial', text: 'positionnement sur les usages de l’IA et les pratiques de prospection.' },
      { title: 'Évaluation formative', text: 'exercices, prompts, mises en situation et corrections au fil des modules.' },
      { title: 'Projet fil rouge', text: 'construction progressive d’un système de prospection et de développement de réseau assisté par IA.' },
      { title: 'Évaluation finale', text: 'présentation du dispositif, justification des choix et démonstration d’un workflow.' },
      { title: 'Validation', text: 'attestation de formation délivrée sous réserve de participation et de réalisation des activités prévues.' },
    ],
  },
  extraCards: [
    { title: 'Compétences visées', text: 'À l’issue des 20 heures, le participant est capable de concevoir et piloter un dispositif simple, cohérent et mesurable d’acquisition, de communication et d’animation de réseau assisté par l’IA, tout en conservant la maîtrise humaine des décisions, des messages et de la relation avec les prospects et partenaires.' },
    { title: 'Promesse pédagogique', text: 'Chaque participant repart avec un système concret et personnalisable pour intégrer l’IA à son activité de marketing de réseau — de la prospection au pilotage de la performance.' },
  ],
  outcomes: {
    title: 'Livrables remis ou produits pendant la formation',
    text: 'Bibliothèque de prompts • Fiches personas • Scripts de prospection et de relance • Matrice de traitement des objections • Calendrier éditorial • Kit d’onboarding • Tableau de KPI • Workflow personnel de prospection IA • Plan d’action post-formation.',
  },
  cta: {
    title: 'Prêt à transformer votre activité avec l’IA ?',
    text: 'Rejoignez la formation et maîtrisez l’intelligence artificielle appliquée au marketing de réseau.',
    label: 'S’inscrire maintenant — 490 €',
    href: '/formations/ia-marketing-reseau/inscription',
    footnote: '🔒 Paiement sécurisé · 20h de formation · Distanciel synchrone',
  },
  card: {
    icon: 'ia',
    bandLabel: 'Intelligence Artificielle',
    badges: ['Formation pro', 'Distanciel'],
    price: '490 €',
    priceMeta: '20 heures · 5 séances de 4 h',
    title: 'IA appliquée au Marketing de Réseau',
    description: 'Intégrez l’intelligence artificielle dans votre activité de réseau : prospection augmentée, personal branding, conversion et recrutement, automatisation et pilotage. Vous repartez avec votre propre système de prospection assisté par IA.',
    tags: ['5 modules', '20h', 'Distanciel synchrone', '8-15 pers.'],
    primary: { label: 'S’inscrire — 490 €', href: '/formations/ia-marketing-reseau/inscription' },
    secondary: { label: 'Voir le programme détaillé', href: '/formations/ia-marketing-reseau' },
  },
};

export default function FormationsProfessionnellesPage() {
  return <ProgrammePage p={programme} />;
}
