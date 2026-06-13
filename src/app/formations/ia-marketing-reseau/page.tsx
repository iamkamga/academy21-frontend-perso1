import Link from 'next/link';

const MODULES = [
  {
    num: '01',
    title: "Fondamentaux de l'IA et enjeux pour le Marketing de Réseau",
    duration: '4h',
    color: '#C8102E',
    competences: [
      "Comprendre les mécanismes de base de l'IA générative",
      "Identifier les transformations induites dans les fonctions commerciales et marketing",
    ],
    contenus: [
      "Définition et fonctionnement de l'intelligence artificielle générative",
      "Typologie des outils disponibles et cas d'usage professionnels",
      "Transformations des métiers commerciaux à l'ère de l'IA",
      "Opportunités et limites dans le secteur du marketing de réseau",
      "Cadre éthique, conformité et bonnes pratiques d'utilisation",
    ],
    tp: "Diagnostic des usages IA applicables à sa propre activité",
  },
  {
    num: '02',
    title: "Structuration de la Prospection Commerciale Assistée par IA",
    duration: '4h',
    color: '#1a6fc4',
    competences: [
      "Concevoir une stratégie de prospection optimisée",
      "Automatiser et structurer la qualification commerciale",
    ],
    contenus: [
      "Analyse et segmentation des cibles commerciales",
      "Construction de personas et qualification des prospects",
      "Rédaction assistée de scripts de prospection multicanaux",
      "Structuration d'un pipeline de prospection",
      "Mise en place de séquences de relance automatisées",
      "Introduction aux logiques de tunnel de conversion",
    ],
    tp: "Élaboration d'un dispositif de prospection personnalisé",
  },
  {
    num: '03',
    title: "Communication Digitale, Contenu et Personal Branding",
    duration: '4h',
    color: '#f0a500',
    competences: [
      "Structurer une communication professionnelle cohérente",
      "Produire des contenus marketing performants",
    ],
    contenus: [
      "Définition du positionnement et de la proposition de valeur",
      "Principes de personal branding appliqués au marketing de réseau",
      "Production de contenus textuels et visuels assistée par IA",
      "Construction d'une ligne éditoriale",
      "Élaboration d'un calendrier de communication structuré",
      "Mesure et optimisation des performances de contenu",
    ],
    tp: "Construction d'un plan éditorial mensuel personnalisé",
  },
  {
    num: '04',
    title: "Techniques de Conversion et Recrutement de Partenaires",
    duration: '4h',
    color: '#28a745',
    competences: [
      "Professionnaliser le processus de conversion commerciale",
      "Structurer un parcours de recrutement de partenaires",
    ],
    contenus: [
      "Formalisation du parcours prospect / client / partenaire",
      "Préparation assistée des rendez-vous commerciaux",
      "Structuration des argumentaires de vente",
      "Gestion des objections et techniques de closing",
      "Conception d'un parcours d'intégration des nouveaux entrants",
      "Standardisation des supports d'accompagnement",
    ],
    tp: "Simulation d'entretien commercial et traitement des objections",
  },
  {
    num: '05',
    title: "Automatisation, Pilotage et Organisation de l'Activité",
    duration: '4h',
    color: '#7b2d8b',
    competences: [
      "Optimiser la gestion opérationnelle de l'activité",
      "Structurer un système de pilotage performant",
    ],
    contenus: [
      "Identification des tâches automatisables",
      "Introduction aux outils d'automatisation et no-code",
      "Structuration de workflows simples intégrant l'IA",
      "Construction de tableaux de bord de suivi d'activité",
      "Pilotage de la performance commerciale individuelle et collective",
      "Méthodes de structuration d'une activité duplicable et scalable",
    ],
    tp: "Élaboration d'un tableau de bord de pilotage personnalisé",
  },
];

export default function FormationIAPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f7f8fa' }}>

      {/* HERO — fond blanc, compact */}
      <div style={{
        background: 'white',
        borderBottom: '3px solid #C8102E',
        padding: '32px 0 28px',
      }}>
        <div className="container">
          <Link href="/formations" style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            color: '#888', fontSize: '12px', fontFamily: 'Montserrat,sans-serif',
            fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '20px',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Retour aux formations
          </Link>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
            <span style={{ background: '#C8102E', color: 'white', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '10px', padding: '3px 10px', borderRadius: '3px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Formation Professionnelle</span>
            <span style={{ background: '#e8f0fb', color: '#1a6fc4', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '10px', padding: '3px 10px', borderRadius: '3px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Distanciel synchrone</span>
            <span style={{ background: '#edfae5', color: '#28a745', border: '1px solid #c3e6cb', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '10px', padding: '3px 10px', borderRadius: '3px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Éligible CPF</span>
          </div>

          <h1 style={{
            fontFamily: 'Montserrat,sans-serif', fontWeight: 900,
            fontSize: 'clamp(24px, 4vw, 44px)', color: '#1a1a1a',
            lineHeight: 1.15, marginBottom: '14px', maxWidth: '720px',
          }}>
            Intelligence Artificielle appliquée au{' '}
            <span style={{ color: '#C8102E' }}>Marketing de Réseau</span>
          </h1>

          <p style={{ color: '#666', fontSize: '15px', lineHeight: 1.75, maxWidth: '600px', marginBottom: '24px' }}>
            Intégrez de manière structurée les outils d&apos;intelligence artificielle dans votre organisation commerciale afin d&apos;optimiser vos pratiques et professionnaliser votre activité.
          </p>

          {/* Infos clés — fond gris clair */}
          <div style={{
            display: 'flex', flexWrap: 'wrap',
            background: '#f7f8fa', border: '1px solid #e0e2e6',
            borderRadius: '8px', overflow: 'hidden',
          }}>
            {[
              { label: 'Durée', val: '20 heures' },
              { label: 'Format', val: 'Distanciel synchrone' },
              { label: 'Sessions', val: '5 × 4 heures' },
              { label: 'Mode', val: 'Formation individuelle' },
            ].map((info, i) => (
              <div key={info.label} style={{
                flex: '1 1 130px', padding: '14px 20px',
                borderRight: i < 3 ? '1px solid #e0e2e6' : 'none',
              }}>
                <div style={{ fontSize: '10px', color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: 'Montserrat,sans-serif', fontWeight: 600, marginBottom: '4px' }}>{info.label}</div>
                <div style={{ color: '#1a1a1a', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '13px' }}>{info.val}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: 'clamp(24px, 4vw, 48px) 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '28px', alignItems: 'start' }} className="formation-grid">

          {/* COLONNE GAUCHE */}
          <div>
            {/* Objectifs */}
            <div style={{ background: 'white', border: '1px solid #e0e2e6', borderTop: '4px solid #C8102E', borderRadius: '8px', padding: 'clamp(20px,4vw,32px)', marginBottom: '24px' }}>
              <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(16px,2.5vw,22px)', marginBottom: '18px', color: '#1a1a1a' }}>Objectifs pédagogiques</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  "Comprendre les principes fondamentaux de l'IA générative et ses applications professionnelles",
                  "Identifier les usages pertinents de l'IA dans une activité de marketing de réseau",
                  "Structurer une démarche de prospection commerciale assistée par l'IA",
                  "Produire des contenus marketing adaptés à leurs cibles et à leur positionnement",
                  "Professionnaliser leurs techniques de conversion et de recrutement",
                  "Mettre en place des outils de suivi, d'automatisation et de pilotage",
                  "Élaborer un plan de transformation opérationnelle intégrant l'IA",
                ].map((obj, i) => (
                  <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#C8102E', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5 9-9"/></svg>
                    </div>
                    <p style={{ color: '#555', fontSize: '14px', lineHeight: 1.65 }}>{obj}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Modules */}
            <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(16px,2.5vw,22px)', marginBottom: '16px', color: '#1a1a1a' }}>Programme détaillé</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
              {MODULES.map(mod => (
                <div key={mod.num} style={{ background: 'white', border: '1px solid #e0e2e6', borderLeft: '4px solid ' + mod.color, borderRadius: '8px', overflow: 'hidden' }}>
                  <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid #f0f1f3' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: mod.color, color: 'white', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '12px' }}>{mod.num}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px', flexWrap: 'wrap' }}>
                        <h3 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: 'clamp(12px,1.8vw,14px)', color: '#1a1a1a', lineHeight: 1.3 }}>Module {mod.num} — {mod.title}</h3>
                        <span style={{ background: mod.color + '15', color: mod.color, border: '1px solid ' + mod.color + '35', padding: '2px 10px', borderRadius: '20px', fontSize: '11px', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, whiteSpace: 'nowrap' }}>{mod.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ padding: '14px 20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="module-grid">
                    <div>
                      <div style={{ fontSize: '10px', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#aaa', marginBottom: '8px' }}>Compétences visées</div>
                      {mod.competences.map((c, i) => (
                        <div key={i} style={{ display: 'flex', gap: '6px', marginBottom: '6px', fontSize: '13px', color: '#555', lineHeight: 1.5 }}>
                          <span style={{ color: mod.color, flexShrink: 0 }}>→</span> {c}
                        </div>
                      ))}
                    </div>
                    <div>
                      <div style={{ fontSize: '10px', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#aaa', marginBottom: '8px' }}>Contenus pédagogiques</div>
                      {mod.contenus.map((c, i) => (
                        <div key={i} style={{ display: 'flex', gap: '6px', marginBottom: '6px', fontSize: '13px', color: '#555', lineHeight: 1.5 }}>
                          <span style={{ color: '#ccc', flexShrink: 0 }}>•</span> {c}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ padding: '10px 20px', background: '#fafafa', borderTop: '1px solid #f0f1f3', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={mod.color} strokeWidth="2" style={{ flexShrink: 0, marginTop: '2px' }}><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18"/></svg>
                    <div>
                      <span style={{ fontSize: '10px', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#aaa' }}>TP — </span>
                      <span style={{ fontSize: '13px', color: '#555' }}>{mod.tp}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Modalités */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }} className="modalites-grid">
              {[
                { title: "Modalités pédagogiques", items: ["Formation en classe virtuelle synchrone", "Alternance apports théoriques et pratiques", "Études de cas contextualisées", "Exercices individuels et collectifs", "Accompagnement méthodologique"] },
                { title: "Modalités d'évaluation", items: ["Évaluations formatives par module", "Exercices pratiques par module", "Étude de cas fil rouge", "Présentation finale d'un plan d'intégration IA"] },
              ].map(m => (
                <div key={m.title} style={{ background: 'white', border: '1px solid #e0e2e6', borderRadius: '8px', padding: '18px 20px' }}>
                  <h3 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '13px', marginBottom: '12px', color: '#1a1a1a' }}>{m.title}</h3>
                  {m.items.map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '8px', marginBottom: '7px', fontSize: '13px', color: '#666', lineHeight: 1.5 }}>
                      <span style={{ color: '#C8102E', flexShrink: 0 }}>•</span> {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>



        </div>
      </div>

      {/* CTA S'inscrire */}
      <div style={{ background: 'linear-gradient(135deg, #1a0005 0%, #2d0008 100%)', padding: 'clamp(40px,6vw,80px) 24px', textAlign: 'center', marginTop: '48px' }}>
        <div className="container">
          <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(22px,4vw,38px)', color: 'white', marginBottom: '16px' }}>
            Prêt à transformer votre activité avec l&apos;IA ?
          </div>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px' }}>
            Rejoignez la formation et maîtrisez l&apos;intelligence artificielle appliquée au marketing de réseau.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px' }}>
            <Link href="/formations/ia-marketing-reseau/inscription" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#C8102E', color: 'white', fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '15px', padding: '16px 36px', borderRadius: '8px', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              S&apos;inscrire maintenant — 490 €
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '12px' }}>🔒 Paiement sécurisé · 20h de formation · Distanciel synchrone</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .formation-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 600px) { .module-grid { grid-template-columns: 1fr !important; } .modalites-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}