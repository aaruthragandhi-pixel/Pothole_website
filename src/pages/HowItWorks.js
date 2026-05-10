import React, { useState } from 'react';

const steps = [
  {
    icon: '🐍',
    title: 'Python script initiated',
    desc: 'The custom Python file is run to start our model. This initializes all systems — camera, GPS, and ML model — and prepares the drone for autonomous flight.',
    tech: 'Python · JetPack SDK',
    color: '#f5a623',
  },
  {
    icon: '📷',
    title: 'Camera captures live feed',
    desc: 'inference.camera captures a live feed of the road below and streams it continuously to our onboard processing unit (NVIDIA Jetson Orin Nano).',
    tech: 'Sony IMX477 · inference.camera',
    color: '#00d4aa',
  },
  {
    icon: '🤖',
    title: 'Model detects potholes',
    desc: 'The ML model performs inference on each frame to detect potholes with a confidence score. Only detections above the confidence threshold are logged.',
    tech: 'OpenCV · TensorFlow/PyTorch',
    color: '#7c6fff',
  },
  {
    icon: '📡',
    title: 'GPS module geotags location',
    desc: 'The u-blox NEO-M8N GPS module enables precise geotagging. When a pothole is detected, it records the exact coordinates from the Pixhawk flight controller timestamp.',
    tech: 'u-blox NEO-M8N · Pixhawk 2.4.8',
    color: '#e8522a',
  },
  {
    icon: '💾',
    title: 'Data saved to CSV',
    desc: 'The GPS coordinates, timestamp, and confidence score are saved together in a CSV file stored onboard. This file accumulates data across the entire flight.',
    tech: 'CSV · MicroSD Storage',
    color: '#f5a623',
  },
  {
    icon: '🗺️',
    title: 'Exported as Leaflet map',
    desc: 'After the flight, the CSV data is exported and processed using Leaflet.js to generate an interactive map showing every detected pothole with its precise location.',
    tech: 'Leaflet.js · GeoJSON',
    color: '#00d4aa',
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '4rem 2rem' }}>
      <div style={{ fontFamily: 'var(--font-head)', fontSize: 11, letterSpacing: 3, color: 'var(--teal)', marginBottom: 8 }}>SYSTEM FLOW</div>
      <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, letterSpacing: 2, lineHeight: 1, marginBottom: '1rem' }}>
        HOW IT <span style={{ color: 'var(--accent)' }}>WORKS?</span>
      </h2>
      <p style={{ color: 'var(--muted)', maxWidth: 640, lineHeight: 1.85, marginBottom: '3rem' }}>
        Click each step to explore the full pipeline — from the Python script that starts it all, to the interactive Leaflet map that displays every geotagged pothole.
      </p>

      {/* FLOWCHART */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginBottom: '2.5rem' }}>
        {steps.map((s, i) => (
          <div key={i}>
            {/* STEP NODE */}
            <div
              onClick={() => setActive(i === active ? -1 : i)}
              style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                background: active === i ? `${s.color}11` : 'var(--card)',
                border: `1px solid ${active === i ? s.color + '55' : 'var(--border)'}`,
                borderRadius: active === i ? '12px 12px 0 0' : 12,
                padding: '1rem 1.25rem', cursor: 'pointer',
                transition: 'all 0.2s',
                borderBottom: active === i ? 'none' : undefined,
              }}
            >
              <div style={{
                width: 40, height: 40, borderRadius: '50%',
                background: `${s.color}22`, border: `1.5px solid ${s.color}55`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.1rem', flexShrink: 0,
              }}>{s.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'var(--font-head)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: 1, color: active === i ? s.color : 'var(--text)' }}>
                  STEP {i + 1}
                </div>
                <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text)' }}>{s.title}</div>
              </div>
              <div style={{ fontFamily: 'var(--font-head)', fontSize: 11, color: 'var(--muted)', letterSpacing: 1, textAlign: 'right', flexShrink: 0 }}>
                {active === i ? '▲' : '▼'}
              </div>
            </div>

            {/* EXPANDED DETAIL */}
            {active === i && (
              <div style={{
                background: `${s.color}08`,
                border: `1px solid ${s.color}55`,
                borderTop: 'none',
                borderRadius: '0 0 12px 12px',
                padding: '1.25rem 1.5rem',
              }}>
                <p style={{ color: 'var(--muted)', lineHeight: 1.85, marginBottom: '0.75rem' }}>{s.desc}</p>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {s.tech.split(' · ').map(t => (
                    <span key={t} style={{
                      background: `${s.color}18`, color: s.color,
                      border: `1px solid ${s.color}40`,
                      borderRadius: 20, padding: '3px 12px', fontSize: 12, fontWeight: 600,
                      fontFamily: 'var(--font-head)', letterSpacing: 0.5,
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            )}

            {/* ARROW BETWEEN STEPS */}
            {i < steps.length - 1 && (
              <div style={{ display: 'flex', justifyContent: 'center', padding: '6px 0', color: 'var(--muted)', fontSize: '1rem' }}>
                ↓
              </div>
            )}
          </div>
        ))}
      </div>

      {/* SUMMARY */}
      <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem', textAlign: 'center' }}>
        {[
          { label: 'Inference speed', value: '300 FPS', icon: '⚡' },
          { label: 'GPS accuracy', value: 'high-level', icon: '📍' },
          { label: 'Output format', value: 'CSV + Map', icon: '📊' },
          { label: 'Connectivity needed', value: 'None (offline)', icon: '✈️' },
        ].map(m => (
          <div key={m.label}>
            <div style={{ fontSize: '1.3rem', marginBottom: 4 }}>{m.icon}</div>
            <div style={{ fontFamily: 'var(--font-head)', fontSize: '1rem', fontWeight: 700, color: 'var(--accent)' }}>{m.value}</div>
            <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
