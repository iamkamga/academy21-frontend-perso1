'use client';
import { useState } from 'react';
import Link from 'next/link';

const DIPLOMES = [
  'Aucun diplôme',
  'Brevet des collèges (BEPC)',
  'CAP / BEP',
  'Baccalauréat',
  'BTS / DUT / BUT',
  'Licence / Bachelor',
  'Master / MBA',
  'Doctorat / PhD',
  'Autre',
];

export default function CandidaturePage() {
  const [step, setStep] = useState<1 | 2>(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    diplome: '',
    motivation: '',
    cv: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setForm(prev => ({ ...prev, cv: e.target.files![0] }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.prenom || !form.nom || !form.email || !form.telephone || !form.diplome) {
      setError('Veuillez remplir tous les champs obligatoires.');
      return;
    }
    setStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.motivation) { setError('Veuillez écrire une lettre de motivation.'); return; }
    setLoading(true);
    try {
      const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
      const formData = new FormData();
      formData.append('prenom', form.prenom);
      formData.append('nom', form.nom);
      formData.append('email', form.email);
      formData.append('telephone', form.telephone);
      formData.append('diplome', form.diplome);
      formData.append('motivation', form.motivation);
      if (form.cv) formData.append('cv', form.cv);

      const res = await fetch(`${BASE_URL}/api/candidatures`, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Erreur envoi');
      setSuccess(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Erreur lors de l\'envoi');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div style={{ minHeight: '100vh', background: '#f7f8fa', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
        <div style={{ maxWidth: '520px', width: '100%', textAlign: 'center' }}>
          <div style={{ width: '80px', height: '80px', background: 'rgba(40,167,69,0.1)', border: '3px solid #28a745', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
            <svg width='36' height='36' viewBox='0 0 24 24' fill='none' stroke='#28a745' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round'><polyline points='20 6 9 17 4 12'/></svg>
          </div>
          <h1 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(24px,4vw,36px)', color: '#1a1a1a', marginBottom: '12px' }}>
            Candidature envoyee !
          </h1>
          <p style={{ color: '#777', fontSize: '15px', lineHeight: 1.7, marginBottom: '24px' }}>
            Merci <strong>{form.prenom}</strong> ! Votre candidature a bien ete recue. Vous recevrez un email de confirmation et notre equipe vous contactera dans les plus brefs delais.
          </p>
          <div style={{ background: 'white', border: '1px solid #e0e2e6', borderLeft: '4px solid #C8102E', borderRadius: '8px', padding: '16px 20px', marginBottom: '28px', textAlign: 'left' }}>
            <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '12px', color: '#C8102E', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>Prochaines etapes</div>
            {[
              'Vous recevez un email de confirmation',
              'Notre equipe etudie votre candidature',
              'Vous etes contacte par email ou telephone',
            ].map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '8px' }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#C8102E', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '10px', flexShrink: 0 }}>{i + 1}</div>
                <p style={{ fontSize: '13px', color: '#555', lineHeight: 1.6, margin: 0 }}>{s}</p>
              </div>
            ))}
          </div>
          <Link href='/' style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#C8102E', color: 'white', padding: '14px 32px', borderRadius: '8px', fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '14px', textDecoration: 'none' }}>
            Retour a l&apos;accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f7f8fa' }}>

      {/* Header */}
      <div style={{ background: 'white', borderBottom: '3px solid #C8102E', padding: 'clamp(32px,5vw,56px) 0 clamp(20px,3vw,32px)' }}>
        <div className='container'>
          <Link href='/' style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#aaa', fontSize: '13px', fontFamily: 'Montserrat,sans-serif', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px', textDecoration: 'none' }}>
            &larr; Retour a l&apos;accueil
          </Link>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
            <span style={{ background: '#C8102E', color: 'white', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '10px', padding: '3px 10px', borderRadius: '3px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Candidature</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(22px,4vw,38px)', color: '#1a1a1a', marginBottom: '8px' }}>
            Rejoindre <span style={{ color: '#C8102E' }}>Academy 21</span>
          </h1>
          <p style={{ color: '#aaa', fontSize: '14px', maxWidth: '500px' }}>
            Remplissez ce formulaire pour soumettre votre candidature. Notre equipe vous repondra dans les meilleurs delais.
          </p>
        </div>
      </div>

      <div className='container' style={{ padding: 'clamp(24px,4vw,48px) 24px' }}>

        {/* Stepper */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '36px', maxWidth: '360px' }}>
          {[{ num: 1, label: 'Vos informations' }, { num: 2, label: 'Motivation & CV' }].map((s, i) => (
            <div key={s.num} style={{ display: 'flex', alignItems: 'center', flex: i < 1 ? 1 : 'none' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                <div style={{ width: '34px', height: '34px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '13px', background: step >= s.num ? '#C8102E' : '#e0e2e6', color: step >= s.num ? 'white' : '#aaa' }}>
                  {step > s.num ? (
                    <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='white' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round'><polyline points='20 6 9 17 4 12'/></svg>
                  ) : s.num}
                </div>
                <span style={{ fontSize: '10px', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: step >= s.num ? '#1a1a1a' : '#aaa', whiteSpace: 'nowrap' }}>{s.label}</span>
              </div>
              {i < 1 && <div style={{ flex: 1, height: '2px', background: step > s.num ? '#C8102E' : '#e0e2e6', margin: '0 8px', marginBottom: '20px' }} />}
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 280px', gap: '28px', alignItems: 'start' }} className='candidature-grid'>

          {/* Etape 1 */}
          {step === 1 && (
            <div style={{ background: 'white', border: '1px solid #e0e2e6', borderTop: '4px solid #C8102E', borderRadius: '8px', padding: 'clamp(20px,4vw,36px)' }}>
              <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '20px', marginBottom: '24px', color: '#1a1a1a' }}>
                Vos informations personnelles
              </h2>
              {error && <div style={{ background: '#fff5f5', border: '1px solid rgba(200,16,46,0.3)', borderLeft: '4px solid #C8102E', borderRadius: '6px', padding: '12px 16px', marginBottom: '20px', fontSize: '13px', color: '#C8102E' }}>{error}</div>}
              <form onSubmit={handleNext}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }} className='form-grid-2'>
                  <div className='form-group'>
                    <label className='form-label'>Prenom *</label>
                    <input name='prenom' className='form-input' placeholder='Jean' value={form.prenom} onChange={handleChange} required />
                  </div>
                  <div className='form-group'>
                    <label className='form-label'>Nom *</label>
                    <input name='nom' className='form-input' placeholder='Dupont' value={form.nom} onChange={handleChange} required />
                  </div>
                </div>
                <div className='form-group'>
                  <label className='form-label'>Email *</label>
                  <input type='email' name='email' className='form-input' placeholder='jean.dupont@email.com' value={form.email} onChange={handleChange} required />
                </div>
                <div className='form-group'>
                  <label className='form-label'>Telephone *</label>
                  <input type='tel' name='telephone' className='form-input' placeholder='+33 6 XX XX XX XX' value={form.telephone} onChange={handleChange} required />
                </div>
                <div className='form-group' style={{ marginBottom: '28px' }}>
                  <label className='form-label'>Dernier diplome obtenu *</label>
                  <select name='diplome' className='form-input' value={form.diplome} onChange={handleChange} required style={{ cursor: 'pointer' }}>
                    <option value=''>-- Selectionnez votre diplome --</option>
                    {DIPLOMES.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
                <button type='submit' className='btn btn-primary' style={{ width: '100%', justifyContent: 'center', fontSize: '14px', padding: '15px' }}>
                  Continuer &rarr; Motivation & CV
                </button>
              </form>
            </div>
          )}

          {/* Etape 2 */}
          {step === 2 && (
            <div style={{ background: 'white', border: '1px solid #e0e2e6', borderTop: '4px solid #C8102E', borderRadius: '8px', padding: 'clamp(20px,4vw,36px)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '20px', color: '#1a1a1a' }}>
                  Motivation & CV
                </h2>
                <button onClick={() => setStep(1)} style={{ background: 'none', border: 'none', color: '#C8102E', fontSize: '12px', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, cursor: 'pointer', textDecoration: 'underline' }}>
                  &larr; Modifier mes infos
                </button>
              </div>

              {/* Recap */}
              <div style={{ background: '#f7f8fa', border: '1px solid #e0e2e6', borderRadius: '8px', padding: '14px 18px', marginBottom: '24px' }}>
                <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '14px', color: '#1a1a1a' }}>{form.prenom} {form.nom}</div>
                <div style={{ fontSize: '13px', color: '#888', marginTop: '2px' }}>{form.email} &middot; {form.telephone}</div>
                <div style={{ fontSize: '13px', color: '#888' }}>Diplome : {form.diplome}</div>
              </div>

              {error && <div style={{ background: '#fff5f5', border: '1px solid rgba(200,16,46,0.3)', borderLeft: '4px solid #C8102E', borderRadius: '6px', padding: '12px 16px', marginBottom: '20px', fontSize: '13px', color: '#C8102E' }}>{error}</div>}

              <form onSubmit={handleSubmit}>
                <div className='form-group' style={{ marginBottom: '20px' }}>
                  <label className='form-label'>Lettre de motivation *</label>
                  <textarea
                    name='motivation'
                    className='form-input'
                    placeholder='Expliquez pourquoi vous souhaitez rejoindre Academy 21, vos objectifs, votre parcours...'
                    value={form.motivation}
                    onChange={handleChange}
                    rows={8}
                    style={{ resize: 'vertical' }}
                    required
                  />
                </div>

                <div className='form-group' style={{ marginBottom: '28px' }}>
                  <label className='form-label'>CV (PDF, Word) &mdash; optionnel</label>
                  <div style={{ border: '2px dashed #e0e2e6', borderRadius: '8px', padding: '24px', textAlign: 'center', cursor: 'pointer', position: 'relative' }}
                    onClick={() => document.getElementById('cv-input')?.click()}>
                    <input id='cv-input' type='file' accept='.pdf,.doc,.docx' onChange={handleFile} style={{ display: 'none' }} />
                    {form.cv ? (
                      <div>
                        <div style={{ marginBottom: '8px' }}>
                          <svg width='28' height='28' viewBox='0 0 24 24' fill='none' stroke='#28a745' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'/><polyline points='14 2 14 8 20 8'/><line x1='16' y1='13' x2='8' y2='13'/><line x1='16' y1='17' x2='8' y2='17'/><polyline points='10 9 9 9 8 9'/></svg>
                        </div>
                        <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '13px', color: '#28a745' }}>{form.cv.name}</div>
                        <div style={{ fontSize: '11px', color: '#aaa', marginTop: '4px' }}>Cliquez pour changer</div>
                      </div>
                    ) : (
                      <div>
                        <div style={{ marginBottom: '8px' }}>
                          <svg width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='#555' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'/><polyline points='17 8 12 3 7 8'/><line x1='12' y1='3' x2='12' y2='15'/></svg>
                        </div>
                        <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: '13px', color: '#555' }}>Cliquez pour uploader votre CV</div>
                        <div style={{ fontSize: '11px', color: '#aaa', marginTop: '4px' }}>PDF, DOC, DOCX &mdash; max 5MB</div>
                      </div>
                    )}
                  </div>
                </div>

                <button type='submit' disabled={loading} className='btn btn-primary' style={{ width: '100%', justifyContent: 'center', fontSize: '14px', padding: '15px' }}>
                  {loading ? (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                      <span style={{ width: '16px', height: '16px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.6s linear infinite' }} />
                      Envoi en cours...
                    </span>
                  ) : 'Envoyer ma candidature'}
                </button>
              </form>
            </div>
          )}

          {/* Sidebar */}
          <div style={{ position: 'sticky', top: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ background: 'linear-gradient(135deg, #1a0005 0%, #2d0008 100%)', borderRadius: '12px', padding: '24px', color: 'white' }}>
              <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '20px', marginBottom: '8px' }}>
                <span style={{ color: '#C8102E' }}>ACADEMY</span> 21
              </div>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', lineHeight: 1.7, marginBottom: '20px' }}>
                Rejoignez un reseau international d&apos;entrepreneurs presents sur 5 continents.
              </p>
              {[
                { icon: 'globe', text: '75+ pays representes' },
                { icon: 'users', text: '1M+ participants formes' },
                { icon: 'trophy', text: 'Speakers internationaux' },
                { icon: 'chart', text: 'Reseau entrepreneurial actif' },
              ].map(item => (
                <div key={item.text} style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
                  <div style={{ width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {item.icon === 'globe' && <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.75)' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><circle cx='12' cy='12' r='10'/><line x1='2' y1='12' x2='22' y2='12'/><path d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'/></svg>}
                    {item.icon === 'users' && <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.75)' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'/><circle cx='9' cy='7' r='4'/><path d='M23 21v-2a4 4 0 0 0-3-3.87'/><path d='M16 3.13a4 4 0 0 1 0 7.75'/></svg>}
                    {item.icon === 'trophy' && <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.75)' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M6 9H4.5a2.5 2.5 0 0 1 0-5H6'/><path d='M18 9h1.5a2.5 2.5 0 0 0 0-5H18'/><path d='M4 22h16'/><path d='M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 19.88 7 21h10c0-1.12-.85-2.25-1.63-2.79-.5-.23-.97-.66-.97-1.21v-2.34'/><path d='M8 5a4 4 0 0 1 8 0v6a4 4 0 0 1-8 0V5z'/></svg>}
                    {item.icon === 'chart' && <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.75)' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><line x1='18' y1='20' x2='18' y2='10'/><line x1='12' y1='20' x2='12' y2='4'/><line x1='6' y1='20' x2='6' y2='14'/></svg>}
                  </div>
                  <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', fontFamily: 'Montserrat,sans-serif', fontWeight: 600 }}>{item.text}</span>
                </div>
              ))}
            </div>

            <div style={{ background: 'white', border: '1px solid #e0e2e6', borderRadius: '8px', padding: '16px 18px' }}>
              <h4 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '12px', color: '#1a1a1a', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Apres votre candidature
              </h4>
              {[
                { step: '1', text: 'Email de confirmation recu' },
                { step: '2', text: 'Etude de votre dossier (48h)' },
                { step: '3', text: 'Contact par email ou telephone' },
              ].map(item => (
                <div key={item.step} style={{ display: 'flex', gap: '10px', marginBottom: '10px', alignItems: 'flex-start' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#C8102E', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: '10px', flexShrink: 0 }}>
                    {item.step}
                  </div>
                  <p style={{ fontSize: '12px', color: '#555', lineHeight: 1.6, margin: 0 }}>{item.text}</p>
                </div>
              ))}
            </div>

            <div style={{ background: '#fff5f5', border: '1px solid rgba(200,16,46,0.15)', borderRadius: '8px', padding: '14px 18px' }}>
              <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: '12px', color: '#C8102E', marginBottom: '6px' }}>Une question ?</div>
              <a href='mailto:contact@academy21france.fr' style={{ fontSize: '12px', color: '#C8102E', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, textDecoration: 'none' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='#C8102E' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'/><polyline points='22,6 12,13 2,6'/></svg>
                  contact@academy21france.fr
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 900px) { .candidature-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 600px) { .form-grid-2 { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}