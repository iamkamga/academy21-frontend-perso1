'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

type Stat = { label: string; value: string | number; icon: string; color: string };
type Member = { id: string; email: string; role: string; createdAt: string; payments: any[] };
type Payment = { id: string; amount: number; status: string; method: string; createdAt: string; user: { email: string }; formation?: { title: string } };

export default function AdminDashboard() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'stats' | 'membres' | 'paiements'>('stats');
  const [members, setMembers] = useState<Member[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!authLoading && !user) router.push('/login');
    if (!authLoading && user && user.role !== 'admin') router.push('/dashboard');
  }, [user, authLoading, router]);

  useEffect(() => {
    if (user?.role === 'admin') {
      const token = localStorage.getItem('ato_token');
      const headers = { Authorization: `Bearer ${token}` };
      Promise.all([
        fetch(`${BASE_URL}/api/admin/members`, { headers }).then(r => r.json()),
        fetch(`${BASE_URL}/api/admin/payments`, { headers }).then(r => r.json()),
      ]).then(([m, p]) => {
        setMembers(Array.isArray(m) ? m : []);
        setPayments(Array.isArray(p) ? p : []);
      }).catch(() => setError('Erreur chargement données'))
        .finally(() => setLoading(false));
    }
  }, [user]);

  if (authLoading || loading) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f7f8fa' }}>
      <div className="loading-spinner" />
    </div>
  );

  if (!user || user.role !== 'admin') return null;

  const totalRevenue = payments.reduce((s, p) => s + (p.amount || 0), 0);
  const STATS: Stat[] = [
    { label: 'Membres total', value: members.length, icon: '👥', color: '#1a6fc4' },
    { label: 'Paiements', value: payments.length, icon: '💳', color: '#28a745' },
    { label: 'Revenus total', value: `${totalRevenue.toLocaleString('fr-FR')} €`, icon: '💰', color: '#f0a500' },
    { label: 'Admins', value: members.filter(m => m.role === 'admin').length, icon: '🔑', color: '#C8102E' },
  ];

  const TABS = [
    { key: 'stats', label: '📊 Tableau de bord' },
    { key: 'membres', label: '👥 Membres' },
    { key: 'paiements', label: '💳 Paiements' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#f7f8fa' }}>

      {/* Header */}
      <div style={{ background: 'white', borderBottom: '3px solid #C8102E', padding: '20px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(18px,3vw,26px)', color: '#1a1a1a' }}>
                🔑 Dashboard <span style={{ color: '#C8102E' }}>Admin</span>
              </div>
              <div style={{ fontSize: '13px', color: '#aaa', marginTop: '2px' }}>{user.email}</div>
            </div>
            <a href="/dashboard" style={{ background: '#f7f8fa', border: '1.5px solid #e0e2e6', borderRadius: '6px', padding: '8px 16px', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '12px', color: '#555', textDecoration: 'none' }}>
              ← Espace membre
            </a>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ background: 'white', borderBottom: '1px solid #e0e2e6' }}>
        <div className="container">
          <div style={{ display: 'flex' }}>
            {TABS.map(tab => (
              <button key={tab.key} onClick={() => setActiveTab(tab.key as any)} style={{
                padding: '16px 20px', background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '13px',
                color: activeTab === tab.key ? '#C8102E' : '#888',
                borderBottom: activeTab === tab.key ? '3px solid #C8102E' : '3px solid transparent',
                marginBottom: '-1px', whiteSpace: 'nowrap',
              }}>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: 'clamp(20px,4vw,40px) 24px' }}>
        {error && <div style={{ background: '#fff5f5', border: '1px solid rgba(200,16,46,0.3)', borderRadius: '8px', padding: '12px 16px', marginBottom: '20px', color: '#C8102E', fontSize: '13px' }}>{error}</div>}

        {/* ── STATS ── */}
        {activeTab === 'stats' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '16px', marginBottom: '32px' }}>
              {STATS.map(s => (
                <div key={s.label} style={{ background: 'white', borderRadius: '10px', border: '1px solid #e0e2e6', borderTop: `4px solid ${s.color}`, padding: '20px 24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <div style={{ fontSize: '11px', color: '#aaa', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>{s.label}</div>
                      <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(22px,3vw,32px)', color: s.color }}>{s.value}</div>
                    </div>
                    <span style={{ fontSize: '28px' }}>{s.icon}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Derniers paiements */}
            <div style={{ background: 'white', borderRadius: '10px', border: '1px solid #e0e2e6', overflow: 'hidden', marginBottom: '24px' }}>
              <div style={{ padding: '16px 20px', borderBottom: '1px solid #f0f1f3', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '14px', color: '#1a1a1a' }}>Derniers paiements</div>
                <button onClick={() => setActiveTab('paiements')} style={{ background: 'none', border: 'none', color: '#C8102E', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '12px', cursor: 'pointer' }}>Voir tout →</button>
              </div>
              {payments.slice(0, 5).map((p, i) => (
                <div key={p.id} style={{ padding: '14px 20px', borderBottom: i < 4 ? '1px solid #f0f1f3' : 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                  <div>
                    <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '13px', color: '#1a1a1a' }}>{p.user?.email || 'N/A'}</div>
                    <div style={{ fontSize: '12px', color: '#aaa' }}>{p.formation?.title || 'Formation'} · {new Date(p.createdAt).toLocaleDateString('fr-FR')}</div>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <span style={{ background: '#e8f5e9', color: '#2e7d32', padding: '3px 10px', borderRadius: '20px', fontSize: '11px', fontFamily: 'Montserrat,sans-serif', fontWeight: 700 }}>✓ Payé</span>
                    <span style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '16px', color: '#f0a500' }}>{p.amount} €</span>
                  </div>
                </div>
              ))}
              {payments.length === 0 && <div style={{ padding: '40px', textAlign: 'center', color: '#aaa', fontSize: '14px' }}>Aucun paiement</div>}
            </div>

            {/* Derniers membres */}
            <div style={{ background: 'white', borderRadius: '10px', border: '1px solid #e0e2e6', overflow: 'hidden' }}>
              <div style={{ padding: '16px 20px', borderBottom: '1px solid #f0f1f3', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '14px', color: '#1a1a1a' }}>Derniers membres</div>
                <button onClick={() => setActiveTab('membres')} style={{ background: 'none', border: 'none', color: '#C8102E', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '12px', cursor: 'pointer' }}>Voir tout →</button>
              </div>
              {members.slice(0, 5).map((m, i) => (
                <div key={m.id} style={{ padding: '14px 20px', borderBottom: i < 4 ? '1px solid #f0f1f3' : 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg,#C8102E,#8b0000)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '14px', color: 'white', flexShrink: 0 }}>
                      {m.email[0].toUpperCase()}
                    </div>
                    <div>
                      <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '13px', color: '#1a1a1a' }}>{m.email}</div>
                      <div style={{ fontSize: '12px', color: '#aaa' }}>Inscrit le {new Date(m.createdAt).toLocaleDateString('fr-FR')}</div>
                    </div>
                  </div>
                  <span style={{ background: m.role === 'admin' ? '#fff5f5' : '#f0f6ff', color: m.role === 'admin' ? '#C8102E' : '#1a6fc4', padding: '3px 10px', borderRadius: '20px', fontSize: '11px', fontFamily: 'Montserrat,sans-serif', fontWeight: 700 }}>
                    {m.role === 'admin' ? '🔑 Admin' : '✅ Membre'}
                  </span>
                </div>
              ))}
              {members.length === 0 && <div style={{ padding: '40px', textAlign: 'center', color: '#aaa', fontSize: '14px' }}>Aucun membre</div>}
            </div>
          </div>
        )}

        {/* ── MEMBRES ── */}
        {activeTab === 'membres' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
              <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '20px', color: '#1a1a1a', margin: 0 }}>
                Membres <span style={{ color: '#C8102E' }}>({members.length})</span>
              </h2>
            </div>
            <div style={{ background: 'white', borderRadius: '10px', border: '1px solid #e0e2e6', overflow: 'hidden' }}>
              {members.length === 0 ? (
                <div style={{ padding: '60px', textAlign: 'center', color: '#aaa' }}>
                  <div style={{ fontSize: '40px', marginBottom: '12px' }}>👥</div>
                  <p>Aucun membre pour le moment.</p>
                </div>
              ) : members.map((m, i) => (
                <div key={m.id} style={{ padding: '16px 20px', borderBottom: i < members.length - 1 ? '1px solid #f0f1f3' : 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg,#C8102E,#8b0000)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '16px', color: 'white', flexShrink: 0 }}>
                      {m.email[0].toUpperCase()}
                    </div>
                    <div>
                      <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '14px', color: '#1a1a1a' }}>{m.email}</div>
                      <div style={{ fontSize: '12px', color: '#aaa' }}>
                        Inscrit le {new Date(m.createdAt).toLocaleDateString('fr-FR')} · {m.payments?.length || 0} paiement(s)
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <span style={{ background: m.role === 'admin' ? '#fff5f5' : '#f0f6ff', color: m.role === 'admin' ? '#C8102E' : '#1a6fc4', padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontFamily: 'Montserrat,sans-serif', fontWeight: 700 }}>
                      {m.role === 'admin' ? '🔑 Admin' : '✅ Membre'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── PAIEMENTS ── */}
        {activeTab === 'paiements' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
              <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '20px', color: '#1a1a1a', margin: 0 }}>
                Paiements <span style={{ color: '#C8102E' }}>({payments.length})</span>
              </h2>
              <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '18px', color: '#f0a500' }}>
                Total : {totalRevenue.toLocaleString('fr-FR')} €
              </div>
            </div>
            <div style={{ background: 'white', borderRadius: '10px', border: '1px solid #e0e2e6', overflow: 'hidden' }}>
              {payments.length === 0 ? (
                <div style={{ padding: '60px', textAlign: 'center', color: '#aaa' }}>
                  <div style={{ fontSize: '40px', marginBottom: '12px' }}>💳</div>
                  <p>Aucun paiement pour le moment.</p>
                </div>
              ) : payments.map((p, i) => (
                <div key={p.id} style={{ padding: '16px 20px', borderBottom: i < payments.length - 1 ? '1px solid #f0f1f3' : 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                  <div>
                    <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '14px', color: '#1a1a1a', marginBottom: '4px' }}>{p.user?.email || 'N/A'}</div>
                    <div style={{ fontSize: '12px', color: '#aaa' }}>
                      {p.formation?.title || 'Formation'} · {new Date(p.createdAt).toLocaleDateString('fr-FR')} · {p.method === 'stripe' ? '💳 Stripe' : '🅿️ PayPal'}
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <span style={{ background: '#e8f5e9', color: '#2e7d32', border: '1px solid #c8e6c9', padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontFamily: 'Montserrat,sans-serif', fontWeight: 700 }}>✓ Payé</span>
                    <span style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '18px', color: '#f0a500' }}>{p.amount} €</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}