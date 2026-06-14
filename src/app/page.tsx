'use client';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { useEffect, useState } from 'react';

const STATS = [
  { num: '75+', label: 'Pays' },
  { num: '1M+', label: 'Participants' },
  { num: '2000+', label: 'Séminaires / an' },
  { num: '2', label: 'Continents' },
];

const PROGRAMMES = [
  { title: 'A21 Training', desc: 'La formation fondamentale pour développer votre mindset et vos compétences business.', tag: 'Fondamental', color: '#C8102E', bg: '#fff5f5', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80', href: '/rejoindre-academie/a21-training' },
  { title: 'LeaderCamp', desc: 'Un événement intensif de plusieurs jours pour décupler vos performances en leadership.', tag: 'Intensif', color: '#f0a500', bg: '#fffbf0', img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80', href: '/rejoindre-academie/leadercamp' },
  { title: 'Business Show', desc: 'La grande conférence annuelle avec des speakers internationaux de premier plan.', tag: 'Événement', color: '#1a6fc4', bg: '#f0f6ff', img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80', href: '/rejoindre-academie/business-show' },
];

const VALUES = [
  { label: 'Foi', desc: 'Croire en soi et en son potentiel' },
  { label: 'Charité', desc: 'Donner sans compter' },
  { label: 'Persévérance', desc: 'Ne jamais abandonner' },
  { label: 'Attitude Positive', desc: 'Voir l\'opportunité partout' },
  { label: 'Ambition', desc: 'Viser toujours plus haut' },
  { label: 'Never Give Up', desc: 'La résilience face aux obstacles' },
  { label: 'Lifestyle', desc: 'Vivre selon ses termes' },
  { label: 'Loyauté', desc: 'Rester fidèle à ses engagements' },
  { label: 'Rigueur', desc: 'Excellence dans chaque action' },
];

// Icônes SVG minimalistes
const IconGlobe = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const IconUsers = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const IconCalendar = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const IconMap = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="1 6 1 22 8 18 16 22 21 18 21 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/>
  </svg>
);

const IconArrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const IconArrowSmall = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const IconTarget = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
);

const IconVision = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
  </svg>
);

const IconImpact = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const IconQuote = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1h2.75z"/>
  </svg>
);

const IconStar = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const IconDiamond = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M12 2L2 12l10 10 10-10L12 2z"/>
  </svg>
);

export default function HomePage() {
  const { user, loading } = useAuth();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCount(c => (c + 1) % 3), 3000);
    return () => clearInterval(timer);
  }, []);

  const WORDS = ['Votre Avenir.', 'Votre Succès.', 'Votre Liberté.'];

  return (
    <div style={{ background: 'white', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>

      {/* ══ HERO AVEC PHOTO ÉQUIPE EN ARRIÈRE-PLAN PLEIN ÉCRAN ══ */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        {/* Image d'arrière-plan plein écran */}
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}>
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80"
            alt="Équipe Academy 21 - Business Growth"
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              objectPosition: 'center center',
            }}
          />
          {/* Overlay sombre pour la lisibilité du texte */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.7) 100%)',
          }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1, padding: 'clamp(100px,12vw,160px) 0 clamp(60px,8vw,100px)' }}>
          <div style={{ maxWidth: '680px' }}>
            {/* Badge */}
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '10px', 
              background: 'rgba(255,255,255,0.08)', 
              border: '1px solid rgba(255,255,255,0.15)', 
              borderRadius: '100px', 
              padding: '8px 20px', 
              marginBottom: '32px', 
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}>
              <span style={{ 
                width: '8px', 
                height: '8px', 
                borderRadius: '50%', 
                background: '#C8102E', 
                display: 'inline-block', 
                animation: 'pulse 2s infinite',
                boxShadow: '0 0 8px rgba(200,16,46,0.6)',
              }} />
              <span style={{ 
                fontFamily: "'Inter', sans-serif", 
                fontWeight: 600, 
                fontSize: '12px', 
                color: 'rgba(255,255,255,0.9)', 
                textTransform: 'uppercase', 
                letterSpacing: '0.12em' 
              }}>
                Présents sur 2 continents
              </span>
            </div>

            <h1 style={{ 
              fontFamily: "'Montserrat', 'Inter', sans-serif", 
              fontWeight: 900, 
              fontSize: 'clamp(42px,7vw,88px)', 
              color: 'white', 
              lineHeight: 1.02, 
              marginBottom: '24px', 
              letterSpacing: '-0.03em',
              textWrap: 'balance',
            }}>
              Réinventez<br />
              <span style={{ 
                color: '#C8102E', 
                display: 'inline-block', 
                transition: 'all 0.5s ease',
                textShadow: '0 2px 20px rgba(200,16,46,0.3)',
              }}>
                {WORDS[count]}
              </span>
            </h1>

            <p style={{ 
              fontSize: 'clamp(17px,1.8vw,20px)', 
              color: 'rgba(255,255,255,0.75)', 
              lineHeight: 1.7, 
              marginBottom: '44px', 
              maxWidth: '540px', 
              fontWeight: 400,
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '-0.01em',
            }}>
              Academy 21 France vous accompagne vers l&apos;excellence entrepreneuriale avec des formations d&apos;élite et un réseau international de leaders.
            </p>

            {/* Boutons */}
            {!loading && (
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '56px' }}>
                <Link href="/rejoindre-academie" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '12px',
                  background: '#C8102E', color: 'white',
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 800,
                  fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase',
                  padding: '18px 36px', borderRadius: '10px', textDecoration: 'none',
                  boxShadow: '0 8px 32px rgba(200,16,46,0.35)',
                  transition: 'all 0.3s ease',
                  border: 'none',
                }}>
                  Rejoindre l&apos;Académie
                  <IconArrow />
                </Link>
                {user ? (
                  <Link href="/dashboard" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '12px',
                    background: 'rgba(255,255,255,0.06)', color: 'white',
                    fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
                    fontSize: '13px', letterSpacing: '0.06em', textTransform: 'uppercase',
                    padding: '18px 36px', borderRadius: '10px', textDecoration: 'none',
                    border: '1.5px solid rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    transition: 'all 0.3s ease',
                  }}>
                    Mon espace
                  </Link>
                ) : (
                  <Link href="/formations" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '12px',
                    background: 'rgba(255,255,255,0.06)', color: 'white',
                    fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
                    fontSize: '13px', letterSpacing: '0.06em', textTransform: 'uppercase',
                    padding: '18px 36px', borderRadius: '10px', textDecoration: 'none',
                    border: '1.5px solid rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    transition: 'all 0.3s ease',
                  }}>
                    Voir les formations
                  </Link>
                )}
              </div>
            )}

            {/* Stats inline avec icônes SVG */}
            <div style={{ 
              display: 'flex', 
              gap: 'clamp(24px,4vw,48px)', 
              flexWrap: 'wrap',
              paddingTop: '24px',
              borderTop: '1px solid rgba(255,255,255,0.1)',
            }}>
              {[
                { num: '75+', label: 'Pays', icon: <IconGlobe /> },
                { num: '1M+', label: 'Participants', icon: <IconUsers /> },
                { num: '2000+', label: 'Séminaires', icon: <IconCalendar /> },
                { num: '5', label: 'Continents', icon: <IconMap /> },
              ].map(s => (
                <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ 
                    color: '#C8102E', 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'rgba(200,16,46,0.15)',
                  }}>{s.icon}</span>
                  <div>
                    <div style={{ 
                      fontFamily: "'Montserrat', sans-serif", 
                      fontWeight: 900, 
                      fontSize: 'clamp(20px,2.5vw,26px)', 
                      color: 'white', 
                      lineHeight: 1,
                      letterSpacing: '-0.02em',
                    }}>{s.num}</div>
                    <div style={{ 
                      fontSize: '11px', 
                      color: 'rgba(255,255,255,0.5)', 
                      fontFamily: "'Inter', sans-serif", 
                      fontWeight: 500, 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.1em',
                      marginTop: '2px',
                    }}>{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Légende discrète en bas à droite */}
        <div style={{ 
          position: 'absolute', 
          bottom: '28px', 
          right: '28px', 
          zIndex: 1, 
          textAlign: 'right', 
          color: 'white',
          opacity: 0.6,
        }}>
          <div style={{ 
            fontFamily: "'Inter', sans-serif", 
            fontWeight: 600, 
            fontSize: '12px', 
            marginBottom: '4px',
            letterSpacing: '0.05em',
          }}>
            Leadership & Excellence
          </div>
          <div style={{ 
            fontSize: '11px', 
            opacity: 0.7,
            fontFamily: "'Inter', sans-serif",
            letterSpacing: '0.02em',
          }}>
            Formation internationale • 2026
          </div>
        </div>
      </section>

      {/* ══ BANDE DÉFILANTE REDESIGNÉE ══ */}
      <section style={{ 
        background: '#0a0a0a', 
        padding: '20px 0', 
        overflow: 'hidden',
        position: 'relative',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}>
        <div style={{ 
          display: 'flex', 
          animation: 'scroll 30s linear infinite', 
          whiteSpace: 'nowrap',
          width: 'max-content',
        }}>
          {[...VALUES, ...VALUES, ...VALUES, ...VALUES].map((v, i) => (
            <span key={i} style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '20px', 
              fontFamily: "'Montserrat', sans-serif", 
              fontWeight: 700, 
              fontSize: '14px', 
              color: 'rgba(255,255,255,0.85)', 
              textTransform: 'uppercase', 
              letterSpacing: '0.12em',
              padding: '0 40px',
            }}>
              <span style={{ 
                color: '#C8102E', 
                display: 'flex',
                alignItems: 'center',
                opacity: 0.8,
              }}>
                <IconDiamond />
              </span>
              {v.label}
            </span>
          ))}
        </div>
      </section>

      {/* ══ PROGRAMMES AVEC PHOTO ÉQUIPE EN ARRIÈRE-PLAN ══ */}
      <section style={{ 
        padding: 'clamp(80px,10vw,140px) 0', 
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Image d'arrière-plan */}
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}>
          <img
            src="/kcc-team.jpg"
            alt="Équipe Academy 21"
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              objectPosition: 'center center',
            }}
          />
          {/* Overlay blanc cassé pour la lisibilité */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(247,248,250,0.92) 0%, rgba(247,248,250,0.88) 50%, rgba(247,248,250,0.92) 100%)',
          }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(48px,6vw,72px)' }}>
            <span style={{ 
              display: 'inline-block', 
              background: 'rgba(200,16,46,0.08)', 
              color: '#C8102E', 
              fontFamily: "'Montserrat', sans-serif", 
              fontWeight: 700, 
              fontSize: '11px', 
              padding: '6px 18px', 
              borderRadius: '100px', 
              textTransform: 'uppercase', 
              letterSpacing: '0.15em', 
              marginBottom: '16px',
              border: '1px solid rgba(200,16,46,0.15)',
            }}>
              Catalogue
            </span>
            <h2 style={{ 
              fontFamily: "'Montserrat', sans-serif", 
              fontWeight: 900, 
              fontSize: 'clamp(32px,4.5vw,56px)', 
              color: '#1a1a1a', 
              marginBottom: '16px',
              letterSpacing: '-0.02em',
            }}>
              Nos <span style={{ color: '#C8102E' }}>Programmes</span>
            </h2>
            <p style={{ 
              color: '#666', 
              fontSize: '17px', 
              maxWidth: '520px', 
              margin: '0 auto', 
              fontFamily: "'Inter', sans-serif",
              lineHeight: 1.7,
            }}>
              Trois parcours d&apos;excellence pour chaque étape de votre développement entrepreneurial.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
            {PROGRAMMES.map(p => (
              <Link key={p.title} href={p.href} style={{ textDecoration: 'none' }}>
                <div style={{ 
                  background: 'white', 
                  borderRadius: '16px', 
                  overflow: 'hidden', 
                  border: '1px solid rgba(0,0,0,0.06)', 
                  boxShadow: '0 4px 24px rgba(0,0,0,0.08)', 
                  transition: 'transform 0.3s, box-shadow 0.3s', 
                  cursor: 'pointer',
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-8px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 60px rgba(0,0,0,0.15)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(0,0,0,0.08)'; }}
                >
                  <div style={{ height: '240px', position: 'relative', overflow: 'hidden' }}>
                    <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 40%, transparent 70%)' }} />
                    <div style={{ height: '5px', position: 'absolute', top: 0, left: 0, right: 0, background: p.color }} />
                    <span style={{ 
                      position: 'absolute', 
                      top: '20px', 
                      left: '20px', 
                      background: p.color, 
                      color: 'white', 
                      padding: '6px 16px', 
                      borderRadius: '100px', 
                      fontSize: '11px', 
                      fontFamily: "'Montserrat', sans-serif", 
                      fontWeight: 700, 
                      letterSpacing: '0.1em', 
                      textTransform: 'uppercase',
                      boxShadow: '0 2px 12px rgba(0,0,0,0.2)',
                    }}>{p.tag}</span>
                    <h3 style={{ 
                      position: 'absolute', 
                      bottom: '20px', 
                      left: '20px', 
                      fontFamily: "'Montserrat', sans-serif", 
                      fontWeight: 900, 
                      fontSize: '26px', 
                      color: 'white', 
                      margin: 0,
                      textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                    }}>{p.title}</h3>
                  </div>
                  <div style={{ padding: '28px' }}>
                    <p style={{ 
                      color: '#555', 
                      fontSize: '15px', 
                      lineHeight: 1.7, 
                      marginBottom: '20px',
                      fontFamily: "'Inter', sans-serif",
                    }}>{p.desc}</p>
                    <span style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '8px', 
                      color: p.color, 
                      fontFamily: "'Montserrat', sans-serif", 
                      fontWeight: 700, 
                      fontSize: '13px', 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.08em',
                    }}>
                      En savoir plus
                      <IconArrowSmall />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/formations" style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              color: '#C8102E', 
              fontFamily: "'Montserrat', sans-serif", 
              fontWeight: 700, 
              fontSize: '13px', 
              textTransform: 'uppercase', 
              letterSpacing: '0.08em', 
              padding: '14px 32px', 
              border: '2px solid #C8102E', 
              borderRadius: '10px', 
              textDecoration: 'none',
              background: 'white',
              transition: 'all 0.3s',
            }}>
              Voir toutes les formations
            </Link>
            <Link href="/rejoindre-academie" style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              background: '#C8102E', 
              color: 'white', 
              fontFamily: "'Montserrat', sans-serif", 
              fontWeight: 700, 
              fontSize: '13px', 
              textTransform: 'uppercase', 
              letterSpacing: '0.08em', 
              padding: '14px 32px', 
              borderRadius: '10px', 
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(200,16,46,0.25)',
              transition: 'all 0.3s',
            }}>
              Rejoindre l&apos;Académie →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ POURQUOI A21 ══ */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,5vw,80px)', alignItems: 'center' }} className="why-grid">
            <div>
              <span style={{ display: 'inline-block', background: '#f0f6ff', color: '#1a6fc4', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '11px', padding: '4px 16px', borderRadius: '100px', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '16px' }}>
                Pourquoi A21 ?
              </span>
              <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: 'clamp(26px,3.5vw,42px)', color: '#1a1a1a', marginBottom: '20px', lineHeight: 1.15 }}>
                Un système qui construit des <span style={{ color: '#C8102E' }}>leaders</span>
              </h2>
              <p style={{ color: '#666', fontSize: '16px', lineHeight: 1.8, marginBottom: '28px', fontFamily: "'Inter', sans-serif" }}>
                Academy Twenty One est un système de support international axé sur le Marketing de Réseau. Nous sommes une académie spécialisée dans le développement personnel et le coaching en leadership.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { icon: <IconTarget />, title: 'Mission', text: 'Apporter de la vie dans la vie des autres à travers des valeurs, des rêves et l\'action.' },
                  { icon: <IconVision />, title: 'Vision', text: 'Faire de chaque membre un pionnier dans sa propre vie.' },
                  { icon: <IconImpact />, title: 'Impact', text: '75+ pays, 1M+ participants, 2000+ séminaires par an.' },
                ].map(item => (
                  <div key={item.title} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '20px', background: '#f7f8fa', borderRadius: '12px', border: '1px solid #e0e2e6' }}>
                    <span style={{ color: '#C8102E', flexShrink: 0, marginTop: '2px' }}>{item.icon}</span>
                    <div>
                      <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '15px', color: '#1a1a1a', marginBottom: '6px' }}>{item.title}</div>
                      <div style={{ fontSize: '14px', color: '#666', lineHeight: 1.6, fontFamily: "'Inter', sans-serif" }}>{item.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {[
                { num: '75+', label: 'Pays', sub: 'Couverture mondiale' },
                { num: '1M+', label: 'Participants', sub: 'Communauté active' },
                { num: '2000+', label: 'Séminaires', sub: 'Par an' },
                { num: '5', label: 'Continents', sub: 'Présence globale' },
              ].map(s => (
                <div key={s.label} style={{ background: 'white', border: '1px solid #e0e2e6', borderRadius: '12px', padding: '28px', textAlign: 'left', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: 'clamp(24px,3vw,32px)', color: '#C8102E', marginBottom: '8px', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '13px', color: '#1a1a1a', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>{s.label}</div>
                  <div style={{ fontSize: '12px', color: '#999', fontFamily: "'Inter', sans-serif" }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ VALEURS ══ */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: '#f7f8fa' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{ display: 'inline-block', background: '#fdf9e8', color: '#f0a500', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '11px', padding: '4px 16px', borderRadius: '100px', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '12px' }}>
              Notre ADN
            </span>
            <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: 'clamp(28px,4vw,48px)', color: '#1a1a1a' }}>
              Nos <span style={{ color: '#f0a500' }}>9 Valeurs</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px', marginBottom: '32px' }}>
            {VALUES.map((v, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '12px', padding: '28px', textAlign: 'left', border: '1px solid #e0e2e6', transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.06)'; (e.currentTarget as HTMLElement).style.borderColor = '#f0a50040'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; (e.currentTarget as HTMLElement).style.borderColor = '#e0e2e6'; }}
              >
                <div style={{ 
                  width: '36px', 
                  height: '36px', 
                  borderRadius: '8px', 
                  background: '#fdf9e8', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: '14px',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 900,
                  fontSize: '14px',
                  color: '#f0a500',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '15px', color: '#1a1a1a', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{v.label}</div>
                <div style={{ fontSize: '13px', color: '#888', lineHeight: 1.5, fontFamily: "'Inter', sans-serif" }}>{v.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link href="/nos-valeurs" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#f0a500', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '12px 28px', border: '2px solid #f0a500', borderRadius: '8px', textDecoration: 'none' }}>
              Découvrir nos valeurs →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ TÉMOIGNAGES ══ */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{ display: 'inline-block', background: '#e8f5e9', color: '#28a745', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '11px', padding: '4px 16px', borderRadius: '100px', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '12px' }}>
              Témoignages
            </span>
            <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: 'clamp(28px,4vw,48px)', color: '#1a1a1a' }}>
              Ils ont <span style={{ color: '#28a745' }}>transformé</span> leur vie
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px', marginBottom: '32px' }}>
            {[
              { nom: 'Marie K.', pays: 'France', grade: 'Executive Ambassador', texte: 'Academy 21 a complètement transformé ma vision des affaires. En moins d\'un an, j\'ai atteint ma liberté financière.' },
              { nom: 'Jean-Pierre M.', pays: 'Congo', grade: 'Senior Ambassador', texte: 'Les formations A21 m\'ont donné les outils pour transformer ma vie et celle de ma famille. Le système fonctionne.' },
              { nom: 'Aisha D.', pays: 'Sénégal', grade: 'Ambassador', texte: 'Ce qui m\'a le plus marquée c\'est la communauté. Des personnes bienveillantes qui s\'entraident pour réussir.' },
            ].map((t, i) => (
              <div key={i} style={{ background: '#f7f8fa', borderRadius: '12px', padding: '32px', border: '1px solid #e0e2e6', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '24px', right: '24px', color: 'rgba(200,16,46,0.08)' }}>
                  <IconQuote />
                </div>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                  {[1,2,3,4,5].map(star => (
                    <span key={star} style={{ color: '#f0a500' }}><IconStar /></span>
                  ))}
                </div>
                <p style={{ color: '#444', fontSize: '15px', lineHeight: 1.75, marginBottom: '24px', fontStyle: 'italic', fontFamily: "'Inter', sans-serif" }}>&ldquo;{t.texte}&rdquo;</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ 
                    width: '44px', 
                    height: '44px', 
                    borderRadius: '50%', 
                    background: '#1a1a1a', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    fontFamily: "'Montserrat', sans-serif", 
                    fontWeight: 700, 
                    fontSize: '15px', 
                    color: 'white', 
                    flexShrink: 0 
                  }}>
                    {t.nom[0]}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '14px', color: '#1a1a1a', marginBottom: '2px' }}>{t.nom}</div>
                    <div style={{ fontSize: '12px', color: '#888', fontFamily: "'Inter', sans-serif" }}>{t.pays} · {t.grade}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link href="/temoignages" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#28a745', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '12px 28px', border: '2px solid #28a745', borderRadius: '8px', textDecoration: 'none' }}>
              Voir tous les témoignages →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ CTA FINAL ══ */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'linear-gradient(135deg, #C8102E 0%, #8b0000 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />
        <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: 'clamp(28px,5vw,56px)', color: 'white', marginBottom: '16px', lineHeight: 1.1 }}>
            Reinvent Your Future
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'clamp(16px,1.8vw,18px)', maxWidth: '440px', margin: '0 auto 40px', lineHeight: 1.75, fontFamily: "'Inter', sans-serif" }}>
            Rejoignez des milliers d&apos;entrepreneurs qui transforment leur avenir avec Academy 21 France.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {user ? (
              <Link href="/dashboard" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'white', color: '#C8102E', fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '16px 36px', borderRadius: '8px', textDecoration: 'none' }}>
                Mon espace membre →
              </Link>
            ) : (
              <Link href="/rejoindre-academie" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'white', color: '#C8102E', fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '16px 36px', borderRadius: '8px', textDecoration: 'none' }}>
                Rejoindre l&apos;Académie →
              </Link>
            )}
            <Link href="/evenements" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'transparent', color: 'white', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '16px 36px', borderRadius: '8px', textDecoration: 'none', border: '2px solid rgba(255,255,255,0.3)' }}>
              Voir les événements
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse { 
          0%, 100% { opacity: 1; transform: scale(1); } 
          50% { opacity: 0.6; transform: scale(0.9); } 
        }
        @keyframes scroll { 
          0% { transform: translateX(0); } 
          100% { transform: translateX(-50%); } 
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
