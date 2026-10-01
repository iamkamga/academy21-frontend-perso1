'use client';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { useEffect, useState } from 'react';
import { TEMOIGNAGES, initiales } from '@/lib/temoignages';
import InstitutionalProfile from '@/components/InstitutionalProfile';

const STATS = [
  { num: '5', label: 'Pays' },
  { num: '1M+', label: 'Participants' },
  { num: '20+', label: 'Séminaires / an' },
  { num: '2', label: 'Continents' },
];

const VALUES = [
  { label: 'Foi', desc: 'La confiance en sa vocation et en sa capacité à progresser.' },
  { label: 'Charité', desc: 'Le sens du service et de la contribution au bien commun.' },
  { label: 'Persévérance', desc: 'La constance de l\'effort, condition de toute réussite durable.' },
  { label: 'Attitude Positive', desc: 'Une posture constructive face à la complexité et au changement.' },
  { label: 'Ambition', desc: 'L\'exigence de se fixer des objectifs élevés et de s\'y tenir.' },
  { label: 'Never Give Up', desc: 'La résilience : apprendre de l\'échec et poursuivre l\'effort.' },
  { label: 'Lifestyle', desc: 'Une hygiène de vie au service de l\'équilibre et de la performance.' },
  { label: 'Loyauté', desc: 'La fidélité aux engagements pris envers autrui et envers soi.' },
  { label: 'Rigueur', desc: 'La méthode et la discipline, fondements de l\'excellence.' },
];

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

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
                    Nos formations
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
                { num: '5', label: 'Pays', icon: <IconGlobe /> },
                { num: '1M+', label: 'Participants', icon: <IconUsers /> },
                { num: '20+', label: 'Séminaires', icon: <IconCalendar /> },
                { num: '2', label: 'Continents', icon: <IconMap /> },
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
                  { icon: <IconImpact />, title: 'Impact', text: '75+ pays, 1M+ participants, 20+ séminaires par an.' },
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
                { num: '2', label: 'Continents', sub: 'Présence globale' },
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

      {/* ══ QUI SOMMES-NOUS (profil institutionnel complet) ══ */}
      <InstitutionalProfile embedded />

      {/* ══ VALEURS ══ */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: '#f6f7f9' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <span style={{ width: '28px', height: '1px', background: '#a8865a' }} />
              <span style={{ color: '#a8865a', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.22em' }}>Notre ADN</span>
              <span style={{ width: '28px', height: '1px', background: '#a8865a' }} />
            </div>
            <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: 'clamp(28px,4vw,48px)', color: '#13213a', marginBottom: '12px' }}>
              Nos <span style={{ color: '#C8102E' }}>9 Valeurs</span>
            </h2>
            <p style={{ color: '#6b7280', fontSize: '15px', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto' }}>
              Les principes qui fondent notre pédagogie et guident chaque membre de la communauté Academy 21.
            </p>
          </div>
          <div className="values-home-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0', marginBottom: '36px', background: 'white', border: '1px solid #e3e6eb', borderRadius: '14px', overflow: 'hidden' }}>
            {VALUES.map((v, i) => (
              <div key={i} className="value-home-card" style={{ padding: '28px 30px', borderRight: '1px solid #eef0f3', borderBottom: '1px solid #eef0f3', display: 'flex', gap: '18px', alignItems: 'flex-start', transition: 'background 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#fafbfc'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'white'; }}
              >
                <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: '22px', color: '#a8865a', minWidth: '54px', lineHeight: 1.1, paddingTop: '1px' }}>
                  {ROMAN[i]}.
                </div>
                <div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '14px', color: '#13213a', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{v.label}</div>
                  <div style={{ fontSize: '13.5px', color: '#6b7280', lineHeight: 1.6 }}>{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link href="/nos-valeurs" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#13213a', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '12px 28px', border: '1.5px solid #13213a', borderRadius: '8px', textDecoration: 'none' }}>
              Découvrir nos valeurs →
            </Link>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .values-home-grid { grid-template-columns: 1fr 1fr !important; } }
          @media (max-width: 600px) { .values-home-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ══ TÉMOIGNAGES ══ */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <span style={{ width: '28px', height: '1px', background: '#a8865a' }} />
              <span style={{ color: '#a8865a', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.22em' }}>Témoignages</span>
              <span style={{ width: '28px', height: '1px', background: '#a8865a' }} />
            </div>
            <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: 'clamp(28px,4vw,48px)', color: '#13213a', marginBottom: '12px' }}>
              La parole à notre <span style={{ color: '#C8102E' }}>communauté</span>
            </h2>
            <p style={{ color: '#6b7280', fontSize: '15px', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto' }}>
              Des parcours singuliers, une même exigence : apprendre, progresser et transmettre.
            </p>
          </div>

          {(() => {
            const featured = TEMOIGNAGES.find(t => t.featured) ?? TEMOIGNAGES[0];
            const others = TEMOIGNAGES.filter(t => t !== featured).slice(0, 2);
            return (
              <div className="temo-home-grid" style={{ display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: '20px', marginBottom: '36px' }}>
                {/* Témoignage principal */}
                <figure style={{ margin: 0, background: 'linear-gradient(135deg, #0e1a2e 0%, #1b2c48 100%)', borderRadius: '16px', padding: 'clamp(28px,4vw,48px)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '340px' }}>
                  <div aria-hidden="true" style={{ position: 'absolute', top: '-30px', right: '20px', fontFamily: 'Georgia, serif', fontSize: '220px', lineHeight: 1, color: 'rgba(205,180,140,0.12)' }}>&ldquo;</div>
                  <blockquote style={{ margin: 0, position: 'relative', fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: 'italic', fontSize: 'clamp(19px,2.3vw,26px)', lineHeight: 1.55, color: 'white' }}>
                    &ldquo;{featured.texte.fr}&rdquo;
                  </blockquote>
                  <figcaption style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '32px', position: 'relative' }}>
                    <div style={{ width: '52px', height: '52px', borderRadius: '50%', border: '1.5px solid #cdb48c', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Georgia, serif', fontSize: '18px', color: '#cdb48c', flexShrink: 0 }}>{initiales(featured.nom)}</div>
                    <div>
                      <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '15px', color: 'white' }}>{featured.nom}</div>
                      <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>{featured.drapeau} {featured.pays} · {featured.role}</div>
                    </div>
                  </figcaption>
                </figure>

                {/* Témoignages secondaires */}
                <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '20px' }}>
                  {others.map(t => (
                    <figure key={t.nom} style={{ margin: 0, background: '#f6f7f9', border: '1px solid #e3e6eb', borderRadius: '16px', padding: '26px 28px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <span style={{ position: 'absolute', top: '-1px', left: '28px', width: '36px', height: '3px', background: '#C8102E', borderRadius: '0 0 2px 2px' }} />
                      <blockquote style={{ margin: 0, fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: 'italic', fontSize: '16px', lineHeight: 1.65, color: '#2b3445' }}>&ldquo;{t.texte.fr}&rdquo;</blockquote>
                      <figcaption style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '18px' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#13213a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Georgia, serif', fontSize: '14px', color: '#cdb48c', flexShrink: 0 }}>{initiales(t.nom)}</div>
                        <div>
                          <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '14px', color: '#13213a' }}>{t.nom}</div>
                          <div style={{ fontSize: '12.5px', color: '#6b7280' }}>{t.drapeau} {t.pays} · {t.role}</div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            );
          })()}

          <div style={{ textAlign: 'center' }}>
            <Link href="/temoignages" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#13213a', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '12px 28px', border: '1.5px solid #13213a', borderRadius: '8px', textDecoration: 'none' }}>
              Voir tous les témoignages →
            </Link>
          </div>
        </div>
        <style>{`@media (max-width: 860px) { .temo-home-grid { grid-template-columns: 1fr !important; } }`}</style>
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
