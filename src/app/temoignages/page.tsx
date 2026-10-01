'use client';
import { useState } from 'react';
import Link from 'next/link';
import { TEMOIGNAGES, initiales } from '@/lib/temoignages';

const NAVY = '#13213a';
const BRONZE = '#a8865a';
const GOLD_LIGHT = '#cdb48c';
const RED = '#C8102E';
const FONT = "'Montserrat', sans-serif";
const SERIF = "Georgia, 'Times New Roman', serif";

const TRANSLATIONS = {
  fr: {
    back: '← Retour',
    tag: 'Communauté',
    title: 'Témoignages',
    lead: 'La parole à notre communauté',
    subtitle: 'Des parcours singuliers, une même exigence : apprendre, progresser et transmettre. Découvrez celles et ceux qui font vivre Academy Twenty One à travers le monde.',
    stats: [
      { num: '5', label: 'Continents' },
      { num: '75+', label: 'Pays' },
      { num: '1M+', label: 'Participants' },
    ],
    videos: 'En vidéo',
    videosIntro: 'Cérémonies de reconnaissance, discours et retours d’expérience, sur la chaîne officielle A21.',
    written: 'Ils témoignent',
    share: 'Vous avez suivi un programme A21 ?',
    shareText: 'Partagez votre expérience : votre témoignage aide les futurs apprenants à se projeter.',
    shareBtn: 'Partager mon témoignage',
    cta: 'Écrivez la suite de votre parcours',
    ctaDesc: 'Bachelor, Mastère, Executive MBA ou formation professionnelle : rejoignez une communauté internationale exigeante et bienveillante.',
    postuler: 'Déposer ma candidature →',
    programmes: 'Découvrir les programmes',
    watchOn: 'Voir sur YouTube →',
    allVideos: 'Toutes les vidéos sur YouTube',
  },
  en: {
    back: '← Back',
    tag: 'Community',
    title: 'Testimonies',
    lead: 'Our community speaks',
    subtitle: 'Unique journeys, one shared standard: to learn, to grow and to pass it on. Meet the people who bring Academy Twenty One to life around the world.',
    stats: [
      { num: '5', label: 'Continents' },
      { num: '75+', label: 'Countries' },
      { num: '1M+', label: 'Participants' },
    ],
    videos: 'On video',
    videosIntro: 'Recognition ceremonies, speeches and feedback, on the official A21 channel.',
    written: 'In their words',
    share: 'Have you followed an A21 programme?',
    shareText: 'Share your experience: your testimony helps future learners see themselves here.',
    shareBtn: 'Share my testimony',
    cta: 'Write the next chapter of your journey',
    ctaDesc: 'Bachelor, Master, Executive MBA or professional training: join a demanding and supportive international community.',
    postuler: 'Submit my application →',
    programmes: 'Explore the programmes',
    watchOn: 'Watch on YouTube →',
    allVideos: 'All videos on YouTube',
  },
};

const YT = 'https://www.youtube.com/@academytwentyone';

const VIDEOS = [
  { flag: '🇨🇩', title: 'A21 Recognition Ceremony, Kinshasa 2025 — Senior Ambassador', desc: { fr: 'Témoignage d’un Senior Ambassador lors de la cérémonie de reconnaissance de Kinshasa.', en: 'Testimony of a Senior Ambassador at the Kinshasa recognition ceremony.' } },
  { flag: '🇨🇩', title: 'A21 Recognition Ceremony, Kinshasa 2025 — Grand Ambassador', desc: { fr: 'Discours d’un Grand Ambassador lors de la cérémonie de Kinshasa 2025.', en: 'Speech by a Grand Ambassador at the Kinshasa 2025 ceremony.' } },
  { flag: '🇨🇩', title: 'Discours d’ouverture — A21 Recognition Ceremony Kinshasa', desc: { fr: 'Ouverture officielle de la cérémonie de reconnaissance d’Academy Twenty One.', en: 'Official opening of the Academy Twenty One recognition ceremony.' } },
  { flag: '🇨🇩', title: 'Discours de clôture — A21 Recognition Ceremony Kinshasa', desc: { fr: 'Clôture de la cérémonie de reconnaissance d’Academy Twenty One Kinshasa 2025.', en: 'Closing of the Academy Twenty One Kinshasa 2025 recognition ceremony.' } },
];

export default function TemoignagesPage() {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');
  const t = TRANSLATIONS[lang];
  const featured = TEMOIGNAGES.find(x => x.featured) ?? TEMOIGNAGES[0];
  const others = TEMOIGNAGES.filter(x => x !== featured);

  return (
    <div style={{ minHeight: '100vh', background: '#f6f7f9' }}>

      {/* ══ HERO ══ */}
      <div style={{ background: 'linear-gradient(135deg, #0e1a2e 0%, #1b2c48 100%)', borderBottom: `3px solid ${RED}`, padding: 'clamp(32px,5vw,64px) 0 clamp(32px,5vw,56px)', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', right: '4%', top: '-40px', fontFamily: SERIF, fontSize: 'clamp(220px,28vw,380px)', lineHeight: 1, color: 'rgba(205,180,140,0.08)' }}>&ldquo;</div>
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13px', fontFamily: FONT, fontWeight: 600, textDecoration: 'none' }}>{t.back}</Link>
            <div style={{ display: 'flex', gap: '6px' }}>
              {(['fr', 'en'] as const).map(l => (
                <button key={l} onClick={() => setLang(l)} style={{ padding: '5px 14px', borderRadius: '6px', border: lang === l ? `1px solid ${RED}` : '1px solid rgba(255,255,255,0.2)', cursor: 'pointer', fontFamily: FONT, fontWeight: 700, fontSize: '11px', background: lang === l ? RED : 'transparent', color: 'white', textTransform: 'uppercase' }}>{l}</button>
              ))}
            </div>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
            <span style={{ width: '28px', height: '1px', background: GOLD_LIGHT }} />
            <span style={{ color: GOLD_LIGHT, fontFamily: FONT, fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.22em' }}>{t.tag} · {t.title}</span>
          </div>
          <h1 style={{ fontFamily: FONT, fontWeight: 900, fontSize: 'clamp(30px,5vw,56px)', color: 'white', lineHeight: 1.08, letterSpacing: '-0.02em', marginBottom: '16px', maxWidth: '760px' }}>{t.lead}</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(15px,1.6vw,17px)', lineHeight: 1.7, maxWidth: '640px', marginBottom: '28px' }}>{t.subtitle}</p>
          <div style={{ display: 'flex', gap: 'clamp(24px,5vw,56px)', flexWrap: 'wrap' }}>
            {t.stats.map(s => (
              <div key={s.label}>
                <div style={{ fontFamily: FONT, fontWeight: 900, fontSize: 'clamp(26px,3vw,36px)', color: 'white', lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontFamily: FONT, fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.14em', color: GOLD_LIGHT, marginTop: '6px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: 'clamp(40px,6vw,72px) 24px' }}>

        {/* ══ TÉMOIGNAGE PRINCIPAL ══ */}
        <figure style={{ margin: '0 0 28px', background: 'white', border: '1px solid #e3e6eb', borderRadius: '18px', padding: 'clamp(28px,4vw,52px)', display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 'clamp(20px,4vw,48px)', alignItems: 'center' }} className="temo-featured">
          <div style={{ width: 'clamp(84px,10vw,120px)', height: 'clamp(84px,10vw,120px)', borderRadius: '50%', background: NAVY, border: `3px solid ${GOLD_LIGHT}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: SERIF, fontSize: 'clamp(28px,3vw,40px)', color: GOLD_LIGHT }}>{initiales(featured.nom)}</div>
          <div>
            <blockquote style={{ margin: '0 0 18px', fontFamily: SERIF, fontStyle: 'italic', fontSize: 'clamp(19px,2.3vw,27px)', lineHeight: 1.5, color: NAVY }}>&ldquo;{featured.texte[lang]}&rdquo;</blockquote>
            <figcaption>
              <span style={{ fontFamily: FONT, fontWeight: 800, fontSize: '15px', color: NAVY }}>{featured.nom}</span>
              <span style={{ color: '#6b7280', fontSize: '14px' }}> — {featured.drapeau} {featured.pays} · {featured.role}</span>
            </figcaption>
          </div>
        </figure>

        {/* ══ TÉMOIGNAGES ÉCRITS (mosaïque) ══ */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', margin: '28px 0 18px' }}>
          <span style={{ width: '28px', height: '1px', background: BRONZE }} />
          <span style={{ color: BRONZE, fontFamily: FONT, fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.22em' }}>{t.written}</span>
        </div>
        <div className="temo-masonry" style={{ columnCount: 3, columnGap: '20px', marginBottom: '56px' }}>
          {others.map((x, i) => (
            <figure key={x.nom} style={{ breakInside: 'avoid', margin: '0 0 20px', background: i % 3 === 1 ? NAVY : 'white', border: `1px solid ${i % 3 === 1 ? NAVY : '#e3e6eb'}`, borderRadius: '16px', padding: '26px 26px 22px', position: 'relative' }}>
              <span style={{ position: 'absolute', top: '-1px', left: '26px', width: '36px', height: '3px', background: i % 3 === 1 ? GOLD_LIGHT : RED, borderRadius: '0 0 2px 2px' }} />
              <div aria-hidden="true" style={{ fontFamily: SERIF, fontSize: '54px', lineHeight: 0.8, color: i % 3 === 1 ? 'rgba(205,180,140,0.5)' : 'rgba(168,134,90,0.35)', marginBottom: '6px' }}>&ldquo;</div>
              <blockquote style={{ margin: '0 0 20px', fontFamily: SERIF, fontStyle: 'italic', fontSize: '16px', lineHeight: 1.7, color: i % 3 === 1 ? 'rgba(255,255,255,0.9)' : '#2b3445' }}>{x.texte[lang]}</blockquote>
              <figcaption style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: `1px solid ${i % 3 === 1 ? 'rgba(255,255,255,0.12)' : '#eef0f3'}`, paddingTop: '14px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: i % 3 === 1 ? 'transparent' : NAVY, border: i % 3 === 1 ? `1.5px solid ${GOLD_LIGHT}` : 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: SERIF, fontSize: '14px', color: GOLD_LIGHT, flexShrink: 0 }}>{initiales(x.nom)}</div>
                <div>
                  <div style={{ fontFamily: FONT, fontWeight: 800, fontSize: '14px', color: i % 3 === 1 ? 'white' : NAVY }}>{x.nom}</div>
                  <div style={{ fontSize: '12.5px', color: i % 3 === 1 ? 'rgba(255,255,255,0.6)' : '#6b7280' }}>{x.drapeau} {x.pays} · {x.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}

          {/* Carte « partager mon témoignage » */}
          <div style={{ breakInside: 'avoid', margin: '0 0 20px', background: '#f3ece1', border: '1px dashed #cdb48c', borderRadius: '16px', padding: '26px' }}>
            <div style={{ fontFamily: FONT, fontWeight: 900, fontSize: '16px', color: NAVY, marginBottom: '8px' }}>{t.share}</div>
            <p style={{ color: '#5f6673', fontSize: '14px', lineHeight: 1.6, marginBottom: '16px' }}>{t.shareText}</p>
            <a href="mailto:contact@academy21france.fr?subject=Mon%20t%C3%A9moignage%20A21" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: NAVY, color: 'white', fontFamily: FONT, fontWeight: 700, fontSize: '11.5px', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '11px 18px', borderRadius: '8px', textDecoration: 'none' }}>{t.shareBtn} →</a>
          </div>
        </div>

        {/* ══ VIDÉOS ══ */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '16px', flexWrap: 'wrap', marginBottom: '20px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
              <span style={{ width: '28px', height: '1px', background: BRONZE }} />
              <span style={{ color: BRONZE, fontFamily: FONT, fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.22em' }}>{t.videos}</span>
            </div>
            <p style={{ color: '#5f6673', fontSize: '15px', maxWidth: '560px' }}>{t.videosIntro}</p>
          </div>
          <a href={YT} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', border: `1.5px solid ${NAVY}`, color: NAVY, fontFamily: FONT, fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.06em', padding: '11px 20px', borderRadius: '8px', textDecoration: 'none' }}>
            <svg width="18" height="13" viewBox="0 0 20 14" fill={RED}><path d="M19.6 2.2C19.4 1.4 18.8.8 18 .6 16.4.2 10 .2 10 .2s-6.4 0-8 .4C1.2.8.6 1.4.4 2.2 0 3.8 0 7 0 7s0 3.2.4 4.8c.2.8.8 1.4 1.6 1.6 1.6.4 8 .4 8 .4s6.4 0 8-.4c.8-.2 1.4-.8 1.6-1.6.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM8 10V4l5.3 3L8 10z" /></svg>
            {t.allVideos}
          </a>
        </div>
        <div className="temo-videos" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '64px' }}>
          {VIDEOS.map((v, i) => (
            <a key={i} href={YT} target="_blank" rel="noopener noreferrer" className="temo-video" style={{ background: 'white', borderRadius: '14px', border: '1px solid #e3e6eb', overflow: 'hidden', textDecoration: 'none', display: 'block' }}>
              <div style={{ background: `radial-gradient(circle at 30% 30%, #22375c 0%, ${NAVY} 60%, #0b1526 100%)`, aspectRatio: '16 / 9', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <div className="temo-play" style={{ width: '54px', height: '54px', borderRadius: '50%', background: 'rgba(255,255,255,0.12)', border: '1.5px solid rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.25s' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z" /></svg>
                </div>
                <span style={{ position: 'absolute', top: '10px', left: '10px', fontSize: '16px' }}>{v.flag}</span>
                <span style={{ position: 'absolute', bottom: '10px', right: '10px', background: RED, color: 'white', padding: '2px 8px', borderRadius: '3px', fontSize: '9px', fontFamily: FONT, fontWeight: 700, letterSpacing: '0.06em' }}>YOUTUBE</span>
              </div>
              <div style={{ padding: '14px 16px 16px' }}>
                <h3 style={{ fontFamily: FONT, fontWeight: 800, fontSize: '13px', color: NAVY, marginBottom: '6px', lineHeight: 1.4 }}>{v.title}</h3>
                <p style={{ color: '#6b7280', fontSize: '12.5px', lineHeight: 1.55, marginBottom: '10px' }}>{v.desc[lang]}</p>
                <span style={{ color: RED, fontFamily: FONT, fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{t.watchOn}</span>
              </div>
            </a>
          ))}
        </div>

        {/* ══ CTA ══ */}
        <div style={{ background: 'linear-gradient(135deg, #0e1a2e 0%, #1b2c48 100%)', borderRadius: '18px', padding: 'clamp(36px,5vw,64px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div aria-hidden="true" style={{ position: 'absolute', left: '-60px', bottom: '-60px', width: '220px', height: '220px', borderRadius: '50%', border: '1px solid rgba(205,180,140,0.15)' }} />
          <h2 style={{ fontFamily: FONT, fontWeight: 900, fontSize: 'clamp(22px,3.5vw,36px)', color: 'white', marginBottom: '12px', position: 'relative' }}>{t.cta}</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '15px', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto 28px', position: 'relative' }}>{t.ctaDesc}</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
            <Link href="/candidature" style={{ background: RED, color: 'white', fontFamily: FONT, fontWeight: 800, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.06em', padding: '15px 30px', borderRadius: '8px', textDecoration: 'none' }}>{t.postuler}</Link>
            <Link href="/programmes/bachelors" style={{ border: '1.5px solid rgba(255,255,255,0.35)', color: 'white', fontFamily: FONT, fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.06em', padding: '14px 26px', borderRadius: '8px', textDecoration: 'none' }}>{t.programmes}</Link>
          </div>
        </div>
      </div>

      <style>{`
        .temo-video { transition: box-shadow 0.25s ease, transform 0.25s ease; }
        .temo-video:hover { box-shadow: 0 14px 34px rgba(19,33,58,0.12); transform: translateY(-3px); }
        .temo-video:hover .temo-play { background: #C8102E; border-color: #C8102E; transform: scale(1.08); }
        @media (max-width: 1000px) { .temo-videos { grid-template-columns: repeat(2, 1fr) !important; } .temo-masonry { column-count: 2 !important; } }
        @media (max-width: 640px) {
          .temo-videos { grid-template-columns: 1fr !important; }
          .temo-masonry { column-count: 1 !important; }
          .temo-featured { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
