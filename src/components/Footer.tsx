'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#1a1a1a', color: 'white', padding: '60px 0 28px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '48px' }}>
          <div>
            <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '22px', marginBottom: '12px' }}>
              <span style={{ color: '#C8102E' }}>ACADEMY</span> 21
              <div style={{ fontSize: '10px', letterSpacing: '0.2em', color: '#666', fontWeight: 400, marginTop: '2px' }}>FRANCE</div>
            </div>
            <p style={{ color: '#888', fontSize: '13px', lineHeight: 1.8 }}>Dream. Action. Success.<br />Reinvent Your Future.</p>
          </div>

          <div>
            <h4 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '12px', letterSpacing: '0.12em', color: '#C8102E', marginBottom: '20px', textTransform: 'uppercase' }}>Navigation</h4>
            {[{ href: '/', label: 'Accueil' }, { href: '/formations', label: 'Formations' }, { href: '/evenements', label: 'Événements' }, { href: '/dashboard', label: 'Mon espace' }].map(l => (
              <Link key={l.href} href={l.href} style={{ display: 'block', color: '#888', fontSize: '13px', marginBottom: '10px' }}>{l.label}</Link>
            ))}
          </div>

          <div>
            <h4 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '12px', letterSpacing: '0.12em', color: '#C8102E', marginBottom: '20px', textTransform: 'uppercase' }}>Légal</h4>
            {['CGV', 'Politique de confidentialité', 'Mentions légales'].map(t => (
              <span key={t} style={{ display: 'block', color: '#888', fontSize: '13px', marginBottom: '10px', cursor: 'pointer' }}>{t}</span>
            ))}
          </div>

          <div>
            <h4 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '12px', letterSpacing: '0.12em', color: '#C8102E', marginBottom: '20px', textTransform: 'uppercase' }}>Contact</h4>
            <div style={{ color: '#888', fontSize: '13px', lineHeight: 2.2 }}>
              <div>📍 Paris, France</div>
              <div>✉️ contact@academy21.fr</div>
              <div>📞 +33 7 51 57 16 62</div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #2a2a2a', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <span style={{ color: '#555', fontSize: '12px' }}>© {new Date().getFullYear()} Academy 21 France. Tous droits réservés.</span>
          <div style={{ height: '3px', width: '40px', background: '#C8102E', borderRadius: '2px' }} />
        </div>
      </div>
    </footer>
  );
}