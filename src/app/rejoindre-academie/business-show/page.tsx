'use client';
import Link from 'next/link';
import { useState } from 'react';

const TRANSLATIONS = {
  fr: {
    back: '← Retour',
    tag: 'Événement',
    title: 'Business Show',
    subtitle: 'La grande conférence annuelle d\'Academy Twenty One avec des speakers internationaux de premier plan. Un événement incontournable pour s\'inspirer et développer son réseau.',
    articles: 'Dernières éditions',
    readMore: 'Lire la suite →',
    cta: 'Rejoindre l\'Académie',
    ctaDesc: 'Participez au prochain Business Show et connectez-vous aux meilleurs entrepreneurs.',
    postuler: 'Déposer ma candidature →',
  },
  en: {
    back: '← Back',
    tag: 'Event',
    title: 'Business Show',
    subtitle: 'Academy Twenty One\'s annual flagship conference featuring world-class international speakers. A must-attend event to get inspired and grow your network.',
    articles: 'Latest Editions',
    readMore: 'Read more →',
    cta: 'Join the Academy',
    ctaDesc: 'Attend the next Business Show and connect with the best entrepreneurs.',
    postuler: 'Apply now →',
  },
};

const ARTICLES = [
  {
    title: 'A GALA MATCH IN DOUALA',
    date: '16 Mar, 2025',
    img: 'https://academytwentyone.com/storage/articles/eaa5970df1c5f7ad039a1182c78006d3.jpg',
    excerpt: 'Academy Twenty One is no longer limited to issues of leadership and personal development.',
    link: 'https://academytwentyone.com/blog/61/a-gala-match-in-douala-5757243',
  },
  {
    title: 'BUSINESS SHOW IN GHANA',
    date: '08 Oct, 2023',
    img: 'https://academytwentyone.com/storage/articles/d8b9d03900a5eed9196dffcc15a85018.jpg',
    excerpt: 'Brilliant presentation of the Bzzworld and A21 business opportunity.',
    link: 'https://academytwentyone.com/blog/21/business-show-in-ghana-7915332',
  },
  {
    title: 'BUSINESS SHOW IN ABIDJAN',
    date: '17 Sep, 2023',
    img: 'https://academytwentyone.com/storage/articles/37189da9bc7cecb256cb0b4c959f6991.jpg',
    excerpt: 'The principles of Academy Twenty One on display at an exceptional event.',
    link: 'https://academytwentyone.com/blog/24/business-show-in-abidjan-51948',
  },
  {
    title: 'BUSINESS SHOW IN COTONOU',
    date: '20 Aug, 2023',
    img: 'https://academytwentyone.com/storage/articles/adad3cdd8ecb9b14dccd2bcda5d6d17b.jpg',
    excerpt: 'Feeling of belonging to Academy Twenty One at an extraordinary gathering.',
    link: 'https://academytwentyone.com/blog/26/business-show-in-cotonou-6229868',
  },
  {
    title: 'BUSINESS SHOW IN DOUALA',
    date: '15 Aug, 2023',
    img: 'https://academytwentyone.com/storage/articles/7cf54aa5814c06b513f748af88b1d2af.jpg',
    excerpt: 'Special guest, Mr. Se To, CEO of Bzzworld at an unforgettable event.',
    link: 'https://academytwentyone.com/blog/20/business-show-in-douala-6000572',
  },
];

export default function BusinessShowPage() {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');
  const t = TRANSLATIONS[lang];

  return (
    <div style={{ minHeight: '100vh', background: '#f7f8fa' }}>

      {/* Header */}
      <div style={{ background: 'white', borderBottom: '3px solid #1a6fc4', padding: 'clamp(24px,4vw,40px) 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
            <Link href="/rejoindre-academie" style={{ color: '#aaa', fontSize: '13px', fontFamily: 'Montserrat,sans-serif', fontWeight: 600, textDecoration: 'none' }}>
              {t.back}
            </Link>
            <div style={{ display: 'flex', gap: '8px' }}>
              {(['fr', 'en'] as const).map(l => (
                <button key={l} onClick={() => setLang(l)} style={{ padding: '4px 14px', borderRadius: '4px', border: 'none', cursor: 'pointer', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '12px', background: lang === l ? '#1a6fc4' : '#f0f1f3', color: lang === l ? 'white' : '#555', textTransform: 'uppercase' }}>
                  {l}
                </button>
              ))}
            </div>
          </div>
          <span style={{ background: '#1a6fc4', color: 'white', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '10px', padding: '3px 10px', borderRadius: '3px', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'inline-block', marginBottom: '12px' }}>
            {t.tag}
          </span>
          <h1 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(28px,5vw,52px)', color: '#1a1a1a', marginBottom: '10px' }}>
            {t.title}
          </h1>
          <p style={{ color: '#888', fontSize: '15px', maxWidth: '600px', lineHeight: 1.7 }}>{t.subtitle}</p>
        </div>
      </div>

      <div className="container" style={{ padding: 'clamp(32px,5vw,56px) 24px' }}>

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
                  <p style={{ color: '#777', fontSize: '13px', lineHeight: 1.65, marginBottom: '14px', fontStyle: 'italic' }}>"{article.excerpt}"</p>
                  <span style={{ color: '#1a6fc4', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{t.readMore}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, #001a2d 0%, #002d4a 100%)', borderRadius: '12px', padding: 'clamp(32px,5vw,56px)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(20px,3.5vw,34px)', color: 'white', marginBottom: '12px' }}>{t.cta}</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '15px', marginBottom: '28px' }}>{t.ctaDesc}</p>
          <Link href="/candidature" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#1a6fc4', color: 'white', fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.06em', padding: '16px 36px', borderRadius: '8px', textDecoration: 'none' }}>
            {t.postuler}
          </Link>
        </div>
      </div>
    </div>
  );
}