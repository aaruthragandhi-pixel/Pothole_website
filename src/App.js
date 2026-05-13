import React, { useState, useEffect } from 'react';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Problem from './pages/Problem';
import Solution from './pages/Solution';
import HowItWorks from './pages/HowItWorks';
import Future from './pages/Future';

const PAGES = ['Home', 'About Us', 'Problem', 'Solution', 'How It Works?', 'Future'];
const PAGE_KEYS = ['home', 'about', 'problem', 'solution', 'howitworks', 'future'];

export default function App() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { window.scrollTo(0, 0); }, [active]);

  const navigate = (key) => { setActive(key); setMenuOpen(false); };

  const renderPage = () => {
    switch (active) {
      case 'home': return <Home navigate={navigate} />;
      case 'about': return <About />;
      case 'problem': return <Problem />;
      case 'solution': return <Solution />;
      case 'howitworks': return <HowItWorks />;
      case 'future': return <Future />;
      default: return <Home navigate={navigate} />;
    }
  };

  return (
    <div>
      {/* NAV */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 1000,
        background: scrolled ? 'rgba(5,8,16,0.97)' : 'rgba(5,8,16,0.8)',
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${scrolled ? 'var(--border)' : 'transparent'}`,
        transition: 'all 0.3s ease',
        padding: '0 2rem',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          {/* HAMBURGER MENU - MOBILE ONLY */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger-btn" style={{
            background: 'none', border: 'none', cursor: 'pointer',
            padding: '8px', color: 'var(--accent)', fontSize: '24px',
            transition: 'all 0.3s ease',
          }}>
            {menuOpen ? '✕' : '☰'}
          </button>

          {/* LOGO */}
          <div onClick={() => navigate('home')} style={{ cursor: 'pointer', marginLeft: '0.5rem' }}>
            <div style={{ fontFamily: 'var(--font-head)', fontSize: '1.2rem', fontWeight: 800, color: 'var(--accent)', letterSpacing: 2, lineHeight: 1 }}>
              POTHOLE
            </div>
            <div style={{ fontFamily: 'var(--font-head)', fontSize: '0.65rem', fontWeight: 600, color: 'var(--teal)', letterSpacing: 4, marginTop: 2 }}>
              DETECTION CLAN
            </div>
          </div>

          {/* DESKTOP NAV */}
          <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
            {PAGES.map((page, i) => (
              <button key={page} onClick={() => navigate(PAGE_KEYS[i])} style={{
                background: active === PAGE_KEYS[i] ? 'rgba(245,166,35,0.15)' : 'transparent',
                border: active === PAGE_KEYS[i] ? '1px solid rgba(245,166,35,0.4)' : '1px solid transparent',
                color: active === PAGE_KEYS[i] ? 'var(--accent)' : 'var(--muted)',
                padding: '6px 14px', borderRadius: 6, cursor: 'pointer',
                fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 500,
                transition: 'all 0.2s', whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { if (active !== PAGE_KEYS[i]) e.target.style.color = 'var(--text)'; }}
              onMouseLeave={e => { if (active !== PAGE_KEYS[i]) e.target.style.color = 'var(--muted)'; }}
              >{page}</button>
            ))}
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {menuOpen && <div onClick={() => setMenuOpen(false)} style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 999,
        animation: 'fadeIn 0.2s ease',
      }} />}

      {/* MOBILE MENU DRAWER */}
      <div className="mobile-menu" style={{
        position: 'fixed', top: 64, left: 0, right: 0, background: 'rgba(5,8,16,0.98)',
        backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)',
        maxHeight: menuOpen ? 'calc(100vh - 64px)' : 0,
        overflow: 'hidden', zIndex: 999,
        transition: 'max-height 0.3s ease',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', padding: '1rem' }}>
          {PAGES.map((page, i) => (
            <button key={page} onClick={() => navigate(PAGE_KEYS[i])} style={{
              background: active === PAGE_KEYS[i] ? 'rgba(245,166,35,0.15)' : 'transparent',
              border: active === PAGE_KEYS[i] ? '1px solid rgba(245,166,35,0.4)' : '1px solid transparent',
              color: active === PAGE_KEYS[i] ? 'var(--accent)' : 'var(--text)',
              padding: '12px 16px', borderRadius: 6, cursor: 'pointer',
              fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500,
              transition: 'all 0.2s', marginBottom: '0.5rem', textAlign: 'left',
            }}>{page}</button>
          ))}
        </div>
      </div>

      {/* PAGE CONTENT */}
      <div key={active} style={{ animation: 'fadeUp 0.4s ease forwards' }}>
        {renderPage()}
      </div>

      {/* FOOTER */}
      <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--muted)', fontSize: 12, borderTop: '1px solid var(--border)', marginTop: '3rem', fontFamily: 'var(--font-body)' }}>
        <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-head)', fontWeight: 700 }}>POTHOLE DETECTION CLAN</span>
        <span style={{ margin: '0 0.75rem' }}>·</span>
        Darshan · Aaruthra · Deeksha
        <span style={{ margin: '0 0.75rem' }}>·</span>
        Hosur, Tamil Nadu 
      </footer>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
