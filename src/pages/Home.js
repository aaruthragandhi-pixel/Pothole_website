import React from 'react';

const S = {
  page: { minHeight: '100vh', position: 'relative', overflow: 'hidden' },
  glow: {
    position: 'absolute', width: 600, height: 600, borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(245,166,35,0.08) 0%, transparent 70%)',
    top: -200, left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none',
  },
  hero: { maxWidth: 1100, margin: '0 auto', padding: '5rem 2rem 3rem', textAlign: 'center', position: 'relative' },
  eyebrow: {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    background: 'rgba(0,212,170,0.08)', color: 'var(--teal)',
    border: '1px solid rgba(0,212,170,0.2)', borderRadius: 20,
    padding: '5px 16px', fontSize: 11, letterSpacing: 2, fontWeight: 600,
    marginBottom: '1.5rem', fontFamily: 'var(--font-head)',
  },
  h1: {
    fontFamily: 'var(--font-head)', fontSize: 'clamp(3rem, 8vw, 6rem)',
    fontWeight: 800, lineHeight: 1, letterSpacing: 2, marginBottom: '1rem',
    color: 'var(--text)',
  },
  accent: { color: 'var(--accent)' },
  para: { color: 'var(--muted)', fontSize: '1.05rem', maxWidth: 600, margin: '0 auto 1.5rem', lineHeight: 1.8 },
  tagline: {
    fontFamily: 'var(--font-head)', fontSize: 'clamp(1.4rem, 4vw, 2.2rem)',
    fontWeight: 800, letterSpacing: 6, color: 'var(--accent)',
    marginBottom: '2.5rem',
  },
  btnRow: { display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' },
  btnPrimary: {
    background: 'var(--accent)', color: '#050810', border: 'none',
    padding: '0.75rem 2rem', borderRadius: 8, fontWeight: 700,
    fontSize: 14, cursor: 'pointer', fontFamily: 'var(--font-body)',
    transition: 'transform 0.15s, opacity 0.15s',
  },
  btnGhost: {
    background: 'transparent', color: 'var(--text)',
    border: '1px solid var(--border)', padding: '0.75rem 2rem',
    borderRadius: 8, fontWeight: 500, fontSize: 14, cursor: 'pointer',
    fontFamily: 'var(--font-body)', transition: 'border-color 0.2s, color 0.2s',
  },
  droneBox: {
    maxWidth: 820, margin: '0 auto 4rem',
    borderRadius: 16, overflow: 'hidden',
    border: '1px solid var(--border)',
    background: 'var(--surface)',
    position: 'relative',
  },
  dronePlaceholder: {
    height: 340, display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center',
    background: 'linear-gradient(135deg, #0c1120 0%, #111827 100%)',
    position: 'relative', overflow: 'hidden',
  },
  droneLabel: {
    position: 'absolute', bottom: 0, left: 0, right: 0,
    background: 'linear-gradient(to top, rgba(5,8,16,0.95), transparent)',
    padding: '2rem 1.5rem 1rem',
    fontFamily: 'var(--font-head)', fontSize: 13, letterSpacing: 2, color: 'var(--accent)',
  },
  statsRow: {
    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 1, background: 'var(--border)',
    border: '1px solid var(--border)', borderRadius: 12,
    overflow: 'hidden', maxWidth: 700, margin: '0 auto',
  },
  stat: { background: 'var(--surface)', padding: '1.5rem', textAlign: 'center' },
  statNum: { fontFamily: 'var(--font-head)', fontSize: '2rem', fontWeight: 800, color: 'var(--accent)' },
  statLabel: { color: 'var(--muted)', fontSize: 12, marginTop: 4 },
};

export default function Home({ navigate }) {
  return (
    <div style={S.page}>
      <div style={S.glow} />
      <div style={S.hero}>
        <div style={S.eyebrow}>▲ AI-POWERED DRONE</div>
        <h1 style={S.h1}>
          POTHOLE<br /><span style={S.accent}>DETECTION</span><br />CLAN
        </h1>
        <p style={S.para}>
          We offer an AI-powered drone system which detects and geotags potholes in real time,
          enabling smarter and faster road maintenance.
        </p>
        <div style={S.tagline}>SMARTER · SAFER · QUICKER</div>
        <div style={S.btnRow}>
          <button style={S.btnPrimary} onClick={() => navigate('solution')}
            onMouseEnter={e => e.target.style.opacity = 0.85}
            onMouseLeave={e => e.target.style.opacity = 1}>
            See Our Solution →
          </button>
          <button style={S.btnGhost} onClick={() => navigate('howitworks')}
            onMouseEnter={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.color = 'var(--accent)'; }}
            onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--text)'; }}>
            How It Works?
          </button>
        </div>

        {/* DRONE IMAGE BOX */}
        <div style={S.droneBox}>
          <div style={S.dronePlaceholder}>
            <img 
              src="/drone.JPG" 
              alt="Pothole Detection Drone" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(245,166,35,0.04) 0%, transparent 70%)' }} />
          </div>
          <div style={S.droneLabel}>
            NVIDIA JETSON ORIN NANO · PIXHAWK 2.4.8 · SONY IMX477 4K · u-blox NEO-M8N GPS
          </div>
        </div>
      </div>
    </div>
  );
}