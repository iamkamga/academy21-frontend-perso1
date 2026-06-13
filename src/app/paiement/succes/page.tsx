'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function SuccessContent() {
  const params = useSearchParams();
  const sessionId = params.get('session_id');

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f7f8fa',
      padding: '40px 24px',
    }}>
      <div style={{ textAlign: 'center', maxWidth: '560px', width: '100%', animation: 'fadeUp 0.6s ease' }}>

        {/* Check */}
        <div style={{
          width: '80px', height: '80px',
          background: 'rgba(40,167,69,0.1)',
          border: '3px solid #28a745',
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '36px', margin: '0 auto 24px',
          animation: 'pulse-green 2s ease infinite',
        }}>✓</div>

        <div style={{
          display: 'inline-block', background: '#e8f5e9', color: '#2e7d32',
          fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '11px',
          padding: '4px 14px', borderRadius: '20px', letterSpacing: '0.1em',
          textTransform: 'uppercase', marginBottom: '16px',
        }}>Paiement confirmé</div>

        <h1 style={{
          fontFamily: 'Montserrat,sans-serif', fontWeight: 900,
          fontSize: 'clamp(28px, 5vw, 44px)',
          lineHeight: 1.1, marginBottom: '12px', color: '#1a1a1a',
        }}>
          Merci pour votre inscription !
        </h1>

        <p style={{ color: '#777', fontSize: '15px', lineHeight: 1.7, marginBottom: '28px' }}>
          Votre paiement a bien été reçu. Un email de confirmation vous a été envoyé.
        </p>

        {/* Étapes */}
        <div style={{
          background: 'white', border: '1px solid #e0e2e6',
          borderTop: '4px solid #C8102E',
          borderRadius: '8px', padding: '24px',
          marginBottom: '24px', textAlign: 'left',
        }}>
          <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '13px', color: '#1a1a1a', marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Prochaines étapes
          </div>
          {[
            { icon: '📧', step: '1', text: 'Email de confirmation envoyé sur votre adresse' },
            { icon: '👨‍💼', step: '2', text: 'Notre équipe active votre accès à la formation' },
            { icon: '🎓', step: '3', text: 'Accédez à votre formation depuis votre dashboard' },
          ].map(item => (
            <div key={item.step} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', marginBottom: '14px' }}>
              <div style={{
                width: '28px', height: '28px', borderRadius: '50%',
                background: '#C8102E', color: 'white', flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '12px',
              }}>
                {item.step}
              </div>
              <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.65, paddingTop: '3px' }}>
                {item.icon} {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Info */}
        <div style={{
          background: '#f0fdf4', border: '1px solid #86efac',
          borderLeft: '4px solid #22c55e',
          borderRadius: '8px', padding: '14px 18px', marginBottom: '28px',
          display: 'flex', gap: '10px', alignItems: 'flex-start', textAlign: 'left',
        }}>
          <span style={{ fontSize: '18px', flexShrink: 0 }}>✅</span>
          <p style={{ fontSize: '13px', color: '#15803d', lineHeight: 1.65 }}>
            <strong>Votre compte est actif.</strong> Rendez-vous sur votre dashboard pour suivre votre formation dès que votre accès est activé par notre équipe.
          </p>
        </div>

        {sessionId && (
          <p style={{ color: '#bbb', fontSize: '11px', marginBottom: '24px', fontFamily: 'monospace' }}>
            Réf : {sessionId.substring(0, 24)}...
          </p>
        )}

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/dashboard" className="btn btn-primary" style={{ fontSize: '14px', padding: '14px 32px' }}>
            Accéder à mon dashboard →
          </Link>
          <Link href="/formations" className="btn btn-outline" style={{ fontSize: '14px', padding: '14px 32px' }}>
            Voir les formations
          </Link>
        </div>

      </div>

      <style>{`
        @keyframes fadeUp { from { opacity:0; transform: translateY(20px); } to { opacity:1; transform: translateY(0); } }
        @keyframes pulse-green {
          0%, 100% { box-shadow: 0 0 0 0 rgba(40,167,69,0.3); }
          50% { box-shadow: 0 0 0 16px rgba(40,167,69,0); }
        }
      `}</style>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={<div className="loading-spinner" />}>
      <SuccessContent />
    </Suspense>
  );
}
