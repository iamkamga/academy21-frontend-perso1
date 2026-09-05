import Link from 'next/link';

export default function AProposPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f7f8fa' }}>

      {/* Header */}
      <div style={{ background: '#1a1a1a', borderBottom: '3px solid #C8102E', padding: '48px 0 32px' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', fontSize: '13px', color: '#666', fontFamily: 'Montserrat,sans-serif' }}>
            <Link href="/" style={{ color: '#666' }}>Accueil</Link>
            <span>/</span>
            <span style={{ color: '#C8102E' }}>Qui sommes-nous</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(28px,5vw,52px)', color: 'white' }}>
            WHO WE ARE ?
          </h1>
        </div>
      </div>

      <div className="container" style={{ padding: 'clamp(48px,6vw,80px) 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,80px)', alignItems: 'stretch', marginBottom: '64px' }} className="about-grid">

          {/* Image - même hauteur que le texte */}
          <div style={{ 
            borderRadius: '8px', 
            overflow: 'hidden', 
            boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
            position: 'relative',
            minHeight: '100%',
          }}>
            <img
              src="https://academytwentyone.com/web/assets/img/fr-waw.jpg"
              alt="Academy Twenty One — Who We Are"
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                display: 'block',
                position: 'absolute',
                inset: 0,
              }}
            />
          </div>

          {/* Texte */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ width: '40px', height: '3px', background: '#C8102E' }} />
              <span style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C8102E' }}>À propos</span>
            </div>
            <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(22px,3vw,34px)', color: '#1a1a1a', marginBottom: '24px', lineHeight: 1.2 }}>
              Un système de soutien <span style={{ color: '#C8102E' }}>international</span>
            </h2>
            <p style={{ color: '#555', fontSize: '15px', lineHeight: 1.9, marginBottom: '20px' }}>
              Academy Twenty One est un système de soutien international avec un fort accent sur le secteur du Marketing de Réseau. Nous sommes une académie spécialisée dans le développement personnel et le coaching en leadership.
            </p>
            <p style={{ color: '#555', fontSize: '15px', lineHeight: 1.9, marginBottom: '20px' }}>
              Notre objectif est de permettre à chacun de nos membres d&apos;atteindre la liberté de temps, la liberté financière et le succès dans la réalisation de soi.
            </p>
            <p style={{ color: '#555', fontSize: '15px', lineHeight: 1.9, marginBottom: '32px' }}>
              A21 est dynamique et mondiale ; à travers nos membres, nous sommes présents sur 5 continents, dans plus de 75 pays. Notre mission principale est de faire de nos membres des pionniers dans leur propre vie à travers les valeurs, les rêves, l&apos;action et le succès.
            </p>
            <p style={{ color: '#555', fontSize: '15px', lineHeight: 1.9 }}>
              Nous offrons à nos membres un programme de formation intensif d&apos;environ 2 000 séminaires par an, dispensés par nos leaders et partenaires en présentiel et en format digital, avec une moyenne d&apos;1 million de participants dans le monde.
            </p>
          </div>
        </div>

        {/* Fondateur */}
        <div style={{ background: 'white', border: '1px solid #e0e2e6', borderLeft: '4px solid #C8102E', borderRadius: '8px', padding: 'clamp(24px,4vw,40px)', display: 'flex', gap: 'clamp(24px,4vw,48px)', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flexShrink: 0 }}>
            <img
              src="https://academytwentyone.com/web/assets/img/chairman.jpg"
              alt="Dr. Raoul Ruben Njionou"
              style={{ width: 'clamp(100px,15vw,140px)', height: 'clamp(100px,15vw,140px)', borderRadius: '50%', objectFit: 'cover', border: '3px solid #C8102E' }}
            />
          </div>
          <div style={{ flex: 1, minWidth: '200px' }}>
            <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C8102E', marginBottom: '8px' }}>Le Fondateur</div>
            <h3 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(18px,2.5vw,26px)', color: '#1a1a1a', marginBottom: '10px' }}>
              Dr. Raoul Ruben NJIONOU
            </h3>
            <p style={{ color: '#666', fontSize: '14px', lineHeight: 1.75 }}>
              Fondateur, Chairman & CEO d&apos;A21. Avec près de 15 ans d&apos;expérience dans le Marketing de Réseau et plus de 20 ans dans le monde des affaires, il a su se faire une place au sommet. Leader d&apos;impact reconnu sur 5 continents.
            </p>
            <Link href="/fondateur" style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '16px',
              color: '#C8102E', fontFamily: 'Montserrat,sans-serif', fontWeight: 700,
              fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em',
            }}>
              En savoir plus
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </div>

      <style>{`@media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}