import React, { useState, useEffect, useRef } from 'react';

function CountUp({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = Date.now();
        const tick = () => {
          const elapsed = Date.now() - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * target));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const stats = [
  { num: 9438, suffix: '', label: 'Deaths in 4 years (2020–2024)', color: '#e8522a', icon: '☠️' },
  { num: 23000, suffix: '+', label: 'Pothole road crashes (2020–2024)', color: '#f5a623', icon: '💥' },
  { num: 20000, suffix: '+', label: 'Injuries in the same period', color: '#7c6fff', icon: '🏥' },
  { num: 5000, suffix: '+', label: 'Deaths worldwide', color: '#00d4aa', icon: '📍' },
];

const hazards = [
  { icon: '🏍️', title: 'Two-wheelers & pedestrians', desc: 'Especially vulnerable — potholes cause sudden swerves, skids, and falls at high speed.' },
  { icon: '💥', title: 'Multi-vehicle collisions', desc: 'Vehicles swerving to avoid potholes collide with adjacent traffic, causing chain accidents.' },
  { icon: '🌧️', title: 'Monsoon amplification', desc: 'Waterlogged potholes become invisible, turning ordinary roads into deadly traps overnight.' },
  { icon: '🔧', title: 'Vehicle damage', desc: 'Alignment damage, tyre bursts, and suspension failures cost Indian motorists billions annually.' },
  { icon: '⏱️', title: 'Delays & inefficiency', desc: 'Traffic slows to a crawl near pothole zones, increasing commute times across cities.' },
  { icon: '🚫', title: 'No real-time detection', desc: 'Without GPS-tagged pothole maps, authorities cannot prioritize or plan repairs efficiently.' },
];

export default function Problem() {
  const [activeHazard, setActiveHazard] = useState(0);

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '4rem 2rem' }}>
      <div style={{ fontFamily: 'var(--font-head)', fontSize: 11, letterSpacing: 3, color: 'var(--accent2)', marginBottom: 8 }}>THE SCALE OF THE CRISIS</div>
      <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, letterSpacing: 2, lineHeight: 1, marginBottom: '1rem' }}>
        POTHOLES <span style={{ color: 'var(--accent2)' }}>KILL.</span>
      </h2>
      <p style={{ color: 'var(--muted)', maxWidth: 640, lineHeight: 1.85, marginBottom: '3rem', fontSize: '1.02rem' }}>
        In 2025 alone, potholes have accounted for over <strong style={{ color: '#ff8a70' }}>2,000–5,000 deaths</strong> — that's nearly <strong style={{ color: '#ff8a70' }}>6 people every single day</strong>. Across India, potholes are not just an inconvenience. They are a genuine road safety hazard.
      </p>

      {/* COUNTER STATS */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1px', background: 'var(--border)', border: '1px solid var(--border)', borderRadius: 14, overflow: 'hidden', marginBottom: '3rem' }}>
        {stats.map(s => (
          <div key={s.label} style={{ background: 'var(--surface)', padding: '1.75rem 1.25rem', textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: 6 }}>{s.icon}</div>
            <div style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 800, color: s.color, lineHeight: 1 }}>
              <CountUp target={s.num} suffix={s.suffix} />
            </div>
            <div style={{ color: 'var(--muted)', fontSize: 12, marginTop: 6, lineHeight: 1.4 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* DAILY DEATH TICKER */}
      <div style={{ background: 'rgba(232,82,42,0.06)', border: '1px solid rgba(232,82,42,0.25)', borderRadius: 12, padding: '1.2rem 1.5rem', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ fontSize: '1.4rem' }}>⚠️</span>
        <div>
          <div style={{ color: '#ff8a70', fontWeight: 700, fontSize: '1rem', fontFamily: 'var(--font-head)', letterSpacing: 1 }}>6 LIVES LOST EVERY DAY</div>
          <div style={{ color: 'var(--muted)', fontSize: 13 }}>India recorded 23,000+ pothole crashes causing nearly 20,000 injuries.</div>
        </div>
      </div>

      {/* INTERACTIVE HAZARDS */}
      <div style={{ fontFamily: 'var(--font-head)', fontSize: 11, letterSpacing: 3, color: 'var(--teal)', marginBottom: 14 }}>HOW POTHOLES CAUSE HARM</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
        {/* Left: button list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {hazards.map((h, i) => (
            <button key={i} onClick={() => setActiveHazard(i)} style={{
              background: activeHazard === i ? 'rgba(245,166,35,0.1)' : 'var(--card)',
              border: `1px solid ${activeHazard === i ? 'rgba(245,166,35,0.4)' : 'var(--border)'}`,
              borderRadius: 10, padding: '0.75rem 1rem',
              display: 'flex', alignItems: 'center', gap: 10,
              cursor: 'pointer', transition: 'all 0.2s', textAlign: 'left',
            }}>
              <span style={{ fontSize: '1.2rem' }}>{h.icon}</span>
              <span style={{ color: activeHazard === i ? 'var(--accent)' : 'var(--text)', fontWeight: 500, fontSize: 14, fontFamily: 'var(--font-body)' }}>{h.title}</span>
            </button>
          ))}
        </div>
        {/* Right: detail panel */}
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 200 }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{hazards[activeHazard].icon}</div>
          <div style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '0.6rem', letterSpacing: 1 }}>{hazards[activeHazard].title}</div>
          <div style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '0.95rem' }}>{hazards[activeHazard].desc}</div>
        </div>
      </div>
    </div>
  );
}
