'use client'

import * as motion from 'framer-motion/client'

export default function Contact() {
  return (
    <section id="お問い合わせ" className="relative w-full bg-surface py-32 px-6 md:py-60 md:px-32">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Header (Restored previous specification) */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-5xl font-light text-primary tracking-tighter-extra mb-20 md:mb-24 text-center font-english"
        >
          Let&apos;s talk about your project.
        </motion.h2>

        {/* Form Body (Restored Centered Spec) */}
        <form className="w-full space-y-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {/* Name */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1 }}
              className="flex flex-col space-y-4"
            >
              <label className="text-[10px] tracking-[0.3em] uppercase text-secondary font-ultra-light font-english">NAME / お名前</label>
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full bg-transparent border border-outline px-6 py-4 text-sm font-light tracking-widest focus:ring-0 focus:border-primary placeholder:text-outline-variant transition-colors"
              />
            </motion.div>
            {/* Email */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1 }}
              className="flex flex-col space-y-4"
            >
              <label className="text-[10px] tracking-[0.3em] uppercase text-secondary font-ultra-light font-english">EMAIL / メールアドレス</label>
              <input 
                type="email" 
                placeholder="example@common.jp" 
                className="w-full bg-transparent border border-outline px-6 py-4 text-sm font-light tracking-widest focus:ring-0 focus:border-primary placeholder:text-outline-variant transition-colors"
              />
            </motion.div>
          </div>

          {/* Service Checkboxes (Restored) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
            className="flex flex-col space-y-8"
          >
            <label className="text-[10px] tracking-[0.3em] uppercase text-secondary font-ultra-light font-english">SERVICE / ご依頼内容</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                "WEB PRODUCTION",
                "VISUAL BRANDING",
                "PHOTOGRAPHY",
                "CONSULTING"
              ].map((service, i) => (
                <label key={i} className="flex items-center gap-4 cursor-pointer group">
                  <div className="relative flex items-center justify-center w-5 h-5 border border-outline group-hover:border-primary transition-colors">
                    <input type="checkbox" className="peer opacity-0 absolute inset-0 cursor-pointer" />
                    <div className="w-2 h-2 bg-primary opacity-0 peer-checked:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-[10px] tracking-widest uppercase text-secondary group-hover:text-primary transition-colors font-ultra-light font-english">
                    {service}
                  </span>
                </label>
              ))}
            </div>
          </motion.div>

          {/* Message */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col space-y-4"
          >
            <label className="text-[10px] tracking-[0.3em] uppercase text-secondary font-ultra-light font-english">MESSAGE / メッセージ</label>
            <textarea 
              rows={8} 
              placeholder="Project details or questions..." 
              className="w-full bg-transparent border border-outline px-6 py-6 text-sm font-light tracking-widest focus:ring-0 focus:border-primary placeholder:text-outline-variant transition-colors resize-none"
            />
          </motion.div>

          {/* Submit */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1 }}
            className="pt-12 flex justify-center"
          >
            <button className="bg-primary text-surface px-16 py-5 text-[10px] tracking-[0.4em] uppercase font-light transition-all duration-500 hover:bg-primary-dim hover:px-20 active:scale-95 font-english">
              SEND INQUIRY
            </button>
          </motion.div>
        </form>

        {/* CTA Copy (New) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 2 }}
          className="mt-48 text-center space-y-2 pointer-events-none"
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-primary font-light font-english">
            Your vision, refined. Let&apos;s build something significant together.
          </p>
          <p className="text-[10px] tracking-[0.2em] text-secondary font-ultra-light font-japanese">
            あなたのビジョンを、純粋な形へ。共に、価値ある表現を築きましょう。
          </p>
        </motion.div>

        {/* Long Bottom Border Line (PNG ⑦) */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1.5, ease: "circOut" }}
          className="mt-12 w-full h-[2px] bg-primary opacity-90 origin-left" 
        />
        
      </div>
    </section>
  )
}
