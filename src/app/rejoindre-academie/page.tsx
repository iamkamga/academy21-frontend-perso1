'use client';
import Link from 'next/link';
import { useState } from 'react';

const TRANSLATIONS = {
  fr: {
    back: '← Retour à l\'accueil',
    tag: 'Candidature',
    title: 'Rejoindre l\'Académie',
    subtitle: 'Découvrez nos programmes et rejoignez un réseau international d\'entrepreneurs présents sur 5 continents.',
    discover: 'Découvrir →',
    cta: 'Prêt à rejoindre l\'Académie ?',
    ctaDesc: 'Soumettez votre candidature. Notre équipe vous contactera dans les 48h.',
    postuler: 'Déposer ma candidature →',
  },
  en: {
    back: '← Back to home',
    tag: 'Application',
    title: 'Join the Academy',
    subtitle: 'Discover our programs and join an international network of entrepreneurs on 5 continents.',
    discover: 'Discover →',
    cta: 'Ready to join the Academy?',
    ctaDesc: 'Submit your application. Our team will contact you within 48h.',
    postuler: 'Submit my application →',
  },
};

const PROGRAMMES = [
  {
    title: 'A21 Training',
    desc: { fr: 'La formation fondamentale pour développer votre mindset et vos compétences business.', en: 'The fundamental training to develop your mindset and business skills.' },
    tag: { fr: 'Fondamental', en: 'Fundamental' },
    color: '#C8102E',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
    href: '/rejoindre-academie/a21-training',
  },
  {
    title: 'LeaderCamp',
    desc: { fr: 'Un événement intensif de plusieurs jours pour décupler vos performances en leadership.', en: 'An intensive multi-day event to multiply your leadership performance.' },
    tag: { fr: 'Intensif', en: 'Intensive' },
    color: '#f0a500',
    img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80',
    href: '/rejoindre-academie/leadercamp',
  },
  {
    title: 'Business Show',
    desc: { fr: 'La grande conférence annuelle avec des speakers internationaux de premier plan.', en: 'The annual flagship conference with world-class international speakers.' },
    tag: { fr: 'Événement', en: 'Event' },
    color: '#1a6fc4',
    img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80',
    href: '/rejoindre-academie/business-show',
  },
];

export default function RejoindreAcademiePage() {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');
  const t = TRANSLATIONS[lang];

  return (
    <div style={{ minHeight: '100vh', background: '#f7f8fa' }}>

      {/* Header */}
      <div style={{ background: 'white', borderBottom: '3px solid #C8102E', padding: 'clamp(32px,5vw,56px) 0 clamp(20px,3vw,32px)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
            <Link href="/" style={{ color: '#aaa', fontSize: '13px', fontFamily: 'Montserrat,sans-serif', fontWeight: 600, textDecoration: 'none' }}>
              {t.back}
            </Link>
            {/* Sélecteur langue */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {(['fr', 'en'] as const).map(l => (
                <button key={l} onClick={() => setLang(l)} style={{ padding: '4px 14px', borderRadius: '4px', border: 'none', cursor: 'pointer', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '12px', background: lang === l ? '#C8102E' : '#f0f1f3', color: lang === l ? 'white' : '#555', textTransform: 'uppercase' }}>
                  {l}
                </button>
              ))}
            </div>
          </div>
          <h1 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(24px,4vw,40px)', color: '#1a1a1a', marginBottom: '8px' }}>
            {t.title}
          </h1>
          <p style={{ color: '#aaa', fontSize: '14px', maxWidth: '500px' }}>{t.subtitle}</p>
        </div>
      </div>

      <div className="container" style={{ padding: 'clamp(32px,5vw,64px) 24px' }}>

        {/* 3 cartes programmes cliquables */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '48px' }}>
          {PROGRAMMES.map(p => (
            <Link key={p.title} href={p.href} style={{ textDecoration: 'none' }}>
              <div style={{ background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px solid #eceef1', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'pointer' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)'; }}
              >
                <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
                  <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)' }} />
                  <div style={{ height: '3px', position: 'absolute', top: 0, left: 0, right: 0, background: p.color }} />
                  <span style={{ position: 'absolute', bottom: '14px', left: '16px', background: p.color, color: 'white', padding: '4px 12px', borderRadius: '3px', fontSize: '10px', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {p.tag[lang]}
                  </span>
                </div>
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '18px', marginBottom: '10px', color: '#1a1a1a' }}>{p.title}</h3>
                  <p style={{ color: '#777', fontSize: '14px', lineHeight: 1.7, marginBottom: '16px' }}>{p.desc[lang]}</p>
                  <span style={{ color: p.color, fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    {t.discover}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, #1a0005 0%, #2d0008 100%)', borderRadius: '12px', padding: 'clamp(32px,5vw,56px)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(20px,3.5vw,34px)', color: 'white', marginBottom: '12px' }}>
            {t.cta}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '15px', lineHeight: 1.75, maxWidth: '440px', margin: '0 auto 28px' }}>
            {t.ctaDesc}
          </p>
          <Link href="/candidature" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#C8102E', color: 'white', fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.06em', padding: '16px 36px', borderRadius: '8px', textDecoration: 'none' }}>
            {t.postuler}
          </Link>
        </div>
      </div>
    </div>
  );
}