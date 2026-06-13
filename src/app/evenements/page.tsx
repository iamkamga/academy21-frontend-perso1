'use client';
import { useEffect, useState } from 'react';
import { api, Event } from '@/lib/api';

export default function EvenementsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    api.events.list()
      .then(setEvents)
      .catch(() => setError('Impossible de charger les événements.'))
      .finally(() => setLoading(false));
  }, []);

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div style={{ paddingTop: '68px', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{
        padding: '80px 0 60px',
        background: 'linear-gradient(180deg, rgba(200,162,0,0.08) 0%, transparent 100%)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div className="container">
          <div className="tag tag-gold" style={{ marginBottom: '16px' }}>🗓 Agenda</div>
          <h1 className="section-title">Nos <span>Événements</span></h1>
          <p className="section-sub">Rencontres, conférences et masterclasses exclusives</p>
        </div>
      </div>

      <div className="container section">
        {loading && <div className="loading-spinner" />}
        {error && <div className="error-msg">{error}</div>}

        {!loading && !error && events.length === 0 && (
          <div style={{ textAlign: 'center', color: '#666', padding: '80px 0' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>📭</div>
            <p>Aucun événement programmé pour le moment.</p>
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {events.map((ev, i) => {
            const date = new Date(ev.date);
            const isPast = date < new Date();
            return (
              <div key={ev.id} className="card" style={{
                padding: '0',
                overflow: 'hidden',
                display: 'flex',
                animation: `fadeUp 0.5s ease ${i * 0.1}s both`,
                opacity: isPast ? 0.6 : 1,
              }}>
                {/* Date column */}
                <div style={{
                  width: '120px',
                  flexShrink: 0,
                  background: isPast ? '#1a1a1a' : 'linear-gradient(180deg, #D41217, #a80e12)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '24px 16px',
                }}>
                  <div style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 900,
                    fontSize: '48px',
                    lineHeight: 1,
                    color: 'white',
                  }}>
                    {date.getDate().toString().padStart(2, '0')}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: isPast ? '#666' : 'rgba(255,255,255,0.8)',
                    marginTop: '4px',
                  }}>
                    {date.toLocaleString('fr-FR', { month: 'short' }).toUpperCase()}
                  </div>
                  <div style={{ fontSize: '12px', color: isPast ? '#555' : 'rgba(255,255,255,0.6)', marginTop: '2px' }}>
                    {date.getFullYear()}
                  </div>
                </div>

                {/* Content */}
                <div style={{ flex: 1, padding: '28px 32px', display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}>
                  <div style={{ flex: 1, minWidth: '200px' }}>
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '10px', flexWrap: 'wrap' }}>
                      {isPast ? (
                        <span className="tag" style={{ background: '#222', color: '#555', border: '1px solid #333' }}>Passé</span>
                      ) : (
                        <span className="tag tag-red">À venir</span>
                      )}
                      <span className="tag tag-blue">📍 Paris</span>
                    </div>
                    <h3 style={{ fontSize: '22px', marginBottom: '8px', textTransform: 'uppercase' }}>{ev.title}</h3>
                    <p style={{ color: '#888', fontSize: '14px', lineHeight: 1.6 }}>{ev.description}</p>
                    <div style={{ marginTop: '12px', color: '#666', fontSize: '13px' }}>
                      📅 {formatDate(ev.date)}
                    </div>
                  </div>

                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div className="price-tag" style={{ marginBottom: '12px' }}>
                      {ev.price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
                    </div>
                    <button
                      disabled={isPast}
                      className={`btn ${isPast ? '' : 'btn-primary'}`}
                      style={isPast ? { background: '#222', color: '#555', cursor: 'not-allowed', padding: '10px 24px' } : { padding: '10px 24px', fontSize: '14px' }}
                    >
                      {isPast ? 'Événement terminé' : "S'inscrire"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
