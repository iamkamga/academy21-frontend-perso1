import Link from 'next/link';

export type CardIcon = 'ia' | 'bachelor' | 'mastere' | 'executive';

export type ProgrammeCardProps = {
  icon: CardIcon;
  bandLabel: string;
  badges: string[];
  price: string;          // grand prix affiché (ex. « 490 € » ou « Acompte 500 € »)
  priceMeta: string;      // texte à côté du prix
  title: string;
  description: string;
  tags: string[];
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  gradient?: string;
};

const stroke = 'rgba(255,255,255,0.3)';

function Icon({ kind }: { kind: CardIcon }) {
  switch (kind) {
    case 'ia':
      return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="8" y="14" width="32" height="24" rx="4" stroke={stroke} strokeWidth="2" />
          <rect x="14" y="8" width="20" height="8" rx="2" stroke={stroke} strokeWidth="2" />
          <circle cx="18" cy="26" r="3" fill="#C8102E" />
          <circle cx="30" cy="26" r="3" fill="#C8102E" />
          <path d="M20 32h8" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'bachelor': // mallette + courbe de performance
      return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="7" y="16" width="34" height="24" rx="4" stroke={stroke} strokeWidth="2" />
          <path d="M18 16v-4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" stroke={stroke} strokeWidth="2" />
          <path d="M13 33l7-7 5 4 9-9" stroke="#C8102E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="34" cy="21" r="2.5" fill="#C8102E" />
        </svg>
      );
    case 'mastere': // boussole stratégique
      return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="16" stroke={stroke} strokeWidth="2" />
          <circle cx="24" cy="24" r="10" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
          <path d="M24 11l4.5 13h-9z" fill="#C8102E" />
          <path d="M19.5 24h9L24 37z" fill="rgba(255,255,255,0.35)" />
          <circle cx="24" cy="24" r="2" fill="white" />
        </svg>
      );
    case 'executive': // colonnes de gouvernance + couronne
      return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M8 18l16-9 16 9" stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
          <path d="M13 21v13M20 21v13M28 21v13M35 21v13" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
          <path d="M8 38h32" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
          <path d="M18 6l3 3 3-4 3 4 3-3-1 6H19z" fill="#C8102E" />
        </svg>
      );
  }
}

export default function ProgrammeCard(c: ProgrammeCardProps) {
  return (
    <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e0e2e6', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
      {/* Bandeau */}
      <div style={{ height: '180px', background: c.gradient || 'linear-gradient(135deg, #0a0a0a 0%, #1a0010 50%, #0d0005 100%)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(200,16,46,0.25) 0%, transparent 65%)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 30px)' }} />

        <div className="pcard-center" style={{ textAlign: 'center', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}><Icon kind={c.icon} /></div>
          <div className="pcard-label" style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '11px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>{c.bandLabel}</div>
        </div>

        <div style={{ position: 'absolute', top: '14px', right: '14px', display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'flex-end', maxWidth: '70%' }}>
          {c.badges.map((b, i) => (
            <span key={b} style={i === 0
              ? { background: '#C8102E', color: 'white', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '10px', padding: '3px 10px', borderRadius: '3px', textTransform: 'uppercase', letterSpacing: '0.08em' }
              : { background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.2)', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '10px', padding: '3px 10px', borderRadius: '3px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {b}
            </span>
          ))}
        </div>

        <div style={{ position: 'absolute', bottom: '14px', left: '18px', right: '18px', display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <span style={{ background: 'white', color: '#C8102E', fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '13px', padding: '4px 12px', borderRadius: '4px' }}>{c.price}</span>
          <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '12px', fontFamily: 'Montserrat,sans-serif' }}>{c.priceMeta}</span>
        </div>
      </div>

      <style>{`@media (max-width: 600px) { .pcard-center { margin-top: -40px; } .pcard-label { display: none; } }`}</style>

      {/* Contenu */}
      <div style={{ padding: 'clamp(16px,3vw,28px)', display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '240px' }}>
          <h3 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(16px,2.5vw,20px)', marginBottom: '10px', color: '#1a1a1a', lineHeight: 1.3 }}>{c.title}</h3>
          <p style={{ color: '#777', fontSize: '14px', lineHeight: 1.7, marginBottom: '16px' }}>{c.description}</p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {c.tags.map(tag => (
              <span key={tag} style={{ background: '#f0f1f3', color: '#555', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '11px', padding: '4px 10px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{tag}</span>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flexShrink: 0, minWidth: '200px' }}>
          <Link href={c.primary.href} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: '#C8102E', color: 'white', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.06em', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none' }}>
            {c.primary.label}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
          <Link href={c.secondary.href} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px 24px', border: '1.5px solid #e0e2e6', borderRadius: '6px', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '12px', color: '#555', textTransform: 'uppercase', letterSpacing: '0.05em', textDecoration: 'none' }}>
            {c.secondary.label}
          </Link>
        </div>
      </div>
    </div>
  );
}
