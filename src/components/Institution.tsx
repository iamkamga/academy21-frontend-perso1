import Link from 'next/link';

export const NAVY = '#13213a';
export const NAVY_2 = '#1b2c48';
export const BRONZE = '#a8865a';
export const RED = '#C8102E';
export const INK = '#5f6673';
export const LINE = '#e3e6eb';
export const FONT = "'Montserrat', sans-serif";

/** Petit sur-titre « ── LABEL ── » couleur bronze */
export function Eyebrow({ children, light, center }: { children: React.ReactNode; light?: boolean; center?: boolean }) {
  const c = light ? '#cdb48c' : BRONZE;
  return (
    <div style={{ display: 'flex', justifyContent: center ? 'center' : 'flex-start', marginBottom: '14px' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ width: '28px', height: '1px', background: c }} />
        <span style={{ color: c, fontFamily: FONT, fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.22em' }}>{children}</span>
        {center && <span style={{ width: '28px', height: '1px', background: c }} />}
      </div>
    </div>
  );
}

/** Titre de section numéroté : « 01 | Notre identité » */
export function SectionHead({ num, title, intro, center }: { num?: string; title: React.ReactNode; intro?: React.ReactNode; center?: boolean }) {
  return (
    <div style={{ textAlign: center ? 'center' : 'left', marginBottom: '28px', maxWidth: center ? '720px' : undefined, marginLeft: center ? 'auto' : undefined, marginRight: center ? 'auto' : undefined }}>
      {num && <Eyebrow center={center}>{num}</Eyebrow>}
      <h2 style={{ fontFamily: FONT, fontWeight: 900, fontSize: 'clamp(22px,3vw,34px)', color: NAVY, lineHeight: 1.2, letterSpacing: '-0.01em', marginBottom: intro ? '12px' : 0 }}>{title}</h2>
      {intro && <p style={{ color: INK, fontSize: '15px', lineHeight: 1.75, maxWidth: '760px', margin: center ? '0 auto' : 0 }}>{intro}</p>}
    </div>
  );
}

export function P({ children, last }: { children: React.ReactNode; last?: boolean }) {
  return <p style={{ color: INK, fontSize: '15px', lineHeight: 1.85, marginBottom: last ? 0 : '16px' }}>{children}</p>;
}

/** Grille de cartes titre + texte */
export function CardGrid({ items, cols = 3, accent = RED, numbered }: { items: { title: string; text: string }[]; cols?: number; accent?: string; numbered?: boolean }) {
  return (
    <div className={`inst-grid inst-grid-${cols}`} style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: '16px' }}>
      {items.map((it, i) => (
        <div key={it.title} className="inst-card" style={{ position: 'relative', background: 'white', border: `1px solid ${LINE}`, borderRadius: '12px', padding: '24px 24px 22px' }}>
          <span style={{ position: 'absolute', top: '-1px', left: '24px', width: '32px', height: '3px', background: accent, borderRadius: '0 0 2px 2px' }} />
          {numbered && <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: '22px', color: BRONZE, marginBottom: '10px' }}>{String(i + 1).padStart(2, '0')}</div>}
          <h3 style={{ fontFamily: FONT, fontWeight: 800, fontSize: '13.5px', color: NAVY, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px', lineHeight: 1.35 }}>{it.title}</h3>
          <p style={{ color: INK, fontSize: '14px', lineHeight: 1.65 }}>{it.text}</p>
        </div>
      ))}
    </div>
  );
}

/** Liste « LIBELLÉ — texte » dans une carte */
export function RowTable({ rows, labelWidth = 230 }: { rows: { title: string; text: React.ReactNode; href?: string }[]; labelWidth?: number }) {
  return (
    <div style={{ background: 'white', border: `1px solid ${LINE}`, borderRadius: '12px', overflow: 'hidden' }}>
      {rows.map((r, i) => (
        <div key={r.title} className="inst-row" style={{ display: 'grid', gridTemplateColumns: `${labelWidth}px 1fr`, gap: '20px', padding: '18px 24px', borderTop: i ? '1px solid #eef0f3' : 'none', alignItems: 'baseline' }}>
          <div style={{ fontFamily: FONT, fontWeight: 800, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: RED }}>{r.title}</div>
          <div style={{ color: INK, fontSize: '14.5px', lineHeight: 1.65 }}>
            {r.text}
            {r.href && (
              <Link href={r.href} style={{ marginLeft: '8px', color: NAVY, fontFamily: FONT, fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', whiteSpace: 'nowrap' }}>Voir →</Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export function Bullets({ items, cols = 1 }: { items: string[]; cols?: number }) {
  return (
    <div className={`inst-grid inst-grid-${cols}`} style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: '10px 28px' }}>
      {items.map(it => (
        <div key={it} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', color: INK, fontSize: '14.5px', lineHeight: 1.65 }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: RED, flexShrink: 0, marginTop: '9px' }} />
          {it}
        </div>
      ))}
    </div>
  );
}

export function Section({ children, bg = '#f6f7f9', id }: { children: React.ReactNode; bg?: string; id?: string }) {
  return (
    <section id={id} style={{ background: bg, padding: 'clamp(48px,6vw,80px) 0' }}>
      <div className="container">{children}</div>
    </section>
  );
}

/** Styles responsives partagés (à inclure une fois par page) */
export function InstitutionStyles() {
  return (
    <style>{`
      .inst-card { transition: box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease; }
      .inst-card:hover { box-shadow: 0 12px 32px rgba(19,33,58,0.07); transform: translateY(-2px); border-color: #d5dae2; }
      @media (max-width: 960px) {
        .inst-grid-4 { grid-template-columns: repeat(2, 1fr) !important; }
        .inst-grid-3 { grid-template-columns: repeat(2, 1fr) !important; }
      }
      @media (max-width: 640px) {
        .inst-grid-2, .inst-grid-3, .inst-grid-4 { grid-template-columns: 1fr !important; }
        .inst-row { grid-template-columns: 1fr !important; gap: 6px !important; }
        .inst-split { grid-template-columns: 1fr !important; }
      }
    `}</style>
  );
}
