'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

const NAV_ITEMS = [
  { label: 'Accueil', href: '/' },
  {
    label: 'À Propos',
    children: [
      { label: 'Qui Sommes-Nous ?', href: '/a-propos' },
      { label: 'Nos Valeurs', href: '/nos-valeurs' },
      { label: 'Le Fondateur', href: '/fondateur' },
    ],
  },
  {
    label: 'Activités',
    children: [
      { label: 'Nos Formations', href: '/formations' },
      { label: 'Événements à Venir', href: '/evenements' },
      { label: 'Business Show', href: '/rejoindre-academie/business-show' },
      { label: 'LeaderCamp', href: '/rejoindre-academie/leadercamp' },
      { label: 'A21 Training', href: '/rejoindre-academie/a21-training' },
    ],
  },
  {
    label: 'Communauté',
    children: [
      { label: 'Témoignages', href: '/temoignages' },
      { label: "Rejoindre l'Académie", href: '/rejoindre-academie' },
      { label: 'Mon Programme', href: '/dashboard' },
    ],
  },
  { label: 'Nos Universités', href: '/formations' },
];

export default function Navbar() {
  const { user, logout } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleLogout = () => { logout(); router.push('/'); setMobileOpen(false); };

  return (
    <>
      {/* BARRE INFO */}
      <div style={{ background: '#1a1a1a', borderBottom: '1px solid #2a2a2a', padding: '7px 0' }} className="info-bar">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>

          </div>
          <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
            {user ? (
              <>
                <Link href="/dashboard" style={{ color: '#aaa', fontSize: '11px', fontFamily: 'Montserrat,sans-serif', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Mon Espace</Link>
                <span style={{ color: '#444' }}>|</span>
                <button onClick={handleLogout} style={{ background: 'none', border: 'none', color: '#aaa', fontSize: '11px', fontFamily: 'Montserrat,sans-serif', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', cursor: 'pointer', padding: 0 }}>Déconnexion</button>
              </>
            ) : (
              <>
                <Link href="/login" style={{ color: '#aaa', fontSize: '11px', fontFamily: 'Montserrat,sans-serif', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Connexion</Link>
                <span style={{ color: '#444' }}>|</span>
                <Link href="/rejoindre-academie" style={{ color: '#C8102E', fontSize: '11px', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Rejoindre l&apos;Académie</Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* NAVBAR PRINCIPALE */}
      <nav ref={navRef} style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'white',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.10)' : '0 1px 0 #e0e2e6',
        transition: 'box-shadow 0.3s',
      }}>
        <div style={{ height: '3px', background: '#C8102E' }} />

        <div className="container" style={{ display: 'flex', alignItems: 'center', height: '72px', gap: '0' }}>

          {/* LOGO PROPRE */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '14px', flexShrink: 0, marginRight: '32px', textDecoration: 'none' }}>
            {/* Photo du logo sans delimitation */}
            <div style={{
              position: 'relative',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              overflow: 'hidden',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'scale(1.08)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
            }}
            >
              <img
                src="/logo-a21-france.png"
                alt="Academy 21 France"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            {/* Texte logo */}
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
              <span style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 900,
                fontSize: '19px',
                color: '#1a1a1a',
                letterSpacing: '-0.04em',
              }}>
                ACADEMY<span style={{ color: '#C8102E' }}>21</span>
              </span>
              <span style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                fontSize: '8.5px',
                color: '#bbb',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                marginTop: '1px',
              }}>
                France
              </span>
            </div>
          </Link>

          {/* LIENS DESKTOP */}
          <div style={{ display: 'flex', alignItems: 'stretch', flex: 1, height: '72px' }} className="desktop-nav">
            {NAV_ITEMS.map(item => (
              <div key={item.label} style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '4px',
                        height: '72px', padding: '0 14px',
                        background: 'none', border: 'none', cursor: 'pointer',
                        fontFamily: 'Montserrat,sans-serif', fontWeight: 700,
                        fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase',
                        color: openDropdown === item.label ? '#C8102E' : '#333',
                        borderBottom: openDropdown === item.label ? '3px solid #C8102E' : '3px solid transparent',
                        transition: 'all 0.15s', whiteSpace: 'nowrap',
                      }}
                    >
                      {item.label}
                      <span style={{ fontSize: '9px', transform: openDropdown === item.label ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s', marginTop: '1px', opacity: 0.6 }}>▼</span>
                    </button>

                    {openDropdown === item.label && (
                      <div style={{
                        position: 'absolute', top: '72px', left: 0,
                        background: 'white', border: '1px solid #e0e2e6',
                        borderTop: '3px solid #C8102E',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                        minWidth: '220px', zIndex: 200,
                        borderRadius: '0 0 6px 6px', overflow: 'hidden',
                      }}>
                        {item.children.map((child, ci) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setOpenDropdown(null)}
                            style={{
                              display: 'block', padding: '12px 20px',
                              fontFamily: 'Montserrat,sans-serif', fontWeight: 600,
                              fontSize: '12px', letterSpacing: '0.06em', textTransform: 'uppercase',
                              color: '#333',
                              borderBottom: ci < item.children!.length - 1 ? '1px solid #f0f1f3' : 'none',
                              transition: 'all 0.15s', background: 'white', textDecoration: 'none',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.background = '#fff5f5'; e.currentTarget.style.color = '#C8102E'; e.currentTarget.style.paddingLeft = '24px'; }}
                            onMouseLeave={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#333'; e.currentTarget.style.paddingLeft = '20px'; }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={item.href!} style={{
                    display: 'flex', alignItems: 'center',
                    height: '72px', padding: '0 14px',
                    fontFamily: 'Montserrat,sans-serif', fontWeight: 700,
                    fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase',
                    color: pathname === item.href ? '#C8102E' : '#333',
                    borderBottom: pathname === item.href ? '3px solid #C8102E' : '3px solid transparent',
                    transition: 'all 0.15s', textDecoration: 'none', whiteSpace: 'nowrap',
                  }}>
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA DESKTOP */}
          <div style={{ marginLeft: 'auto', flexShrink: 0 }} className="desktop-nav">
            {user ? (
              <Link href="/dashboard" style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                background: '#f7f8fa', border: '1.5px solid #e0e2e6',
                borderRadius: '4px', padding: '9px 18px',
                fontFamily: 'Montserrat,sans-serif', fontWeight: 700,
                fontSize: '12px', color: '#333', textTransform: 'uppercase',
                letterSpacing: '0.06em', textDecoration: 'none',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                {user.email.split('@')[0]}
              </Link>
            ) : (
              <Link href="/rejoindre-academie" style={{
                background: '#C8102E', color: 'white',
                fontFamily: 'Montserrat,sans-serif', fontWeight: 700,
                fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '11px 24px', borderRadius: '4px',
                display: 'inline-block', textDecoration: 'none',
              }}>
                Rejoindre l&apos;Académie
              </Link>
            )}
          </div>

          {/* BURGER MOBILE */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="burger-btn"
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '8px', marginLeft: 'auto', flexDirection: 'column', gap: '5px' }}
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block', width: '22px', height: '2px',
                background: '#1a1a1a', borderRadius: '2px', transition: 'all 0.2s',
                ...(mobileOpen && i === 0 ? { transform: 'rotate(45deg) translate(5px,5px)' } : {}),
                ...(mobileOpen && i === 1 ? { opacity: 0 } : {}),
                ...(mobileOpen && i === 2 ? { transform: 'rotate(-45deg) translate(5px,-5px)' } : {}),
              }} />
            ))}
          </button>
        </div>

        {/* MENU MOBILE */}
        {mobileOpen && (
          <div style={{ background: 'white', borderTop: '1px solid #e0e2e6', maxHeight: '80vh', overflowY: 'auto' }}>
            {NAV_ITEMS.map(item => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => setOpenMobileMenu(openMobileMenu === item.label ? null : item.label)}
                      style={{
                        width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        padding: '14px 24px', background: 'none', border: 'none', cursor: 'pointer',
                        borderBottom: '1px solid #f0f1f3',
                        fontFamily: 'Montserrat,sans-serif', fontWeight: 700,
                        fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em',
                        color: openMobileMenu === item.label ? '#C8102E' : '#333',
                        borderLeft: openMobileMenu === item.label ? '3px solid #C8102E' : '3px solid transparent',
                      }}
                    >
                      {item.label}
                      <span style={{ fontSize: '10px', opacity: 0.5, transform: openMobileMenu === item.label ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>▼</span>
                    </button>
                    {openMobileMenu === item.label && (
                      <div style={{ background: '#fafafa', borderBottom: '1px solid #f0f1f3' }}>
                        {item.children.map(child => (
                          <Link key={child.label} href={child.href} onClick={() => { setMobileOpen(false); setOpenMobileMenu(null); }} style={{
                            display: 'block', padding: '11px 24px 11px 36px',
                            fontFamily: 'Montserrat,sans-serif', fontWeight: 600,
                            fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.06em',
                            color: '#555', borderBottom: '1px solid #f0f1f3', textDecoration: 'none',
                          }}>
                            — {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={item.href!} onClick={() => setMobileOpen(false)} style={{
                    display: 'block', padding: '14px 24px',
                    borderBottom: '1px solid #f0f1f3',
                    fontFamily: 'Montserrat,sans-serif', fontWeight: 700,
                    fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em',
                    color: pathname === item.href ? '#C8102E' : '#333',
                    borderLeft: pathname === item.href ? '3px solid #C8102E' : '3px solid transparent',
                    textDecoration: 'none',
                  }}>
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div style={{ padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {user ? (
                <>
                  <Link href="/dashboard" onClick={() => setMobileOpen(false)} style={{ display: 'block', textAlign: 'center', padding: '12px', border: '1.5px solid #e0e2e6', borderRadius: '4px', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', color: '#333', textDecoration: 'none' }}>Mon Espace</Link>
                  <button onClick={handleLogout} style={{ padding: '12px', background: '#C8102E', border: 'none', borderRadius: '4px', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', color: 'white', cursor: 'pointer' }}>Déconnexion</button>
                </>
              ) : (
                <>
                  <Link href="/login" onClick={() => setMobileOpen(false)} style={{ display: 'block', textAlign: 'center', padding: '12px', border: '1.5px solid #e0e2e6', borderRadius: '4px', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', color: '#333', textDecoration: 'none' }}>Connexion</Link>
                  <Link href="/rejoindre-academie" onClick={() => setMobileOpen(false)} style={{ display: 'block', textAlign: 'center', padding: '12px', background: '#C8102E', borderRadius: '4px', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', color: 'white', textDecoration: 'none' }}>Rejoindre l&apos;Académie</Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .burger-btn { display: flex !important; }
        }
        @media (max-width: 640px) {
          .info-bar { display: none !important; }
        }
      `}</style>
    </>
  );
}