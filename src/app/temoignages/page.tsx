'use client';
import { useState } from 'react';
import Link from 'next/link';

const TRANSLATIONS = {
  fr: {
    back: '← Retour',
    tag: 'Communauté',
    title: 'Témoignages',
    subtitle: 'Découvrez les témoignages de membres d\'Academy Twenty One à travers le monde.',
    videos: 'Vidéos de témoignages',
    written: 'Témoignages écrits',
    cta: 'Rejoindre l\'Académie',
    ctaDesc: 'Rejoignez des milliers d\'entrepreneurs qui transforment leur avenir avec Academy 21.',
    postuler: 'Déposer ma candidature →',
    watchOn: 'Voir sur YouTube →',
  },
  en: {
    back: '← Back',
    tag: 'Community',
    title: 'Testimonies',
    subtitle: 'Discover the testimonies of Academy Twenty One members from around the world.',
    videos: 'Video Testimonies',
    written: 'Written Testimonies',
    cta: 'Join the Academy',
    ctaDesc: 'Join thousands of entrepreneurs transforming their future with Academy 21.',
    postuler: 'Submit my application →',
    watchOn: 'Watch on YouTube →',
  },
};

// Vidéos YouTube réelles de la chaîne A21
const VIDEOS = [
  { id: 'https://www.youtube.com/@academytwentyone', embedId: null, title: '🇨🇩 A21 RECOGNITION CEREMONY, KINSHASA 2025 — SENIOR AMBASSADOR', desc: 'Témoignage d\'un Senior Ambassador lors de la cérémonie de reconnaissance de Kinshasa.' },
  { id: 'https://www.youtube.com/@academytwentyone', embedId: null, title: '🇨🇩 A21 RECOGNITION CEREMONY, KINSHASA 2025 — GRAND AMBASSADOR', desc: 'Discours d\'un Grand Ambassador lors de la cérémonie de Kinshasa 2025.' },
  { id: 'https://www.youtube.com/@academytwentyone', embedId: null, title: '🇨🇩 DISCOURS D\'OUVERTURE — A21 RECOGNITION CEREMONY KINSHASA', desc: 'Ouverture officielle de la cérémonie de reconnaissance d\'Academy Twenty One.' },
  { id: 'https://www.youtube.com/@academytwentyone', embedId: null, title: '🇨🇩 DISCOURS DE CLÔTURE — A21 RECOGNITION CEREMONY KINSHASA', desc: 'Clôture de la cérémonie de reconnaissance d\'Academy Twenty One Kinshasa 2025.' },
];

const TEMOIGNAGES_ECRITS = [
  {
    nom: 'Marie K.',
    pays: '🇫🇷 France',
    grade: 'Executive Ambassador',
    texte: { fr: 'Academy 21 a complètement transformé ma vision des affaires. En moins d\'un an, j\'ai pu construire un réseau solide et atteindre ma liberté financière.', en: 'Academy 21 completely transformed my vision of business. In less than a year, I was able to build a solid network and achieve financial freedom.' },
  },
  {
    nom: 'Jean-Pierre M.',
    pays: '🇨🇩 Congo',
    grade: 'Senior Ambassador',
    texte: { fr: 'Les formations A21 m\'ont donné les outils pour transformer ma vie et celle de ma famille. Le système fonctionne si vous y croyez et agissez.', en: 'A21 training gave me the tools to transform my life and that of my family. The system works if you believe in it and take action.' },
  },
  {
    nom: 'Aisha D.',
    pays: '🇸🇳 Sénégal',
    grade: 'Ambassador',
    texte: { fr: 'Ce qui m\'a le plus marquée c\'est la communauté. Des personnes bienveillantes qui partagent les mêmes valeurs et s\'entraident pour réussir.', en: 'What struck me most is the community. Kind people who share the same values and help each other succeed.' },
  },
  {
    nom: 'Carlos R.',
    pays: '🇧🇪 Belgique',
    grade: 'Grand Ambassador',
    texte: { fr: 'Dr Raoul Ruben Njionou est un leader inspirant. Son enseignement va bien au-delà du business — c\'est une philosophie de vie complète.', en: 'Dr Raoul Ruben Njionou is an inspiring leader. His teaching goes far beyond business — it\'s a complete philosophy of life.' },
  },
  {
    nom: 'Fatou B.',
    pays: '🇨🇮 Côte d\'Ivoire',
    grade: 'Senior Ambassador',
    texte: { fr: 'Grâce à A21, j\'ai développé une confiance en moi que je n\'avais jamais eue. Je recommande cette académie à tous ceux qui veulent changer leur vie.', en: 'Thanks to A21, I developed self-confidence that I had never had before. I recommend this academy to everyone who wants to change their life.' },
  },
  {
    nom: 'Thomas N.',
    pays: '🇨🇲 Cameroun',
    grade: 'Executive Ambassador',
    texte: { fr: 'Les valeurs d\'Academy 21 — foi, persévérance, ambition — sont devenues mes valeurs personnelles. Elles m\'ont guidé vers le succès.', en: 'Academy 21\'s values — faith, perseverance, ambition — have become my personal values. They have guided me towards success.' },
  },
];

export default function TemoignagesPage() {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');
  const t = TRANSLATIONS[lang];

  return (
    <div style={{ minHeight: '100vh', background: '#f7f8fa' }}>

      {/* Header */}
      <div style={{ background: 'white', borderBottom: '3px solid #C8102E', padding: 'clamp(24px,4vw,40px) 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
            <Link href="/" style={{ color: '#aaa', fontSize: '13px', fontFamily: 'Montserrat,sans-serif', fontWeight: 600, textDecoration: 'none' }}>{t.back}</Link>
            <div style={{ display: 'flex', gap: '8px' }}>
              {(['fr', 'en'] as const).map(l => (
                <button key={l} onClick={() => setLang(l)} style={{ padding: '4px 14px', borderRadius: '4px', border: 'none', cursor: 'pointer', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '12px', background: lang === l ? '#C8102E' : '#f0f1f3', color: lang === l ? 'white' : '#555', textTransform: 'uppercase' }}>{l}</button>
              ))}
            </div>
          </div>
          <span style={{ background: '#C8102E', color: 'white', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '10px', padding: '3px 10px', borderRadius: '3px', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'inline-block', marginBottom: '12px' }}>{t.tag}</span>
          <h1 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(28px,5vw,52px)', color: '#1a1a1a', marginBottom: '10px' }}>{t.title}</h1>
          <p style={{ color: '#888', fontSize: '15px', maxWidth: '600px', lineHeight: 1.7 }}>{t.subtitle}</p>
        </div>
      </div>

      <div className="container" style={{ padding: 'clamp(32px,5vw,56px) 24px' }}>

        {/* Section vidéos */}
        <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(18px,2.5vw,26px)', color: '#1a1a1a', marginBottom: '20px' }}>
          📹 {t.videos}
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px', marginBottom: '16px' }}>
          {VIDEOS.map((v, i) => (
            <div key={i} style={{ background: 'white', borderRadius: '10px', border: '1px solid #e0e2e6', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              {/* Thumbnail placeholder */}
              <div style={{ background: 'linear-gradient(135deg, #1a0005 0%, #2d0008 100%)', height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px', border: '2px solid rgba(255,255,255,0.3)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                  <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)', fontFamily: 'Montserrat,sans-serif', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>A21 Media</span>
                </div>
                <div style={{ position: 'absolute', top: '10px', right: '10px', background: '#C8102E', color: 'white', padding: '2px 8px', borderRadius: '3px', fontSize: '9px', fontFamily: 'Montserrat,sans-serif', fontWeight: 700 }}>YOUTUBE</div>
              </div>
              <div style={{ padding: '16px' }}>
                <h3 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '13px', color: '#1a1a1a', marginBottom: '8px', lineHeight: 1.4 }}>{v.title}</h3>
                <p style={{ color: '#888', fontSize: '12px', lineHeight: 1.6, marginBottom: '12px' }}>{v.desc}</p>
                <a href="https://www.youtube.com/@academytwentyone" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#C8102E', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '12px', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {t.watchOn}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Lien YouTube */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <a href="https://www.youtube.com/@academytwentyone" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#ff0000', color: 'white', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '13px', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none' }}>
            <svg width="20" height="14" viewBox="0 0 20 14" fill="white"><path d="M19.6 2.2C19.4 1.4 18.8.8 18 .6 16.4.2 10 .2 10 .2s-6.4 0-8 .4C1.2.8.6 1.4.4 2.2 0 3.8 0 7 0 7s0 3.2.4 4.8c.2.8.8 1.4 1.6 1.6 1.6.4 8 .4 8 .4s6.4 0 8-.4c.8-.2 1.4-.8 1.6-1.6.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM8 10V4l5.3 3L8 10z"/></svg>
            Voir toutes les vidéos sur YouTube
          </a>
        </div>

        {/* Témoignages écrits */}
        <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(18px,2.5vw,26px)', color: '#1a1a1a', marginBottom: '24px' }}>
          💬 {t.written}
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', marginBottom: '56px' }}>
          {TEMOIGNAGES_ECRITS.map((temo, i) => (
            <div key={i} style={{ background: 'white', borderRadius: '10px', border: '1px solid #e0e2e6', padding: '24px', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '16px', right: '20px', fontSize: '40px', color: 'rgba(200,16,46,0.1)', fontFamily: 'Georgia,serif', lineHeight: 1 }}>"</div>
              <p style={{ color: '#555', fontSize: '14px', lineHeight: 1.75, fontStyle: 'italic', marginBottom: '20px' }}>
                "{temo.texte[lang]}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid #f0f1f3', paddingTop: '14px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #C8102E, #1a0005)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '16px', color: 'white', flexShrink: 0 }}>
                  {temo.nom[0]}
                </div>
                <div>
                  <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '14px', color: '#1a1a1a' }}>{temo.nom}</div>
                  <div style={{ fontSize: '12px', color: '#aaa' }}>{temo.pays} · {temo.grade}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, #1a0005 0%, #2d0008 100%)', borderRadius: '12px', padding: 'clamp(32px,5vw,56px)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(20px,3.5vw,34px)', color: 'white', marginBottom: '12px' }}>{t.cta}</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '15px', marginBottom: '28px' }}>{t.ctaDesc}</p>
          <Link href="/candidature" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#C8102E', color: 'white', fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.06em', padding: '16px 36px', borderRadius: '8px', textDecoration: 'none' }}>
            {t.postuler}
          </Link>
        </div>
      </div>
    </div>
  );
}