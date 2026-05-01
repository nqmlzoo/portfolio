'use client'

import { useEffect, useRef } from 'react'

export default function Home() {
  const hourRef = useRef()
  const minRef = useRef()
  const secRef = useRef()

  useEffect(() => {
    function updateClock() {
      const now = new Date()
      const s = now.getSeconds()
      const m = now.getMinutes()
      const h = now.getHours() % 12
      const cx = 16, cy = 16

      function handPos(deg, len) {
        const rad = (deg - 90) * Math.PI / 180
        return { x: cx + len * Math.cos(rad), y: cy + len * Math.sin(rad) }
      }

      const hp = handPos(h * 30 + m * 0.5, 7)
      const mp = handPos(m * 6 + s * 0.1, 9.5)
      const sp = handPos(s * 6, 10.5)

      if (hourRef.current) { hourRef.current.setAttribute('x2', hp.x); hourRef.current.setAttribute('y2', hp.y) }
      if (minRef.current) { minRef.current.setAttribute('x2', mp.x); minRef.current.setAttribute('y2', mp.y) }
      if (secRef.current) { secRef.current.setAttribute('x2', sp.x); secRef.current.setAttribute('y2', sp.y) }
    }

    updateClock()
    const timer = setInterval(updateClock, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <main style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px' }}>

      {/* Nav */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', borderBottom: '0.5px solid rgba(255,255,255,0.08)' }}>
        <div style={{ fontSize: '15px', fontFamily: 'var(--font-playfair)' }}>
          Nq<em style={{ color: 'rgba(255,255,255,0.5)' }}>ML</em>Zoo
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['about', 'works', 'contact'].map(l => (
              <a key={l} href={`#${l}`} style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', letterSpacing: '.1em' }}>{l}</a>
            ))}
          </div>
          <svg viewBox="0 0 32 32" width="32" height="32">
            <circle cx="16" cy="16" r="14" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5"/>
            <circle cx="16" cy="16" r="1.2" fill="rgba(255,255,255,0.6)"/>
            <line ref={hourRef} x1="16" y1="16" x2="16" y2="8" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round"/>
            <line ref={minRef} x1="16" y1="16" x2="16" y2="5" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8" strokeLinecap="round"/>
            <line ref={secRef} x1="16" y1="16" x2="16" y2="4" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" strokeLinecap="round"/>
          </svg>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: '80px 0 60px', borderBottom: '0.5px solid rgba(255,255,255,0.08)' }}>
        <p style={{ fontSize: '11px', letterSpacing: '.25em', color: 'rgba(255,255,255,0.25)', marginBottom: '20px' }}>PORTFOLIO</p>
        <h1 style={{ fontSize: '56px', fontWeight: '400', lineHeight: '1.1', marginBottom: '12px', fontFamily: 'var(--font-playfair)' }}>
          Nakamura<br/><em style={{ color: 'rgba(255,255,255,0.5)' }}>Shota</em>
        </h1>
        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.35)', letterSpacing: '.05em' }}>Born in Kagoshima, Japan — Jan 6, 2004</p>
      </section>

      {/* About */}
      <section id="about" style={{ padding: '48px 0', borderBottom: '0.5px solid rgba(255,255,255,0.08)' }}>
        <p style={{ fontSize: '11px', letterSpacing: '.25em', color: 'rgba(255,255,255,0.25)', marginBottom: '28px' }}>ABOUT</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {[
            { label: 'born', val: 'Jan 6, 2004' },
            { label: 'from', val: 'Kagoshima, Japan' },
            { label: 'bowling', val: '~270 pts' },
            { label: 'valorant', val: 'Immortal 2' },
          ].map(({ label, val }) => (
            <div key={label} style={{ padding: '16px', border: '0.5px solid rgba(255,255,255,0.07)', borderRadius: '8px', background: 'rgba(255,255,255,0.02)' }}>
              <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', marginBottom: '6px', letterSpacing: '.1em' }}>{label}</p>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.8)', fontFamily: 'var(--font-playfair)' }}>{val}</p>
            </div>
          ))}
          <div style={{ gridColumn: 'span 2', padding: '16px', border: '0.5px solid rgba(255,255,255,0.07)', borderRadius: '8px', background: 'rgba(255,255,255,0.02)' }}>
            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', marginBottom: '6px', letterSpacing: '.1em' }}>music</p>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', fontFamily
