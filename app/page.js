'use client'
import { useEffect, useState } from 'react'

const STARS = Array.from({ length: 100 }, (_, i) => ({
  x: ((i * 47.3 + 11.7) % 97.3),
  y: ((i * 31.9 + 23.1) % 96.8),
  size: ((i % 3) === 0 ? 2 : 1),
  delay: (i * 0.41) % 5,
  duration: 2.5 + (i % 4) * 0.7,
}))

const SHOOTING = Array.from({ length: 6 }, (_, i) => ({
  x: (i * 16 + 5),
  y: (i * 9 + 3),
  delay: i * 2.8 + 1,
  duration: 3.5 + i * 0.4,
}))

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function goTo(e, id) {
    e.preventDefault()
    if (id === 'top') { window.scrollTo({ top: 0, behavior: 'smooth' }); return }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const navBg = scrollY > 40
    ? 'rgba(7,7,26,0.92)'
    : 'transparent'

  return (
    <>
      {/* ── Background stars ── */}
      <div aria-hidden style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        {STARS.map((s, i) => (
          <span key={i} style={{
            position: 'absolute',
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            borderRadius: '50%',
            background: '#fff',
            animation: `twinkle ${s.duration}s ${s.delay}s ease-in-out infinite`,
          }} />
        ))}
        {SHOOTING.map((s, i) => (
          <span key={i} style={{
            position: 'absolute',
            left: `${s.x}%`,
            top: `${s.y}%`,
            height: '1px',
            maxWidth: '80px',
            width: '80px',
            background: 'linear-gradient(90deg, rgba(255,255,255,0.85) 0%, transparent 100%)',
            animation: `shoot ${s.duration}s ${s.delay}s linear infinite`,
          }} />
        ))}
      </div>

      {/* ── Fixed header ── */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        background: navBg,
        backdropFilter: scrollY > 40 ? 'blur(12px)' : 'none',
        borderBottom: scrollY > 40 ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'background 0.4s, border-color 0.4s, backdrop-filter 0.4s',
      }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 40px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <a href="#top" onClick={e => goTo(e, 'top')} style={{ fontSize: '14px', letterSpacing: '.25em', color: 'var(--text)', fontWeight: 400 }}>
            NqMLZoo
          </a>

          {/* Nav */}
          <nav style={{ display: 'flex', gap: '36px' }}>
            {[['TOP', 'top'], ['ABOUT', 'about'], ['WORKS', 'works'], ['CONTACT', 'contact']].map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={e => goTo(e, id)} className="nav-link"
                style={{ fontSize: '11px', letterSpacing: '.2em', color: 'var(--text-dim)' }}>
                {label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div style={{ display: 'flex', gap: '20px' }}>
            {[['X', '#'], ['GitHub', '#']].map(([label, href]) => (
              <a key={label} href={href} className="nav-link"
                style={{ fontSize: '11px', letterSpacing: '.15em', color: 'var(--text-faint)' }}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section id="top" style={{
        position: 'relative', zIndex: 1,
        height: '100vh', minHeight: '600px',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
      }}>
        {/* Frame decoration */}
        <div aria-hidden style={{ position: 'absolute', inset: '40px', pointerEvents: 'none' }}>
          {/* corners */}
          {[
            { top: 0, left: 0, borderTop: '1px solid var(--border)', borderLeft: '1px solid var(--border)', width: 40, height: 40 },
            { top: 0, right: 0, borderTop: '1px solid var(--border)', borderRight: '1px solid var(--border)', width: 40, height: 40 },
            { bottom: 0, left: 0, borderBottom: '1px solid var(--border)', borderLeft: '1px solid var(--border)', width: 40, height: 40 },
            { bottom: 0, right: 0, borderBottom: '1px solid var(--border)', borderRight: '1px solid var(--border)', width: 40, height: 40 },
          ].map((style, i) => (
            <div key={i} style={{ position: 'absolute', ...style }} />
          ))}
        </div>

        {/* Text */}
        <div className="hero-text" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '10px', letterSpacing: '.5em', color: 'var(--text-faint)', marginBottom: '32px' }}>
            OFFICIAL PORTFOLIO
          </p>
          <h1 style={{
            fontSize: 'clamp(52px, 10vw, 108px)',
            fontWeight: 300,
            lineHeight: 1,
            letterSpacing: '.04em',
            color: 'var(--text)',
          }}>
            Nakamura
          </h1>
          <h1 className="hero-text-delay" style={{
            fontSize: 'clamp(52px, 10vw, 108px)',
            fontWeight: 300,
            lineHeight: 1.05,
            letterSpacing: '.06em',
            color: 'var(--text-dim)',
            fontStyle: 'italic',
            marginBottom: '36px',
          }}>
            Shota
          </h1>
          <p style={{ fontSize: '11px', letterSpacing: '.3em', color: 'var(--text-faint)' }}>
            Born in Kagoshima, Japan — Jan 6, 2004
          </p>
        </div>

        {/* Scroll down indicator */}
        <div style={{
          position: 'absolute', bottom: '48px',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',
        }}>
          <p style={{ fontSize: '9px', letterSpacing: '.4em', color: 'var(--text-faint)' }}>SCROLL DOWN</p>
          <div style={{
            width: '1px', height: '48px',
            background: 'linear-gradient(to bottom, var(--text-faint), transparent)',
            animation: 'scrollLine 2s ease-in-out infinite',
          }} />
        </div>
      </section>

      {/* ── Main content ── */}
      <main style={{ position: 'relative', zIndex: 1, maxWidth: '1080px', margin: '0 auto', padding: '0 40px' }}>

        {/* ── ABOUT ── */}
        <section id="about" style={{ padding: '96px 0 80px', borderTop: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
            <p style={{ fontSize: '10px', letterSpacing: '.45em', color: 'var(--text-dim)' }}>ABOUT</p>
            <p style={{ fontSize: '10px', letterSpacing: '.2em', color: 'var(--text-faint)' }}>VIEW MORE</p>
          </div>

          {/* Grid cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'var(--border)', marginBottom: '1px' }}>
            {[
              { label: 'BORN', val: 'Jan 6, 2004' },
              { label: 'FROM', val: 'Kagoshima' },
              { label: 'BOWLING', val: '~270 pts' },
              { label: 'VALORANT', val: 'Immortal 2' },
            ].map(({ label, val }) => (
              <div key={label} style={{ padding: '28px 22px', background: 'var(--bg)' }}>
                <p style={{ fontSize: '9px', letterSpacing: '.3em', color: 'var(--text-faint)', marginBottom: '14px' }}>{label}</p>
                <p style={{ fontSize: '18px', fontWeight: 300, color: 'var(--text)', letterSpacing: '.03em' }}>{val}</p>
              </div>
            ))}
          </div>

          <div style={{ background: 'var(--border)' }}>
            <div style={{ padding: '28px 22px', background: 'var(--bg)' }}>
              <p style={{ fontSize: '9px', letterSpacing: '.3em', color: 'var(--text-faint)', marginBottom: '14px' }}>MUSIC</p>
              <p style={{ fontSize: '15px', fontWeight: 300, color: 'var(--text-dim)', lineHeight: 1.9, letterSpacing: '.04em' }}>
                Mrs. GREEN APPLE<br />
                Utopia&nbsp;/&nbsp;BABEL no TOH&nbsp;/&nbsp;ゼンジン未到とイ/ミュータブル
              </p>
            </div>
          </div>
        </section>

        {/* ── WORKS ── */}
        <section id="works" style={{ padding: '80px 0', borderTop: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
            <p style={{ fontSize: '10px', letterSpacing: '.45em', color: 'var(--text-dim)' }}>WORKS</p>
            <p style={{ fontSize: '10px', letterSpacing: '.2em', color: 'var(--text-faint)' }}>VIEW MORE</p>
          </div>

          <div style={{ display: 'grid', gap: '1px', background: 'var(--border)' }}>
            {[
              { num: '01', title: 'Nijisanji Data Lab', desc: 'Data analysis platform', href: '#' },
            ].map(({ num, title, desc, href }) => (
              <a key={num} href={href} className="work-row" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '32px 28px', background: 'var(--bg)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
                  <span style={{ fontSize: '11px', letterSpacing: '.2em', color: 'var(--text-faint)', minWidth: '24px' }}>{num}</span>
                  <div>
                    <p style={{ fontSize: '20px', fontWeight: 300, color: 'var(--text)', letterSpacing: '.04em', marginBottom: '6px' }}>{title}</p>
                    <p style={{ fontSize: '11px', color: 'var(--text-faint)', letterSpacing: '.12em' }}>{desc}</p>
                  </div>
                </div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="rgba(240,240,248,0.3)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            ))}
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" style={{ padding: '80px 0 96px', borderTop: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
            <p style={{ fontSize: '10px', letterSpacing: '.45em', color: 'var(--text-dim)' }}>CONTACT</p>
          </div>

          <div style={{ display: 'grid', gap: '1px', background: 'var(--border)' }}>
            {[
              { label: 'EMAIL', val: 'not set yet' },
              { label: 'X', val: 'not set yet' },
              { label: 'GITHUB', val: 'not set yet' },
            ].map(({ label, val }) => (
              <div key={label} style={{
                display: 'flex', alignItems: 'center', gap: '48px',
                padding: '26px 28px', background: 'var(--bg)',
              }}>
                <span style={{ fontSize: '9px', letterSpacing: '.3em', color: 'var(--text-faint)', width: '72px' }}>{label}</span>
                <span style={{ fontSize: '14px', fontWeight: 300, color: 'var(--text-faint)', fontStyle: 'italic' }}>{val}</span>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer style={{
        position: 'relative', zIndex: 1,
        borderTop: '1px solid var(--border)',
        padding: '28px 40px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        maxWidth: '100%',
      }}>
        <p style={{ fontSize: '10px', letterSpacing: '.15em', color: 'var(--text-faint)' }}>
          ©2026 Nakamura Shota
        </p>
        <a href="#top" onClick={e => goTo(e, 'top')} className="page-top-link"
          style={{ fontSize: '10px', letterSpacing: '.3em', color: 'var(--text-faint)' }}>
          PAGE TOP
        </a>
      </footer>
    </>
  )
}
