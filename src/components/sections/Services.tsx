'use client'

import Image from 'next/image'
import * as motion from 'framer-motion/client'

export default function Services() {
  const services = [
    {
      title: "Web Production",
      desc: (
        <>
          <span className="inline-block whitespace-nowrap">明瞭さと</span>
          <span className="inline-block whitespace-nowrap">流れを</span>
          <span className="inline-block whitespace-nowrap">重んじた、</span>
          <br className="md:hidden" />
          <span className="inline-block whitespace-nowrap">没入感のある</span>
          <span className="inline-block whitespace-nowrap">デジタル体験を。</span>
        </>
      ),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-secondary">
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="1" />
        </svg>
      )
    },
    {
      title: "LP Production",
      desc: (
        <>
          <span className="inline-block whitespace-nowrap">ミニマルな</span>
          <span className="inline-block whitespace-nowrap">美学に</span>
          <span className="inline-block whitespace-nowrap">基づいた、</span>
          <br className="md:hidden" />
          <span className="inline-block whitespace-nowrap">確度の高い</span>
          <span className="inline-block whitespace-nowrap">ストーリーを。</span>
        </>
      ),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-secondary">
          <path d="M4 20L20 4M4 4l16 16" />
        </svg>
      )
    },
    {
      title: "Logo Design",
      desc: (
        <>
          <span className="inline-block whitespace-nowrap">本質を抽出し、</span>
          <span className="inline-block whitespace-nowrap">普遍的で</span>
          <span className="inline-block whitespace-nowrap">力強い</span>
          <br className="md:hidden" />
          <span className="inline-block whitespace-nowrap">視覚的アイデンティティを</span>
          <span className="inline-block whitespace-nowrap">構築します。</span>
        </>
      ),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-secondary">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        </svg>
      )
    },
    {
      title: "Photography",
      desc: (
        <>
          <span className="inline-block whitespace-nowrap">光と影を</span>
          <span className="inline-block whitespace-nowrap">操り、</span>
          <br className="md:hidden" />
          <span className="inline-block whitespace-nowrap">静寂の中に</span>
          <span className="inline-block whitespace-nowrap">潜む</span>
          <span className="inline-block whitespace-nowrap">空気感を</span>
          <span className="inline-block whitespace-nowrap">切り取ります。</span>
        </>
      ),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-secondary">
          <rect x="3" y="6" width="18" height="13" rx="1" />
          <circle cx="12" cy="12.5" r="3" />
        </svg>
      )
    },
    {
      title: "Copywriting",
      desc: (
        <>
          <span className="inline-block whitespace-nowrap">言葉に</span>
          <span className="inline-block whitespace-nowrap">魂を込め、</span>
          <span className="inline-block whitespace-nowrap">ブランドの</span>
          <span className="inline-block whitespace-nowrap">深層にある</span>
          <br className="md:hidden" />
          <span className="inline-block whitespace-nowrap">想いを</span>
          <span className="inline-block whitespace-nowrap">響かせる</span>
          <span className="inline-block whitespace-nowrap">ストーリーを</span>
          <span className="inline-block whitespace-nowrap">紡ぎます。</span>
        </>
      ),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-secondary">
          <path d="M16 3L5 14l-1 5 5-1L20 7l-4-4z" />
          <path d="M13 6l4 4" />
        </svg>
      )
    },
    {
      title: "Video Production",
      desc: (
        <>
          <span className="inline-block whitespace-nowrap">動きと音を</span>
          <span className="inline-block whitespace-nowrap">操り、</span>
          <span className="inline-block whitespace-nowrap">一瞬で</span>
          <span className="inline-block whitespace-nowrap">心を掴む</span>
          <br className="md:hidden" />
          <span className="inline-block whitespace-nowrap">シネマティックな</span>
          <span className="inline-block whitespace-nowrap">物語を</span>
          <span className="inline-block whitespace-nowrap">創造します。</span>
        </>
      ),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-secondary">
          <circle cx="12" cy="12" r="10" />
          <path d="M10 8l6 4-6 4V8z" />
        </svg>
      )
    },
    {
      title: "SNS Key Visual",
      desc: (
        <>
          <span className="inline-block whitespace-nowrap">情報の波の中で</span>
          <span className="inline-block whitespace-nowrap">一際目を惹く、</span>
          <br className="md:hidden" />
          <span className="inline-block whitespace-nowrap">ブランドの</span>
          <span className="inline-block whitespace-nowrap">個性を</span>
          <span className="inline-block whitespace-nowrap">凝縮した</span>
          <span className="inline-block whitespace-nowrap">視覚体験を。</span>
        </>
      ),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-secondary">
          <rect x="2" y="2" width="20" height="20" rx="2" />
          <rect x="8" y="8" width="8" height="8" rx="1" />
        </svg>
      )
    },
    {
      title: "Visual Consulting",
      desc: (
        <>
          <span className="inline-block whitespace-nowrap">多角的な</span>
          <span className="inline-block whitespace-nowrap">視点から</span>
          <span className="inline-block whitespace-nowrap">美学を</span>
          <span className="inline-block whitespace-nowrap">見つめ直し、</span>
          <br className="md:hidden" />
          <span className="inline-block whitespace-nowrap">一貫性の</span>
          <span className="inline-block whitespace-nowrap">ある表現の</span>
          <span className="inline-block whitespace-nowrap">羅針盤となります。</span>
        </>
      ),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-secondary">
          <path d="M12 2L2 12l10 10 10-10L12 2z" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      )
    }
  ]

  return (
    <section id="事業内容" className="relative w-full bg-surface py-32 px-6 md:py-60 md:px-32">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header (PNG ④) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center mb-32 md:mb-48 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-light text-primary tracking-tighter-extra mb-6 font-english capitalize">
            Services.
          </h2>
          <div className="w-12 h-[1px] bg-outline" />
        </motion.div>

        {/* 4 Columns (PNG ④) - Responsive Grid with Staggered Entrance */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2
              }
            }
          }}
          className="grid grid-cols-2 md:grid-cols-4 w-full gap-x-6 md:gap-x-8 gap-y-12 md:gap-y-20"
        >
          {services.map((s, i) => (
            <motion.div 
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                show: { opacity: 1, y: 0, scale: 1 }
              }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center px-2 group"
            >
              <div className="mb-10 transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6">
                {s.icon}
              </div>
              <div className="h-16 flex items-center justify-center mb-4">
                <h3 className="text-base md:text-lg font-medium tracking-[0.2em] text-primary uppercase font-english whitespace-normal md:whitespace-nowrap">
                  {s.title}
                </h3>
              </div>
              <p className="text-[13px] font-light leading-relaxed text-secondary tracking-widest max-w-[280px] font-japanese whitespace-normal">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Strategic Mid-Page CTA - Minimal and Professional */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-32 md:mt-48 flex flex-col items-center space-y-12"
        >
          <div className="w-px h-24 bg-outline-variant/30" />
          <div className="text-center space-y-8 px-6">
            <h4 className="text-xl md:text-2xl font-light text-primary tracking-widest font-japanese">
              <span className="inline-block">あなたの価値を、</span>
              <span className="inline-block">本質的な形へ。</span>
            </h4>
            <a 
              href="#お問い合わせ" 
              className="group relative inline-flex flex-col items-center"
            >
              <span className="text-[10px] tracking-[0.4em] text-primary uppercase font-ultra-light mb-4 group-hover:text-zinc-500 transition-colors duration-500">
                Inquiry for your project.
              </span>
              <div className="w-16 h-[1px] bg-primary group-hover:w-24 transition-all duration-700" />
            </a>
          </div>
        </motion.div>      </div>
    </section>
  )
}
