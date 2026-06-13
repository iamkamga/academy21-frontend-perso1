'use client';
import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login, user, loading: authLoading } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect') || '/formations';
  const registered = searchParams.get('registered') === '1';

  useEffect(() => {
    if (!authLoading && user) router.push(redirect);
  }, [user, authLoading, router, redirect]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      router.push(redirect);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Identifiants incorrects');
    } finally {
      setLoading(false);
    }
  };

  if (authLoading) return null;

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f7f8fa',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 24px',
    }}>
      <div style={{ width: '100%', maxWidth: '420px' }}>

        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <img src="/logo-a21-france.png" alt="Academy 21 France" style={{ height: '72px', width: 'auto', marginBottom: '16px' }} />
          <h1 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '26px', color: '#1a1a1a', marginBottom: '6px' }}>
            Connexion
          </h1>
          <p style={{ color: '#aaa', fontSize: '14px' }}>
            Accédez à votre espace membre Academy 21
          </p>
        </div>

        {/* Card */}
        <div style={{ background: 'white', borderRadius: '16px', border: '1px solid #e0e2e6', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', padding: '32px' }}>

          {/* Message inscription réussie */}
          {registered && (
            <div style={{ background: '#f0fdf4', border: '1px solid #86efac', borderLeft: '4px solid #22c55e', borderRadius: '8px', padding: '14px 16px', marginBottom: '20px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '18px' }}>✅</span>
              <div>
                <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '13px', color: '#15803d', marginBottom: '2px' }}>Compte créé avec succès !</div>
                <div style={{ fontSize: '12px', color: '#16a34a' }}>Connectez-vous pour accéder à vos formations.</div>
              </div>
            </div>
          )}

          {/* Message redirect */}
          {!registered && searchParams.get('redirect') && (
            <div style={{ background: '#fff8e1', border: '1px solid #ffe082', borderLeft: '4px solid #f0a500', borderRadius: '8px', padding: '14px 16px', marginBottom: '20px', display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span>🔒</span>
              <span style={{ fontSize: '13px', color: '#856404' }}>Connectez-vous pour accéder à cette page.</span>
            </div>
          )}

          {/* Erreur */}
          {error && (
            <div style={{ background: '#fff5f5', border: '1px solid rgba(200,16,46,0.3)', borderLeft: '4px solid #C8102E', borderRadius: '8px', padding: '14px 16px', marginBottom: '20px', fontSize: '13px', color: '#C8102E' }}>
              ❌ {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-input"
                placeholder="votre@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>
            <div className="form-group" style={{ marginBottom: '24px' }}>
              <label className="form-label">Mot de passe</label>
              <input
                type="password"
                className="form-input"
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', fontSize: '14px', padding: '15px', borderRadius: '8px' }}
            >
              {loading ? (
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                  <span style={{ width: '16px', height: '16px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.6s linear infinite' }} />
                  Connexion...
                </span>
              ) : 'Se connecter →'}
            </button>
          </form>

          <div style={{ textAlign: 'center', margin: '20px 0', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', background: '#e0e2e6' }} />
            <span style={{ position: 'relative', background: 'white', padding: '0 12px', color: '#bbb', fontSize: '12px' }}>ou</span>
          </div>

          <p style={{ textAlign: 'center', color: '#999', fontSize: '14px', margin: 0 }}>
            Pas encore de compte ?{' '}
            <Link href="/register" style={{ color: '#C8102E', fontWeight: 700, textDecoration: 'none' }}>
              Créer un compte gratuitement
            </Link>
          </p>
        </div>

        <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '12px', color: '#ccc' }}>
          Dream. Action. Success. — Academy 21 France
        </p>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Chargement...</div>}>
      <LoginForm />
    </Suspense>
  );
}