import React from 'react';

const futures = [
  {
    phase: 'Version 2.0',
    icon: '🚁',
    title: 'Fleet of Drones',
    desc: 'Deploy multiple drones simultaneously to cover entire city road networks. A fleet can survey hundreds of kilometres per day, providing near real-time road health data across whole municipalities.',
    color: '#f5a623',
  },
  {
    phase: 'Version 2.1',
    icon: '📐',
    title: 'Grid Reference & Pothole Dimensions',
    desc: 'Using a grid reference system, we can calculate the exact dimensions of each pothole — length, width, and depth. This enables precise calculation of the volume of material needed to fill each pothole.',
    color: '#00d4aa',
  },
  {
    phase: 'Version 2.2',
    icon: '💰',
    title: 'Cost Estimation Engine',
    desc: 'Once dimensions are known, our system can automatically calculate the cost of fixing each pothole — factoring in material costs, labour, and equipment. Road authorities can generate repair budgets instantly.',
    color: '#7c6fff',
  },
  {
    phase: 'Version 3.0',
    icon: '🏙️',
    title: 'Smart City Integration',
    desc: 'Partner with Smart City Divisions of major Indian cities. Provide satellite-quality imaging using advanced drone technology to deliver live infrastructure health dashboards to municipal authorities.',
    color: '#e8522a',
  },
];

const impact = [
  { icon: '🛣️', label: 'Roads covered', value: 'City-wide' },
  { icon: '⏱️', label: 'Survey speed', value: '10× faster' },
  { icon: '💸', label: 'Repair cost savings', value: 'Estimated 40%' },
  { icon: '❤️', label: 'Lives saved', value: 'Thousands/year' },
];

export default function Future() {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '4rem 2rem' }}>
      <div style={{ fontFamily: 'var(--font-head)', fontSize: 11, letterSpacing: 3, color: 'var(--teal)', marginBottom: 8 }}>WHAT'S NEXT</div>
      <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, letterSpacing: 2, lineHeight: 1, marginBottom: '1rem' }}>
        THE <span style={{ color: 'var(--accent)' }}>FUTURE</span>
      </h2>
      <p style={{ color: 'var(--muted)', maxWidth: 640, lineHeight: 1.85, marginBottom: '3rem', fontSize: '1.02rem' }}>
        We've proven the concept. Now it's time to scale. Here's our roadmap for turning a working prototype into a nationwide infrastructure intelligence platform.
      </p>

      {/* ROADMAP CARDS */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
        {futures.map((f, i) => (
          <div key={i} style={{
            background: 'var(--card)', border: `1px solid ${f.color}30`,
            borderRadius: 14, padding: '1.5rem', position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 3,
              background: f.color, opacity: 0.7,
            }} />
            <div style={{ fontSize: 11, color: f.color, fontFamily: 'var(--font-head)', letterSpacing: 2, marginBottom: 8, fontWeight: 700 }}>{f.phase}</div>
            <div style={{ fontSize: '1.8rem', marginBottom: '0.6rem' }}>{f.icon}</div>
            <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text)', marginBottom: '0.5rem' }}>{f.title}</div>
            <p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.75, margin: 0 }}>{f.desc}</p>
          </div>
        ))}
      </div>

      {/* VISION QUOTE */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(245,166,35,0.06), rgba(0,212,170,0.06))',
        border: '1px solid var(--border)', borderRadius: 14, padding: '2rem', marginBottom: '2.5rem',
        textAlign: 'center',
      }}>
        <div style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(1.1rem, 3vw, 1.6rem)', fontWeight: 800, letterSpacing: 2, color: 'var(--text)', marginBottom: '0.75rem' }}>
          "WE THINK OUR PROJECT CAN REVOLUTIONIZE<br />ROAD MAINTENANCE IN THE FUTURE."
        </div>
        <div style={{ color: 'var(--muted)', fontSize: 13 }}>— Pothole Detection Clan, Hosur</div>
      </div>

      {/* IMPACT METRICS */}
      <div style={{ fontFamily: 'var(--font-head)', fontSize: 11, letterSpacing: 3, color: 'var(--accent)', marginBottom: 14 }}>PROJECTED IMPACT</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1px', background: 'var(--border)', border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden' }}>
        {impact.map(m => (
          <div key={m.label} style={{ background: 'var(--surface)', padding: '1.5rem', textAlign: 'center' }}>
            <div style={{ fontSize: '1.4rem', marginBottom: 6 }}>{m.icon}</div>
            <div style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', fontWeight: 800, color: 'var(--accent)', lineHeight: 1 }}>{m.value}</div>
            <div style={{ color: 'var(--muted)', fontSize: 12, marginTop: 5 }}>{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
