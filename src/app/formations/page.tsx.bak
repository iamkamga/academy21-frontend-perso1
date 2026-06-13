'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { api, Formation } from '@/lib/api';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

export default function FormationsPage() {
  const [formations, setFormations] = useState<Formation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [paying, setPaying] = useState<string | null>(null);
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    api.formations.list()
      .then(setFormations)
      .catch(() => setError('Impossible de charger les formations.'))
      .finally(() => setLoading(false));
  }, []);

  const handleBuy = async (f: Formation, method: 'stripe' | 'paypal') => {
    if (!user) { router.push('/login'); return; }
    setPaying(f.id);
    try {
      if (method === 'stripe') {
        const { url } = await api.payments.stripeCheckout(f.id, f.price, f.title);
        window.location.href = url;
      } else {
        const { url } = await api.payments.paypalCreate(f.id, f.price, f.title);
        window.location.href = url;
      }
    } catch (e: unknown) {
      alert(e instanceof Error ? e.message : 'Erreur paiement');
      setPaying(null);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f7f8fa' }}>
      {/* Header */}
      <div style={{
        background: 'white',
        borderBottom: '3px solid #C8102E',
        padding: 'clamp(40px, 8vw, 80px) 0 clamp(24px, 4vw, 48px)',
      }}>
        <div className="container">
          <div className="tag tag-red" style={{ marginBottom: '14px' }}>📚 Catalogue</div>
          <h1 className="section-title">Nos <span>Formations</span></h1>
          <p className="section-sub" style={{ marginBottom: 0 }}>
            Investissez dans votre développement avec des programmes d&apos;excellence
          </p>
        </div>
      </div>

      <div className="container section">
        {loading && <div className="loading-spinner" />}
        {error && <div className="error-msg">{error}</div>}

        {/* ── FORMATION STATIQUE A21 ── */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{
            background: 'white', border: '1px solid #e0e2e6',
            borderRadius: '12px', overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            transition: 'all 0.3s',
          }}>
            {/* Banner */}
            <div style={{
              height: 'clamp(140px, 18vw, 200px)',
              background: 'linear-gradient(135deg, #1a1a1a 0%, #2d0010 60%, #1a0a00 100%)',
              position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(200,16,46,0.2) 0%, transparent 60%)' }} />
              <div style={{ textAlign: 'center', zIndex: 1 }}>
                <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(28px, 5vw, 48px)', color: 'white', lineHeight: 1 }}>🤖</div>
                <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(10px, 1.5vw, 13px)', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '8px' }}>Intelligence Artificielle</div>
              </div>
              <div style={{ position: 'absolute', top: '14px', right: '14px', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                <span className="tag tag-red" style={{ fontSize: '10px' }}>Formation Pro</span>
                <span style={{ display: 'inline-block', padding: '3px 10px', borderRadius: '20px', fontSize: '10px', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', background: 'rgba(126,200,42,0.2)', color: '#7EC82A', border: '1px solid rgba(126,200,42,0.4)' }}>✓ CPF</span>
              </div>
              <div style={{ position: 'absolute', bottom: '14px', left: '18px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ background: 'white', color: '#C8102E', fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '13px', padding: '4px 12px', borderRadius: '4px' }}>Sur devis</span>
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px' }}>· 20 heures</span>
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: 'clamp(16px, 3vw, 28px)', display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '240px' }}>
                <h3 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(16px, 2.5vw, 20px)', marginBottom: '10px', color: '#1a1a1a', lineHeight: 1.3 }}>
                  IA appliquée au Marketing de Réseau
                </h3>
                <p style={{ color: '#777', fontSize: '14px', lineHeight: 1.7, marginBottom: '16px' }}>
                  Intégrez l&apos;intelligence artificielle dans votre activité commerciale. 5 modules pratiques pour maîtriser la prospection, le contenu, la conversion et l&apos;automatisation.
                </p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {['5 modules', '20h', 'Distanciel', '12-20 pers.'].map(tag => (
                    <span key={tag} className="tag tag-grey" style={{ fontSize: '11px' }}>{tag}</span>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flexShrink: 0 }}>
                <Link href="/formations/ia-marketing-reseau" className="btn btn-primary" style={{ fontSize: '13px', padding: '12px 24px', justifyContent: 'center' }}>
                  Voir le programme →
                </Link>
                <Link href="/register" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: '10px 24px', border: '1.5px solid #e0e2e6', borderRadius: '6px',
                  fontFamily: 'Montserrat,sans-serif', fontWeight: 700,
                  fontSize: '12px', color: '#555', textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}>
                  S&apos;inscrire
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── FORMATIONS DYNAMIQUES API ── */}
        {!loading && !error && formations.length === 0 && (
          <div style={{ textAlign: 'center', color: '#aaa', padding: '60px 0' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>📭</div>
            <p>Aucune autre formation disponible pour le moment.</p>
          </div>
        )}

        <div className="grid-2">
          {formations.map((f, i) => (
            <FormationCard
              key={f.id}
              formation={f}
              index={i}
              paying={paying === f.id}
              onBuy={handleBuy}
              isLoggedIn={!!user}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FormationCard({
  formation: f, index, paying, onBuy, isLoggedIn,
}: {
  formation: Formation;
  index: number;
  paying: boolean;
  onBuy: (f: Formation, method: 'stripe' | 'paypal') => void;
  isLoggedIn: boolean;
}) {
  const [showPayOptions, setShowPayOptions] = useState(false);

  return (
    <div className="card" style={{ overflow: 'hidden', animation: `fadeUp 0.5s ease ${index * 0.1}s both` }}>
      <div style={{
        height: 'clamp(160px, 20vw, 220px)',
        background: f.imageUrl
          ? `url(${f.imageUrl}) center/cover`
          : 'linear-gradient(135deg, #1a0202 0%, #2a0a0a 100%)',
        position: 'relative',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)' }} />
        <div style={{ position: 'absolute', top: '14px', right: '14px' }} className="tag tag-gold">Formation</div>
        <div style={{
          position: 'absolute', bottom: '14px', left: '18px',
          fontFamily: 'Montserrat,sans-serif', fontWeight: 900,
          fontSize: 'clamp(18px, 3vw, 24px)', color: '#C8102E',
          background: 'white', padding: '4px 12px', borderRadius: '4px',
        }}>
          {f.price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
        </div>
      </div>

      <div style={{ padding: 'clamp(16px, 3vw, 24px)' }}>
        <h3 style={{ fontSize: 'clamp(16px, 2.5vw, 20px)', marginBottom: '10px', fontFamily: 'Montserrat,sans-serif', fontWeight: 800 }}>{f.title}</h3>
        <p style={{ color: '#777', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>{f.description}</p>

        {!showPayOptions ? (
          <button
            onClick={() => isLoggedIn ? setShowPayOptions(true) : onBuy(f, 'stripe')}
            disabled={paying}
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            {paying ? 'Redirection...' : isLoggedIn ? '💳 Acheter cette formation' : '🔐 Se connecter pour acheter'}
          </button>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <p style={{ fontSize: '11px', color: '#aaa', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Choisir le paiement</p>
            <button onClick={() => onBuy(f, 'stripe')} disabled={paying} className="btn btn-primary" style={{ justifyContent: 'center' }}>
              {paying ? 'Redirection...' : '💳 Payer par carte (Stripe)'}
            </button>
            <button onClick={() => onBuy(f, 'paypal')} disabled={paying} style={{
              background: '#f0a500', color: '#1a1a1a', border: 'none',
              borderRadius: '6px', padding: '13px', cursor: 'pointer',
              fontFamily: 'Montserrat,sans-serif', fontWeight: 700,
              fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em',
            }}>
              {paying ? 'Redirection...' : '🅿️ Payer via PayPal'}
            </button>
            <button onClick={() => setShowPayOptions(false)} style={{
              background: 'none', border: 'none', color: '#aaa',
              fontSize: '13px', textDecoration: 'underline', cursor: 'pointer',
              fontFamily: 'Montserrat,sans-serif',
            }}>
              Annuler
            </button>
          </div>
        )}
      </div>
      <style>{`@keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }`}</style>
    </div>
  );
}