'use client'

import Image from 'next/image'
import { useRef } from 'react'
import * as motion from 'framer-motion/client'
import { useScroll, useTransform } from 'framer-motion'



const workItems = [
  {
    category: "01 / RECRUIT LP",
    title: "FTS Recruiting Site",
    image: "/images/works/2.png",
    alt: "千葉県流山市の採用サイト制作実績：墨出し専門企業 FTS | Common. Studio",
    intro: "墨出し専門企業「FTS」の採用サイト。最新の技術と前衛的なビジュアルを融合し、職人魂を視覚化。",
    concept: "伝統技術の継承と最先端の動的表現。一見相反する要素を緻密に融合し、独自のブランドアイデンティティを再構築。",
    url: "https://fts-jp-recruit.com/"
  },
  {
    category: "02 / PORTFOLIO",
    title: "Common By Sho Kitago",
    image: "/images/works/3.png",
    alt: "フォトグラファー北郷将 ポートフォリオサイト制作実績 | Common. Studio",
    intro: "フォトグラファー・北郷将の作品集。広告的手法をUIに導入。写真が持つ訴求力を最大化。",
    concept: "広告的視点による緻密なタイポグラフィ配置。余白そのものをデザインすることで、写真に宿る静寂の物語を可視化。",
    url: "https://commonbyshokitago.com/"
  },
  {
    category: "03 / BRANDING",
    title: "Tokowa Botanical Atelier",
    image: "/images/works/1.png",
    alt: "ボタニカルショップのブランディング・ロゴデザイン制作事例：Tokowa | Common. Studio",
    intro: "ボタニカルショップのブランディング。光と影を見つめる視点を、ロゴデザインへと昇華。",
    concept: "植物の有機的な美しさと、端正な造形美の調和。写真家の視点で光と影を読み解き、ブランドの核をシンボルへ凝縮。",
  },
  {
    category: "04 / ONLINE STORE",
    title: "Calm Coffee",
    image: "/images/works/4.png",
    alt: "千葉県流山おおたかの森のカフェ Calm Coffee ECサイト制作実績 | Common. Studio",
    intro: "流山おおたかの森の閑静な店舗。静寂と余白を再構成し、ECにおける情緒的な購入体験をデザイン。",
    concept: "実店舗の陰影を捉えた非対称な空間設計。デジタル独自の循環する購買フローを構築し、情緒的な購入体験を完成。",
    url: "https://calm-coffe.vercel.app/"
  }
]

const ProjectItem = ({ work, idx }: { work: typeof workItems[0], idx: number }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: idx * 0.1, duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col group"
    >
      {/* Image Slot - Clear Reveal Animation (Scale 1.0) */}
      <div className="relative md:h-[500px] flex flex-col justify-center mb-10 overflow-hidden">
        <motion.div 
          className={`w-full aspect-[3/4] bg-zinc-50 overflow-hidden shadow-sm border border-zinc-100 transition-transform duration-700 ${idx % 2 === 1 ? 'md:translate-y-8' : 'md:-translate-y-8'}`}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
        >
          <Image 
            src={work.image} 
            alt={work.alt}
            width={800}
            height={1067}
            className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-300"
          />
        </motion.div>
      </div>

      {/* Text Information */}
      <div className="flex flex-col">
        <div className="space-y-2 h-20 md:h-24 flex flex-col justify-end pb-2">
          <span className="text-[10px] tracking-[0.4em] text-secondary text-ultra-light uppercase font-english">
            {work.category}
          </span>
          <h3 className="text-xl md:text-2xl font-light text-primary tracking-tighter-extra font-japanese leading-snug">
            {work.title}
          </h3>
        </div>

        <div className="h-8 flex items-center mt-4">
          {work.url ? (
            <a 
              href={work.url} 
              target="_blank" 
              className="text-[10px] tracking-widest text-secondary hover:text-primary transition-colors border-b border-outline inline-block font-english"
            >
              URL: {work.url}
            </a>
          ) : <div className="invisible text-[10px]">EMPTY</div>}
        </div>

        <div className="mt-10 h-20 md:h-24">
          <span className="text-[10px] tracking-widest text-[#aaaaaa] font-ultra-light uppercase block font-english mb-6">
            [Introduction]
          </span>
          <p className="text-[13px] font-light leading-relaxed text-secondary tracking-wide text-justify font-japanese">
            {work.intro}
          </p>
        </div>

        <div className="mt-8">
          <span className="text-[10px] tracking-widest text-[#aaaaaa] font-ultra-light uppercase block font-english mb-6">
            [Design Concept]
          </span>
          <p className="text-[13px] font-light leading-relaxed text-secondary tracking-wide text-justify font-japanese">
            {work.concept}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Works() {
  return (
    <section id="選定作品" className="relative w-full bg-surface-container py-32 px-6 md:py-60 md:px-32">
      <div className="max-w-full mx-auto flex flex-col items-center">
        
        {/* Header (PNG ⑥) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center mb-32 md:mb-48 text-center w-full"
        >
          <h2 className="text-4xl md:text-6xl font-light text-primary tracking-tighter-extra mb-6 font-english">
            Works.
          </h2>
          <div className="w-12 h-[1px] bg-outline" />
        </motion.div>

        {/* 4-Column Grid with Aligned Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-12 lg:gap-x-16 gap-y-20 items-start w-full">
          {workItems.map((work, idx) => (
            <ProjectItem key={idx} work={work} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  )
}



