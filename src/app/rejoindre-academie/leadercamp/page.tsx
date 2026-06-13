'use client';
import Link from 'next/link';
import { useState } from 'react';

const TRANSLATIONS = {
  fr: {
    back: '← Retour',
    tag: 'Intensif',
    title: 'LeaderCamp',
    subtitle: 'Un événement intensif de plusieurs jours pour décupler vos performances en leadership et emmener votre équipe vers le succès.',
    articles: 'Dernières éditions',
    readMore: 'Lire la suite →',
    cta: 'Rejoindre l\'Académie',
    ctaDesc: 'Participez au prochain LeaderCamp et transformez votre leadership.',
    postuler: 'Déposer ma candidature →',
    comingSoon: 'Prochaine édition bientôt annoncée',
  },
  en: {
    back: '← Back',
    tag: 'Intensive',
    title: 'LeaderCamp',
    subtitle: 'An intensive multi-day event to multiply your leadership performance and lead your team to success.',
    articles: 'Latest Editions',
    readMore: 'Read more →',
    cta: 'Join the Academy',
    ctaDesc: 'Participate in the next LeaderCamp and transform your leadership.',
    postuler: 'Apply now →',
    comingSoon: 'Next edition coming soon',
  },
};

const ARTICLES = [
  {
    title: 'LEADERCAMP — BATCH 2',
    date: '11 Sep, 2025',
    img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80',
    excerpt: 'Une expérience transformatrice pour les leaders d\'Academy Twenty One. Plusieurs jours d\'immersion totale dans le leadership et l\'excellence.',
    link: 'https://academytwentyone.com/blog/66/lerder-camp-batch-2-5087549',
  },
  {
    title: 'LEADERCAMP — BATCH 1',
    date: '2024',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
    excerpt: 'La première édition du LeaderCamp — un événement qui a marqué des centaines de leaders dans leur parcours entrepreneurial.',
    link: 'https://academytwentyone.com/leadercamp/articles',
  },
];

const POINTS = {
  fr: [
    'Leadership et management d\'équipe',
    'Prise de parole en public',
    'Gestion de la performance',
    'Stratégies de duplication',
    'Développement du mindset de leader',
    'Réseau et communauté internationale',
  ],
  en: [
    'Team leadership and management',
    'Public speaking',
    'Performance management',
    'Duplication strategies',
    'Leader mindset development',
    'International network and community',
  ],
};

export default function LeaderCampPage() {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');
  const t = TRANSLATIONS[lang];

  return (
    <div style={{ minHeight: '100vh', background: '#f7f8fa' }}>

      {/* Header */}
      <div style={{ background: 'white', borderBottom: '3px solid #f0a500', padding: 'clamp(24px,4vw,40px) 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
            <Link href="/rejoindre-academie" style={{ color: '#aaa', fontSize: '13px', fontFamily: 'Montserrat,sans-serif', fontWeight: 600, textDecoration: 'none' }}>
              {t.back}
            </Link>
            <div style={{ display: 'flex', gap: '8px' }}>
              {(['fr', 'en'] as const).map(l => (
                <button key={l} onClick={() => setLang(l)} style={{ padding: '4px 14px', borderRadius: '4px', border: 'none', cursor: 'pointer', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '12px', background: lang === l ? '#f0a500' : '#f0f1f3', color: lang === l ? 'white' : '#555', textTransform: 'uppercase' }}>
                  {l}
                </button>
              ))}
            </div>
          </div>
          <span style={{ background: '#f0a500', color: 'white', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '10px', padding: '3px 10px', borderRadius: '3px', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'inline-block', marginBottom: '12px' }}>
            {t.tag}
          </span>
          <h1 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(28px,5vw,52px)', color: '#1a1a1a', marginBottom: '10px' }}>
            {t.title}
          </h1>
          <p style={{ color: '#888', fontSize: '15px', maxWidth: '600px', lineHeight: 1.7 }}>{t.subtitle}</p>
        </div>
      </div>

      <div className="container" style={{ padding: 'clamp(32px,5vw,56px) 24px' }}>

        {/* Ce que vous apprenez */}
        <div style={{ background: 'white', borderRadius: '12px', border: '1px solid #e0e2e6', borderLeft: '4px solid #f0a500', padding: '28px', marginBottom: '32px' }}>
          <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '18px', color: '#1a1a1a', marginBottom: '20px' }}>
            {lang === 'fr' ? 'Ce que vous apprenez' : 'What you learn'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '12px' }}>
            {POINTS[lang].map((point, i) => (
              <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#f0a500', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5 9-9"/></svg>
                </div>
                <span style={{ fontSize: '13px', color: '#555', lineHeight: 1.6 }}>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Articles */}
        <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(18px,2.5vw,26px)', color: '#1a1a1a', marginBottom: '24px' }}>
          {t.articles}
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px', marginBottom: '56px' }}>
          {ARTICLES.map(article => (
            <a key={article.title} href={article.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'white', borderRadius: '10px', overflow: 'hidden', border: '1px solid #e0e2e6', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', cursor: 'pointer' }}>
                <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                  <img src={article.img} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)' }} />
                  <div style={{ position: 'absolute', bottom: '12px', left: '14px', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '11px', color: 'rgba(255,255,255,0.8)' }}>
                    📅 {article.date}
                  </div>
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '15px', color: '#1a1a1a', marginBottom: '8px', lineHeight: 1.3 }}>{article.title}</h3>
                  <p style={{ color: '#777', fontSize: '13px', lineHeight: 1.65, marginBottom: '14px' }}>{article.excerpt}</p>
                  <span style={{ color: '#f0a500', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{t.readMore}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, #1a0f00 0%, #2d1a00 100%)', borderRadius: '12px', padding: 'clamp(32px,5vw,56px)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(20px,3.5vw,34px)', color: 'white', marginBottom: '12px' }}>{t.cta}</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '15px', marginBottom: '28px' }}>{t.ctaDesc}</p>
          <Link href="/candidature" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#f0a500', color: 'white', fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.06em', padding: '16px 36px', borderRadius: '8px', textDecoration: 'none' }}>
            {t.postuler}
          </Link>
        </div>
      </div>
    </div>
  );
}