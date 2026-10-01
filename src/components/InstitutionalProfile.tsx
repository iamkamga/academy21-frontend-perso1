import Link from 'next/link';
import {
  NAVY, NAVY_2, BRONZE, RED, INK, LINE, FONT,
  Eyebrow, SectionHead, P, CardGrid, RowTable, Bullets, Section, InstitutionStyles,
} from '@/components/Institution';

/**
 * Profil institutionnel A21 University (contenu de « Qui sommes-nous ? »).
 * Utilisé tel quel sur /a-propos et sur la page d'accueil (embedded).
 */
const KEY_FACTS = [
  { label: 'Vocation', val: 'Enseignement supérieur en management, leadership et entrepreneuriat' },
  { label: 'Parcours', val: 'Du Bac au Bac+5 • Executive Education' },
  { label: 'Ouverture', val: 'Présentiel • Distanciel • Hybride • Mobilités internationales' },
  { label: 'Publics', val: 'Étudiants • Professionnels • Managers • Entrepreneurs • Dirigeants' },
];

const PURPOSE = [
  { title: 'Mission', text: 'Former des managers, entrepreneurs et leaders capables de conjuguer maîtrise professionnelle, intelligence stratégique, leadership responsable et capacité de transformation.' },
  { title: 'Vision', text: 'Faire d’A21 University une institution internationale de référence dans la formation au management et au leadership, reconnue pour la qualité de ses diplômés, l’impact de ses programmes et son ouverture sur le monde.' },
  { title: 'Ambition', text: 'Construire progressivement une business school internationale forte, professionnalisante et sélective dans ses standards, proposant des parcours du Bac au Bac+5 ainsi qu’une Executive Education de haut niveau.' },
  { title: 'Promesse', text: 'Donner à chaque apprenant les savoirs, les méthodes, les expériences et la posture nécessaires pour passer de l’ambition à la responsabilité.' },
];

const VALUES = [
  { title: 'Excellence', text: 'Élever continuellement les standards de travail, de connaissance, de service et de performance.' },
  { title: 'Intégrité', text: 'Agir avec cohérence, loyauté, honnêteté intellectuelle et responsabilité.' },
  { title: 'Discipline', text: 'Transformer l’ambition en résultats par la constance, la rigueur et le respect des engagements.' },
  { title: 'Audace', text: 'Questionner, entreprendre, innover et décider même lorsque l’environnement est incertain.' },
  { title: 'Ouverture', text: 'Comprendre les cultures, les marchés, les idées et les différences avant de prétendre exercer une influence.' },
  { title: 'Service', text: 'Considérer le leadership comme une responsabilité envers les équipes, les organisations et la société.' },
  { title: 'Impact', text: 'Mesurer la réussite à la valeur créée et aux transformations rendues possibles.' },
  { title: 'Persévérance', text: 'Construire dans la durée, apprendre des difficultés et ne pas renoncer à l’exigence.' },
];

const LADDER = [
  { level: 'Bachelor • Bac+3', role: 'Manager', text: 'Comprendre l’entreprise, piloter une activité, développer la performance et manager une équipe.', href: '/programmes/bachelors' },
  { level: 'Mastère • Bac+5', role: 'Strategic Leader', text: 'Définir des orientations, conduire des transformations et piloter la performance globale.', href: '/programmes/masteres' },
  { level: 'MBA • Niveau 7', role: 'Business Leader', text: 'Renforcer la maîtrise de la stratégie, de la finance, de la croissance et de la direction d’entreprise.' },
  { level: 'Executive MBA', role: 'Executive Leader', text: 'Gouverner, arbitrer, transformer et exercer la responsabilité globale du dirigeant.', href: '/programmes/executive-mba' },
  { level: 'Executive Education', role: 'Lifelong Leader', text: 'Actualiser les compétences des cadres et dirigeants tout au long de leur trajectoire professionnelle.', href: '/programmes/formations-professionnelles' },
];

const FIELDS = [
  { title: 'Stratégie & Gouvernance', text: 'Diagnostic, prospective, décision, gouvernance, intelligence économique.' },
  { title: 'Finance & Performance', text: 'Finance, contrôle, création de valeur, investissement, pilotage et risques.' },
  { title: 'Marketing & Développement', text: 'Marketing, vente, marque, expérience client, business development.' },
  { title: 'Leadership & Management', text: 'Comportement organisationnel, équipes, influence, négociation, communication.' },
  { title: 'Entrepreneuriat & Innovation', text: 'Création, reprise, business models, innovation et venture building.' },
  { title: 'Digital, Data & IA', text: 'Transformation numérique, intelligence artificielle, data-driven management.' },
  { title: 'RSE & Transitions', text: 'Responsabilité, ESG, transition écologique, éthique et impact.' },
  { title: 'International Business', text: 'Géoéconomie, interculturel, marchés internationaux, alliances et expansion.' },
];

const EXPERIENCE = [
  { title: 'Leadership Lab', text: 'Ateliers de posture, prise de parole, négociation, décision et intelligence relationnelle.' },
  { title: 'Career Center', text: 'Orientation, CV, entretiens, employabilité, stages, alternance et relations entreprises.' },
  { title: 'Entrepreneurship Hub', text: 'Incubation, mentorat, business plan, pitch, financement et accompagnement des projets.' },
  { title: 'Global Experience', text: 'Mobilités, International Weeks, study trips, équipes multiculturelles et conférences internationales.' },
  { title: 'A21 Talks', text: 'Rencontres avec dirigeants, entrepreneurs, intellectuels, experts et personnalités inspirantes.' },
  { title: 'Community & Alumni', text: 'Vie associative, réseau des diplômés, mentorat intergénérationnel et opportunités professionnelles.' },
];

const GOVERNANCE = [
  { title: 'Présidence', text: 'Porte la vision, l’identité, les orientations stratégiques et le rayonnement de l’institution.' },
  { title: 'Direction', text: 'Conduit le développement académique, la qualité, les programmes, les partenariats et la professionnalisation.' },
  { title: 'Academic Board', text: 'Réunit progressivement enseignants, chercheurs, professionnels et personnalités qualifiées pour garantir la pertinence académique.' },
  { title: 'International Advisory Board', text: 'Accompagne l’ouverture internationale, les partenariats, l’attractivité et la lecture des grandes transformations mondiales.' },
  { title: 'Corporate Council', text: 'Fait dialoguer l’école avec les entreprises sur les compétences, les métiers et l’employabilité.' },
];

const AMBITION = [
  { title: 'Consolider', text: 'Installer des programmes robustes du Bac au Bac+5, une Executive Education cohérente et des standards de qualité exigeants.' },
  { title: 'Internationaliser', text: 'Développer les partenariats académiques, la mobilité, les programmes bilingues, les professeurs invités et le recrutement international.' },
  { title: 'Professionnaliser', text: 'Faire de l’employabilité, de l’alternance, de l’entrepreneuriat et des relations entreprises des marqueurs forts de l’école.' },
  { title: 'Produire', text: 'Développer études, publications, cas pédagogiques, observatoires et travaux appliqués sur le leadership et les transformations.' },
  { title: 'Rayonner', text: 'Créer des événements académiques et économiques, développer une communauté Alumni et faire entendre une voix A21 sur le management contemporain.' },
  { title: 'Reconnaître & être reconnu', text: 'Inscrire progressivement l’institution et ses programmes dans les cadres de qualité, de certification et de reconnaissance pertinents, en France et à l’international.' },
];

export default function InstitutionalProfile({ embedded = false }: { embedded?: boolean }) {
  const Heading = embedded ? 'h2' : 'h1';
  return (
    <div style={{ minHeight: embedded ? undefined : '100vh', background: '#f6f7f9' }}>
      <InstitutionStyles />

      {/* ══ HERO ══ */}
      <div style={{ background: `linear-gradient(135deg, #0e1a2e 0%, ${NAVY_2} 100%)`, borderBottom: `3px solid ${RED}`, padding: 'clamp(40px,6vw,72px) 0 clamp(32px,5vw,56px)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: '-120px', top: '-120px', width: '420px', height: '420px', borderRadius: '50%', border: '1px solid rgba(205,180,140,0.15)' }} />
        <div style={{ position: 'absolute', right: '-60px', top: '-60px', width: '300px', height: '300px', borderRadius: '50%', border: '1px solid rgba(205,180,140,0.12)' }} />
        <div className="container" style={{ position: 'relative' }}>
          {!embedded && (
          <div style={{ display: 'flex', gap: '8px', marginBottom: '22px', fontSize: '13px', color: 'rgba(255,255,255,0.5)', fontFamily: FONT }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.5)' }}>Accueil</Link>
            <span>/</span>
            <span style={{ color: '#e8a1ad' }}>Qui sommes-nous</span>
          </div>
          )}
          <Eyebrow light>Institutional Profile</Eyebrow>
          <Heading style={{ fontFamily: FONT, fontWeight: 900, fontSize: 'clamp(30px,5vw,56px)', color: 'white', lineHeight: 1.08, marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Former ceux qui<br />dirigeront <span style={{ color: '#ff5a72' }}>demain</span>
          </Heading>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 'clamp(15px,1.6vw,17px)', lineHeight: 1.7, maxWidth: '620px', marginBottom: '32px' }}>
            Academy Twenty One University : une institution d’enseignement supérieur tournée vers le monde, l’entreprise, l’innovation et l’impact.
          </p>
          <div className="inst-grid inst-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', overflow: 'hidden' }}>
            {KEY_FACTS.map(f => (
              <div key={f.label} style={{ background: 'rgba(14,26,46,0.85)', padding: '16px 20px' }}>
                <div style={{ fontFamily: FONT, fontWeight: 700, fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#cdb48c', marginBottom: '6px' }}>{f.label}</div>
                <div style={{ color: 'white', fontSize: '13.5px', lineHeight: 1.5, fontWeight: 600 }}>{f.val}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '22px', fontFamily: FONT, fontWeight: 800, fontSize: '12px', letterSpacing: '0.28em', color: '#cdb48c' }}>LEARN. LEAD. TRANSFORM.</div>
        </div>
      </div>

      {/* ══ 01 IDENTITÉ ══ */}
      <Section bg="white">
        <div className="inst-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 'clamp(32px,5vw,72px)', alignItems: 'stretch' }}>
          <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.10)', position: 'relative', minHeight: '360px' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://academytwentyone.com/web/assets/img/fr-waw.jpg" alt="Academy Twenty One University" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0 }} />
          </div>
          <div>
            <SectionHead num="01 · Notre identité" title={<>Une école pour celles et ceux qui <span style={{ color: RED }}>dirigeront</span></>} />
            <P>Academy Twenty One University — A21 University — porte une ambition simple à énoncer et exigeante à réaliser : former les femmes et les hommes appelés à manager, entreprendre, décider et diriger dans un monde en transformation.</P>
            <P>A21 University est pensée comme un établissement d’enseignement supérieur de plein exercice, construit autour des sciences du management, du leadership, de l’entrepreneuriat et de la transformation des organisations. Son projet ne consiste pas à juxtaposer des formations : il vise à bâtir une institution cohérente, dotée d’une culture, d’une pédagogie, d’une communauté et d’une signature académique propres.</P>
            <P last>Notre modèle associe l’exigence académique à la réalité de l’entreprise, la compétence technique à la qualité du leadership, et l’ambition individuelle à la responsabilité collective. Nous voulons former des diplômés capables de <strong style={{ color: NAVY }}>comprendre avant de décider, de décider avant d’agir, et d’agir en mesurant les conséquences de leurs choix.</strong></P>
          </div>
        </div>

        <div style={{ marginTop: 'clamp(40px,5vw,56px)', background: '#f6f7f9', border: `1px solid ${LINE}`, borderLeft: `4px solid ${BRONZE}`, borderRadius: '12px', padding: 'clamp(22px,3vw,32px)' }}>
          <h3 style={{ fontFamily: FONT, fontWeight: 900, fontSize: '18px', color: NAVY, marginBottom: '12px' }}>Une histoire qui devient une institution</h3>
          <P>Academy Twenty One dispose déjà d’un héritage international dans la formation, le développement du leadership et l’accompagnement de communautés professionnelles, avec une présence, par ses membres, sur cinq continents et dans plus de 75 pays. Cette expérience constitue un capital humain et international ; A21 University lui donne désormais une traduction académique plus large et structurée.</P>
          <P last>Le réseau historique d’A21 n’est pas la finalité de l’Université : il est l’un de ses héritages — une culture de la transmission, du mentorat, de la persévérance, de la mobilité et de la diversité. La finalité d’A21 University est celle d’une école supérieure : produire des compétences, former des décideurs et contribuer à la transformation des organisations et des sociétés.</P>
        </div>
      </Section>

      {/* ══ 02 RAISON D'ÊTRE ══ */}
      <Section>
        <SectionHead num="02 · Notre raison d’être" title="Mission, vision, ambition, promesse" />
        <CardGrid items={PURPOSE} cols={2} />
      </Section>

      {/* ══ 03 VALEURS ══ */}
      <Section bg="white">
        <SectionHead num="03 · Nos valeurs" title="Des valeurs qui orientent l’institution"
          intro="Les valeurs d’A21 University ne sont pas des éléments décoratifs. Elles orientent la sélection, la pédagogie, la relation avec les entreprises, le comportement des apprenants et la manière dont l’institution se développe." />
        <CardGrid items={VALUES} cols={4} accent={BRONZE} />
        <p style={{ marginTop: '18px', fontSize: '14px', color: INK }}>
          Elles prolongent les <Link href="/nos-valeurs" style={{ color: RED, fontWeight: 700 }}>9 valeurs fondamentales</Link> de la communauté Academy Twenty One.
        </p>
      </Section>

      {/* ══ 04 INTERNATIONAL ══ */}
      <Section>
        <div className="inst-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(28px,4vw,56px)', alignItems: 'center' }}>
          <div>
            <SectionHead num="04 · Une école résolument internationale" title={<>L’international, une <span style={{ color: RED }}>dimension constitutive</span></>}
              intro="Pour A21 University, l’international n’est pas un département périphérique : il est présent dans les contenus, les langues, les intervenants, les partenaires, les expériences étudiantes, les études de cas et les opportunités professionnelles." />
            <Link href="/international" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: NAVY, color: 'white', fontFamily: FONT, fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '13px 24px', borderRadius: '8px', textDecoration: 'none' }}>
              Découvrir notre stratégie internationale →
            </Link>
          </div>
          <div style={{ background: 'white', border: `1px solid ${LINE}`, borderRadius: '12px', padding: 'clamp(20px,3vw,28px)' }}>
            <Bullets items={[
              'Un réseau de partenaires académiques et professionnels sur plusieurs continents.',
              'Des mobilités entrantes et sortantes pour étudiants, enseignants et intervenants.',
              'Des enseignements bilingues français-anglais introduits progressivement.',
              'Un corps d’intervenants associant enseignants, dirigeants, entrepreneurs et experts de différents pays.',
              'International Weeks, study trips, business challenges et séminaires interculturels.',
              'Doubles parcours, passerelles et programmes conjoints lorsque les cadres le permettent.',
              'Management interculturel, géoéconomie, marchés internationaux et négociation globale.',
            ]} />
          </div>
        </div>
      </Section>

      {/* ══ 05 MODÈLE ACADÉMIQUE ══ */}
      <Section bg="white">
        <SectionHead num="05 · Notre modèle académique" title="Une progression de responsabilités"
          intro="Chaque niveau prépare au suivant tout en conservant une valeur professionnelle propre." />
        <div className="inst-grid inst-grid-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px', marginBottom: '40px' }}>
          {LADDER.map((l, i) => {
            const inner = (
              <div className="inst-card" style={{ height: '100%', background: i === LADDER.length - 2 ? NAVY : 'white', border: `1px solid ${i === LADDER.length - 2 ? NAVY : LINE}`, borderRadius: '12px', padding: '20px 18px', position: 'relative' }}>
                <div style={{ fontFamily: "Georgia, serif", fontSize: '13px', color: BRONZE, marginBottom: '8px' }}>Niveau {i + 1}</div>
                <div style={{ fontFamily: FONT, fontWeight: 700, fontSize: '10.5px', textTransform: 'uppercase', letterSpacing: '0.1em', color: i === LADDER.length - 2 ? '#e8a1ad' : RED, marginBottom: '6px' }}>{l.level}</div>
                <div style={{ fontFamily: FONT, fontWeight: 900, fontSize: '15px', color: i === LADDER.length - 2 ? 'white' : NAVY, marginBottom: '8px' }}>{l.role}</div>
                <p style={{ fontSize: '13px', lineHeight: 1.55, color: i === LADDER.length - 2 ? 'rgba(255,255,255,0.72)' : INK }}>{l.text}</p>
                {l.href && <div style={{ marginTop: '10px', fontFamily: FONT, fontWeight: 700, fontSize: '10.5px', letterSpacing: '0.08em', textTransform: 'uppercase', color: i === LADDER.length - 2 ? '#cdb48c' : NAVY }}>Voir le programme →</div>}
              </div>
            );
            return l.href ? <Link key={l.role} href={l.href} style={{ textDecoration: 'none' }}>{inner}</Link> : <div key={l.role}>{inner}</div>;
          })}
        </div>
        <h3 style={{ fontFamily: FONT, fontWeight: 900, fontSize: '18px', color: NAVY, marginBottom: '16px' }}>Nos grands champs d’enseignement</h3>
        <CardGrid items={FIELDS} cols={4} />
      </Section>

      {/* ══ 06 PÉDAGOGIE ══ */}
      <Section>
        <div className="inst-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 'clamp(28px,4vw,56px)', alignItems: 'start' }}>
          <SectionHead num="06 · Notre pédagogie" title={<>Apprendre <span style={{ color: RED }}>par la décision</span></>}
            intro="Nous voulons rapprocher la salle de cours de la réalité de l’entreprise. La connaissance est indispensable ; elle prend toute sa valeur lorsqu’elle permet de comprendre une situation, formuler une décision et agir avec méthode." />
          <div style={{ background: 'white', border: `1px solid ${LINE}`, borderRadius: '12px', padding: 'clamp(20px,3vw,28px)' }}>
            <Bullets items={[
              'Case Method et études de situations réelles.',
              'Business games et simulations de comités de direction.',
              'Projets d’entreprise, missions de conseil et challenges entrepreneuriaux.',
              'Alternance, stages, missions professionnelles et immersion en organisation.',
              'Masterclasses de dirigeants, entrepreneurs et experts.',
              'Travail en équipe multiculturelle et présentations devant jurys.',
              'Recherche appliquée, prospective et production de recommandations.',
              'Usage responsable de l’intelligence artificielle et des outils numériques.',
            ]} />
          </div>
        </div>
      </Section>

      {/* ══ 07 EXPÉRIENCE ══ */}
      <Section bg="white">
        <SectionHead num="07 · L’expérience A21 University" title="Au-delà du cours"
          intro="Une grande école se juge aussi à ce qui se passe en dehors du cours. Nous construisons une expérience qui développe simultanément la compétence, la culture générale, la confiance, le réseau professionnel et le sens des responsabilités." />
        <CardGrid items={EXPERIENCE} cols={3} numbered />
      </Section>

      {/* ══ 08 + 09 ══ */}
      <Section>
        <div className="inst-grid inst-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div style={{ background: 'white', border: `1px solid ${LINE}`, borderTop: `4px solid ${NAVY}`, borderRadius: '12px', padding: 'clamp(22px,3vw,32px)' }}>
            <Eyebrow>08 · Connectée à l’entreprise</Eyebrow>
            <h3 style={{ fontFamily: FONT, fontWeight: 900, fontSize: '19px', color: NAVY, marginBottom: '12px' }}>Des programmes construits avec le monde professionnel</h3>
            <P>Les entreprises participent à la définition des compétences, interviennent dans les enseignements, proposent des cas, accueillent des apprenants, contribuent aux jurys et recrutent les diplômés.</P>
            <P last>Notre ambition : des Corporate Partnerships durables — alternance et stages, chaires et projets appliqués, Executive Education sur mesure, recherche-action, recrutement, innovation et accompagnement de la transformation des organisations.</P>
          </div>
          <div style={{ background: 'white', border: `1px solid ${LINE}`, borderTop: `4px solid ${RED}`, borderRadius: '12px', padding: 'clamp(22px,3vw,32px)' }}>
            <Eyebrow>09 · Leadership responsable</Eyebrow>
            <h3 style={{ fontFamily: FONT, fontWeight: 900, fontSize: '19px', color: NAVY, marginBottom: '12px' }}>Former à plus de responsabilité, pas à plus de pouvoir</h3>
            <P>Pour A21 University, le leadership se mesure à la qualité des décisions, à la confiance créée, aux talents développés et à la valeur durable produite.</P>
            <P last>RSE, éthique des affaires, diversité, inclusion, soutenabilité et impact traversent progressivement l’ensemble des programmes : le dirigeant de demain devra répondre à la fois de la performance économique et de la manière dont elle est produite.</P>
          </div>
        </div>
      </Section>

      {/* ══ 10 GOUVERNANCE ══ */}
      <Section bg="white">
        <SectionHead num="10 · Gouvernance & exigence institutionnelle" title="Une gouvernance au service de la qualité" />
        <RowTable rows={GOVERNANCE} />
      </Section>

      {/* ══ 11 AMBITION 2030+ ══ */}
      <Section>
        <SectionHead num="11 · Notre ambition 2030+" title={<>Une trajectoire, <span style={{ color: RED }}>pas une proclamation</span></>}
          intro="Nous assumons une ambition de long terme : faire émerger A21 University comme une marque académique internationale crédible et reconnue." />
        <CardGrid items={AMBITION} cols={3} numbered accent={NAVY} />
      </Section>

      {/* ══ 12 SIGNATURE ══ */}
      <section style={{ background: `linear-gradient(135deg, #0e1a2e 0%, ${NAVY_2} 100%)`, padding: 'clamp(56px,7vw,96px) 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <Eyebrow light center>12 · Notre signature</Eyebrow>
          <p style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: 'italic', fontSize: 'clamp(18px,2.4vw,24px)', lineHeight: 1.7, color: 'white', marginBottom: '22px' }}>
            Des diplômés qui se distinguent moins par ce qu’ils affirment que par ce qu’ils savent faire : analyser avec rigueur, décider avec courage, communiquer avec clarté, agir avec méthode, diriger avec respect et transformer avec responsabilité.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '15px', lineHeight: 1.8, marginBottom: '28px' }}>
            Une école où l’ambition n’est jamais séparée de l’effort ; où le leadership n’est jamais séparé de l’éthique ; où l’international n’est jamais réduit à un voyage ; où le diplôme n’est jamais considéré comme une fin.
          </p>
          <div style={{ fontFamily: FONT, fontWeight: 900, fontSize: 'clamp(16px,2vw,20px)', letterSpacing: '0.3em', color: '#cdb48c' }}>LEARN. LEAD. TRANSFORM.</div>
        </div>
      </section>

      {/* ══ FONDATEUR ══ */}
      <div className="container" style={{ padding: 'clamp(48px,6vw,72px) 24px' }}>
        <div style={{ background: 'white', border: '1px solid #e0e2e6', borderLeft: '4px solid #C8102E', borderRadius: '8px', padding: 'clamp(24px,4vw,40px)', display: 'flex', gap: 'clamp(24px,4vw,48px)', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flexShrink: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://academytwentyone.com/web/assets/img/chairman.jpg"
              alt="Dr. Raoul Ruben Njionou"
              style={{ width: 'clamp(100px,15vw,140px)', height: 'clamp(100px,15vw,140px)', borderRadius: '50%', objectFit: 'cover', border: '3px solid #C8102E' }}
            />
          </div>
          <div style={{ flex: 1, minWidth: '200px' }}>
            <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C8102E', marginBottom: '8px' }}>Le Fondateur</div>
            <h3 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(18px,2.5vw,26px)', color: '#1a1a1a', marginBottom: '10px' }}>
              Dr. Raoul Ruben NJIONOU
            </h3>
            <p style={{ color: '#666', fontSize: '14px', lineHeight: 1.75 }}>
              Fondateur, Chairman & CEO d&apos;A21. Avec près de 15 ans d&apos;expérience dans le Marketing de Réseau et plus de 20 ans dans le monde des affaires, il a su se faire une place au sommet. Leader d&apos;impact reconnu sur 5 continents.
            </p>
            <Link href="/fondateur" style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '16px',
              color: '#C8102E', fontFamily: 'Montserrat,sans-serif', fontWeight: 700,
              fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em',
            }}>
              En savoir plus
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>

        <p style={{ marginTop: '28px', fontSize: '11.5px', color: '#9aa0aa', lineHeight: 1.6, maxWidth: '900px' }}>
          Repères institutionnels. La présente plateforme s’appuie sur l’héritage public d’Academy Twenty One : présence internationale revendiquée sur cinq continents et plus de 75 pays, culture de formation, de leadership et de développement humain. Les orientations universitaires, la gamme de programmes et les ambitions académiques présentées ici constituent le projet institutionnel d’A21 University.
        </p>
      </div>

      <style>{`
        @media (max-width: 1100px) { .inst-grid-5 { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 760px) { .inst-grid-5 { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 480px) { .inst-grid-5 { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
