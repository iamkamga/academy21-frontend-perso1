'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { getProgramme } from '@/lib/catalogue';

export type InscriptionProps = {
  programmeId: string;          // id dans lib/catalogue.ts
  heading: string;              // ex. « Bachelor Management »
  label: string;                // ligne de récap
  details: string[];            // ex. ['Bac+3', '420 h', 'Hybride']
  backHref: string;
  afterSteps: string[];         // étapes après paiement
};

export default function InscriptionProgramme({ programmeId, heading, label, details, backHref, afterSteps }: InscriptionProps) {
  const prog = getProgramme(programmeId)!;
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!authLoading && !user) router.push('/login?redirect=' + encodeURIComponent(pathname));
  }, [user, authLoading, router, pathname]);

  const handlePayment = async (method: 'stripe' | 'paypal') => {
    setLoading(true);
    setError('');
    try {
      const endpoint = method === 'stripe' ? '/api/payments/checkout' : '/api/payments/paypal/create';
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formationId: prog.id }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || data.message || 'Erreur paiement');
      window.location.href = data.url;
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Erreur paiement');
      setLoading(false);
    }
  };

  if (authLoading || !user) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="loading-spinner" />
      </div>
    );
  }

  const font = 'Montserrat,sans-serif';

  return (
    <div style={{ minHeight: '100vh', background: '#f7f8fa' }}>
      <div style={{ background: 'white', borderBottom: '3px solid #C8102E', padding: 'clamp(32px, 5vw, 56px) 0 clamp(20px, 3vw, 32px)' }}>
        <div className="container">
          <Link href={backHref} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#aaa', fontSize: '13px', fontFamily: font, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
            ← Retour au programme
          </Link>
          <h1 style={{ fontFamily: font, fontWeight: 900, fontSize: 'clamp(20px, 4vw, 34px)', color: '#1a1a1a', marginBottom: '6px' }}>
            Inscription — <span style={{ color: '#C8102E' }}>{heading}</span>
          </h1>
          <p style={{ color: '#aaa', fontSize: '14px' }}>Connecté en tant que <strong>{user.email}</strong></p>
        </div>
      </div>

      <div className="container" style={{ padding: 'clamp(24px, 4vw, 48px) 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 280px', gap: '28px', alignItems: 'start' }} className="inscription-grid">

          <div style={{ background: 'white', border: '1px solid #e0e2e6', borderTop: '4px solid #C8102E', borderRadius: '8px', padding: 'clamp(20px, 4vw, 36px)' }}>
            <h2 style={{ fontFamily: font, fontWeight: 900, fontSize: '20px', marginBottom: '8px', color: '#1a1a1a' }}>Régler votre acompte d&apos;inscription</h2>
            <p style={{ color: '#888', fontSize: '13px', marginBottom: '24px', lineHeight: 1.6 }}>
              L&apos;acompte réserve votre place dans la prochaine promotion et lance votre dossier d&apos;admission. Il est déduit des frais de scolarité.
            </p>

            <div style={{ background: '#f7f8fa', border: '1px solid #e0e2e6', borderRadius: '8px', padding: '14px 18px', marginBottom: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <div>
                  <div style={{ fontFamily: font, fontWeight: 800, fontSize: '14px', color: '#1a1a1a', marginBottom: '4px' }}>{label}</div>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', fontSize: '12px', color: '#888' }}>
                    {details.map(d => <span key={d}>{d}</span>)}
                    <span>Scolarité : {prog.tuition}</span>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '10px', fontFamily: font, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#aaa' }}>À régler maintenant</div>
                  <div style={{ fontFamily: font, fontWeight: 900, fontSize: '22px', color: '#C8102E' }}>{prog.price.toLocaleString('fr-FR')} €</div>
                </div>
              </div>
            </div>

            {error && <div className="error-msg">{error}</div>}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
              <button onClick={() => handlePayment('stripe')} disabled={loading}
                style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '18px 20px', background: 'white', border: '2px solid #C8102E', borderRadius: '8px', cursor: loading ? 'not-allowed' : 'pointer', width: '100%' }}>
                <div style={{ flex: 1, textAlign: 'left' }}>
                  <div style={{ fontFamily: font, fontWeight: 800, fontSize: '15px', color: '#1a1a1a' }}>Payer par carte bancaire</div>
                  <div style={{ fontSize: '12px', color: '#aaa', marginTop: '2px' }}>Visa, Mastercard, CB — via Stripe sécurisé</div>
                </div>
                <span style={{ color: '#C8102E', fontWeight: 900, fontSize: '20px' }}>→</span>
              </button>
              <button onClick={() => handlePayment('paypal')} disabled={loading}
                style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '18px 20px', background: 'white', border: '2px solid #e0e2e6', borderRadius: '8px', cursor: loading ? 'not-allowed' : 'pointer', width: '100%' }}>
                <div style={{ flex: 1, textAlign: 'left' }}>
                  <div style={{ fontFamily: font, fontWeight: 800, fontSize: '15px', color: '#1a1a1a' }}>Payer via PayPal</div>
                  <div style={{ fontSize: '12px', color: '#aaa', marginTop: '2px' }}>Compte PayPal ou carte via PayPal</div>
                </div>
                <span style={{ color: '#f0a500', fontWeight: 900, fontSize: '20px' }}>→</span>
              </button>
            </div>

            {loading && (
              <div style={{ textAlign: 'center', color: '#aaa', fontSize: '13px', padding: '8px' }}>
                <div className="loading-spinner" style={{ width: '24px', height: '24px', margin: '0 auto 8px' }} />
                Redirection vers le paiement sécurisé...
              </div>
            )}

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #f0f1f3' }}>
              {['🔒 Paiement SSL sécurisé', '✓ Données protégées', '📧 Confirmation par email'].map(t => (
                <span key={t} style={{ fontSize: '11px', color: '#aaa', fontFamily: font, fontWeight: 600 }}>{t}</span>
              ))}
            </div>
          </div>

          <div style={{ position: 'sticky', top: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ background: 'white', border: '1px solid #e0e2e6', borderRadius: '8px', padding: '16px 18px' }}>
              <h4 style={{ fontFamily: font, fontWeight: 800, fontSize: '12px', color: '#1a1a1a', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Après votre paiement</h4>
              {afterSteps.map((text, i) => (
                <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '12px', alignItems: 'flex-start' }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#C8102E', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: font, fontWeight: 900, fontSize: '10px', flexShrink: 0 }}>{i + 1}</div>
                  <p style={{ fontSize: '12px', color: '#555', lineHeight: 1.6 }}>{text}</p>
                </div>
              ))}
            </div>
            <div style={{ background: '#fff5f5', border: '1px solid rgba(200,16,46,0.15)', borderRadius: '8px', padding: '14px 18px' }}>
              <div style={{ fontFamily: font, fontWeight: 800, fontSize: '12px', color: '#C8102E', marginBottom: '6px' }}>Une question ?</div>
              <a href="mailto:contact@academy21france.fr" style={{ fontSize: '12px', color: '#C8102E', fontFamily: font, fontWeight: 700 }}>✉️ contact@academy21france.fr</a>
            </div>
          </div>
        </div>
      </div>

      <style>{`@media (max-width: 900px) { .inscription-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}
