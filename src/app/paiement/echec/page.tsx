'use client';
import Link from 'next/link';

export default function PaymentEchecPage() {
  return (
    <div style={{
      minHeight: '100vh',
      paddingTop: '68px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'radial-gradient(ellipse at 50% 30%, rgba(212,18,23,0.1) 0%, transparent 60%)',
    }}>
      <div style={{ textAlign: 'center', maxWidth: '520px', padding: '40px 24px', animation: 'fadeUp 0.6s ease' }}>
        <div style={{
          width: '100px',
          height: '100px',
          background: 'rgba(212,18,23,0.15)',
          border: '3px solid #D41217',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '48px',
          margin: '0 auto 32px',
        }}>
          ✕
        </div>

        <div className="tag tag-red" style={{ marginBottom: '20px' }}>
          Paiement échoué
        </div>

        <h1 style={{
          fontFamily: 'Barlow Condensed, sans-serif',
          fontWeight: 900,
          fontSize: '52px',
          textTransform: 'uppercase',
          lineHeight: 1,
          marginBottom: '16px',
        }}>
          Paiement annulé
        </h1>

        <p style={{ color: '#888', fontSize: '16px', lineHeight: 1.7, marginBottom: '32px' }}>
          Votre paiement n&apos;a pas pu être traité. Aucun montant n&apos;a été débité. Vous pouvez réessayer ou contacter notre support.
        </p>

        <div style={{
          background: '#111',
          border: '1px solid rgba(212,18,23,0.2)',
          borderRadius: '8px',
          padding: '20px',
          marginBottom: '32px',
          textAlign: 'left',
        }}>
          <h4 style={{ fontSize: '14px', marginBottom: '12px', color: '#ccc' }}>Causes possibles :</h4>
          {['Carte refusée ou fonds insuffisants', 'Session expirée', 'Paiement annulé manuellement', 'Erreur de connexion'].map(c => (
            <div key={c} style={{ display: 'flex', gap: '8px', color: '#666', fontSize: '14px', marginBottom: '8px' }}>
              <span style={{ color: '#D41217', flexShrink: 0 }}>•</span> {c}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/formations" className="btn btn-primary" style={{ fontSize: '15px', padding: '14px 32px' }}>
            Réessayer
          </Link>
          <Link href="/" className="btn btn-outline" style={{ fontSize: '15px', padding: '14px 32px' }}>
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>

      <style>{`@keyframes fadeUp { from { opacity:0; transform: translateY(24px); } to { opacity:1; transform: translateY(0); } }`}</style>
    </div>
  );
}
