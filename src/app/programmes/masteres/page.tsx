import type { Metadata } from 'next';
import ProgrammePage, { Programme } from '@/components/ProgrammePage';

export const metadata: Metadata = {
  title: 'Mastère Stratégie, Leadership & Transformation des Organisations | Academy 21 University',
  description: 'Mastère Bac+5 (niveau 7) en 2 ans, conçu en cohérence avec le RNCP39994 « Manager des transformations des organisations ». 900 h.',
};

const programme: Programme = {
  category: 'Mastères',
  tags: ['Mastère · Bac+5', 'Niveau 7', 'RNCP39994*', 'Présentiel · Distanciel · Hybride'],
  titleStart: 'Mastère Stratégie, Leadership &',
  titleAccent: 'Transformation des Organisations',
  subtitle: 'Former les décideurs capables de penser la stratégie, conduire le changement et transformer durablement les organisations.',
  keyInfos: [
    { label: 'Niveau de sortie', val: 'Bac+5 — Niveau 7' },
    { label: 'Durée', val: '2 ans • M1 + M2' },
    { label: 'Volume indicatif', val: '900 h' },
    { label: 'Rythme', val: 'Initial • Continue • Alternance selon convention' },
  ],
  motto: 'APPRENDRE. DIRIGER. TRANSFORMER.',
  intro: {
    title: 'Un Mastère pour prendre des responsabilités de direction',
    paragraphs: [
      'Dans la continuité du Bachelor Management Stratégique & Opérationnel, ce Mastère prépare des profils capables de passer du pilotage d’une activité à la conduite globale d’une transformation.',
      'Le programme vise une posture de cadre, manager senior, consultant ou dirigeant : analyser une organisation et son environnement, formuler des orientations stratégiques, conduire des projets complexes, mobiliser les équipes, piloter la performance économique et sociale et inscrire l’entreprise dans une dynamique durable d’adaptation.',
      'Le leadership constitue la signature du parcours : décider dans l’incertitude, donner du sens, créer l’adhésion, arbitrer, développer les compétences et assumer la responsabilité des résultats.',
    ],
  },
  dimensions: {
    title: 'Les 6 dimensions du programme',
    items: [
      { title: 'Stratégie', text: 'Diagnostic, prospective, modèles économiques, choix stratégiques et gouvernance.' },
      { title: 'Transformation', text: 'Conduite du changement, transformation digitale, IA, innovation et nouveaux modèles.' },
      { title: 'Performance', text: 'Finance, contrôle, création de valeur, KPI, performance économique, sociale et RSE.' },
      { title: 'Leadership', text: 'Posture de dirigeant, négociation, influence, décision, management et conflits.' },
      { title: 'Capital humain', text: 'Compétences, organisation du travail, talents, inclusion, QVCT et culture.' },
      { title: 'Impact', text: 'Responsabilité, transition écologique, parties prenantes, éthique et pérennité.' },
    ],
  },
  curriculum: {
    title: 'Architecture pédagogique — 900 heures',
    intro: 'Le M1 consolide les fondamentaux du management stratégique et prépare au pilotage des transformations. Le M2 place l’apprenant dans une posture de décision, de direction et de conseil.',
    blocks: [
      {
        name: 'M1 — Construire la vision et maîtriser les leviers de pilotage',
        total: '420 h',
        rows: [
          { label: 'Diagnostic stratégique & intelligence économique', hours: '50 h' },
          { label: 'Économie, prospective & géopolitique des affaires', hours: '35 h' },
          { label: 'Finance d’entreprise & analyse de la performance', hours: '55 h' },
          { label: 'Stratégie marketing, développement & expérience client', hours: '40 h' },
          { label: 'Management des organisations & design organisationnel', hours: '40 h' },
          { label: 'Gestion de projet complexe & méthodes agiles', hours: '45 h' },
          { label: 'Leadership, communication & négociation', hours: '40 h' },
          { label: 'Transformation digitale, data & intelligence artificielle', hours: '45 h' },
          { label: 'Droit des affaires, risques & conformité', hours: '30 h' },
          { label: 'Méthodes de recherche & Consulting Project I', hours: '40 h' },
        ],
      },
      {
        name: 'M2 — Diriger la transformation et créer de la valeur durable',
        total: '480 h',
        rows: [
          { label: 'Corporate strategy & scénarios de transformation', hours: '50 h' },
          { label: 'Pilotage financier, création de valeur & contrôle stratégique', hours: '50 h' },
          { label: 'Conduite du changement & sociologie des organisations', hours: '45 h' },
          { label: 'Leadership exécutif, gouvernance & prise de décision', hours: '45 h' },
          { label: 'Capital humain, compétences & transformation RH', hours: '40 h' },
          { label: 'Innovation, entrepreneuriat & nouveaux business models', hours: '40 h' },
          { label: 'RSE, transition écologique & performance globale', hours: '35 h' },
          { label: 'International business & management interculturel', hours: '35 h' },
          { label: 'IA stratégique, automatisation & transformation des métiers', hours: '35 h' },
          { label: 'Conseil en organisation & mission de transformation', hours: '45 h' },
          { label: 'Mémoire / Consulting Project II & Grand Oral', hours: '60 h' },
        ],
      },
    ],
  },
  admission: [
    { title: 'Entrée en M1', text: 'Titre ou diplôme de niveau 6 (Bac+3) ou équivalent. Admission sur dossier, entretien et validation du projet professionnel.' },
    { title: 'Admission dérogatoire', text: 'Niveau 5 (Bac+2) avec au moins 3 années d’expérience sur des fonctions managériales, conformément au prérequis dérogatoire du RNCP de référence.' },
    { title: 'Entrée directe en M2', text: 'Étude individualisée des acquis académiques et professionnels et décision de la commission d’admission.' },
  ],
  pedagogy: {
    title: 'Une pédagogie de grande école, orientée décision',
    items: [
      'Études de cas stratégiques et cas réels d’entreprise',
      'Business games et simulations de comité de direction',
      'Missions de conseil et projets de transformation',
      'Conférences de dirigeants, entrepreneurs, consultants et experts',
      'Recherche appliquée, veille et prospective',
      'Data et intelligence artificielle appliquées au management',
      'Grand Oral de leadership et soutenance d’un mémoire / consulting project',
    ],
  },
  evaluation: {
    title: 'Évaluation',
    text: 'Études de cas, mises en situation professionnelles, rapports d’activité, productions de conseil, présentations orales et soutenances. L’évaluation privilégie la capacité à analyser, décider, argumenter et mettre en œuvre.',
  },
  extraCards: [
    { title: 'Expérience professionnelle', text: 'Le parcours est conçu pour être articulé à une expérience significative en organisation : alternance lorsque le cadre conventionnel le permet, stage long, mission professionnelle ou activité salariée compatible avec les objectifs du programme.' },
    { title: 'Positionnement institutionnel', text: 'Ce Mastère s’inscrit dans l’ambition d’Academy Twenty One University de construire une offre cohérente du Bac au Bac+5, centrée sur le management, l’entrepreneuriat et le leadership, avec une signature professionnalisante, internationale et connectée aux transformations des organisations.' },
  ],
  certification: {
    title: 'Alignement avec le référentiel RNCP niveau 7',
    text: 'Le programme couvre les quatre blocs du RNCP39994 « Manager des transformations des organisations » : stratégie, conduite du changement, démarche compétences et performance économique et sociale.',
    rows: [
      { title: 'BC01 · Orienter la stratégie', text: 'Diagnostic • orientations stratégiques • risques • actions de transformation.' },
      { title: 'BC02 · Conduire le changement', text: 'Ressources • planification • projet • mobilisation • leadership • tensions.' },
      { title: 'BC03 · Démarche compétences', text: 'Diagnostic compétences • métiers • talents • RH • inclusion.' },
      { title: 'BC04 · Performance éco. & sociale', text: 'Finance • KPI • client • RSE • veille • amélioration continue.' },
    ],
  },
  outcomes: {
    title: 'Débouchés & trajectoires',
    rows: [
      { title: 'Direction', text: 'Directeur d’unité • Directeur de BU • Directeur adjoint • Responsable transformation' },
      { title: 'Management', text: 'Manager d’activité • Manager de projet • Responsable performance • Responsable développement' },
      { title: 'Conseil', text: 'Consultant en management • Consultant en organisation • Consultant transformation' },
      { title: 'Entrepreneuriat', text: 'Créateur / repreneur d’entreprise • Entrepreneur • Développeur de nouveaux projets' },
    ],
  },
  pathway: {
    title: 'La continuité Bachelor → Mastère',
    rows: [
      { level: 'Bachelor • Bac+3', role: 'Manager une activité', text: 'Maîtriser l’opérationnel, développer l’activité, piloter la performance et manager une équipe.' },
      { level: 'Mastère • Bac+5', role: 'Transformer l’organisation', text: 'Définir des orientations, conduire le changement, arbitrer les ressources et piloter la performance globale.' },
      { level: 'Ambition A21 University', role: 'Former ceux qui dirigeront demain', text: 'Faire émerger des managers et leaders capables d’assumer des responsabilités croissantes.' },
    ],
  },
  legalNote: '* Programme pédagogique conçu en cohérence avec le RNCP39994 « Manager des transformations des organisations », niveau 7, certificateur IRUP, échéance d’enregistrement au 18/12/2027. L’obtention de la certification suppose la validation des quatre blocs et l’inscription auprès du certificateur. La présente page décrit le programme pédagogique A21 University ; elle ne vaut pas, à elle seule, habilitation du certificateur.',
  cta: {
    title: 'Prêt à conduire la transformation ?',
    text: 'Déposez votre candidature : admission sur dossier, entretien et validation du projet professionnel.',
    label: 'Candidater au Mastère',
    href: '/candidature',
    footnote: 'Bac+5 · Niveau 7 · 2 ans · 900 h',
  },
};

export default function MasteresPage() {
  return <ProgrammePage p={programme} />;
}
