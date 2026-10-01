'use client';
import { useState } from 'react';
import Link from 'next/link';

const TRANSLATIONS = {
  fr: {
    back: '← Retour',
    tag: 'Notre ADN',
    title: 'Nos Valeurs',
    subtitle: "Academy Twenty One place l'être humain au cœur de son projet éducatif. Neuf valeurs fondent notre pédagogie et orientent l'engagement de chaque membre de notre communauté.",
    quote: `\"L'argent est important, la liberté financière aussi. Mais c'est l'être humain qui donne de la valeur à l'argent, et non l'inverse.\"`,
    author: "— Dr Raoul Ruben Njionou, Fondateur d'Academy Twenty One",
    mission: 'Notre Mission',
    missionText: "Former des femmes et des hommes capables de révéler leur potentiel et de le traduire en action. Par la transmission de méthodes, de valeurs et d'un état d'esprit entrepreneurial, nous accompagnons chacun de l'ambition à la réalisation.",
    vision: 'Notre Vision',
    visionText: "Bâtir, sur des principes stables qui ont guidé chaque étape de notre développement, une institution de référence en leadership et en entrepreneuriat. Une vision qui n'a rien d'une utopie : elle se construit et s'élargit avec le temps.",
    cta: "Rejoindre l'Académie",
    ctaDesc: "Partagez ces valeurs ? Rejoignez une communauté internationale d'entrepreneurs.",
    postuler: 'Déposer ma candidature →',
  },
  en: {
    back: '← Back',
    tag: 'Our DNA',
    title: 'Our Values',
    subtitle: 'Academy Twenty One places the human being at the heart of its educational project. Nine values underpin our teaching and guide the commitment of every member of our community.',
    quote: '"Money is important, financial freedom too. However, it is the human being who gives value to money and not the other way round."',
    author: '— Dr Raoul Ruben Njionou, Founder of Academy Twenty One',
    mission: 'Our Mission',
    missionText: 'To educate women and men able to reveal their potential and turn it into action. By passing on methods, values and an entrepreneurial mindset, we support each person from ambition to achievement.',
    vision: 'Our Vision',
    visionText: "To build, on the stable principles that have guided every stage of our development, a leading institution in leadership and entrepreneurship. A vision that is no utopia: it is built and broadened over time.",
    cta: 'Join the Academy',
    ctaDesc: 'Share these values? Join an international community of entrepreneurs.',
    postuler: 'Submit my application →',
  },
};

const NAVY = '#13213a';
const BRONZE = '#a8865a';
const RED = '#C8102E';
const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

const VALUES = [
  { name: { fr: "Foi", en: "Faith" }, desc: { fr: "La foi désigne la confiance en sa vocation et en sa capacité à progresser. Elle constitue le socle de l'engagement, en particulier lorsque les résultats tardent à se manifester.", en: "Faith is confidence in one's calling and in one's ability to grow. It is the foundation of commitment, especially when results are slow to appear." } },
  { name: { fr: "Charité", en: "Charity" }, desc: { fr: "Le sens du service et de la contribution au bien commun. Nous considérons la transmission et l'entraide comme des leviers essentiels de la réussite collective.", en: "A sense of service and contribution to the common good. We see knowledge-sharing and mutual support as key drivers of collective success." } },
  { name: { fr: "Persévérance", en: "Perseverance" }, desc: { fr: "Toute réussite durable s'inscrit dans le temps. La persévérance traduit la constance de l'effort et la capacité à maintenir le cap face aux obstacles.", en: "Lasting success takes time. Perseverance reflects consistent effort and the ability to hold one's course in the face of obstacles." } },
  { name: { fr: "Attitude Positive", en: "Positive Attitude" }, desc: { fr: "Une posture constructive face à la complexité et au changement. Elle permet d'analyser les difficultés avec lucidité et d'y reconnaître des opportunités d'apprentissage.", en: "A constructive stance towards complexity and change. It allows difficulties to be assessed clearly and recognised as opportunities to learn." } },
  { name: { fr: "Ambition", en: "Ambition" }, desc: { fr: "L'exigence de se fixer des objectifs élevés et de s'en donner les moyens. Nous encourageons chaque membre à élargir son horizon et à dépasser ses propres limites.", en: "The discipline of setting high goals and giving oneself the means to reach them. We encourage every member to broaden their horizons and surpass their own limits." } },
  { name: { fr: "Ne Jamais Abandonner", en: "Never Give Up" }, desc: { fr: "La résilience face à l'adversité. L'échec y est envisagé comme une étape d'apprentissage, et non comme une fin : il éclaire la décision suivante.", en: "Resilience in the face of adversity. Failure is treated as a learning stage, not an end: it informs the next decision." } },
  { name: { fr: "Style de Vie", en: "Lifestyle" }, desc: { fr: "L'excellence ne se limite pas à la sphère professionnelle. Nous promouvons une hygiène de vie cohérente, au service de l'équilibre personnel et de la performance durable.", en: "Excellence is not limited to professional life. We promote a consistent way of living that supports personal balance and sustainable performance." } },
  { name: { fr: "Loyauté", en: "Loyalty" }, desc: { fr: "La fidélité aux engagements pris envers la communauté, les partenaires et nos principes. Elle fonde la confiance, condition de toute relation durable.", en: "Faithfulness to commitments made to our community, our partners and our principles. It underpins trust, the condition of any lasting relationship." } },
  { name: { fr: "Rigueur", en: "Rigor" }, desc: { fr: "La méthode et la discipline dans l'action quotidienne. La rigueur garantit la qualité du travail accompli et la solidité des résultats sur le long terme.", en: "Method and discipline in daily action. Rigor ensures the quality of work and the soundness of results over the long term." } },
];

export default function NosValeursPage() {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');
  const t = TRANSLATIONS[lang];

  return (
    <div className="page-wrapper">

      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-top">
            <Link href="/" className="back-link">{t.back}</Link>
            <div className="lang-switcher">
              {(['fr', 'en'] as const).map(l => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`lang-btn ${lang === l ? 'active' : ''}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
          <span className="tag">{t.tag}</span>
          <h1 className="title">{t.title}</h1>
          <p className="subtitle">{t.subtitle}</p>
        </div>
      </header>

      <div className="container main-content">

        {/* Citation */}
        <div className="quote-section">
          <div className="quote-mark">&ldquo;</div>
          <p className="quote-text">{t.quote}</p>
          <div className="quote-author">{t.author}</div>
        </div>

        {/* Mission + Vision */}
        <div className="mv-grid">
          {[
            { title: t.mission, text: t.missionText, color: RED },
            { title: t.vision, text: t.visionText, color: NAVY },
          ].map((item) => (
            <div key={item.title} className="mv-card" style={{ borderTopColor: item.color }}>
              <div className="mv-card-glow" style={{ background: item.color }} />
              <div className="mv-card-accent" style={{ background: item.color }} />
              <h2 className="mv-title">{item.title}</h2>
              <p className="mv-text">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Les 9 valeurs */}
        <div className="values-header">
          <div className="values-label"><span />{lang === 'fr' ? 'Fondamentaux' : 'Core principles'}<span /></div>
          <h2 className="values-title">{lang === 'fr' ? 'Les 9 Valeurs Fondamentales' : 'The 9 Core Values'}</h2>
          <p className="values-intro">{lang === 'fr' ? 'Elles structurent notre projet pédagogique et la manière dont nous formons nos apprenants.' : 'They shape our educational project and the way we train our learners.'}</p>
        </div>

        <div className="values-grid">
          {VALUES.map((v, i) => (
            <div key={i} className="value-card">
              <div className="value-number">{ROMAN[i]}</div>
              <h3 className="value-name">{v.name[lang]}</h3>
              <p className="value-desc">{v.desc[lang]}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="cta-section">
          <div className="cta-glow cta-glow-1" />
          <div className="cta-glow cta-glow-2" />
          <h2 className="cta-title">{t.cta}</h2>
          <p className="cta-desc">{t.ctaDesc}</p>
          <Link href="/candidature" className="cta-btn">
            {t.postuler}
          </Link>
        </div>
      </div>

      <style>{`
        .page-wrapper {
          min-height: 100vh;
          background: #f7f8fa;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #1a1a1a;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .header {
          background: white;
          border-bottom: 3px solid #C8102E;
          padding: clamp(24px, 4vw, 40px) 0;
        }

        .header-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 16px;
        }

        .back-link {
          color: #aaa;
          font-size: 13px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.2s;
        }

        .back-link:hover {
          color: #C8102E;
        }

        .lang-switcher {
          display: flex;
          gap: 8px;
        }

        .lang-btn {
          padding: 6px 16px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 12px;
          background: #f0f1f3;
          color: #555;
          text-transform: uppercase;
          transition: all 0.2s;
        }

        .lang-btn.active {
          background: #C8102E;
          color: white;
        }

        .tag {
          background: #C8102E;
          color: white;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 11px;
          padding: 4px 12px;
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          display: inline-block;
          margin-bottom: 16px;
        }

        .title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          font-size: clamp(32px, 5vw, 56px);
          color: #13213a;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }

        .subtitle {
          color: #888;
          font-size: 16px;
          max-width: 640px;
          line-height: 1.7;
          font-family: 'Inter', sans-serif;
        }

        .main-content {
          padding: clamp(40px, 5vw, 64px) 24px;
        }

        .quote-section {
          background: linear-gradient(135deg, #0e1a2e 0%, #1b2c48 100%);
          border-radius: 16px;
          padding: clamp(32px, 4vw, 56px);
          margin-bottom: 56px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .quote-mark {
          position: absolute;
          top: -30px;
          left: 30px;
          font-size: 140px;
          color: rgba(168,134,90,0.18);
          font-family: Georgia,serif;
          line-height: 1;
          font-weight: 700;
        }

        .quote-text {
          font-family: 'Georgia', 'Times New Roman', serif;
          font-size: clamp(18px, 2.5vw, 24px);
          color: white;
          line-height: 1.8;
          font-style: italic;
          max-width: 720px;
          margin: 0 auto 20px;
          position: relative;
          z-index: 1;
          letter-spacing: -0.01em;
        }

        .quote-author {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 13px;
          color: rgba(255,255,255,0.5);
          position: relative;
          z-index: 1;
          letter-spacing: 0.05em;
        }

        .mv-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 56px;
        }

        .mv-card {
          background: white;
          border-radius: 16px;
          border: 1px solid #e0e2e6;
          border-top: 5px solid;
          padding: clamp(24px, 3vw, 36px);
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .mv-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.08);
        }

        .mv-card-glow {
          position: absolute;
          top: -20px;
          right: -20px;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          opacity: 0.08;
          filter: blur(30px);
          pointer-events: none;
        }

        .mv-card-accent {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          opacity: 0.9;
        }

        .mv-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          font-size: clamp(18px, 2vw, 24px);
          color: #13213a;
          margin-bottom: 14px;
          position: relative;
          z-index: 1;
        }

        .mv-text {
          color: #5f6673;
          font-size: 15px;
          line-height: 1.8;
          position: relative;
          z-index: 1;
          font-family: 'Inter', sans-serif;
        }

        .values-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .values-label {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #a8865a;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          margin-bottom: 14px;
        }

        .values-label span {
          width: 28px;
          height: 1px;
          background: #a8865a;
        }

        .values-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          font-size: clamp(24px, 3vw, 36px);
          color: #13213a;
          letter-spacing: -0.02em;
          margin-bottom: 10px;
        }

        .values-intro {
          color: #6b7280;
          font-size: 15px;
          line-height: 1.7;
          max-width: 560px;
          margin: 0 auto;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 64px;
        }

        .value-card {
          position: relative;
          background: white;
          border: 1px solid #e3e6eb;
          border-radius: 14px;
          padding: 30px 28px 28px;
          transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
        }

        .value-card::before {
          content: '';
          position: absolute;
          top: -1px;
          left: 28px;
          width: 36px;
          height: 3px;
          background: #C8102E;
          border-radius: 0 0 2px 2px;
          transition: width 0.3s ease;
        }

        .value-card:hover {
          border-color: #cfd5de;
          box-shadow: 0 14px 36px rgba(19,33,58,0.08);
          transform: translateY(-3px);
        }

        .value-card:hover::before {
          width: 64px;
        }

        .value-number {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 30px;
          line-height: 1;
          color: #a8865a;
          margin-bottom: 18px;
        }

        .value-name {
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          font-size: 15px;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          color: #13213a;
          margin: 0 0 12px 0;
        }

        .value-desc {
          color: #5f6673;
          font-size: 14px;
          line-height: 1.75;
          margin: 0;
          font-family: 'Inter', sans-serif;
        }

        .cta-section {
          background: linear-gradient(135deg, #0e1a2e 0%, #1b2c48 100%);
          border-radius: 16px;
          padding: clamp(40px, 5vw, 64px);
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          background: rgba(168,134,90,0.08);
        }

        .cta-glow-1 {
          top: -60px;
          right: -60px;
          width: 200px;
          height: 200px;
        }

        .cta-glow-2 {
          bottom: -40px;
          left: -40px;
          width: 150px;
          height: 150px;
        }

        .cta-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          font-size: clamp(24px, 3.5vw, 36px);
          color: white;
          margin-bottom: 14px;
          position: relative;
          z-index: 1;
        }

        .cta-desc {
          color: rgba(255,255,255,0.6);
          font-size: 16px;
          margin: 0 auto 32px;
          max-width: 480px;
          position: relative;
          z-index: 1;
          font-family: 'Inter', sans-serif;
          line-height: 1.7;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #C8102E;
          color: white;
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 18px 40px;
          border-radius: 10px;
          text-decoration: none;
          box-shadow: 0 8px 32px rgba(200,16,46,0.35);
          transition: all 0.3s;
          position: relative;
          z-index: 1;
        }

        .cta-btn:hover {
          background: #e01435;
          box-shadow: 0 8px 40px rgba(200,16,46,0.45);
          transform: translateY(-2px);
        }

        @media (max-width: 900px) {
          .values-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 700px) {
          .mv-grid {
            grid-template-columns: 1fr;
          }
          .values-grid {
            grid-template-columns: 1fr;
          }
          .header-top {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 480px) {
          .values-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}