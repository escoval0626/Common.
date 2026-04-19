'use client'

import * as motion from 'framer-motion/client'
import Scene from '../canvas/Scene'

export default function Hero() {
  const title = "Common."
  
  const titleVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1] as any,
        delay: 0.8 + i * 0.05
      }
    })
  }

  return (
    <section id="hero" className="relative h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden bg-[#e0e0e0] touch-pan-y">
      {/* Background Layer 1: The Video (will-changeでGPU加速を提示) */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none" style={{ opacity: 0.6, willChange: 'transform' }}>
        <video
          src="/videos/hero_bg.mp4"
          poster="/images/hero_poster.png"
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        />
      </div>

      {/* Background Layer 2: The 3D Abstract Visual (描画を安定化) */}
      <div className="absolute inset-0 z-10 pointer-events-none" style={{ transform: 'translateZ(0)' }}>
        <Scene />
      </div>

      {/* Foreground Layer: Typography */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 pointer-events-none">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="mb-8 text-[12px] tracking-[0.5em] text-secondary font-ultra-light uppercase font-english"
        >
          BEYOND MINIMALISM
        </motion.span>
        
        {/* Split-Text Title (80% Scale + Tighter Tracking) */}
        <h1 className="text-[2.4rem] sm:text-[3.6rem] md:text-[7.6rem] font-light tracking-[0.04em] leading-none text-primary mb-6 font-english flex overflow-hidden">
          {title.split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>
        
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="mb-16 text-[12px] tracking-[0.6em] text-secondary font-ultra-light uppercase font-english"
        >
          TRACING THE INVISIBLE
        </motion.span>

        {/* Zen Old Mincho 適用 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.8 }}
          className="space-y-4 text-[13px] md:text-base leading-relaxed tracking-[0.15em] md:tracking-[0.2em] font-light text-secondary font-japanese max-w-[300px] md:max-w-none"
        >
          <p>「普通」の中に潜む、美しさを定義する。</p>
          <p className="hidden md:block">一過性の流行ではなく、普遍的な美学を追求する。</p>
        </motion.div>

        {/* CTA Button (Removed Magnetic) */}
        <motion.a
          href="#選定作品"
          whileHover={{ scale: 1.05 }}
          className="mt-16 pointer-events-auto bg-primary px-10 py-5 text-[11px] tracking-[0.4em] text-surface font-light transition-all duration-500 hover:bg-primary-dim hover:px-14 uppercase font-english inline-block"
        >
          VIEW ALL PROJECTS
        </motion.a>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none">
        <div className="w-px h-16 bg-primary" />
      </div>
    </section>
  )
}
