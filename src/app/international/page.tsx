import type { Metadata } from 'next';
import Link from 'next/link';
import {
  NAVY, NAVY_2, BRONZE, RED, INK, LINE, FONT,
  Eyebrow, SectionHead, P, CardGrid, RowTable, Bullets, Section, InstitutionStyles,
} from '@/components/Institution';

export const metadata: Metadata = {
  title: 'International — Global Engagement | Academy Twenty One University',
  description: 'Mobilités, ambition Erasmus+, partenariats et A21 Global Network : une université ouverte sur le monde. The World is our Campus.',
};

const HERO_FACTS = [
  { num: '5', label: 'Continents', sub: 'Communauté A21' },
  { num: '75+', label: 'Pays', sub: 'Présence par nos membres' },
  { num: '8', label: 'Expériences', sub: 'Internationales proposées' },
  { num: '6', label: 'Phases', sub: 'Feuille de route' },
];

const PILLARS = [
  { tag: 'Héritage', title: 'Une communauté mondiale', text: 'A21 revendique une communauté présente sur 5 continents et dans plus de 75 pays.' },
  { tag: 'Ambition académique', title: 'Un réseau international', text: 'Construire un réseau d’universités, d’entreprises, de dirigeants et d’Alumni.' },
  { tag: 'Europe', title: 'Une stratégie Erasmus+', text: 'Déployer une stratégie Erasmus+ et rechercher l’accès aux dispositifs de mobilité de l’enseignement supérieur.' },
  { tag: 'Monde', title: 'Des expériences globales', text: 'Mobilités, semestres partenaires, stages, study trips, International Weeks et projets multiculturels.' },
];

const NETWORK = [
  { title: 'Une communauté mondiale', text: 'L’héritage A21 offre des relais humains, culturels et professionnels dans de nombreuses régions du monde.' },
  { title: 'Des leaders & entrepreneurs', text: 'Le réseau réunit des profils issus de l’entrepreneuriat, du management, de la formation et du leadership.' },
  { title: 'Des écosystèmes locaux', text: 'Chaque implantation ou communauté peut devenir un point d’entrée pour comprendre un marché, une culture et des pratiques professionnelles.' },
  { title: 'Une capacité de mobilisation', text: 'Le réseau peut soutenir conférences, mentorat, visites d’entreprises, projets, accueils professionnels et événements internationaux.' },
  { title: 'Une future communauté Alumni', text: 'A21 University a vocation à relier ses diplômés au réseau mondial existant et à construire son propre réseau Alumni international.' },
];

const ZONES = [
  { zone: 'Europe • Erasmus+', text: 'Mobilités académiques, stages, mobilités des personnels, coopérations interinstitutionnelles et programmes intensifs.', color: '#2b5fb4' },
  { zone: 'Afrique', text: 'Partenariats universitaires, mobilité encadrée, projets entrepreneuriaux, études de marchés, conférences et talents.', color: '#b8862e' },
  { zone: 'Amériques', text: 'Business immersion, entrepreneuriat, innovation, dirigeants invités et coopération professionnelle.', color: RED },
  { zone: 'Asie & Moyen-Orient', text: 'International business, innovation, digital, supply chains, intercultural management et partenariats.', color: '#1f8a7a' },
  { zone: 'Réseau global A21', text: 'Mentorat, conférences, relais locaux, rencontres de leaders, projets transfrontaliers et communauté.', color: NAVY },
];

const EXPERIENCES = [
  { title: 'Semester / Study Abroad', text: 'Semestre ou période d’études chez un partenaire, avec reconnaissance des acquis selon les accords applicables.' },
  { title: 'Global Internship', text: 'Stage ou mission professionnelle à l’étranger, dans une entreprise ou organisation partenaire.' },
  { title: 'International Week', text: 'Semaine intensive réunissant enseignants, dirigeants et apprenants de plusieurs pays autour d’un thème commun.' },
  { title: 'Global Business Challenge', text: 'Équipes multiculturelles travaillant sur un problème réel d’entreprise et présentant leurs recommandations.' },
  { title: 'Study Trip', text: 'Immersion courte dans un écosystème économique : entreprises, institutions, incubateurs et universités.' },
  { title: 'Virtual Exchange', text: 'Cours partagés, projets collaboratifs et classes internationales à distance.' },
  { title: 'Visiting Professors', text: 'Enseignements et masterclasses assurés par des professeurs et professionnels internationaux.' },
  { title: 'Global Mentoring', text: 'Mise en relation avec des dirigeants, entrepreneurs ou Alumni du réseau international.' },
];

const FACULTY = [
  { title: 'Visiting Professor', text: 'Intervention académique intensive, séminaire, cours spécialisé ou contribution à un projet.' },
  { title: 'Executive in Residence', text: 'Dirigeant accueilli pour partager son expérience, conseiller des projets et dialoguer avec les apprenants.' },
  { title: 'Global Speaker', text: 'Personnalité internationale invitée dans le cadre des A21 Talks et conférences institutionnelles.' },
  { title: 'International Jury', text: 'Participation à l’évaluation de projets, business challenges, mémoires et soutenances.' },
  { title: 'Mentor', text: 'Accompagnement d’un étudiant, entrepreneur ou jeune diplômé sur une problématique professionnelle.' },
];

const ECOSYSTEM = [
  { title: 'A21 Global Ambassadors', text: 'Des relais internationaux chargés de faciliter les connexions institutionnelles et professionnelles.' },
  { title: 'Country Desks', text: 'Des points de contact créés progressivement par grandes zones ou pays prioritaires.' },
  { title: 'Corporate Connections', text: 'Des entreprises et entrepreneurs mobilisés pour stages, visites, cas, mentorat et recrutement.' },
  { title: 'Academic Connections', text: 'Des partenaires universitaires reconnus, identifiés, qualifiés et contractualisés.' },
  { title: 'Global Alumni', text: 'La convergence progressive des diplômés de l’Université et des communautés professionnelles internationales.' },
  { title: 'Global Events', text: 'Conférences, leadership summits, business forums et rencontres internationales A21 University.' },
];

const MOBILITY = [
  { title: 'Qualité', text: 'Chaque mobilité répond à des objectifs pédagogiques ou professionnels identifiés.' },
  { title: 'Équité', text: 'Les dispositifs tendent à rendre l’international accessible à des profils divers.' },
  { title: 'Reconnaissance', text: 'Les acquis réalisés chez un partenaire sont encadrés et reconnus selon les conventions applicables.' },
  { title: 'Sécurité', text: 'Évaluation des destinations, information, assurance, contacts d’urgence et suivi des participants.' },
  { title: 'Inclusion', text: 'Attention portée aux besoins particuliers et aux obstacles économiques, sociaux ou liés au handicap.' },
  { title: 'Durabilité', text: 'Encouragement de pratiques de mobilité plus responsables et intégration des enjeux environnementaux.' },
];

const ROADMAP = [
  { phase: 'Structurer', text: 'Direction/coordination internationale, politique de mobilité, cartographie du réseau, processus qualité et partenaires prioritaires.' },
  { phase: 'Europe', text: 'Préparer la démarche ECHE/Erasmus+, signer des accords académiques et développer les premières mobilités encadrées.' },
  { phase: 'Global Network', text: 'Déployer A21 Global Ambassadors, International Weeks, Visiting Faculty, Global Mentoring et stages internationaux.' },
  { phase: 'Programmes', text: 'Développer Global Tracks, cours bilingues, programmes conjoints et coopérations pédagogiques transnationales.' },
  { phase: 'Rayonnement', text: 'Créer un Global Leadership Summit, développer la marque A21 University à l’international et consolider le réseau Alumni.' },
  { phase: 'Excellence', text: 'Évaluer l’impact, renforcer les standards de qualité et inscrire la stratégie internationale dans les référentiels et reconnaissances pertinents.' },
];

/** Globe filaire décoratif (SVG) */
function Globe() {
  const s = 'rgba(205,180,140,0.35)';
  return (
    <svg viewBox="0 0 400 400" width="100%" height="100%" aria-hidden="true">
      <defs>
        <radialGradient id="gl" cx="38%" cy="35%" r="70%">
          <stop offset="0%" stopColor="rgba(255,90,114,0.20)" />
          <stop offset="100%" stopColor="rgba(19,33,58,0)" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="200" r="170" fill="url(#gl)" stroke={s} strokeWidth="1.2" />
      {[150, 110, 60].map(rx => <ellipse key={rx} cx="200" cy="200" rx={rx} ry="170" fill="none" stroke={s} strokeWidth="1" />)}
      {[-110, -55, 0, 55, 110].map(dy => {
        const ry = Math.sqrt(170 * 170 - dy * dy);
        return <ellipse key={dy} cx="200" cy={200 + dy} rx={ry} ry={ry * 0.12} fill="none" stroke={s} strokeWidth="1" />;
      })}
      {/* Liaisons du réseau */}
      <path d="M120 140 Q200 60 285 130" fill="none" stroke="#ff5a72" strokeWidth="1.6" strokeDasharray="4 5" />
      <path d="M150 250 Q230 300 300 225" fill="none" stroke="#cdb48c" strokeWidth="1.6" strokeDasharray="4 5" />
      <path d="M120 140 Q110 200 150 250" fill="none" stroke="#cdb48c" strokeWidth="1.6" strokeDasharray="4 5" />
      <path d="M285 130 Q320 180 300 225" fill="none" stroke="#ff5a72" strokeWidth="1.6" strokeDasharray="4 5" />
      {[[120, 140], [285, 130], [150, 250], [300, 225], [205, 190]].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="11" fill="rgba(255,90,114,0.15)" />
          <circle cx={x} cy={y} r="4.5" fill={i % 2 ? '#cdb48c' : '#ff5a72'} />
        </g>
      ))}
    </svg>
  );
}

export default function InternationalPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f6f7f9' }}>
      <InstitutionStyles />

      {/* ══ HERO ══ */}
      <div style={{ background: `radial-gradient(circle at 80% 30%, #22375c 0%, ${NAVY} 45%, #0b1526 100%)`, borderBottom: `3px solid ${RED}`, padding: 'clamp(40px,6vw,80px) 0 clamp(36px,5vw,64px)', overflow: 'hidden' }}>
        <div className="container">
          <div className="inst-split" style={{ display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: 'clamp(24px,4vw,56px)', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '22px', fontSize: '13px', color: 'rgba(255,255,255,0.5)', fontFamily: FONT }}>
                <Link href="/" style={{ color: 'rgba(255,255,255,0.5)' }}>Accueil</Link>
                <span>/</span>
                <span style={{ color: '#e8a1ad' }}>International</span>
              </div>
              <Eyebrow light>Global Engagement</Eyebrow>
              <h1 style={{ fontFamily: FONT, fontWeight: 900, fontSize: 'clamp(32px,5.4vw,62px)', color: 'white', lineHeight: 1.05, letterSpacing: '-0.025em', marginBottom: '18px' }}>
                The World is<br />our <span style={{ color: '#ff5a72' }}>Campus.</span>
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'clamp(15px,1.6vw,18px)', lineHeight: 1.7, maxWidth: '560px', marginBottom: '10px' }}>
                From a global community to a global university : faire du monde un espace d’apprentissage, de coopération et d’opportunités.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontFamily: FONT, fontWeight: 600, letterSpacing: '0.04em', marginBottom: '28px' }}>
                Mobilités • Erasmus+ • Partenariats • A21 Global Network
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="#experiences" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: RED, color: 'white', fontFamily: FONT, fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '14px 26px', borderRadius: '8px', textDecoration: 'none' }}>Vivre l’international →</a>
                <a href="#feuille-de-route" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1.5px solid rgba(255,255,255,0.35)', color: 'white', fontFamily: FONT, fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '13px 24px', borderRadius: '8px', textDecoration: 'none' }}>Notre feuille de route</a>
              </div>
            </div>
            <div className="intl-globe" style={{ maxWidth: '420px', width: '100%', justifySelf: 'center', aspectRatio: '1 / 1' }}>
              <Globe />
            </div>
          </div>

          {/* Chiffres */}
          <div className="inst-grid inst-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '14px', overflow: 'hidden', marginTop: 'clamp(28px,4vw,48px)' }}>
            {HERO_FACTS.map(f => (
              <div key={f.label} style={{ background: 'rgba(11,21,38,0.75)', padding: '18px 22px' }}>
                <div style={{ fontFamily: FONT, fontWeight: 900, fontSize: 'clamp(26px,3vw,36px)', color: 'white', lineHeight: 1 }}>{f.num}</div>
                <div style={{ fontFamily: FONT, fontWeight: 800, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#cdb48c', marginTop: '8px' }}>{f.label}</div>
                <div style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.55)', marginTop: '2px' }}>{f.sub}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '22px', fontFamily: FONT, fontWeight: 800, fontSize: '11.5px', letterSpacing: '0.22em', color: '#cdb48c', textTransform: 'uppercase' }}>
            Global mindset. Local impact. Responsible leadership.
          </div>
        </div>
      </div>

      {/* ══ PILIERS ══ */}
      <Section bg="white">
        <div className="inst-grid inst-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
          {PILLARS.map((p, i) => (
            <div key={p.title} className="inst-card" style={{ background: '#f6f7f9', border: `1px solid ${LINE}`, borderRadius: '12px', padding: '22px' }}>
              <div style={{ fontFamily: FONT, fontWeight: 700, fontSize: '10.5px', textTransform: 'uppercase', letterSpacing: '0.14em', color: i % 2 ? BRONZE : RED, marginBottom: '8px' }}>{p.tag}</div>
              <h3 style={{ fontFamily: FONT, fontWeight: 900, fontSize: '16px', color: NAVY, marginBottom: '8px' }}>{p.title}</h3>
              <p style={{ color: INK, fontSize: '14px', lineHeight: 1.6 }}>{p.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ══ 01 AU CŒUR DU PROJET ══ */}
      <Section>
        <div className="inst-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(28px,4vw,64px)', alignItems: 'start' }}>
          <div>
            <SectionHead num="01 · Au cœur du projet" title={<>L’international n’est pas une <span style={{ color: RED }}>option</span></>} />
            <P>A21 University ne conçoit pas l’ouverture internationale comme une option ajoutée à un cursus national. Elle est une composante de l’expérience académique : apprendre à travailler avec d’autres cultures, comprendre les marchés internationaux, maîtriser les codes professionnels globaux et construire un réseau au-delà des frontières.</P>
            <P last>Cette ambition dispose d’un point d’appui rare : Academy Twenty One revendique déjà, par ses membres, une présence sur cinq continents et dans plus de 75 pays. A21 University entend transformer progressivement cette empreinte communautaire en un véritable écosystème académique et professionnel international.</P>
          </div>
          <div style={{ background: NAVY, borderRadius: '14px', padding: 'clamp(24px,3vw,36px)', color: 'white' }}>
            <Eyebrow light>Notre objectif</Eyebrow>
            <p style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: '18px', lineHeight: 1.6, marginBottom: '18px' }}>
              Qu’un apprenant A21 puisse étudier ici tout en étant exposé au monde.
            </p>
            {[
              'Travailler avec des pairs d’autres pays',
              'Rencontrer des dirigeants internationaux',
              'Réaliser une mobilité',
              'Développer un projet transfrontalier',
              'Rejoindre une communauté Alumni réellement globale',
            ].map(t => (
              <div key={t} style={{ display: 'flex', gap: '10px', alignItems: 'center', padding: '9px 0', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '14px', color: 'rgba(255,255,255,0.85)' }}>
                <span style={{ color: '#ff5a72', fontWeight: 900 }}>→</span>{t}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ══ 02 GLOBAL NETWORK ══ */}
      <Section bg="white">
        <SectionHead num="02 · A21 Global Network" title="Notre avantage distinctif"
          intro="Un réseau humain déjà présent dans de nombreuses régions du monde, que l’Université mobilise selon des standards académiques clairs." />
        <div className="inst-grid inst-grid-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '14px' }}>
          {NETWORK.map((n, i) => (
            <div key={n.title} className="inst-card" style={{ background: 'white', border: `1px solid ${LINE}`, borderRadius: '12px', padding: '22px 20px', position: 'relative' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: i % 2 ? '#f6efe4' : '#fdecef', color: i % 2 ? BRONZE : RED, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT, fontWeight: 900, fontSize: '13px', marginBottom: '14px' }}>{String(i + 1).padStart(2, '0')}</div>
              <h3 style={{ fontFamily: FONT, fontWeight: 800, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', color: NAVY, marginBottom: '8px', lineHeight: 1.35 }}>{n.title}</h3>
              <p style={{ color: INK, fontSize: '13.5px', lineHeight: 1.6 }}>{n.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ══ 03 ERASMUS+ ══ */}
      <Section>
        <div className="inst-split" style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 'clamp(28px,4vw,56px)', alignItems: 'start' }}>
          <div>
            <SectionHead num="03 · Notre stratégie Erasmus+" title={<>L’Europe, premier espace de <span style={{ color: '#2b5fb4' }}>mobilité académique</span></>} />
            <P>L’ambition est d’engager l’établissement dans la démarche permettant de participer pleinement au programme Erasmus+ pour l’enseignement supérieur.</P>
            <P>Pour un établissement établi dans un pays participant au programme, la Charte Erasmus pour l’enseignement supérieur (ECHE) est un préalable aux mobilités et aux coopérations Erasmus+. A21 University inscrit donc l’obtention de cette charte dans sa feuille de route institutionnelle.</P>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', background: '#eef3fb', border: '1px solid #cfdcf1', borderRadius: '10px', padding: '14px 16px', marginTop: '6px' }}>
              <span style={{ fontFamily: FONT, fontWeight: 900, color: '#2b5fb4', fontSize: '14px' }}>i</span>
              <p style={{ fontSize: '13px', color: '#3d4a60', lineHeight: 1.6 }}>
                Il s’agit d’une <strong>ambition et d’une démarche en cours</strong> : A21 University ne détient pas, à ce jour, la Charte Erasmus pour l’enseignement supérieur.
              </p>
            </div>
          </div>
          <div style={{ background: 'white', border: `1px solid ${LINE}`, borderTop: '4px solid #2b5fb4', borderRadius: '12px', padding: 'clamp(20px,3vw,28px)' }}>
            <h3 style={{ fontFamily: FONT, fontWeight: 900, fontSize: '16px', color: NAVY, marginBottom: '14px' }}>Les étapes de notre démarche</h3>
            <Bullets items={[
              'Préparer une Erasmus Policy Statement cohérente avec la stratégie internationale de l’établissement.',
              'Structurer les processus de reconnaissance académique, sélection, accompagnement et suivi des mobilités.',
              'Identifier des établissements partenaires en Europe et conclure progressivement des accords interinstitutionnels.',
              'Développer la mobilité d’études et de stages pour les apprenants.',
              'Encourager la mobilité d’enseignement et de formation des enseignants et personnels.',
              'Participer à terme à des Blended Intensive Programmes et projets européens de coopération.',
            ]} />
          </div>
        </div>
      </Section>

      {/* ══ 04 AU-DELÀ DE L'EUROPE ══ */}
      <Section bg="white">
        <SectionHead num="04 · Erasmus+… et au-delà de l’Europe" title="Deux cercles complémentaires"
          intro="Erasmus+ possède une dimension internationale : certaines actions peuvent, sous conditions, associer des établissements de pays tiers. Une ouverture cohérente avec l’ADN d’A21, dont la communauté dépasse largement l’espace européen. Notre stratégie articule un espace européen structuré par Erasmus+ et un espace mondial structuré par les partenariats académiques et le réseau A21." />
        <div className="inst-grid inst-grid-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '14px' }}>
          {ZONES.map(z => (
            <div key={z.zone} className="inst-card" style={{ borderRadius: '12px', overflow: 'hidden', border: `1px solid ${LINE}`, background: 'white' }}>
              <div style={{ background: z.color, padding: '16px 18px' }}>
                <div style={{ fontFamily: FONT, fontWeight: 900, fontSize: '14px', color: 'white', letterSpacing: '0.02em' }}>{z.zone}</div>
              </div>
              <p style={{ padding: '16px 18px', color: INK, fontSize: '13.5px', lineHeight: 1.6 }}>{z.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ══ 05 EXPÉRIENCES ══ */}
      <Section id="experiences">
        <SectionHead num="05 · Une expérience internationale pour chaque apprenant" title={<>L’international n’est pas réservé à <span style={{ color: RED }}>quelques-uns</span></>}
          intro="Chaque apprenant doit pouvoir vivre une expérience internationale, physique ou intégrée au cursus." />
        <CardGrid items={EXPERIENCES} cols={4} numbered />
      </Section>

      {/* ══ 06 + 07 ══ */}
      <Section bg="white">
        <div className="inst-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 'clamp(28px,4vw,56px)', alignItems: 'start' }}>
          <div>
            <SectionHead num="06 · Internationaliser les programmes" title="Des cursus ouverts sur le monde" />
            <Bullets items={[
              'Modules enseignés en anglais et offre bilingue français-anglais, développés progressivement.',
              'International Business, management interculturel, géoéconomie et négociation internationale intégrés systématiquement.',
              'Cas d’entreprises provenant de plusieurs continents.',
              'Équipes projet multiculturelles, y compris à distance.',
              'Dirigeants et experts du réseau international associés aux jurys et masterclasses.',
              'Préparation aux environnements professionnels multilingues et multiculturels.',
              'Parcours ou certificats « Global Track » dans les Bachelor, Mastère, MBA et Executive MBA.',
            ]} />
          </div>
          <div>
            <SectionHead num="07 · International Faculty & Visiting Leaders" title="Ceux qui enseignent"
              intro="Un modèle de faculty ouvert : enseignants permanents et associés, professeurs invités, chercheurs, dirigeants, entrepreneurs et experts internationaux." />
            <RowTable rows={FACULTY} labelWidth={190} />
          </div>
        </div>
      </Section>

      {/* ══ 08 ÉCOSYSTÈME ══ */}
      <Section>
        <SectionHead num="08 · Du réseau à l’écosystème académique" title="Des passerelles structurées"
          intro="Le réseau A21 constitue un potentiel considérable ; une université doit le mobiliser selon des standards académiques clairs, en créant des passerelles entre la communauté historique et le projet universitaire." />
        <CardGrid items={ECOSYSTEM} cols={3} accent={BRONZE} />
      </Section>

      {/* ══ 09 MOBILITÉ RESPONSABLE ══ */}
      <Section bg="white">
        <SectionHead num="09 · Une politique de mobilité responsable" title="Une mobilité qui produit des apprentissages"
          intro="La mobilité ne se réduit jamais au déplacement : elle est préparée, accompagnée et reconnue. Transparence de la sélection, préparation linguistique et interculturelle, conventions, reconnaissance des acquis, accompagnement administratif et suivi au retour, conformément aux standards européens de qualité." />
        <CardGrid items={MOBILITY} cols={3} accent={NAVY} />
      </Section>

      {/* ══ 10 FEUILLE DE ROUTE ══ */}
      <Section id="feuille-de-route">
        <SectionHead num="10 · Feuille de route internationale" title="Six phases pour construire une université globale" />
        <div className="intl-timeline" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '14px', position: 'relative' }}>
          <div className="intl-timeline-line" style={{ position: 'absolute', top: '22px', left: '22px', right: '22px', height: '2px', background: `linear-gradient(90deg, ${RED}, ${BRONZE}, ${NAVY})` }} />
          {ROADMAP.map((r, i) => (
            <div key={r.phase} style={{ position: 'relative' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: i === 0 ? RED : 'white', color: i === 0 ? 'white' : NAVY, border: `2px solid ${i === 0 ? RED : NAVY}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT, fontWeight: 900, fontSize: '14px', position: 'relative', zIndex: 1, marginBottom: '14px' }}>{i + 1}</div>
              <div style={{ fontFamily: FONT, fontWeight: 700, fontSize: '10.5px', textTransform: 'uppercase', letterSpacing: '0.12em', color: BRONZE, marginBottom: '4px' }}>Phase {i + 1}</div>
              <h3 style={{ fontFamily: FONT, fontWeight: 900, fontSize: '15px', color: NAVY, marginBottom: '8px' }}>{r.phase}</h3>
              <p style={{ color: INK, fontSize: '13px', lineHeight: 1.6 }}>{r.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ══ 11 PROMESSE ══ */}
      <section style={{ background: `radial-gradient(circle at 20% 20%, #22375c 0%, ${NAVY} 50%, #0b1526 100%)`, padding: 'clamp(56px,7vw,96px) 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '880px' }}>
          <Eyebrow light center>11 · Notre promesse internationale</Eyebrow>
          <p style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: 'italic', fontSize: 'clamp(18px,2.4vw,24px)', lineHeight: 1.7, color: 'white', marginBottom: '20px' }}>
            Un diplômé d’A21 University évolue avec aisance dans une équipe multiculturelle, comprend un environnement économique international, bâtit des relations au-delà de son pays d’origine et considère le monde non comme un territoire lointain, mais comme son espace professionnel naturel.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '15px', lineHeight: 1.8, marginBottom: '30px' }}>
            Faire converger trois forces : la mobilité académique européenne, les partenariats internationaux et la puissance relationnelle du réseau mondial Academy Twenty One.
          </p>
          <div style={{ fontFamily: FONT, fontWeight: 900, fontSize: 'clamp(18px,2.4vw,26px)', letterSpacing: '0.18em', color: 'white', marginBottom: '6px' }}>THE WORLD IS OUR CAMPUS.</div>
          <div style={{ fontFamily: FONT, fontWeight: 700, fontSize: '11px', letterSpacing: '0.22em', color: '#cdb48c', marginBottom: '32px' }}>A21 UNIVERSITY • GLOBAL ENGAGEMENT</div>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/candidature" style={{ background: RED, color: 'white', fontFamily: FONT, fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none' }}>Déposer ma candidature →</Link>
            <Link href="/a-propos" style={{ border: '1.5px solid rgba(255,255,255,0.35)', color: 'white', fontFamily: FONT, fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '13px 26px', borderRadius: '8px', textDecoration: 'none' }}>Découvrir A21 University</Link>
          </div>
        </div>
      </section>

      <div className="container" style={{ padding: '28px 24px 40px' }}>
        <p style={{ fontSize: '11.5px', color: '#9aa0aa', lineHeight: 1.6, maxWidth: '920px' }}>
          Repères réglementaires. La Charte Erasmus pour l’enseignement supérieur (ECHE) constitue un préalable pour les établissements d’enseignement supérieur situés dans les pays participant au programme qui souhaitent prendre part aux mobilités et coopérations Erasmus+. Erasmus+ prévoit également, sous conditions, des mobilités impliquant des pays tiers non associés au programme. Les éléments présentés sur cette page relatifs à Erasmus+ décrivent une ambition et une démarche, et non une participation ou une charte effectivement obtenue.
        </p>
      </div>

      <style>{`
        @media (max-width: 1100px) { .inst-grid-5 { grid-template-columns: repeat(3, 1fr) !important; } .intl-timeline { grid-template-columns: repeat(3, 1fr) !important; row-gap: 28px !important; } .intl-timeline-line { display: none; } }
        @media (max-width: 760px) { .inst-grid-5 { grid-template-columns: 1fr 1fr !important; } .intl-timeline { grid-template-columns: 1fr 1fr !important; } .intl-globe { max-width: 260px !important; } }
        @media (max-width: 480px) { .inst-grid-5, .intl-timeline { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
