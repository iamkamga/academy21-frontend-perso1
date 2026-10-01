import Link from 'next/link';
import ProgrammeCard, { ProgrammeCardProps } from '@/components/ProgrammeCard';

const RED = '#C8102E';
const COLORS = ['#C8102E', '#1a6fc4', '#f0a500', '#28a745', '#7b2d8b', '#0e8a8a'];

export type Programme = {
  category: string;                 // ex. "Bachelors"
  tags: string[];                   // badges sous le fil d'Ariane
  titleStart: string;               // partie noire du titre
  titleAccent: string;              // partie rouge du titre
  subtitle: string;
  keyInfos: { label: string; val: string }[];
  motto?: string;
  intro: { title: string; paragraphs: string[] };
  publics?: { title: string; text: string }[];
  dimensions: { title: string; items: { title: string; text: string }[] };
  admission: { title: string; text: string }[];
  admissionNote?: string;
  curriculum: {
    title: string;
    intro?: string;
    blocks: {
      name: string;
      total?: string;
      rows: { label: string; hours: string; detail?: string; deliverable?: string }[];
    }[];
  };
  objectives?: { title: string; items: string[] };
  pedagogy: { title: string; intro?: string; items: string[] };
  evaluation: { title: string; text?: string; rows?: { title: string; text: string }[] };
  certification?: { title: string; text: string; rows?: { title: string; text: string }[] };
  extraCards?: { title: string; text: string }[];
  outcomes: { title: string; rows?: { title: string; text: string }[]; text?: string };
  pathway?: { title: string; rows: { level: string; role: string; text: string }[] };
  legalNote?: string;
  cta: { title: string; text: string; label: string; href: string; footnote: string };
  card?: ProgrammeCardProps;
};

const h2Style: React.CSSProperties = {
  fontFamily: 'Montserrat,sans-serif', fontWeight: 900,
  fontSize: 'clamp(16px,2.5vw,22px)', marginBottom: '16px', color: '#1a1a1a',
};
const cardStyle: React.CSSProperties = {
  background: 'white', border: '1px solid #e0e2e6', borderRadius: '8px',
  padding: 'clamp(20px,4vw,32px)', marginBottom: '24px',
};
const labelStyle: React.CSSProperties = {
  fontSize: '10px', fontFamily: 'Montserrat,sans-serif', fontWeight: 700,
  letterSpacing: '0.1em', textTransform: 'uppercase', color: '#aaa',
};
const pStyle: React.CSSProperties = { color: '#555', fontSize: '14px', lineHeight: 1.75 };

function Check() {
  return (
    <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: RED, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5 9-9" /></svg>
    </div>
  );
}

function RowList({ rows }: { rows: { title: string; text: string }[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {rows.map((r, i) => (
        <div key={r.title} className="prog-row" style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '16px', padding: '14px 0', borderTop: i ? '1px solid #f0f1f3' : 'none' }}>
          <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.06em', color: RED }}>{r.title}</div>
          <div style={{ ...pStyle, lineHeight: 1.6 }}>{r.text}</div>
        </div>
      ))}
    </div>
  );
}

export default function ProgrammePage({ p }: { p: Programme }) {
  return (
    <div style={{ minHeight: '100vh', background: '#f7f8fa' }}>

      {/* HERO */}
      <div style={{ background: 'white', borderBottom: '3px solid ' + RED, padding: '32px 0 28px' }}>
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <div style={{ width: '32px', height: '3px', background: RED, borderRadius: '2px' }} />
            <span style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: RED }}>
              Programmes · {p.category}
            </span>
          </div>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
            {p.tags.map((t, i) => (
              <span key={t} style={{
                background: i === 0 ? RED : '#f3f4f6', color: i === 0 ? 'white' : '#444',
                fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '10px',
                padding: '3px 10px', borderRadius: '3px', textTransform: 'uppercase', letterSpacing: '0.08em',
              }}>{t}</span>
            ))}
          </div>

          <h1 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(24px, 4vw, 44px)', color: '#1a1a1a', lineHeight: 1.15, marginBottom: '14px', maxWidth: '820px' }}>
            {p.titleStart}{' '}<span style={{ color: RED }}>{p.titleAccent}</span>
          </h1>

          <p style={{ color: '#666', fontSize: '15px', lineHeight: 1.75, maxWidth: '640px', marginBottom: '24px' }}>{p.subtitle}</p>

          <div style={{ display: 'flex', flexWrap: 'wrap', background: '#f7f8fa', border: '1px solid #e0e2e6', borderRadius: '8px', overflow: 'hidden' }}>
            {p.keyInfos.map((info, i) => (
              <div key={info.label} style={{ flex: '1 1 150px', padding: '14px 20px', borderRight: i < p.keyInfos.length - 1 ? '1px solid #e0e2e6' : 'none' }}>
                <div style={{ ...labelStyle, letterSpacing: '0.12em', fontWeight: 600, marginBottom: '4px' }}>{info.label}</div>
                <div style={{ color: '#1a1a1a', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '13px', lineHeight: 1.4 }}>{info.val}</div>
              </div>
            ))}
          </div>

          {p.motto && (
            <div style={{ marginTop: '18px', fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '12px', letterSpacing: '0.2em', color: RED }}>{p.motto}</div>
          )}
        </div>
      </div>

      <div className="container" style={{ padding: 'clamp(24px, 4vw, 48px) 24px' }}>

        {/* Présentation */}
        <div style={{ ...cardStyle, borderTop: '4px solid ' + RED }}>
          <h2 style={h2Style}>{p.intro.title}</h2>
          {p.intro.paragraphs.map((t, i) => (
            <p key={i} style={{ ...pStyle, marginBottom: i < p.intro.paragraphs.length - 1 ? '12px' : 0 }}>{t}</p>
          ))}
        </div>

        {/* Publics */}
        {p.publics && (
          <>
            <h2 style={h2Style}>À qui s&apos;adresse ce programme ?</h2>
            <div className="prog-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '24px' }}>
              {p.publics.map(pub => (
                <div key={pub.title} style={{ background: 'white', border: '1px solid #e0e2e6', borderRadius: '8px', padding: '18px 20px' }}>
                  <h3 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '13px', marginBottom: '8px', color: '#1a1a1a', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{pub.title}</h3>
                  <p style={{ ...pStyle, fontSize: '13px', lineHeight: 1.6 }}>{pub.text}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Dimensions */}
        <h2 style={h2Style}>{p.dimensions.title}</h2>
        <div className="prog-grid-3" style={{ display: 'grid', gridTemplateColumns: `repeat(${p.dimensions.items.length === 4 ? 2 : 3}, 1fr)`, gap: '14px', marginBottom: '24px' }}>
          {p.dimensions.items.map((d, i) => {
            const c = COLORS[i % COLORS.length];
            return (
              <div key={d.title} style={{ background: 'white', border: '1px solid #e0e2e6', borderLeft: '4px solid ' + c, borderRadius: '8px', padding: '18px 20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: c, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '11px', flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}</div>
                  <h3 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '13px', color: '#1a1a1a', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{d.title}</h3>
                </div>
                <p style={{ ...pStyle, fontSize: '13px', lineHeight: 1.6 }}>{d.text}</p>
              </div>
            );
          })}
        </div>

        {/* Objectifs */}
        {p.objectives && (
          <div style={{ ...cardStyle, borderTop: '4px solid ' + RED }}>
            <h2 style={h2Style}>{p.objectives.title}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {p.objectives.items.map((o, i) => (
                <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <Check /><p style={{ ...pStyle, lineHeight: 1.65 }}>{o}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Programme détaillé */}
        <h2 style={h2Style}>{p.curriculum.title}</h2>
        {p.curriculum.intro && <p style={{ ...pStyle, marginBottom: '16px', marginTop: '-6px' }}>{p.curriculum.intro}</p>}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
          {p.curriculum.blocks.map((b, bi) => {
            const c = COLORS[bi % COLORS.length];
            return (
              <div key={b.name} style={{ background: 'white', border: '1px solid #e0e2e6', borderLeft: '4px solid ' + c, borderRadius: '8px', overflow: 'hidden' }}>
                <div style={{ padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px', flexWrap: 'wrap', borderBottom: '1px solid #f0f1f3' }}>
                  <h3 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: 'clamp(13px,1.8vw,15px)', color: '#1a1a1a' }}>{b.name}</h3>
                  {b.total && (
                    <span style={{ background: c + '15', color: c, border: '1px solid ' + c + '35', padding: '2px 12px', borderRadius: '20px', fontSize: '11px', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, whiteSpace: 'nowrap' }}>{b.total}</span>
                  )}
                </div>
                {b.rows.map((r, ri) => (
                  <div key={r.label} style={{ padding: '12px 20px', borderTop: ri ? '1px solid #f5f5f7' : 'none', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '13px', color: '#1a1a1a', lineHeight: 1.4 }}>{r.label}</div>
                      {r.detail && <div style={{ fontSize: '13px', color: '#777', lineHeight: 1.55, marginTop: '3px' }}>{r.detail}</div>}
                      {r.deliverable && (
                        <div style={{ fontSize: '13px', color: '#555', marginTop: '6px' }}>
                          <span style={labelStyle}>Atelier — </span>{r.deliverable}
                        </div>
                      )}
                    </div>
                    <span style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '12px', color: c, whiteSpace: 'nowrap', paddingTop: '1px' }}>{r.hours}</span>
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        {/* Admission */}
        <div style={cardStyle}>
          <h2 style={h2Style}>Conditions d&apos;accès</h2>
          <RowList rows={p.admission} />
          {p.admissionNote && <p style={{ fontSize: '12px', color: '#888', lineHeight: 1.6, marginTop: '12px', fontStyle: 'italic' }}>{p.admissionNote}</p>}
        </div>

        {/* Pédagogie & évaluation */}
        <div className="prog-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '24px' }}>
          <div style={{ background: 'white', border: '1px solid #e0e2e6', borderRadius: '8px', padding: '20px 22px' }}>
            <h3 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '15px', marginBottom: '12px', color: '#1a1a1a' }}>{p.pedagogy.title}</h3>
            {p.pedagogy.intro && <p style={{ ...pStyle, fontSize: '13px', lineHeight: 1.6, marginBottom: '10px' }}>{p.pedagogy.intro}</p>}
            {p.pedagogy.items.map((it, i) => (
              <div key={i} style={{ display: 'flex', gap: '8px', marginBottom: '7px', fontSize: '13px', color: '#666', lineHeight: 1.5 }}>
                <span style={{ color: RED, flexShrink: 0 }}>•</span> {it}
              </div>
            ))}
          </div>
          <div style={{ background: 'white', border: '1px solid #e0e2e6', borderRadius: '8px', padding: '20px 22px' }}>
            <h3 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '15px', marginBottom: '12px', color: '#1a1a1a' }}>{p.evaluation.title}</h3>
            {p.evaluation.text && <p style={{ ...pStyle, fontSize: '13px', lineHeight: 1.65, marginBottom: p.evaluation.rows ? '10px' : 0 }}>{p.evaluation.text}</p>}
            {p.evaluation.rows?.map(r => (
              <div key={r.title} style={{ marginBottom: '9px', fontSize: '13px', lineHeight: 1.5 }}>
                <span style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 700, color: '#1a1a1a' }}>{r.title} : </span>
                <span style={{ color: '#666' }}>{r.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cartes supplémentaires */}
        {p.extraCards && (
          <div className="prog-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '24px' }}>
            {p.extraCards.map(c => (
              <div key={c.title} style={{ background: 'white', border: '1px solid #e0e2e6', borderRadius: '8px', padding: '20px 22px' }}>
                <h3 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '15px', marginBottom: '10px', color: '#1a1a1a' }}>{c.title}</h3>
                <p style={{ ...pStyle, fontSize: '13px', lineHeight: 1.65 }}>{c.text}</p>
              </div>
            ))}
          </div>
        )}

        {/* Certification */}
        {p.certification && (
          <div style={{ ...cardStyle, borderTop: '4px solid #1a6fc4' }}>
            <h2 style={h2Style}>{p.certification.title}</h2>
            <p style={{ ...pStyle, marginBottom: p.certification.rows ? '8px' : 0 }}>{p.certification.text}</p>
            {p.certification.rows && <RowList rows={p.certification.rows} />}
          </div>
        )}

        {/* Débouchés */}
        <div style={cardStyle}>
          <h2 style={h2Style}>{p.outcomes.title}</h2>
          {p.outcomes.text && <p style={pStyle}>{p.outcomes.text}</p>}
          {p.outcomes.rows && <RowList rows={p.outcomes.rows} />}
        </div>

        {/* Parcours */}
        {p.pathway && (
          <>
            <h2 style={h2Style}>{p.pathway.title}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px', marginBottom: '24px' }}>
              {p.pathway.rows.map((r, i) => (
                <div key={r.level} style={{ background: i === p.pathway!.rows.length - 1 ? '#1a1a1a' : 'white', border: '1px solid #e0e2e6', borderRadius: '8px', padding: '18px 20px' }}>
                  <div style={{ ...labelStyle, color: RED, marginBottom: '6px' }}>{r.level}</div>
                  <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '14px', color: i === p.pathway!.rows.length - 1 ? 'white' : '#1a1a1a', marginBottom: '6px' }}>{r.role}</div>
                  <p style={{ fontSize: '13px', lineHeight: 1.55, color: i === p.pathway!.rows.length - 1 ? 'rgba(255,255,255,0.7)' : '#666' }}>{r.text}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {p.legalNote && (
          <p style={{ fontSize: '11px', color: '#999', lineHeight: 1.6, maxWidth: '900px' }}>{p.legalNote}</p>
        )}
      </div>

      {/* CTA */}
      <div style={{ background: 'linear-gradient(135deg, #1a0005 0%, #2d0008 100%)', padding: 'clamp(40px,6vw,80px) 24px', textAlign: 'center', marginTop: '24px' }}>
        <div className="container" id="inscription">
          <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(22px,4vw,38px)', color: 'white', marginBottom: '16px' }}>{p.cta.title}</div>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', maxWidth: '520px', margin: '0 auto 32px' }}>{p.cta.text}</p>
          {p.card ? (
            <div style={{ maxWidth: '1000px', margin: '0 auto 20px', textAlign: 'left' }}>
              <ProgrammeCard {...p.card} />
            </div>
          ) : (
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <Link href={p.cta.href} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: RED, color: 'white', fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '15px', padding: '16px 36px', borderRadius: '8px', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              {p.cta.label}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
          )}
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '12px' }}>{p.cta.footnote}</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .prog-grid-3 { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 700px) {
          .prog-grid-2, .prog-grid-3 { grid-template-columns: 1fr !important; }
          .prog-row { grid-template-columns: 1fr !important; gap: 4px !important; }
        }
      `}</style>
    </div>
  );
}
