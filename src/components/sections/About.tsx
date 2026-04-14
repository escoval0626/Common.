import * as motion from 'framer-motion/client'

export default function About() {
  return (
    <section id="私たちの哲学" className="relative min-h-screen w-full bg-surface-container py-32 px-6 md:py-48 md:px-32 font-japanese">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-full mx-auto flex flex-col items-center mb-32 md:mb-48 text-center"
      >
        <h2 className="text-3xl md:text-6xl font-light text-primary tracking-tighter-extra mb-6 font-english capitalize">
          About Common.
        </h2>
        <div className="w-12 h-[1px] bg-outline" />
      </motion.div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12 md:gap-32">
        
        {/* Left Side: Mastery Typography (PNG ②) */}
        <div className="w-full md:w-1/2 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1.2 }}
          >
            <h2 className="text-2xl md:text-5xl font-light leading-[1.3] text-primary mb-12 tracking-tighter-extra">
              「普通」という、<br />究極の選択。
            </h2>
          </motion.div>
          
          <div className="space-y-10 max-w-xl">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1.2 }}
              className="text-base md:text-lg font-light leading-relaxed text-secondary tracking-widest text-justify"
            >
              デザインにおける「普通」とは、妥協ではない。ノイズを削減し、本質的な価値を抽出すること。Common.は、日常に潜む普遍的な美しさを可視化し、ブランドの佇まいを純粋な形へと再構築します。
            </motion.p>
            
            <div className="space-y-8 pt-4">
              {[
                {
                  title: "Visual Integrity",
                  desc: "一瞬で本質を伝える構図、光を操るような階調、迷いのない情報設計。あらゆる要素を視覚的な整合性へと集約し、ブランドの信頼性を高めます。"
                },
                {
                  title: "Pure Production",
                  desc: "表現の純度を高める独自の制作フロー。確かな審美眼に基づき、静寂の中に潜む力強いクリエイティブを生み出します。"
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + (i * 0.2), duration: 1 }}
                >
                  <h3 className="text-sm font-medium tracking-[0.2em] uppercase mb-4 text-primary font-english">{item.title}</h3>
                  <p className="text-sm font-light leading-relaxed text-secondary tracking-widest">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right Side: High Quality Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full md:w-1/2 flex justify-end items-start md:sticky md:top-32"
        >
          <div className="relative w-full max-w-md bg-zinc-100 aspect-[3/4] overflow-hidden shadow-2xl">
             <motion.img 
               src="/images/about/main.png" 
               alt="Vase with dandelion seeds" 
               className="w-full h-full object-cover scale-110"
             />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
