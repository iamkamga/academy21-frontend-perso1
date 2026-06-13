'use client';
import Link from 'next/link';
import { useState } from 'react';

const TRANSLATIONS = {
  fr: {
    back: '← Retour',
    tag: 'Formation',
    title: 'A21 Training',
    subtitle: 'La formation fondamentale d\'Academy Twenty One pour développer votre mindset, vos compétences business et votre leadership.',
    articles: 'Dernières formations',
    readMore: 'Lire la suite →',
    cta: 'Rejoindre l\'Académie',
    ctaDesc: 'Participez à la prochaine session A21 Training près de chez vous.',
    postuler: 'Déposer ma candidature →',
  },
  en: {
    back: '← Back',
    tag: 'Training',
    title: 'A21 Training',
    subtitle: 'The fundamental training of Academy Twenty One to develop your mindset, business skills and leadership.',
    articles: 'Latest Trainings',
    readMore: 'Read more →',
    cta: 'Join the Academy',
    ctaDesc: 'Participate in the next A21 Training session near you.',
    postuler: 'Apply now →',
  },
};

const ARTICLES = [
  {
    title: 'LAST A21 TRAINING OF 2025',
    date: '30 Dec, 2025',
    img: 'https://academytwentyone.com/storage/articles/25f279847be2a977a3a8a2d0b8887b6e.jpg',
    excerpt: 'Each of us carries, in our own way, burdens, wounds, and scars. Yet, when closely examined, these afflictions invariably contain the seeds of rebirth.',
    link: 'https://academytwentyone.com/blog/69/last-a21-training-of-2025-6843906',
  },
  {
    title: 'A21 TRAINING IN PARIS',
    date: '31 May, 2025',
    img: 'https://academytwentyone.com/storage/articles/4f88c3e04eec64cc1286f5c2b491c4af.jpg',
    excerpt: 'Every dream carries within it the seeds of its own realisation.',
    link: 'https://academytwentyone.com/blog/64/a21-training-in-paris',
  },
  {
    title: 'A21 TRAINING IN KINSHASA',
    date: '22 Oct, 2025',
    img: 'https://academytwentyone.com/storage/articles/f1973215408a9074cfa61c2078db1026.jpg',
    excerpt: 'To conceive and visualize a project is to complete half the journey toward its accomplishment.',
    link: 'https://academytwentyone.com/blog/67/a21-training-in-kinshasa',
  },
  {
    title: 'MASTERCLASS IN DOUALA',
    date: '14 Jun, 2025',
    img: 'https://academytwentyone.com/storage/articles/a8fd8b74be2ff58552730350683ee185.jpg',
    excerpt: 'Inner peace begins when we have the courage to let go of what we cannot change.',
    link: 'https://academytwentyone.com/blog/65/masterclass-in-douala-9236237',
  },
  {
    title: 'A21 TRAINING IN COTONOU',
    date: '22 Nov, 2024',
    img: 'https://academytwentyone.com/storage/articles/619327c779b3cd53d171004b461ea4f6.jpg',
    excerpt: 'THE FUTURE REWARDS SUCCESS TO THOSE WHO HAVE THE COURAGE TO SOW THE SEEDS OF PATIENCE AND FAITH.',
    link: 'https://academytwentyone.com/blog/59/a21-training-in-cotonou-7159758',
  },
  {
    title: 'A21 TRAINING IN LOMÉ',
    date: '08 Nov, 2024',
    img: 'https://academytwentyone.com/storage/articles/e9f5bf42c74fba955f680ce857772270.jpg',
    excerpt: 'LIFE IS ALL ABOUT FINDING SOLUTIONS TO EVERYDAY PROBLEMS.',
    link: 'https://academytwentyone.com/blog/54/a21-training-in-lome-3742794',
  },
];

export default function A21TrainingPage() {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');
  const t = TRANSLATIONS[lang];

  return (
    <div style={{ minHeight: '100vh', background: '#f7f8fa' }}>

      {/* Header */}
      <div style={{ background: 'white', borderBottom: '3px solid #C8102E', padding: 'clamp(24px,4vw,40px) 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
            <Link href="/rejoindre-academie" style={{ color: '#aaa', fontSize: '13px', fontFamily: 'Montserrat,sans-serif', fontWeight: 600, textDecoration: 'none' }}>
              {t.back}
            </Link>
            {/* Sélecteur de langue */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {(['fr', 'en'] as const).map(l => (
                <button key={l} onClick={() => setLang(l)} style={{
                  padding: '4px 14px', borderRadius: '4px', border: 'none', cursor: 'pointer',
                  fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '12px',
                  background: lang === l ? '#C8102E' : '#f0f1f3',
                  color: lang === l ? 'white' : '#555',
                  textTransform: 'uppercase',
                }}>
                  {l}
                </button>
              ))}
            </div>
          </div>
          <span style={{ background: '#C8102E', color: 'white', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '10px', padding: '3px 10px', borderRadius: '3px', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'inline-block', marginBottom: '12px' }}>
            {t.tag}
          </span>
          <h1 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(28px,5vw,52px)', color: '#1a1a1a', marginBottom: '10px' }}>
            {t.title}
          </h1>
          <p style={{ color: '#888', fontSize: '15px', maxWidth: '600px', lineHeight: 1.7 }}>{t.subtitle}</p>
        </div>
      </div>

      <div className="container" style={{ padding: 'clamp(32px,5vw,56px) 24px' }}>

        {/* Grille articles */}
        <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(18px,2.5vw,26px)', color: '#1a1a1a', marginBottom: '24px' }}>
          {t.articles}
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px', marginBottom: '56px' }}>
          {ARTICLES.map(article => (
            <a key={article.title} href={article.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'white', borderRadius: '10px', overflow: 'hidden', border: '1px solid #e0e2e6', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'pointer' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)'; }}
              >
                <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                  <img src={article.img} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)' }} />
                  <div style={{ position: 'absolute', bottom: '12px', left: '14px', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '11px', color: 'rgba(255,255,255,0.8)' }}>
                    📅 {article.date}
                  </div>
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '15px', color: '#1a1a1a', marginBottom: '8px', lineHeight: 1.3 }}>
                    {article.title}
                  </h3>
                  <p style={{ color: '#777', fontSize: '13px', lineHeight: 1.65, marginBottom: '14px', fontStyle: 'italic' }}>
                    "{article.excerpt}"
                  </p>
                  <span style={{ color: '#C8102E', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {t.readMore}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, #1a0005 0%, #2d0008 100%)', borderRadius: '12px', padding: 'clamp(32px,5vw,56px)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(20px,3.5vw,34px)', color: 'white', marginBottom: '12px' }}>
            {t.cta}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '15px', marginBottom: '28px' }}>{t.ctaDesc}</p>
          <Link href="/candidature" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#C8102E', color: 'white', fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.06em', padding: '16px 36px', borderRadius: '8px', textDecoration: 'none' }}>
            {t.postuler}
          </Link>
        </div>
      </div>
    </div>
  );
}