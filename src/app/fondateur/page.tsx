import Link from 'next/link';

export default function FondateurPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f7f8fa' }}>

      {/* Header */}
      <div style={{ background: '#1a1a1a', borderBottom: '3px solid #C8102E', padding: '48px 0 32px' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', fontSize: '13px', color: '#666', fontFamily: 'Montserrat,sans-serif' }}>
            <Link href="/" style={{ color: '#666' }}>Accueil</Link>
            <span>/</span>
            <span style={{ color: '#C8102E' }}>Le Fondateur</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(28px,5vw,52px)', color: 'white' }}>
            THE FOUNDER
          </h1>
        </div>
      </div>

      <div className="container" style={{ padding: 'clamp(48px,6vw,80px) 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 'clamp(40px,6vw,80px)', alignItems: 'start' }} className="founder-grid">

          {/* Photo */}
          <div style={{ position: 'sticky', top: '24px' }}>
            <div style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.15)', marginBottom: '20px' }}>
              <img
                src="https://academytwentyone.com/web/assets/img/chairman.jpg"
                alt="Dr. Raoul Ruben Njionou"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div style={{ background: 'white', border: '1px solid #e0e2e6', borderTop: '4px solid #C8102E', borderRadius: '8px', padding: '24px' }}>
              <h3 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '18px', color: '#1a1a1a', marginBottom: '6px' }}>
                Dr. Raoul Ruben NJIONOU
              </h3>
              <p style={{ color: '#C8102E', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
                Founder, Chairman & CEO
              </p>
              {[
                { label: 'Expérience MLM', val: '15+ ans' },
                { label: 'Business', val: '20+ ans' },
                { label: 'Présence', val: '5 continents' },
                { label: 'Pays', val: '75+' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #f0f1f3', fontSize: '13px' }}>
                  <span style={{ color: '#888' }}>{item.label}</span>
                  <span style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 700, color: '#1a1a1a' }}>{item.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contenu */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ width: '40px', height: '3px', background: '#C8102E' }} />
              <span style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C8102E' }}>Le Fondateur</span>
            </div>

            <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(24px,3vw,38px)', color: '#1a1a1a', marginBottom: '28px', lineHeight: 1.2 }}>
              The Founder
            </h2>

            <p style={{ color: '#555', fontSize: '15px', lineHeight: 1.9, marginBottom: '20px' }}>
              Créer et mettre en œuvre une académie inspirante et innovante ne s&apos;est pas fait ex-nihilo. Le brillant esprit derrière cette idée révolutionnaire n&apos;est autre que <strong style={{ color: '#1a1a1a' }}>Dr. Raoul Ruben NJIONOU</strong>, Fondateur, Chairman & CEO d&apos;A21.
            </p>

            <p style={{ color: '#555', fontSize: '15px', lineHeight: 1.9, marginBottom: '20px' }}>
              Son parcours est hautement inspirant pour les milliers de personnes qui le suivent à travers le monde et s&apos;identifient à son image de leader d&apos;impact.
            </p>

            <p style={{ color: '#555', fontSize: '15px', lineHeight: 1.9, marginBottom: '20px' }}>
              Avec près de 15 ans d&apos;expérience dans le secteur du Marketing de Réseau et plus de 20 ans dans le monde des affaires, il s&apos;est taillé une place au soleil et a gravi les échelons jusqu&apos;au sommet de la hiérarchie sociale.
            </p>

            <p style={{ color: '#555', fontSize: '15px', lineHeight: 1.9, marginBottom: '20px' }}>
              Néanmoins, son sens des responsabilités et son travail acharné l&apos;empêchent de se reposer sur ses lauriers. Aider et soutenir ses semblables pour qu&apos;ils redeviennent les architectes de leur propre avenir est sa déclaration de mission.
            </p>

            <p style={{ color: '#555', fontSize: '15px', lineHeight: 1.9, marginBottom: '20px' }}>
              C&apos;est pourquoi, année après année, il parcourt le monde avec ses partenaires commerciaux, dans le but de transformer positivement la vie des autres à travers les conférences hebdomadaires qu&apos;il organise.
            </p>

            <p style={{ color: '#555', fontSize: '15px', lineHeight: 1.9, marginBottom: '32px' }}>
              En tant que véritable coach de vie, les témoignages sur sa contribution significative au développement mental, personnel et professionnel de sa communauté abondent sur 5 continents. Il est également l&apos;auteur du livre à succès <em>Network Marketing, More than a profession</em>.
            </p>

            {/* Citation */}
            <div style={{ background: '#1a1a1a', borderLeft: '4px solid #C8102E', borderRadius: '0 8px 8px 0', padding: '24px 28px', marginBottom: '32px' }}>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '12px' }}>
                &ldquo;Dream. Action. Success. Reinvent Your Future.&rdquo;
              </p>
              <span style={{ color: '#C8102E', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Dr. Raoul Ruben NJIONOU
              </span>
            </div>

            <Link href="/formations" style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: '#C8102E', color: 'white',
              fontFamily: 'Montserrat,sans-serif', fontWeight: 700,
              fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase',
              padding: '14px 28px', borderRadius: '4px',
            }}>
              Découvrir les formations
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </div>

      <style>{`@media (max-width: 900px) { .founder-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}