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
      <nav style={{display:'flex',justifyContent:'space-between',alignItems:'center',paddi
