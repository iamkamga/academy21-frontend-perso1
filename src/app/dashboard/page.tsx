'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '@/lib/api';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';

const MODULES = [
  {
    num: '01',
    title: "Fondamentaux de l'IA et enjeux pour le Marketing de Réseau",
    duration: '4h',
    color: '#C8102E',
    videoId: 'dQw4w9WgXcQ',
    pdf: '/docs/module-01.pdf',
    date: '14 Juillet 2026 · 14h00–18h00',
    status: 'disponible',
    contenus: [
      "Définition et fonctionnement de l'intelligence artificielle générative",
      "Typologie des outils disponibles et cas d'usage professionnels",
      "Transformations des métiers commerciaux à l'ère de l'IA",
      "Opportunités et limites dans le secteur du marketing de réseau",
      "Cadre éthique, conformité et bonnes pratiques",
    ],
    tp: "Diagnostic des usages IA applicables à sa propre activité",
    quiz: [
      {
        question: "Que signifie IA générative ?",
        options: ["Une IA qui génère du contenu original", "Une IA qui surveille les données", "Une IA qui calcule des statistiques", "Une IA qui gère les emails"],
        correct: 0,
      },
      {
        question: "Quel est l'enjeu principal de l'IA pour le marketing de réseau ?",
        options: ["Remplacer les commerciaux", "Automatiser et optimiser la prospection", "Supprimer les réunions", "Générer des revenus passifs automatiquement"],
        correct: 1,
      },
      {
        question: "Quelle est la bonne pratique éthique avec l'IA ?",
        options: ["Cacher qu'on utilise l'IA", "Utiliser l'IA sans vérifier les résultats", "Toujours relire et valider les contenus générés", "Laisser l'IA décider à votre place"],
        correct: 2,
      },
    ],
  },
  {
    num: '02',
    title: "Structuration de la Prospection Commerciale Assistée par IA",
    duration: '4h',
    color: '#1a6fc4',
    videoId: 'dQw4w9WgXcQ',
    pdf: '/docs/module-02.pdf',
    date: '21 Juillet 2026 · 14h00–18h00',
    status: 'disponible',
    contenus: [
      "Analyse et segmentation des cibles commerciales",
      "Construction de personas et qualification des prospects",
      "Rédaction assistée de scripts de prospection multicanaux",
      "Structuration d'un pipeline de prospection",
      "Mise en place de séquences de relance automatisées",
    ],
    tp: "Élaboration d'un dispositif de prospection personnalisé",
    quiz: [
      {
        question: "Qu'est-ce qu'un persona ?",
        options: ["Un client réel", "Un profil type de client idéal", "Un script de vente", "Un outil d'automatisation"],
        correct: 1,
      },
      {
        question: "À quoi sert un pipeline de prospection ?",
        options: ["À envoyer des emails en masse", "À suivre les prospects à chaque étape", "À créer des publicités", "À gérer les paiements"],
        correct: 1,
      },
      {
        question: "Qu'est-ce qu'une séquence de relance ?",
        options: ["Un seul message envoyé une fois", "Une série de messages automatisés et espacés", "Un appel téléphonique", "Une réunion en présentiel"],
        correct: 1,
      },
    ],
  },
  {
    num: '03',
    title: "Communication Digitale, Contenu et Personal Branding",
    duration: '4h',
    color: '#f0a500',
    videoId: 'dQw4w9WgXcQ',
    pdf: '/docs/module-03.pdf',
    date: '28 Juillet 2026 · 14h00–18h00',
    status: 'a-venir',
    contenus: [
      "Définition du positionnement et de la proposition de valeur",
      "Principes de personal branding appliqués au marketing de réseau",
      "Production de contenus textuels et visuels assistée par IA",
      "Construction d'une ligne éditoriale",
      "Élaboration d'un calendrier de communication structuré",
    ],
    tp: "Construction d'un plan éditorial mensuel personnalisé",
    quiz: [
      {
        question: "Que signifie personal branding ?",
        options: ["Créer une marque de produits", "Développer et gérer son image professionnelle", "Faire de la publicité payante", "Créer un logo"],
        correct: 1,
      },
      {
        question: "Qu'est-ce qu'une ligne éditoriale ?",
        options: ["Un journal interne", "Une stratégie de contenu cohérente et régulière", "Un outil de design", "Un calendrier de réunions"],
        correct: 1,
      },
      {
        question: "Comment l'IA aide-t-elle à produire du contenu ?",
        options: ["Elle remplace totalement le créateur", "Elle génère des idées et des ébauches à personnaliser", "Elle publie automatiquement sur tous les réseaux", "Elle crée des vidéos professionnelles seule"],
        correct: 1,
      },
    ],
  },
  {
    num: '04',
    title: "Techniques de Conversion et Recrutement de Partenaires",
    duration: '4h',
    color: '#28a745',
    videoId: 'dQw4w9WgXcQ',
    pdf: '/docs/module-04.pdf',
    date: '4 Août 2026 · 14h00–18h00',
    status: 'a-venir',
    contenus: [
      "Formalisation du parcours prospect / client / partenaire",
      "Préparation assistée des rendez-vous commerciaux",
      "Structuration des argumentaires de vente",
      "Gestion des objections et techniques de closing",
      "Conception d'un parcours d'intégration des nouveaux entrants",
    ],
    tp: "Simulation d'entretien commercial et traitement des objections",
    quiz: [
      {
        question: "Qu'est-ce que le closing ?",
        options: ["Fermer une réunion", "Conclure une vente ou un recrutement", "Clôturer un compte", "Terminer une formation"],
        correct: 1,
      },
      {
        question: "Comment gérer une objection efficacement ?",
        options: ["L'ignorer", "Argumenter sans écouter", "Écouter, reformuler et répondre avec des faits", "Baisser le prix immédiatement"],
        correct: 2,
      },
      {
        question: "Qu'est-ce qu'un parcours d'intégration ?",
        options: ["Un processus pour accueillir et former les nouveaux partenaires", "Un formulaire d'inscription", "Un contrat de vente", "Une réunion mensuelle"],
        correct: 0,
      },
    ],
  },
  {
    num: '05',
    title: "Automatisation, Pilotage et Organisation de l'Activité",
    duration: '4h',
    color: '#7b2d8b',
    videoId: 'dQw4w9WgXcQ',
    pdf: '/docs/module-05.pdf',
    date: '11 Août 2026 · 14h00–18h00',
    status: 'a-venir',
    contenus: [
      "Identification des tâches automatisables",
      "Introduction aux outils d'automatisation et no-code",
      "Structuration de workflows simples intégrant l'IA",
      "Construction de tableaux de bord de suivi d'activité",
      "Pilotage de la performance commerciale individuelle et collective",
    ],
    tp: "Élaboration d'un tableau de bord de pilotage personnalisé",
    quiz: [
      {
        question: "Qu'est-ce qu'un outil no-code ?",
        options: ["Un outil qui nécessite de programmer", "Un outil permettant d'automatiser sans coder", "Un logiciel de comptabilité", "Un réseau social professionnel"],
        correct: 1,
      },
      {
        question: "Qu'est-ce qu'un workflow ?",
        options: ["Un rapport financier", "Une séquence d'actions automatisées", "Un plan de communication", "Un tableau de bord"],
        correct: 1,
      },
      {
        question: "À quoi sert un tableau de bord de pilotage ?",
        options: ["À décorer le bureau", "À suivre et analyser ses performances en temps réel", "À envoyer des emails", "À créer des contenus"],
        correct: 1,
      },
    ],
  },
];

export default function DashboardPage() {
  const { user, loading: authLoading, logout } = useAuth();
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeModule, setActiveModule] = useState(0);
  const [completedModules, setCompletedModules] = useState<number[]>([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) router.push('/login');
  }, [user, authLoading, router]);

  useEffect(() => {
    if (user) {
      api.member.dashboard()
        .then(setData)
        .catch(() => {})
        .finally(() => setLoading(false));
      // Charger la progression depuis localStorage
      const saved = localStorage.getItem('academy21_progress');
      if (saved) setCompletedModules(JSON.parse(saved));
    }
  }, [user]);

  const saveProgress = (modules: number[]) => {
    setCompletedModules(modules);
    localStorage.setItem('academy21_progress', JSON.stringify(modules));
  };

  const startQuiz = () => {
    setQuizAnswers([]);
    setQuizSubmitted(false);
    setShowQuiz(true);
  };

  const submitQuiz = () => {
    setQuizSubmitted(true);
    const mod = MODULES[activeModule];
    const score = quizAnswers.filter((a, i) => a === mod.quiz[i].correct).length;
    if (score === mod.quiz.length) {
      const updated = Array.from(new Set([...completedModules, activeModule]));
      saveProgress(updated);
      if (updated.length === MODULES.length) {
        setTimeout(() => setShowCertificate(true), 1000);
      }
    }
  };

  const quizScore = () => {
    const mod = MODULES[activeModule];
    return quizAnswers.filter((a, i) => a === mod.quiz[i].correct).length;
  };

  if (authLoading || loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f7f8fa' }}>
        <div className="loading-spinner" />
      </div>
    );
  }

  if (!user) return null;

  const hasPaid = (data?.payments?.length || 0) > 0;
  const mod = MODULES[activeModule];
  const progression = Math.round((completedModules.length / MODULES.length) * 100);

  // ── CERTIFICAT ──
  if (showCertificate) {
    return (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f7f8fa 0%, #fff5f5 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
        <div style={{ maxWidth: '700px', width: '100%', textAlign: 'center' }}>
          <div style={{ background: 'white', border: '3px solid #C8102E', borderRadius: '16px', padding: '60px 48px', boxShadow: '0 20px 60px rgba(200,16,46,0.1)' }}>
            <div style={{ fontSize: '64px', marginBottom: '16px' }}>🏆</div>
            <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '12px', color: '#C8102E', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '24px' }}>
              Certificat de Completion
            </div>
            <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(24px,4vw,36px)', color: '#1a1a1a', marginBottom: '8px' }}>
              Academy 21 France
            </div>
            <div style={{ width: '60px', height: '3px', background: '#C8102E', margin: '0 auto 24px' }} />
            <p style={{ color: '#888', fontSize: '15px', marginBottom: '8px' }}>Ce certificat atteste que</p>
            <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(20px,3vw,28px)', color: '#C8102E', marginBottom: '8px' }}>
              {user.email.split('@')[0]}
            </div>
            <p style={{ color: '#888', fontSize: '15px', marginBottom: '24px' }}>a complété avec succès la formation</p>
            <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: 'clamp(15px,2.5vw,20px)', color: '#1a1a1a', background: '#f7f8fa', border: '1px solid #e0e2e6', borderRadius: '8px', padding: '16px 24px', marginBottom: '32px' }}>
              IA appliquée au Marketing de Réseau
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginBottom: '32px', flexWrap: 'wrap' }}>
              {[
                { label: 'Durée', value: '20 heures' },
                { label: 'Modules', value: '5 / 5' },
                { label: 'Date', value: new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) },
              ].map(item => (
                <div key={item.label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '10px', color: '#aaa', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>{item.label}</div>
                  <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '15px', color: '#1a1a1a' }}>{item.value}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => window.print()}
                style={{ background: '#C8102E', color: 'white', border: 'none', borderRadius: '8px', padding: '12px 28px', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '14px', cursor: 'pointer' }}
              >
                🖨️ Imprimer / Télécharger
              </button>
              <button
                onClick={() => setShowCertificate(false)}
                style={{ background: 'white', color: '#555', border: '1.5px solid #e0e2e6', borderRadius: '8px', padding: '12px 28px', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '14px', cursor: 'pointer' }}
              >
                Retour au dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f7f8fa' }}>

      {/* Header */}
      <div style={{ background: 'white', borderBottom: '3px solid #C8102E', padding: '24px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(20px,3vw,28px)', color: '#1a1a1a' }}>
                Bonjour, <span style={{ color: '#C8102E' }}>{user.email.split('@')[0]}</span> 👋
              </div>
              <div style={{ fontSize: '13px', color: '#aaa', marginTop: '4px' }}>
                {user.email} · {user.role === 'admin' ? '🔑 Admin' : '✅ Membre actif'}
              </div>
            </div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              {completedModules.length === MODULES.length && (
                <button
                  onClick={() => setShowCertificate(true)}
                  style={{ background: '#C8102E', color: 'white', border: 'none', borderRadius: '6px', padding: '8px 18px', cursor: 'pointer', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '13px' }}
                >
                  🏆 Mon certificat
                </button>
              )}
              <button
                onClick={() => { logout(); router.push('/'); }}
                style={{ background: 'none', border: '1.5px solid #e0e2e6', borderRadius: '6px', padding: '8px 18px', cursor: 'pointer', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '13px', color: '#555' }}
              >
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ background: 'white', borderBottom: '1px solid #e0e2e6', padding: '16px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {[
              { icon: '📚', label: 'Formation', value: hasPaid ? '1 active' : '0' },
              { icon: '⏱', label: 'Heures', value: hasPaid ? '20h' : '0h' },
              { icon: '✅', label: 'Modules complétés', value: `${completedModules.length} / ${MODULES.length}` },
              { icon: '📊', label: 'Progression', value: `${progression}%` },
            ].map(s => (
              <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 16px', background: '#f7f8fa', borderRadius: '8px', border: '1px solid #e0e2e6', flex: '1 1 140px' }}>
                <span style={{ fontSize: '20px' }}>{s.icon}</span>
                <div>
                  <div style={{ fontSize: '10px', color: '#aaa', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</div>
                  <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '15px', color: '#1a1a1a' }}>{s.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: 'clamp(24px,4vw,40px) 24px' }}>

        {!hasPaid ? (
          <div style={{ textAlign: 'center', padding: '80px 24px', background: 'white', borderRadius: '12px', border: '1px solid #e0e2e6' }}>
            <div style={{ fontSize: '64px', marginBottom: '20px' }}>🎓</div>
            <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '24px', color: '#1a1a1a', marginBottom: '12px' }}>
              Aucune formation achetée
            </h2>
            <p style={{ color: '#888', fontSize: '15px', marginBottom: '28px' }}>
              Inscrivez-vous à une formation pour accéder à votre espace d&apos;apprentissage.
            </p>
            <Link href="/formations" style={{ background: '#C8102E', color: 'white', padding: '14px 32px', borderRadius: '8px', fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '14px', textDecoration: 'none' }}>
              Voir les formations →
            </Link>
          </div>
        ) : (
          <div>
            {/* Titre + progression */}
            <div style={{ background: 'white', borderRadius: '12px', border: '1px solid #e0e2e6', padding: '20px 24px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <div style={{ fontSize: '11px', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, color: '#C8102E', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>
                  Formation en cours
                </div>
                <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(15px,2.5vw,20px)', color: '#1a1a1a' }}>
                  IA appliquée au Marketing de Réseau
                </h2>
              </div>
              <div style={{ minWidth: '200px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: '12px', color: '#888', fontFamily: 'Montserrat,sans-serif', fontWeight: 600 }}>Progression globale</span>
                  <span style={{ fontSize: '12px', color: '#C8102E', fontFamily: 'Montserrat,sans-serif', fontWeight: 800 }}>{progression}%</span>
                </div>
                <div style={{ background: '#f0f1f3', borderRadius: '4px', height: '10px', overflow: 'hidden' }}>
                  <div style={{ width: `${progression}%`, height: '100%', background: progression === 100 ? '#28a745' : '#C8102E', borderRadius: '4px', transition: 'width 0.6s ease' }} />
                </div>
                {progression === 100 && (
                  <div style={{ fontSize: '11px', color: '#28a745', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, marginTop: '4px', textAlign: 'right' }}>
                    🎉 Formation complétée !
                  </div>
                )}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '20px', alignItems: 'start' }} className="formation-layout">

              {/* Sidebar modules */}
              <div style={{ background: 'white', borderRadius: '12px', border: '1px solid #e0e2e6', overflow: 'hidden', position: 'sticky', top: '20px' }}>
                <div style={{ padding: '14px 16px', background: '#1a1a1a', fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '11px', color: 'white', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Programme — 5 Modules
                </div>
                {MODULES.map((m, i) => (
                  <button
                    key={m.num}
                    onClick={() => { setActiveModule(i); setShowQuiz(false); setQuizSubmitted(false); }}
                    style={{
                      width: '100%', textAlign: 'left', padding: '12px 14px',
                      background: activeModule === i ? '#fff5f5' : 'white',
                      border: 'none', borderBottom: '1px solid #f0f1f3',
                      borderLeft: activeModule === i ? `4px solid ${m.color}` : '4px solid transparent',
                      cursor: 'pointer',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
                      <span style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '10px', color: m.color }}>
                        Module {m.num} · {m.duration}
                      </span>
                      <span style={{ fontSize: '12px' }}>
                        {completedModules.includes(i) ? '✅' : m.status === 'disponible' ? '🟢' : '⏳'}
                      </span>
                    </div>
                    <div style={{ fontSize: '11px', color: activeModule === i ? '#1a1a1a' : '#555', fontFamily: 'Montserrat,sans-serif', fontWeight: 600, lineHeight: 1.4 }}>
                      {m.title.length > 50 ? m.title.substring(0, 50) + '…' : m.title}
                    </div>
                  </button>
                ))}
              </div>

              {/* Contenu module actif */}
              <div>

                {!showQuiz ? (
                  <>
                    {/* Vidéo */}
                    <div style={{ background: 'white', borderRadius: '12px', border: '1px solid #e0e2e6', overflow: 'hidden', marginBottom: '16px' }}>
                      <div style={{ position: 'relative', paddingBottom: '56.25%', background: '#0a0a0a' }}>
                        <iframe
                          src={`https://www.youtube.com/embed/${mod.videoId}?rel=0&modestbranding=1`}
                          title={mod.title}
                          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                      <div style={{ padding: '18px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', borderTop: '1px solid #f0f1f3' }}>
                        <div>
                          <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(13px,2vw,16px)', color: '#1a1a1a', marginBottom: '4px' }}>
                            Module {mod.num} — {mod.title}
                          </div>
                          <div style={{ fontSize: '12px', color: '#aaa' }}>📅 {mod.date} · ⏱ {mod.duration}</div>
                        </div>
                        <a href={mod.pdf} download style={{
                          display: 'inline-flex', alignItems: 'center', gap: '6px',
                          background: '#f7f8fa', border: '1px solid #e0e2e6',
                          color: '#333', padding: '8px 14px', borderRadius: '6px',
                          fontSize: '12px', fontFamily: 'Montserrat,sans-serif',
                          fontWeight: 700, textDecoration: 'none',
                        }}>
                          📄 Support PDF
                        </a>
                      </div>
                    </div>

                    {/* Contenus */}
                    <div style={{ background: 'white', borderRadius: '12px', border: '1px solid #e0e2e6', padding: '20px 22px', marginBottom: '14px' }}>
                      <h3 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '13px', color: '#1a1a1a', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                        Au programme de ce module
                      </h3>
                      {mod.contenus.map((c, i) => (
                        <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '9px', alignItems: 'flex-start' }}>
                          <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: mod.color, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5 9-9"/></svg>
                          </div>
                          <p style={{ fontSize: '13px', color: '#555', lineHeight: 1.6, margin: 0 }}>{c}</p>
                        </div>
                      ))}
                    </div>

                    {/* TP */}
                    <div style={{ background: '#fafafa', border: `1px solid ${mod.color}30`, borderLeft: `4px solid ${mod.color}`, borderRadius: '8px', padding: '14px 18px', marginBottom: '16px' }}>
                      <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '11px', color: mod.color, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>
                        🧪 Travaux Pratiques
                      </div>
                      <p style={{ fontSize: '13px', color: '#555', lineHeight: 1.6, margin: 0 }}>{mod.tp}</p>
                    </div>

                    {/* Bouton quiz ou déjà complété */}
                    {completedModules.includes(activeModule) ? (
                      <div style={{ background: '#f0fdf4', border: '1px solid #86efac', borderRadius: '8px', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                        <span style={{ fontSize: '24px' }}>✅</span>
                        <div>
                          <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '14px', color: '#15803d' }}>Module complété avec succès !</div>
                          <div style={{ fontSize: '12px', color: '#16a34a' }}>Vous avez réussi le quiz de ce module.</div>
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={startQuiz}
                        style={{ width: '100%', background: mod.color, color: 'white', border: 'none', borderRadius: '8px', padding: '14px', cursor: 'pointer', fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '14px', marginBottom: '16px' }}
                      >
                        📝 Passer le quiz de validation →
                      </button>
                    )}

                    {/* Navigation */}
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <button
                        onClick={() => { setActiveModule(Math.max(0, activeModule - 1)); setShowQuiz(false); setQuizSubmitted(false); }}
                        disabled={activeModule === 0}
                        style={{ flex: 1, background: 'white', border: '1.5px solid #e0e2e6', borderRadius: '8px', padding: '12px', cursor: activeModule === 0 ? 'not-allowed' : 'pointer', opacity: activeModule === 0 ? 0.4 : 1, fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '13px', color: '#555' }}
                      >
                        ← Précédent
                      </button>
                      <button
                        onClick={() => { setActiveModule(Math.min(MODULES.length - 1, activeModule + 1)); setShowQuiz(false); setQuizSubmitted(false); }}
                        disabled={activeModule === MODULES.length - 1}
                        style={{ flex: 1, background: '#C8102E', border: 'none', borderRadius: '8px', padding: '12px', cursor: activeModule === MODULES.length - 1 ? 'not-allowed' : 'pointer', opacity: activeModule === MODULES.length - 1 ? 0.4 : 1, fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '13px', color: 'white' }}
                      >
                        Suivant →
                      </button>
                    </div>
                  </>
                ) : (
                  /* ── QUIZ ── */
                  <div style={{ background: 'white', borderRadius: '12px', border: '1px solid #e0e2e6', padding: '28px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                      <div>
                        <div style={{ fontSize: '11px', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, color: mod.color, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>
                          Quiz — Module {mod.num}
                        </div>
                        <h3 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '18px', color: '#1a1a1a' }}>
                          Validez vos acquis
                        </h3>
                      </div>
                      <button onClick={() => setShowQuiz(false)} style={{ background: 'none', border: 'none', color: '#aaa', cursor: 'pointer', fontSize: '13px', fontFamily: 'Montserrat,sans-serif', fontWeight: 600 }}>
                        ← Retour au module
                      </button>
                    </div>

                    {mod.quiz.map((q, qi) => (
                      <div key={qi} style={{ marginBottom: '24px', padding: '20px', background: '#f7f8fa', borderRadius: '8px', border: '1px solid #e0e2e6' }}>
                        <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '14px', color: '#1a1a1a', marginBottom: '14px' }}>
                          {qi + 1}. {q.question}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          {q.options.map((opt, oi) => {
                            let bg = 'white';
                            let border = '1.5px solid #e0e2e6';
                            let color = '#333';
                            if (quizSubmitted) {
                              if (oi === q.correct) { bg = '#f0fdf4'; border = '1.5px solid #86efac'; color = '#15803d'; }
                              else if (oi === quizAnswers[qi] && oi !== q.correct) { bg = '#fff5f5'; border = '1.5px solid #fca5a5'; color = '#dc2626'; }
                            } else if (quizAnswers[qi] === oi) {
                              bg = `${mod.color}10`; border = `1.5px solid ${mod.color}`; color = mod.color;
                            }
                            return (
                              <button
                                key={oi}
                                disabled={quizSubmitted}
                                onClick={() => {
                                  const updated = [...quizAnswers];
                                  updated[qi] = oi;
                                  setQuizAnswers(updated);
                                }}
                                style={{ textAlign: 'left', padding: '12px 16px', background: bg, border, borderRadius: '6px', cursor: quizSubmitted ? 'default' : 'pointer', fontFamily: 'Montserrat,sans-serif', fontWeight: 600, fontSize: '13px', color, transition: 'all 0.15s' }}
                              >
                                {quizSubmitted && oi === q.correct && '✅ '}
                                {quizSubmitted && oi === quizAnswers[qi] && oi !== q.correct && '❌ '}
                                {opt}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}

                    {!quizSubmitted ? (
                      <button
                        onClick={submitQuiz}
                        disabled={quizAnswers.length < mod.quiz.length}
                        style={{ width: '100%', background: mod.color, color: 'white', border: 'none', borderRadius: '8px', padding: '14px', cursor: quizAnswers.length < mod.quiz.length ? 'not-allowed' : 'pointer', opacity: quizAnswers.length < mod.quiz.length ? 0.5 : 1, fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '14px' }}
                      >
                        Valider mes réponses
                      </button>
                    ) : (
                      <div>
                        {quizScore() === mod.quiz.length ? (
                          <div style={{ background: '#f0fdf4', border: '1px solid #86efac', borderRadius: '8px', padding: '20px', textAlign: 'center', marginBottom: '16px' }}>
                            <div style={{ fontSize: '32px', marginBottom: '8px' }}>🎉</div>
                            <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '18px', color: '#15803d', marginBottom: '4px' }}>Parfait ! {quizScore()} / {mod.quiz.length}</div>
                            <div style={{ fontSize: '13px', color: '#16a34a' }}>Module validé avec succès !</div>
                          </div>
                        ) : (
                          <div style={{ background: '#fff5f5', border: '1px solid #fca5a5', borderRadius: '8px', padding: '20px', textAlign: 'center', marginBottom: '16px' }}>
                            <div style={{ fontSize: '32px', marginBottom: '8px' }}>📚</div>
                            <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '18px', color: '#dc2626', marginBottom: '4px' }}>{quizScore()} / {mod.quiz.length} — Réessayez</div>
                            <div style={{ fontSize: '13px', color: '#ef4444' }}>Relisez le module et retentez le quiz.</div>
                          </div>
                        )}
                        <div style={{ display: 'flex', gap: '12px' }}>
                          {quizScore() < mod.quiz.length && (
                            <button onClick={startQuiz} style={{ flex: 1, background: mod.color, color: 'white', border: 'none', borderRadius: '8px', padding: '12px', cursor: 'pointer', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '13px' }}>
                              🔄 Réessayer
                            </button>
                          )}
                          <button onClick={() => setShowQuiz(false)} style={{ flex: 1, background: 'white', border: '1.5px solid #e0e2e6', borderRadius: '8px', padding: '12px', cursor: 'pointer', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '13px', color: '#555' }}>
                            Retour au module
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) { .formation-layout { grid-template-columns: 1fr !important; } }
        @media print {
          body * { visibility: hidden; }
          .certificat, .certificat * { visibility: visible; }
        }
      `}</style>
    </div>
  );
}