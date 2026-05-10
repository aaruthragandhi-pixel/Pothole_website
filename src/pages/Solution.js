import React, { useState } from 'react';

const features = [
  { icon: '🤖', title: 'AI-Powered Detection', desc: 'Our ML model runs onboard on the NVIDIA Jetson Orin Nano, identifying potholes in real time from live camera feed — no internet needed.' },
  { icon: '📍', title: 'Precise GPS Geotagging', desc: 'Every detected pothole is tagged with exact GPS coordinates pulled from our u-blox NEO-M8N GPS module, giving centimeter-level location accuracy.' },
  { icon: '📊', title: 'CSV Export for Analysis', desc: 'All pothole data — timestamp + location — is exported as a structured CSV file, ready to use with mapping tools like Leaflet or Google Maps.' },
  { icon: '🛸', title: 'Fully Autonomous Flight', desc: 'The drone flies pre-planned routes autonomously using the Pixhawk 2.4.8 flight controller. No pilot needed for routine road surveys.' },
  { icon: '🗺️', title: 'Interactive Map Output', desc: 'CSV data can be visualized as interactive pothole maps using Leaflet, giving road authorities a real-time view of road conditions across any area.' },
];

const steps = [
  { n: '01', title: 'Drone takes off', desc: 'The drone launches and hovers above the road, following its pre-planned autonomous flight path.' },
  { n: '02', title: 'Camera captures', desc: 'The Sony IMX477 4K camera records a live feed of the road surface below.' },
  { n: '03', title: 'ML detects potholes', desc: 'The NVIDIA Jetson Orin Nano processes the feed using our trained ML model. Arduino commands trigger detection.' },
  { n: '04', title: 'GPS data pulled', desc: 'On detection, the GPS module logs the exact coordinates from the flight controller timestamp.' },
  { n: '05', title: 'Data saved', desc: 'Location + timestamp saved to storage for later analysis, map generation, and municipal reporting.' },
];

export default function Solution() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '4rem 2rem' }}>
      <div style={{ fontFamily: 'var(--font-head)', fontSize: 11, letterSpacing: 3, color: 'var(--teal)', marginBottom: 8 }}>WHAT WE BUILT</div>
      <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, letterSpacing: 2, lineHeight: 1, marginBottom: '1rem' }}>
        OUR <span style={{ color: 'var(--accent)' }}>SOLUTION</span>
      </h2>
      <p style={{ color: 'var(--muted)', maxWidth: 680, lineHeight: 1.85, marginBottom: '3rem', fontSize: '1.02rem' }}>
        Our solution operates using a drone with an onboard processing unit and a high-resolution camera. As the drone hovers above roads, it captures images of potholes. The onboard processing unit — running our machine-learning model — detects potholes on the command of our Arduino. It then pulls GPS data from our GPS module and saves this data for later analysis.
      </p>

      {/* MEDIA PLACEHOLDER */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '3rem' }}>
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, height: 220, overflow: 'hidden' }}>
          <img 
            src="/drone.JPG" 
            alt="Pothole Detection Drone" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, height: 220, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, color: 'var(--muted)', fontSize: 13 }}>
          <span style={{ fontSize: '2rem' }}>🎥</span>
          <strong style={{ color: 'var(--text)' }}>Add your demo video here</strong>
          <span>Use a YouTube embed or video file</span>
        </div>
      </div>

      {/* HOW IT OPERATES */}
      <div style={{ fontFamily: 'var(--font-head)', fontSize: 11, letterSpacing: 3, color: 'var(--accent)', marginBottom: 14 }}>HOW IT OPERATES</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.75rem', marginBottom: '3rem' }}>
        {steps.map((s, i) => (
          <div key={i} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.25rem', position: 'relative' }}>
            <div style={{ fontFamily: 'var(--font-head)', fontSize: '2.2rem', fontWeight: 800, color: 'rgba(245,166,35,0.15)', lineHeight: 1, marginBottom: 6 }}>{s.n}</div>
            <div style={{ fontWeight: 600, fontSize: '0.88rem', marginBottom: 4, color: 'var(--text)' }}>{s.title}</div>
            <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.6 }}>{s.desc}</div>
          </div>
        ))}
      </div>

      {/* 5 KEY FEATURES */}
      <div style={{ fontFamily: 'var(--font-head)', fontSize: 11, letterSpacing: 3, color: 'var(--teal)', marginBottom: 14 }}>5 KEY FEATURES</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {features.map((f, i) => (
            <button key={i} onClick={() => setActiveFeature(i)} style={{
              background: activeFeature === i ? 'rgba(0,212,170,0.08)' : 'var(--card)',
              border: `1px solid ${activeFeature === i ? 'rgba(0,212,170,0.35)' : 'var(--border)'}`,
              borderRadius: 10, padding: '0.75rem 1rem',
              display: 'flex', alignItems: 'center', gap: 10,
              cursor: 'pointer', transition: 'all 0.2s', textAlign: 'left',
            }}>
              <span style={{ fontSize: '1.1rem' }}>{f.icon}</span>
              <span style={{ color: activeFeature === i ? 'var(--teal)' : 'var(--text)', fontWeight: 500, fontSize: 13, fontFamily: 'var(--font-body)' }}>{f.title}</span>
            </button>
          ))}
        </div>
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '2rem' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{features[activeFeature].icon}</div>
          <div style={{ fontFamily: 'var(--font-head)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--teal)', marginBottom: '0.6rem', letterSpacing: 1 }}>{features[activeFeature].title}</div>
          <div style={{ color: 'var(--muted)', lineHeight: 1.85 }}>{features[activeFeature].desc}</div>
        </div>
      </div>
    </div>
  );
}
