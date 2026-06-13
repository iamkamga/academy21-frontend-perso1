'use client';
import { useState } from 'react';
import Link from 'next/link';

const TRANSLATIONS = {
  fr: {
    back: '← Retour',
    tag: 'Notre ADN',
    title: 'Nos Valeurs',
    subtitle: "Academy Twenty One place l'être humain au centre de tout. Voici les valeurs fondamentales qui guident chaque membre de notre communauté.",
    quote: `\"L'argent est important, la liberté financière aussi. Mais c'est l'être humain qui donne de la valeur à l'argent, et non l'inverse.\"`,
    author: "— Dr Raoul Ruben Njionou, Fondateur d'Academy Twenty One",
    mission: 'Notre Mission',
    missionText: "Nous sommes un système qui construit des hommes et des femmes ! Nous renouvelons les esprits parce que nous avons tous une mission en nous. Nous vous poussons à rêver, nous vous guidons dans l'action, et le succès est inévitable.",
    vision: 'Notre Vision',
    visionText: "Nous avons parcouru un long chemin et nous sommes restés fermes grâce aux principes qui ont servi d'ancre tout au long de notre processus. La vision portée par notre système n'est pas une utopie, elle grandit avec le temps.",
    cta: "Rejoindre l'Académie",
    ctaDesc: "Partagez ces valeurs ? Rejoignez une communauté internationale d'entrepreneurs.",
    postuler: 'Déposer ma candidature →',
  },
  en: {
    back: '← Back',
    tag: 'Our DNA',
    title: 'Our Values',
    subtitle: 'Academy Twenty One places the human being at the center of everything. Here are the core values that guide every member of our community.',
    quote: '"Money is important, financial freedom too. However, it is the human being who gives value to money and not the other way round."',
    author: '— Dr Raoul Ruben Njionou, Founder of Academy Twenty One',
    mission: 'Our Mission',
    missionText: 'We are a system that builds people! We renew minds because we all have a mission invested in us. We push you to dream, we see you through action, and success is inevitable in the end.',
    vision: 'Our Vision',
    visionText: "We've come a long way and we stood firm thanks to the principles that served as an anchor throughout our process. The vision born by our system is not a utopia, rather it grows with time.",
    cta: 'Join the Academy',
    ctaDesc: 'Share these values? Join an international community of entrepreneurs.',
    postuler: 'Submit my application →',
  },
};

const VALUES = [
  { name: { fr: "Foi", en: "Faith" }, desc: { fr: "La foi est le fondement de tout ce que nous accomplissons. Elle nous permet de croire en nos rêves même quand le chemin semble difficile.", en: "Faith is the foundation of everything we accomplish. It allows us to believe in our dreams even when the path seems difficult." }, color: "#C8102E" },
  { name: { fr: "Charité", en: "Charity" }, desc: { fr: "Plus nous donnons, plus nous recevons. La générosité est au cœur de notre communauté et de notre réussite collective.", en: "The more we give, the more we receive. Generosity is at the heart of our community and our collective success." }, color: "#1a6fc4" },
  { name: { fr: "Persévérance", en: "Perseverance" }, desc: { fr: "Le succès n'est pas immédiat. Nous croyons fermement que la persévérance face aux obstacles est la clé de tout accomplissement durable.", en: "Success is not immediate. We firmly believe that perseverance in the face of obstacles is the key to any lasting achievement." }, color: "#f0a500" },
  { name: { fr: "Attitude Positive", en: "Positive Attitude" }, desc: { fr: "Notre état d'esprit détermine nos résultats. Une attitude positive transforme les défis en opportunités et attire le succès.", en: "Our mindset determines our results. A positive attitude transforms challenges into opportunities and attracts success." }, color: "#28a745" },
  { name: { fr: "Ambition", en: "Ambition" }, desc: { fr: "Viser grand est le premier pas vers la réalisation de ses rêves. Nous encourageons chaque membre à repousser ses limites.", en: "Aiming high is the first step towards achieving your dreams. We encourage every member to push their limits." }, color: "#7b2d8b" },
  { name: { fr: "Ne Jamais Abandonner", en: "Never Give Up" }, desc: { fr: "Chaque chute est une leçon. L'échec n'est pas la fin — c'est une étape vers la réussite. Nous ne baissons jamais les bras.", en: "Every fall is a lesson. Failure is not the end — it's a step towards success. We never give up." }, color: "#C8102E" },
  { name: { fr: "Style de Vie", en: "Lifestyle" }, desc: { fr: "L'excellence se reflète dans chaque aspect de notre vie. Nous cultivons un style de vie qui inspire et attire la prospérité.", en: "Excellence is reflected in every aspect of our life. We cultivate a lifestyle that inspires and attracts prosperity." }, color: "#1a6fc4" },
  { name: { fr: "Loyauté", en: "Loyalty" }, desc: { fr: "La loyauté envers notre communauté, nos partenaires et nos valeurs est ce qui nous rend forts et durables.", en: "Loyalty to our community, our partners and our values is what makes us strong and lasting." }, color: "#f0a500" },
  { name: { fr: "Rigueur", en: "Rigor" }, desc: { fr: "La discipline et la rigueur dans l'action quotidienne sont les garantes de résultats exceptionnels sur le long terme.", en: "Discipline and rigor in daily action are the guarantors of exceptional results in the long term." }, color: "#28a745" },
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
            { title: t.mission, text: t.missionText, color: '#C8102E' },
            { title: t.vision, text: t.visionText, color: '#1a6fc4' },
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
          <span className="values-label">{lang === 'fr' ? 'Fondamentaux' : 'Core'}</span>
          <h2 className="values-title">{lang === 'fr' ? 'Les 9 Valeurs Fondamentales' : 'The 9 Core Values'}</h2>
        </div>

        <div className="values-grid">
          {VALUES.map((v, i) => (
            <div key={i} className="value-card">
              <div className="value-card-bg" style={{ background: v.color }} />
              <div className="value-card-inner">
                <div className="value-number" style={{ color: v.color }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="value-name" style={{ color: v.color }}>{v.name[lang]}</h3>
                <p className="value-desc">{v.desc[lang]}</p>
              </div>
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
          color: #1a1a1a;
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
          background: linear-gradient(135deg, #1a0005 0%, #2d0008 100%);
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
          color: rgba(200,16,46,0.12);
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
          color: #1a1a1a;
          margin-bottom: 14px;
          position: relative;
          z-index: 1;
        }

        .mv-text {
          color: #666;
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
          display: inline-block;
          background: #fdf9e8;
          color: #f0a500;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 11px;
          padding: 4px 16px;
          border-radius: 100px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: 12px;
        }

        .values-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          font-size: clamp(24px, 3vw, 36px);
          color: #1a1a1a;
          letter-spacing: -0.02em;
        }

        /* ===== NEW VALUE CARDS DESIGN ===== */
        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 64px;
        }

        .value-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          cursor: default;
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease;
          background: white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }

        .value-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 24px 48px rgba(0,0,0,0.12);
        }

        .value-card-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 6px;
          opacity: 0.8;
          transition: height 0.4s ease, opacity 0.4s ease;
        }

        .value-card:hover .value-card-bg {
          height: 100%;
          opacity: 0.06;
        }

        .value-card-inner {
          position: relative;
          z-index: 1;
          padding: 32px 28px;
          background: white;
          border-radius: 20px;
          margin-top: 0;
        }

        .value-number {
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          font-size: 48px;
          line-height: 1;
          margin-bottom: 16px;
          opacity: 0.15;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .value-card:hover .value-number {
          opacity: 0.35;
          transform: scale(1.1);
        }

        .value-name {
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          font-size: 16px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin: 0 0 14px 0;
          position: relative;
          display: inline-block;
        }

        .value-name::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 32px;
          height: 3px;
          background: currentColor;
          opacity: 0.4;
          border-radius: 2px;
          transition: width 0.3s ease;
        }

        .value-card:hover .value-name::after {
          width: 48px;
        }

        .value-desc {
          color: #777;
          font-size: 14px;
          line-height: 1.8;
          margin: 16px 0 0 0;
          font-family: 'Inter', sans-serif;
        }

        .cta-section {
          background: linear-gradient(135deg, #1a0005 0%, #2d0008 100%);
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
          background: rgba(200,16,46,0.08);
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