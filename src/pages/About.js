import React from 'react';

const card = {
  background: 'var(--card)',
  border: '1px solid var(--border)',
  borderRadius: 14,
  padding: '1.5rem',
  textAlign: 'center',
};

const members = [
  { initials: 'DM', name: 'Darshan Malini Padmanabhan', color: '#f5a623' },
  { initials: 'DS', name: 'Deeksha Santhakumar', color: '#00d4aa' },
  { initials: 'AG', name: 'Aaruthra Gandhi', color: '#7c6fff' },
];

const contactItems = [
  { icon: '✉️', label: 'Email', value: 'potholedetectionclan2026@gmail.com' },
  { icon: '📞', label: 'Phone', value: '+91 99404 83801' },
  { icon: '📍', label: 'Location', value: 'Hosur, Tamil Nadu, India' },
];

export default function About() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '4rem 2rem' }}>
      {/* HEADER */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontFamily: 'var(--font-head)', fontSize: 11, letterSpacing: 3, color: 'var(--teal)', marginBottom: 8 }}>WHO WE ARE</div>
        <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: 2, lineHeight: 1, marginBottom: '1.2rem' }}>
          ABOUT <span style={{ color: 'var(--accent)' }}>US</span>
        </h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.9, maxWidth: 700, fontSize: '1.05rem' }}>
          This solution is brought to you by three young innovators from TVS ACADEMY, Hosur
           who aim to transform the roads of today and make them safer for tomorrow.
          <strong style={{ color: 'var(--text)', fontWeight: 500 }}> Darshan Malini Padmanabhan, Deeksha Santhakumar, and Aaruthra Gandhi </strong>
          came together with a shared vision of solving real-world problems through technology. Combining skills in hardware, programming, design, and presentation,
          the team worked collaboratively to develop an AI-powered drone system for pothole detection and geotagging.
        </p>
      </div>

      {/* TEAM CARDS */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
        {members.map(m => (
          <div key={m.name} style={card}>
            <div style={{
              width: 58, height: 58, borderRadius: '50%',
              background: `${m.color}22`, border: `2px solid ${m.color}55`,
              color: m.color, fontFamily: 'var(--font-head)', fontSize: '1.2rem', fontWeight: 800,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 0.9rem',
            }}>{m.initials}</div>
            <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: 4, color: 'var(--text)' }}>{m.name}</div>
            <div style={{ fontSize: 12, color: 'var(--muted)' }} />
          </div>
        ))}
      </div>

      {/* MISSION BLOCK */}
      <div style={{ background: 'linear-gradient(135deg, rgba(245,166,35,0.05), rgba(0,212,170,0.05))', border: '1px solid var(--border)', borderRadius: 14, padding: '2rem', marginBottom: '2.5rem' }}>
        <div style={{ fontFamily: 'var(--font-head)', fontSize: 11, letterSpacing: 3, color: 'var(--accent)', marginBottom: 10 }}>OUR MISSION</div>
        <p style={{ color: 'var(--muted)', lineHeight: 1.9 }}>
          We are students from <strong style={{ color: 'var(--text)' }}>Hosur, Tamil Nadu</strong> — a city where potholes are a common issue.
          We decided to stop complaining and start building. From soldering our first circuit to competing at nationals, this project is proof that
          young innovators can create real solutions to real problems.
        </p>
      </div>

      {/* CONTACT */}
      <div style={{ ...card, textAlign: 'left' }}>
        <div style={{ fontFamily: 'var(--font-head)', fontSize: 11, letterSpacing: 3, color: 'var(--teal)', marginBottom: 14 }}>CONTACT US</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          {[
            { icon: '✉️', label: 'Email', value: 'potholedetectionclan2026@gmail.com' },
            { icon: '📞', label: 'Phone', value: '+91 99404 83801' },
            { icon: '📍', label: 'Location', value: 'Hosur, Tamil Nadu, India' },
          ].map(c => (
            <div key={c.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
              <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>{c.icon}</span>
              <div>
                <div style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: 1, fontFamily: 'var(--font-head)', marginBottom: 2 }}>{c.label}</div>
                <div style={{ color: 'var(--text)', fontSize: 14, fontWeight: 500 }}>{c.value}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ color: 'var(--muted)', fontSize: 12, marginTop: '1rem' }}>
          We are open to feedback, collaborations and opportunities. To know more about our project contact us through email or phone.
        </div>
      </div>
    </div>
  );
}
