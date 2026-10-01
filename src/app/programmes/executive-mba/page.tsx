import type { Metadata } from 'next';
import ProgrammePage, { Programme } from '@/components/ProgrammePage';

export const metadata: Metadata = {
  title: 'Executive MBA Gouvernance, Leadership & Transformation | Academy 21 University',
  description: 'Le programme de haute direction d’A21 University : 12 mois, 360 h + Executive Impact Project, pour dirigeants, entrepreneurs et cadres supérieurs.',
};

const programme: Programme = {
  category: 'Executive MBA',
  tags: ['Executive Education', 'Haute direction', '12 mois', 'Présentiel · Distanciel synchrone · Hybride'],
  titleStart: 'Executive MBA Gouvernance,',
  titleAccent: 'Leadership & Transformation',
  subtitle: 'Le programme de haute direction d’Academy Twenty One University, pour ceux qui portent la responsabilité finale de la décision.',
  keyInfos: [
    { label: 'Public', val: 'Dirigeants • Entrepreneurs • Cadres sup. • CODIR' },
    { label: 'Durée', val: '12 mois' },
    { label: 'Volume indicatif', val: '360 h + Executive Impact Project' },
    { label: 'Organisation', val: 'Blocs intensifs • Week-ends • Séminaires' },
    { label: 'Expérience', val: '7 ans min., dont management significatif' },
  ],
  motto: 'THINK. DECIDE. LEAD. TRANSFORM.',
  intro: {
    title: 'Le programme de ceux qui portent la responsabilité finale',
    paragraphs: [
      'L’Executive MBA Gouvernance, Leadership & Transformation est conçu pour des professionnels qui ne découvrent plus le management : ils l’exercent déjà. Leur enjeu n’est plus seulement de maîtriser une fonction, mais de prendre de la hauteur, arbitrer entre des intérêts contradictoires, engager des ressources, conduire des transformations et assumer la responsabilité globale de la décision.',
      'Programme le plus senior de la filière Management & Leadership d’A21 University, il crée un espace exigeant où dirigeants, entrepreneurs et cadres supérieurs confrontent leurs pratiques, renforcent leur capacité stratégique et travaillent leur posture de leader.',
      'Il concentre l’apprentissage sur les questions auxquelles un dirigeant est réellement confronté : où aller, pourquoi, avec quelles ressources, avec quelles équipes, à quel risque, et comment créer durablement de la valeur ?',
    ],
  },
  publics: [
    { title: 'Dirigeants', text: 'Présidents, directeurs généraux, directeurs adjoints, dirigeants de PME/ETI, responsables de filiales ou d’unités.' },
    { title: 'Cadres supérieurs', text: 'Membres ou futurs membres de comités de direction souhaitant passer d’une expertise fonctionnelle à une vision globale.' },
    { title: 'Entrepreneurs', text: 'Fondateurs et repreneurs confrontés aux enjeux de structuration, gouvernance, croissance, financement et changement d’échelle.' },
    { title: 'Leaders d’organisations', text: 'Responsables de réseaux, institutions ou communautés ayant une responsabilité importante de mobilisation, de développement et de gouvernance.' },
  ],
  dimensions: {
    title: 'Les 6 responsabilités du dirigeant',
    items: [
      { title: 'Donner le cap', text: 'Vision, prospective, stratégie, gouvernance et priorités.' },
      { title: 'Arbitrer', text: 'Finance, capital, risques, portefeuille d’investissements et création de valeur.' },
      { title: 'Mobiliser', text: 'Leadership, culture, influence, talent, succession et engagement.' },
      { title: 'Transformer', text: 'Innovation, changement, IA, digital, nouveaux modèles et organisation.' },
      { title: 'Développer', text: 'Croissance, alliances, international, réputation et écosystèmes.' },
      { title: 'Assumer', text: 'Éthique, responsabilité, crise, parties prenantes et impact.' },
    ],
  },
  curriculum: {
    title: 'Architecture du programme — 360 heures',
    intro: 'Organisé en séminaires de haute intensité, chaque module part d’une problématique de direction et conduit à une décision, un arbitrage ou une feuille de route. Les apports conceptuels sont systématiquement confrontés aux situations réelles des participants.',
    blocks: [
      {
        name: 'Modules Executive',
        total: '360 h',
        rows: [
          { label: 'Strategic Foresight & CEO Agenda', hours: '30 h', detail: 'Prospective, signaux faibles, scénarios, vision, agenda stratégique du dirigeant.' },
          { label: 'Corporate Strategy & Business Portfolio', hours: '35 h', detail: 'Stratégie corporate, portefeuille, avantage concurrentiel, diversification, alliances.' },
          { label: 'Finance, Capital Allocation & Value Creation', hours: '35 h', detail: 'Cash, rentabilité, valorisation, financement, allocation du capital, décisions d’investissement.' },
          { label: 'Corporate Governance & Board Dynamics', hours: '25 h', detail: 'Gouvernance, conseil, délégation, contrôle, parties prenantes, responsabilité du dirigeant.' },
          { label: 'Executive Leadership & Power', hours: '35 h', detail: 'Pouvoir, influence, autorité, décision, conflits, courage managérial et posture.' },
          { label: 'People, Culture & Succession', hours: '25 h', detail: 'Culture, équipe dirigeante, talents clés, succession, transformation managériale.' },
          { label: 'Transformation, AI & Digital Strategy', hours: '35 h', detail: 'IA, digital, automatisation, data, transformation des métiers et gouvernance technologique.' },
          { label: 'Growth, International & Strategic Partnerships', hours: '30 h', detail: 'Croissance, internationalisation, alliances, négociation et développement d’écosystèmes.' },
          { label: 'Crisis, Risk & Reputation', hours: '25 h', detail: 'Risques, crise, continuité, communication sensible, réputation et décision sous pression.' },
          { label: 'Sustainable Business & Impact', hours: '20 h', detail: 'ESG, transition, impact, modèle responsable et création de valeur durable.' },
          { label: 'Executive Negotiation & Public Leadership', hours: '20 h', detail: 'Négociation de haut niveau, communication de dirigeant, influence institutionnelle.' },
          { label: 'Executive Impact Project & Board Presentation', hours: '45 h', detail: 'Problématique réelle, diagnostic, arbitrages, feuille de route et présentation devant un Board.' },
        ],
      },
    ],
  },
  admission: [
    { title: 'Admission sélective', text: 'Au moins 7 années d’expérience professionnelle, dont une expérience significative de management, de direction, d’entrepreneuriat ou de pilotage d’une activité. Admission sur dossier, entretien Executive et appréciation de la maturité du projet professionnel.' },
    { title: 'Niveau académique', text: 'Généralement Bac+4/Bac+5 ou équivalent. Des profils au parcours académique différent peuvent être étudiés lorsque l’expérience, le niveau de responsabilité et les acquis professionnels démontrent une capacité à suivre le programme.' },
  ],
  pedagogy: {
    title: 'Une expérience Executive, pas une scolarité classique',
    items: [
      'Executive Case Method : analyse de situations complexes et défense d’une décision devant les pairs',
      'Boardroom Simulations : conseil d’administration, CODIR, crise, investissement et transformation',
      'CEO & Leaders Series : rencontres avec dirigeants, entrepreneurs, investisseurs et experts',
      'Peer Learning : capitalisation structurée sur l’expérience des participants',
      'Executive Coaching : posture, priorités, angles morts et trajectoire de leadership',
      'International & Strategic Immersion : séminaire ou étude comparative d’écosystèmes',
    ],
  },
  evaluation: {
    title: 'Évaluation',
    text: 'L’évaluation porte sur la qualité du raisonnement stratégique, la capacité d’arbitrage, la pertinence des recommandations, la maîtrise des données financières et opérationnelles, la posture de leadership et la capacité à défendre une décision. Productions : notes de décision, board papers, analyses stratégiques, simulations, travaux collectifs, Executive Impact Project et soutenance finale devant un jury à dominante professionnelle.',
  },
  extraCards: [
    { title: 'Executive Impact Project', text: 'Chaque participant travaille sur une problématique stratégique liée à son entreprise, son organisation ou son projet entrepreneurial. L’objectif : un document de direction exploitable (diagnostic, options, scénarios, arbitrages, impacts financiers et humains, risques, gouvernance, plan de mise en œuvre), défendu lors d’une Board Presentation finale.' },
    { title: 'Compatible avec la vie d’un dirigeant', text: '12 mois avec possibilité d’aménagement selon la cohorte. Blocs Executive concentrés, week-ends et séminaires périodiques. En présentiel : séminaires, simulations, coaching et Board sessions. À distance : classes synchrones, conférences et travaux de groupe. En intersession : lectures, diagnostics et avancement du projet.' },
  ],
  certification: {
    title: 'Certification & reconnaissance',
    text: 'L’Executive MBA est un diplôme d’établissement A21 University. Il peut être articulé, selon les partenariats et habilitations conclus par l’établissement, à des certifications professionnelles adaptées. A21 University entend développer une offre de formation de dirigeants comparable, dans son niveau d’exigence, aux standards de l’Executive Education des grandes business schools : sélection des participants, intervenants de haut niveau, pédagogie par la décision, ouverture internationale et impact direct sur les organisations.',
  },
  outcomes: {
    title: 'Pour quel impact ?',
    rows: [
      { title: 'Vision', text: 'Prendre de la hauteur et définir un cap stratégique clair pour son organisation.' },
      { title: 'Décision', text: 'Arbitrer, engager des ressources et défendre une décision devant un conseil ou des investisseurs.' },
      { title: 'Transformation', text: 'Conduire le changement, intégrer l’IA et le digital, faire évoluer culture et organisation.' },
      { title: 'Responsabilité', text: 'Assumer la responsabilité globale : éthique, crise, parties prenantes et impact durable.' },
    ],
  },
  pathway: {
    title: 'La filière Management & Leadership d’A21 University',
    rows: [
      { level: 'Bachelor • Bac+3', role: 'Manager', text: 'Piloter une activité, une équipe et la performance opérationnelle.' },
      { level: 'Mastère • Bac+5 / Niveau 7', role: 'Strategic Leader', text: 'Concevoir et conduire la transformation d’une organisation.' },
      { level: 'MBA • Niveau 7', role: 'Business Leader', text: 'Élargir sa maîtrise de la stratégie, de la finance et du développement.' },
      { level: 'Executive MBA', role: 'Executive Leader', text: 'Gouverner, arbitrer, transformer et assumer la responsabilité globale.' },
    ],
  },
  legalNote: 'Note. La dénomination « Executive MBA » désigne ici le programme d’établissement d’Academy Twenty One University. Elle ne constitue pas en elle-même un grade universitaire, un diplôme national ou une certification RNCP. Les éventuelles certifications professionnelles associées font l’objet d’une information distincte et conforme aux habilitations effectivement détenues.',
  cta: {
    title: 'Prêt à gouverner la transformation ?',
    text: 'Réservez votre place dans la prochaine cohorte avec l’acompte d’inscription. L’admission reste confirmée après l’entretien Executive.',
    label: 'Candidater à l’Executive MBA',
    href: '/candidature',
    footnote: '🔒 Paiement sécurisé par carte ou PayPal · Acompte déduit des frais de scolarité',
  },
  card: {
    icon: 'executive',
    bandLabel: 'Executive Education',
    badges: ['Executive MBA', 'Haute direction'],
    price: 'Acompte 1 500 €',
    priceMeta: 'Scolarité 19 500 € · 12 mois · 360 heures',
    title: 'Executive MBA Gouvernance, Leadership & Transformation',
    description: 'Le programme des dirigeants : donner le cap, arbitrer, mobiliser et transformer. 12 séminaires de haute intensité, boardroom simulations, coaching exécutif et un Executive Impact Project défendu devant un Board.',
    tags: ['12 modules', '12 mois', 'Week-ends & séminaires', '7 ans d’expérience'],
    primary: { label: 'S’inscrire — 1 500 €', href: '/programmes/executive-mba/inscription' },
    secondary: { label: 'Déposer ma candidature', href: '/candidature' },
    gradient: 'linear-gradient(135deg, #0a0806 0%, #1c1408 50%, #1a0005 100%)',
  },
};

export default function ExecutiveMbaPage() {
  return <ProgrammePage p={programme} />;
}
