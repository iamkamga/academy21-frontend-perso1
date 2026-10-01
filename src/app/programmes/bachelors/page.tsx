import type { Metadata } from 'next';
import ProgrammePage, { Programme } from '@/components/ProgrammePage';

export const metadata: Metadata = {
  title: 'Bachelor Management Stratégique & Opérationnel | Academy 21 University',
  description: 'Bachelor Bac+3 (niveau 6) préparant au Titre professionnel Responsable d’établissement marchand – RNCP38666. 420 h, présentiel, distanciel ou hybride.',
};

const programme: Programme = {
  category: 'Bachelors',
  tags: ['Bachelor · Bac+3', 'Niveau 6', 'RNCP38666', 'Présentiel · Distanciel · Hybride'],
  titleStart: 'Bachelor Management',
  titleAccent: 'Stratégique & Opérationnel',
  subtitle: 'Piloter la performance • Développer l’activité • Manager les équipes. Une formation pour devenir manager d’un centre de profit.',
  keyInfos: [
    { label: 'Niveau de sortie', val: 'Bac+3 — Niveau 6' },
    { label: 'Durée', val: '420 h de formation' },
    { label: 'Certification préparée', val: 'Titre professionnel — RNCP38666' },
    { label: 'Modalités', val: 'Présentiel • Distanciel • Hybride' },
  ],
  intro: {
    title: 'Une formation pour devenir manager d’un centre de profit',
    paragraphs: [
      'Le Bachelor Management Stratégique & Opérationnel d’Academy 21 University forme des professionnels capables de prendre la responsabilité d’une activité commerciale, d’en développer la performance et d’animer les équipes qui la font vivre. Le parcours associe vision stratégique et maîtrise du terrain : commerce, finance, management, ressources humaines, expérience client, approvisionnements, digital et conduite de projet.',
      'Au-delà des connaissances de gestion, la formation place l’apprenant dans une posture de décideur : analyser une situation, fixer des priorités, construire des prévisionnels, arbitrer, mobiliser une équipe, suivre les résultats et mettre en œuvre les actions correctives nécessaires.',
    ],
  },
  dimensions: {
    title: 'Les 4 dimensions du Bachelor',
    items: [
      { title: 'Stratégie & Développement', text: 'Comprendre son marché, analyser la concurrence, contribuer aux orientations stratégiques, construire un plan de développement et transformer une ambition en plan d’action.' },
      { title: 'Performance & Pilotage', text: 'Maîtriser les indicateurs économiques, construire des budgets et prévisionnels, suivre les marges et la rentabilité, analyser les écarts et décider des actions correctives.' },
      { title: 'Commerce & Expérience client', text: 'Piloter l’offre, les approvisionnements et l’activité commerciale, améliorer le parcours client, développer l’omnicanalité et renforcer la fidélisation.' },
      { title: 'Leadership & Management', text: 'Recruter, intégrer, organiser l’activité, développer les compétences, animer les équipes, conduire les projets et créer les conditions d’une performance collective durable.' },
    ],
  },
  objectives: {
    title: 'Des compétences directement mobilisables',
    items: [
      'Piloter l’activité commerciale et sécuriser les approvisionnements.',
      'Construire et faire évoluer une offre adaptée au marché et aux attentes clients.',
      'Concevoir une expérience client performante, inclusive et fidélisante.',
      'Contribuer aux orientations stratégiques et les traduire en actions opérationnelles.',
      'Élaborer et présenter budgets, prévisionnels et tableaux de bord.',
      'Analyser la performance économique et décider des actions correctives.',
      'Piloter le recrutement, l’intégration et le développement des collaborateurs.',
      'Organiser le travail, manager la performance et renforcer la cohésion des équipes.',
      'Conduire des projets et mobiliser les équipes autour du changement.',
    ],
  },
  curriculum: {
    title: 'Programme — 420 heures',
    blocks: [
      {
        name: 'Enseignements',
        total: '420 h',
        rows: [
          { label: 'Stratégie, veille & diagnostic d’activité', hours: '35 h', detail: 'Marché, concurrence, tendances, zone de chalandise, diagnostic stratégique, RSE et orientations de développement.' },
          { label: 'Marketing & développement commercial', hours: '35 h', detail: 'Segmentation, positionnement, offre, prix, plan d’action commercial, fidélisation, omnicanalité.' },
          { label: 'Achats, stocks & chaîne d’approvisionnement', hours: '42 h', detail: 'Prévisions, commandes, fournisseurs, stocks, inventaires, rotation, démarque, continuité des flux.' },
          { label: 'Expérience client & performance commerciale', hours: '35 h', detail: 'Parcours client, qualité de service, merchandising, opérations commerciales, accessibilité, réclamations.' },
          { label: 'Finance & pilotage de la rentabilité', hours: '49 h', detail: 'CA, marges, charges, budgets, seuil de rentabilité, prévisionnels, tableaux de bord, analyse des écarts.' },
          { label: 'Leadership & management opérationnel', hours: '42 h', detail: 'Organisation, objectifs, délégation, animation, motivation, cohésion, gestion des situations sensibles.' },
          { label: 'Ressources humaines & droit social', hours: '35 h', detail: 'Recrutement, intégration, plannings, entretiens, compétences, réglementation, inclusion et handicap.' },
          { label: 'Management de projet & conduite du changement', hours: '35 h', detail: 'Cadrage, planification, ressources, risques, gouvernance, communication et mobilisation des équipes.' },
          { label: 'Digital, data & intelligence artificielle', hours: '28 h', detail: 'CRM, e-commerce, data, KPI digitaux, IA générative, automatisation, RGPD et aide à la décision.' },
          { label: 'Communication professionnelle & négociation', hours: '28 h', detail: 'Réunions, reporting, présentation de résultats, argumentation, négociation, communication managériale.' },
          { label: 'Management responsable, qualité & prévention', hours: '21 h', detail: 'RSE, sécurité, prévention, qualité, éthique, accessibilité et amélioration continue.' },
          { label: 'Projet professionnel & préparation certification', hours: '35 h', detail: 'Dossier professionnel, études de cas, productions, soutenances, simulations et préparation au jury.' },
        ],
      },
    ],
  },
  admission: [
    { title: 'Accès sur diplôme', text: 'Être titulaire d’un diplôme ou titre de niveau 5 (Bac+2) ou justifier d’un niveau de formation jugé compatible avec les exigences du parcours. L’admission reste soumise à l’examen du dossier et à un entretien permettant d’évaluer le projet professionnel, les acquis et la capacité à suivre une formation de niveau 6.' },
    { title: 'Accès sur expérience', text: 'À défaut du niveau académique requis, justifier d’au moins 5 années d’expérience professionnelle significative, prioritairement dans le commerce, la vente, le management, la gestion d’activité, l’entrepreneuriat ou la conduite d’équipe/projet. Cette expérience fait l’objet d’une appréciation individualisée lors de l’étude du dossier et de l’entretien d’admission.' },
  ],
  admissionNote: 'La condition de 5 années d’expérience est une condition d’admission définie par Academy 21 University pour les candidats ne disposant pas du niveau académique attendu ; elle ne constitue pas une exigence réglementaire propre au RNCP38666.',
  pedagogy: {
    title: 'Une pédagogie professionnalisante',
    intro: 'Le Bachelor privilégie les situations professionnelles plutôt qu’une accumulation de cours théoriques. Chaque séquence conduit à une production : diagnostic, tableau de bord, budget, plan commercial, planning, dossier de recrutement, analyse de performance ou plan d’action.',
    items: ['Cas d’entreprise', 'Business games', 'Simulations managériales', 'Ateliers Excel & KPI', 'Jeux de rôle', 'Projet fil rouge', 'Soutenances professionnelles'],
  },
  evaluation: {
    title: 'Évaluation & préparation au jury',
    text: 'L’évaluation est progressive : études de cas, travaux chiffrés, mises en situation, projets et soutenances. La préparation finale reproduit les exigences de la certification : étude de cas sur poste informatique, présentation et argumentation des travaux, productions professionnelles relatives à la stratégie/performance et au management, puis entraînement à l’entretien final.',
  },
  extraCards: [
    { title: 'Présentiel', text: 'Cours, ateliers, études de cas, simulations managériales, travaux en groupe, soutenances et accompagnement pédagogique sur site.' },
    { title: 'Distanciel', text: 'Classes virtuelles synchrones, ressources numériques, travaux dirigés à distance, accompagnement pédagogique et activités collaboratives en ligne. Le parcours peut aussi être suivi en hybride.' },
  ],
  certification: {
    title: 'Certification professionnelle préparée',
    text: 'Le parcours prépare à l’ensemble des compétences du Titre professionnel Responsable d’établissement marchand, enregistré au RNCP sous le numéro RNCP38666, certification de niveau 6 délivrée par le ministère chargé de l’Emploi. En partenariat avec GREEN UP ACADEMY, partenaire habilité pour la préparation et la présentation à la certification. Une période en entreprise d’au moins 350 heures est requise (intégrée au temps en entreprise pour l’alternant).',
    rows: [
      { title: 'Bloc 1', text: 'Activité commerciale, approvisionnements, offre et expérience client.' },
      { title: 'Bloc 2', text: 'Orientations stratégiques, prévisionnels et performance économique.' },
      { title: 'Bloc 3', text: 'Recrutement, intégration, management des équipes et conduite de projets.' },
    ],
  },
  outcomes: {
    title: 'Débouchés',
    text: 'Manager de centre de profit • Responsable de point de vente • Responsable de boutique • Responsable de département • Responsable commercial • Responsable e-commerce • Directeur adjoint • Directeur de magasin • Responsable de succursale • Entrepreneur / gestionnaire d’activité.',
  },
  legalNote: '* Parcours préparant au Titre professionnel Responsable d’établissement marchand — RNCP38666 — niveau 6, en partenariat avec GREEN UP ACADEMY. Le niveau 6 correspond au niveau de qualification communément présenté comme Bac+3 / Bac+4 ; Academy 21 University positionne ce parcours comme un Bachelor Bac+3.',
  cta: {
    title: 'Prêt à piloter votre propre activité ?',
    text: 'Déposez votre candidature : l’admission se fait sur dossier et entretien de positionnement.',
    label: 'Candidater au Bachelor',
    href: '/candidature',
    footnote: 'Bac+3 · Niveau 6 · 420 h · Présentiel, distanciel ou hybride',
  },
};

export default function BachelorsPage() {
  return <ProgrammePage p={programme} />;
}
