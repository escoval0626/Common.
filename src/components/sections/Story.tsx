'use client'

import * as motion from 'framer-motion/client'

export default function Story() {
  return (
    <section id="私たちの想い" className="relative w-full bg-surface py-32 px-6 md:py-60 md:px-32 flex flex-col items-center overflow-hidden">
      <div className="max-w-4xl w-full">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center mb-20 md:mb-32 text-center"
        >
          <h2 className="text-3xl md:text-6xl font-light text-primary tracking-tighter-extra mb-6 font-english capitalize">
            Story.
          </h2>
          <div className="w-12 h-[1px] bg-outline" />
        </motion.div>

        {/* Main Philosophy Text */}
        <div className="space-y-12 md:space-y-20">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl md:text-5xl font-light leading-relaxed text-primary tracking-tighter-extra text-center font-japanese"
          >
            デザインの背後にある、<br className="md:hidden" />静かな意志。
          </motion.h3>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 2 }}
            className="space-y-8 max-w-2xl mx-auto"
          >
            <p className="text-sm md:text-base font-light leading-loose text-secondary tracking-widest text-justify font-japanese">
              私はただ美しいものを作るのではなく、そのブランドが本来持っている「気配」を形にすることを大切にしています。
              日常の何気ない瞬間に潜む美しさを見出し、研ぎ澄ますこと。
              過剰な装飾に頼らず、本質的な強さを引き出すこと。
            </p>
            <p className="text-sm md:text-base font-light leading-loose text-secondary tracking-widest text-justify font-japanese">
              それが「Common.」の原点であり、私たちがクライアントと共に歩む道標です。
              共に語り、共に抽出し、あなただけの「普遍的な価値」を、揺るぎない形へと変えていきます。
            </p>
          </motion.div>
        </div>

        {/* Subtle Mid-Page CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1.2 }}
          className="mt-24 md:mt-32 flex justify-center"
        >
          <a 
            href="#お問い合わせ" 
            className="group relative inline-flex flex-col items-center"
          >
            <span className="text-[10px] tracking-[0.4em] text-primary uppercase font-ultra-light mb-4 group-hover:text-zinc-500 transition-colors duration-500">
              Contact for Inquiry
            </span>
            <div className="w-16 h-[1px] bg-primary group-hover:w-24 transition-all duration-700" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
