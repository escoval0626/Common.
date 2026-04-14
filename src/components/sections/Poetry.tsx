'use client'

import * as motion from 'framer-motion/client'

export default function Poetry() {
  return (
    <section className="relative w-full bg-surface-container-low py-32 px-6 md:py-60 md:px-32 flex justify-center items-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl text-center space-y-10"
      >
        <div className="space-y-6">
          <p className="text-xl md:text-3xl font-light leading-relaxed text-primary tracking-widest-extra font-japanese italic">
            デザインとは、何を付け加えるかではなく、<br />何を取り除くかにある。
          </p>

          <div className="w-12 h-[1px] bg-outline mx-auto" />

          <p className="text-[10px] tracking-[0.4em] text-secondary text-ultra-light uppercase font-english">
            The Art of Subtraction.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
