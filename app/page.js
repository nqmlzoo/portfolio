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
    <main style={{maxWidth:'680px',margin:'0 auto',padding:'0 24px'}}>
      <nav style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'20px 0',borderBottom:'0.5px solid rgba(255,255,255,0.08)'}}>
        <div style={{fontSize:'15px',fontFamily:'var(--font-playfair)'}}>
          Nq<em style={{color:'rgba(255,255,255,0.5)'}}>ML</em>Zoo
        </div>
        <div style={{display:'flex',alignItems:'center',gap:'24px'}}>
          <div style={{display:'flex',gap:'24px'}}>
            {['about','works','contact'].map(l=>(
              <a key={l} href={`#${l}`} style={{fontSize:'12px',color:'rgba(255,255,255,0.4)',letterSpacing:'.1em'}}>{l}</a>
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
      <section style={{padding:'80px 0 60px',borderBottom:'0.5px solid rgba(255,255,255,0.08)'}}>
        <p style={{fontSize:'11px',letterSpacing:'.25em',color:'rgba(255,255,255,0.25)',marginBottom:'20px'}}>PORTFOLIO</p>
        <h1 style={{fontSize:'56px',fontWeight:'400',lineHeight:'1.1',marginBottom:'12px',fontFamily:'var(--font-playfair)'}}>
          Nakamura<br/><em style={{color:'rgba(255,255,255,0.5)'}}>Shota</em>
        </h1>
        <p style={{fontSize:'14px',color:'rgba(255,255,255,0.35)',letterSpacing:'.05em'}}>Born in Kagoshima, Japan — Jan 6, 2004</p>
      </section>
      <section id="about" style={{padding:'48px 0',borderBottom:'0.5px solid rgba(255,255,255,0.08)'}}>
        <p style={{fontSize:'11px',letterSpacing:'.25em',color:'rgba(255,255,255,0.25)',marginBottom:'28px'}}>ABOUT</p>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'12px'}}>
          {[{label:'born',val:'Jan 6, 2004'},{label:'from',val:'Kagoshima, Japan'},{label:'bowling',val:'~270 pts'},{label:'valorant',val:'Immortal 2'}].map(({label,val})=>(
            <div key={label} style={{padding:'16px',border:'0.5px solid rgba(255,255,255,0.07)',borderRadius:'8px',background:'rgba(255,255,255,0.02)'}}>
              <p style={{fontSize:'11px',color:'rgba(255,255,255,0.25)',marginBottom:'6px',letterSpacing:'.1em'}}>{label}</p>
              <p style={{fontSize:'15px',color:'rgba(255,255,255,0.8)',fontFamily:'var(--font-playfair)'}}>{val}</p>
            </div>
          ))}
          <div style={{gridColumn:'span 2',padding:'16px',border:'0.5px solid rgba(255,255,255,0.07)',borderRadius:'8px',background:'rgba(255,255,255,0.02)'}}>
            <p style={{fontSize:'11px',color:'rgba(255,255,255,0.25)',marginBottom:'6px',letterSpacing:'.1em'}}>music</p>
            <p style={{fontSize:'12px',color:'rgba(255,255,255,0.8)',fontFamily:'var(--font-playfair)',lineHeight:'1.6'}}>Mrs. GREEN APPLE<br/>Utopia / BABEL no TOH / ゼンジン未到とイ/ミュータブル</p>
          </div>
        </div>
      </section>
      <section id="works" style={{padding:'48px 0',borderBottom:'0.5px solid rgba(255,255,255,0.08)'}}>
        <p style={{fontSize:'11px',letterSpacing:'.25em',color:'rgba(255,255,255,0.25)',marginBottom:'28px'}}>WORKS</p>
        <div style={{padding:'24px',border:'0.5px solid rgba(255,255,255,0.08)',borderRadius:'12px',background:'rgba(255,255,255,0.02)',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <div>
            <p style={{fontSize:'11px',color:'rgba(255,255,255,0.25)',marginBottom:'8px',letterSpacing:'.1em'}}>01</p>
            <p style={{fontSize:'18px',fontFamily:'var(--font-playfair)',color:'#fff'}}>Nijisanji Data Lab</p>
          </div>
          <div style={{width:'40px',height:'40px',borderRadius:'50%',border:'0.5px solid rgba(255,255,255,0.12)',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </div>
        </div>
      </section>
      <section id="contact" style={{padding:'48px 0',borderBottom:'0.5px solid rgba(255,255,255,0.08)'}}>
        <p style={{fontSize:'11px',letterSpacing:'.25em',color:'rgba(255,255,255,0.25)',marginBottom:'28px'}}>CONTACT</p>
        <div style={{padding:'24px',border:'0.5px solid rgba(255,255,255,0.07)',borderRadius:'12px',background:'rgba(255,255,255,0.02)'}}>
          {[{label:'email',val:'not set yet'},{label:'X',val:'not set yet'},{label:'GitHub',val:'not set yet'}].map(({label,val},i,arr)=>(
            <div key={label} style={{display:'flex',gap:'16px',alignItems:'center',padding:'10px 0',borderBottom:i<arr.length-1?'0.5px solid rgba(255,255,255,0.06)':'none'}}>
              <span style={{fontSize:'11px',color:'rgba(255,255,255,0.25)',width:'80px',letterSpacing:'.1em'}}>{label}</span>
              <span style={{fontSize:'13px',color:'rgba(255,255,255,0.15)',fontFamily:'var(--font-playfair)',fontStyle:'italic'}}>{val}</span>
            </div>
          ))}
        </div>
      </section>
      <footer style={{padding:'20px 0',textAlign:'center'}}>
        <p style={{fontSize:'11px',color:'rgba(255,255,255,0.15)',letterSpacing:'.1em'}}>© 2026 Shota Nakamura</p>
      </footer>
    </main>
  )
}
