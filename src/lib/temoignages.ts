/**
 * Témoignages affichés sur l'accueil et sur /temoignages.
 * Pour ajouter ou remplacer un témoignage, il suffit de modifier cette liste
 * (texte validé par la personne concernée).
 * `featured: true` = témoignage mis en avant en grand sur l'accueil.
 */
export interface Temoignage {
  nom: string;
  pays: string;          // ex. 'France'
  drapeau: string;       // ex. '🇫🇷'
  role: string;          // statut, programme ou promotion
  texte: { fr: string; en: string };
  featured?: boolean;
}

export const TEMOIGNAGES: Temoignage[] = [
  {
    nom: 'Marie K.',
    pays: 'France',
    drapeau: '🇫🇷',
    role: 'Executive Ambassador',
    featured: true,
    texte: { fr: 'Academy 21 a complètement transformé ma vision des affaires. En moins d\'un an, j\'ai pu construire un réseau solide et atteindre ma liberté financière.', en: 'Academy 21 completely transformed my vision of business. In less than a year, I was able to build a solid network and achieve financial freedom.' },
  },
  {
    nom: 'Jean-Pierre M.',
    pays: 'Congo',
    drapeau: '🇨🇩',
    role: 'Senior Ambassador',
    texte: { fr: 'Les formations A21 m\'ont donné les outils pour transformer ma vie et celle de ma famille. Le système fonctionne si vous y croyez et agissez.', en: 'A21 training gave me the tools to transform my life and that of my family. The system works if you believe in it and take action.' },
  },
  {
    nom: 'Aisha D.',
    pays: 'Sénégal',
    drapeau: '🇸🇳',
    role: 'Ambassador',
    texte: { fr: 'Ce qui m\'a le plus marquée c\'est la communauté. Des personnes bienveillantes qui partagent les mêmes valeurs et s\'entraident pour réussir.', en: 'What struck me most is the community. Kind people who share the same values and help each other succeed.' },
  },
  {
    nom: 'Carlos R.',
    pays: 'Belgique',
    drapeau: '🇧🇪',
    role: 'Grand Ambassador',
    texte: { fr: 'Dr Raoul Ruben Njionou est un leader inspirant. Son enseignement va bien au-delà du business — c\'est une philosophie de vie complète.', en: 'Dr Raoul Ruben Njionou is an inspiring leader. His teaching goes far beyond business — it\'s a complete philosophy of life.' },
  },
  {
    nom: 'Fatou B.',
    pays: 'Côte d\'Ivoire',
    drapeau: '🇨🇮',
    role: 'Senior Ambassador',
    texte: { fr: 'Grâce à A21, j\'ai développé une confiance en moi que je n\'avais jamais eue. Je recommande cette académie à tous ceux qui veulent changer leur vie.', en: 'Thanks to A21, I developed self-confidence that I had never had before. I recommend this academy to everyone who wants to change their life.' },
  },
  {
    nom: 'Thomas N.',
    pays: 'Cameroun',
    drapeau: '🇨🇲',
    role: 'Executive Ambassador',
    texte: { fr: 'Les valeurs d\'Academy 21 — foi, persévérance, ambition — sont devenues mes valeurs personnelles. Elles m\'ont guidé vers le succès.', en: 'Academy 21\'s values — faith, perseverance, ambition — have become my personal values. They have guided me towards success.' },
  },
];

export function initiales(nom: string) {
  return nom.split(/\s+/).map(p => p[0]).join('').replace('.', '').slice(0, 2).toUpperCase();
}
