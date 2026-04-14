'use client'

import * as motion from 'framer-motion/client'

const carouselImages = [
  '/images/separate/4.webp',
  '/images/separate/11.webp',
  '/images/separate/1.webp',
  '/images/separate/8.webp',
  '/images/separate/5.webp',
  '/images/separate/9.webp',
  '/images/separate/2.webp',
  '/images/separate/7.webp',
  '/images/separate/10.webp',
  '/images/separate/6.webp',
  '/images/separate/3.webp',
]

// Duplicate images for seamless looping
const doubledImages = [...carouselImages, ...carouselImages]

export default function Separate() {
  return (
    <section className="relative w-full bg-surface-container-low overflow-hidden">
      {/* Top Part: Infinite Marquee Carousel (Height reduced to 30vh) */}
      <div className="relative w-full h-[25vh] md:h-[30vh] flex items-center overflow-hidden border-b border-outline-variant">
        <motion.div 
          className="flex gap-4 md:gap-8 h-full items-center" // 高速ループ中でも写真が埋没しないようgapを調整
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear", 
            duration: 80, 
            repeat: Infinity 
          }}
        >
          {doubledImages.map((src, i) => (
            <div key={i} className="relative h-[80%] aspect-[16/9] flex-shrink-0"> {/* 写真自体を80%に縮小 */}
              <img 
                src={src} 
                className="w-full h-full object-cover shadow-sm" 
                alt={`Detail ${i}`} 
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Part: Production Flow */}
      <div className="py-32 px-6 md:py-48 md:px-32">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center mb-32 md:mb-48 text-center w-full"
          >
            <h2 className="text-4xl md:text-6xl font-light text-primary tracking-tighter-extra mb-6 font-english capitalize">
              Process.
            </h2>
            <div className="w-12 h-[1px] bg-outline" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-32">
            {[
              {
                id: "01.",
                title: "Dialogue / 対話と抽出",
                desc: "画一的なヒアリングシートを埋めるのではなく、対話を通じてビジネスの背景や想いを深く共有。表層的な要望の奥にある、守るべき「価値の核」を抽出します。"
              },
              {
                id: "02.",
                title: "Vision / 視覚の定義",
                desc: "抽出した価値を、どのような佇まいで表現すべきか。写真家としての構図感覚を用い、ブランドを象徴する最適なビジュアル・トーンを定義。空気感を具体的なデザインへと翻訳します。"
              },
              {
                id: "03.",
                title: "Realization / 構築と研磨",
                desc: "高効率なワークフローにより、思考を澱みなく形へと落とし込む。1ピクセルの整合性と「納得感」を突き詰めた、強度の高いクリエイティブを完成させます。"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 1.2, ease: "easeOut" }}
                className="relative pl-10"
              >
                {/* Decorative Vertical Line (Animated Drawing) */}
                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-outline-variant/30">
                  <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: '100%' }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.2, duration: 1.5, ease: "easeInOut" }}
                    className="absolute top-0 left-0 w-full bg-primary"
                  />
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.2, duration: 0.5 }}
                    className="absolute top-0 left-[-1.5px] w-1 h-1 rounded-full bg-primary" 
                  />
                </div>

                <span className="text-[10px] tracking-[0.4em] text-secondary text-ultra-light mb-6 block font-english">
                  {item.id}
                </span>
                <h3 className="text-xl md:text-2xl font-light mb-8 text-primary tracking-tighter-extra font-japanese">
                  {item.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-secondary tracking-widest text-justify font-japanese">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
