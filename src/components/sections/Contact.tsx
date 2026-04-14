'use client'

import { useState } from 'react'
import * as motion from 'framer-motion/client'

export default function Contact() {
  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'>('IDLE')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('SENDING')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      // 本番用の Formspree エンドポイントに更新完了
      const response = await fetch('https://formspree.io/f/xbdqlrak', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setStatus('SUCCESS')
        form.reset()
      } else {
        setStatus('ERROR')
      }
    } catch {
      // デモ/検証用として、実際の通信エラー時も成功体験を損なわないよう配慮が必要な場合は
      // setStatus('SUCCESS') に一時的にすることもありますが、ここでは健全にERRORを扱います。
      setStatus('ERROR')
    }
  }

  return (
    <section id="お問い合わせ" className="relative w-full bg-surface py-32 px-6 md:py-60 md:px-32">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-5xl font-light text-primary tracking-tighter-extra mb-20 md:mb-24 text-center font-english"
        >
          Let&apos;s talk about your project.
        </motion.h2>

        {status === 'SUCCESS' ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full py-32 flex flex-col items-center text-center space-y-8"
          >
            <div className="w-12 h-[1px] bg-primary animate-pulse" />
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-light tracking-widest text-primary font-japanese">
                メッセージを承りました。
              </h3>
              <p className="text-[11px] md:text-xs tracking-[0.2em] leading-loose text-secondary font-ultra-light font-japanese max-w-md mx-auto">
                内容を確認し、3営業日以内に<br className="md:hidden" />
                common.creative0626@gmail.com より<br />
                折り返しご連絡させていただきます。
              </p>
            </div>
            <button 
              onClick={() => setStatus('IDLE')}
              className="text-[10px] tracking-[0.4em] uppercase text-zinc-400 hover:text-primary transition-colors underline underline-offset-[10px]"
            >
              Back to Form
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full space-y-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              {/* Name */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col space-y-4"
              >
                <label className="text-[10px] tracking-[0.3em] uppercase text-secondary font-ultra-light font-english">NAME / お名前</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="Your Name" 
                  className="w-full bg-transparent border border-outline px-6 py-4 text-sm font-light tracking-widest focus:ring-0 focus:border-primary placeholder:text-outline-variant transition-colors"
                />
              </motion.div>
              {/* Email */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col space-y-4"
              >
                <label className="text-[10px] tracking-[0.3em] uppercase text-secondary font-ultra-light font-english">EMAIL / メールアドレス</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="common.creative0626@gmail.com" 
                  className="w-full bg-transparent border border-outline px-6 py-4 text-sm font-light tracking-widest focus:ring-0 focus:border-primary placeholder:text-outline-variant transition-colors"
                />
              </motion.div>
            </div>

            {/* Service Checkboxes */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col space-y-8"
            >
              <label className="text-[10px] tracking-[0.3em] uppercase text-secondary font-ultra-light font-english">SERVICE / ご依頼内容</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { label: "WEB PRODUCTION", val: "web" },
                  { label: "VISUAL BRANDING", val: "branding" },
                  { label: "PHOTOGRAPHY", val: "photography" },
                  { label: "CONSULTING", val: "consulting" }
                ].map((service, i) => (
                  <label key={i} className="flex items-center gap-4 cursor-pointer group">
                    <div className="relative flex items-center justify-center w-5 h-5 border border-outline group-hover:border-primary transition-colors">
                      <input 
                        type="checkbox" 
                        name="services"
                        value={service.label}
                        className="peer opacity-0 absolute inset-0 cursor-pointer" 
                      />
                      <div className="w-2 h-2 bg-primary opacity-0 peer-checked:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-[10px] tracking-widest uppercase text-secondary group-hover:text-primary transition-colors font-ultra-light font-english">
                      {service.label}
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
              className="flex flex-col space-y-4"
            >
              <label className="text-[10px] tracking-[0.3em] uppercase text-secondary font-ultra-light font-english">MESSAGE / メッセージ</label>
              <textarea 
                name="message"
                required
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
              className="pt-12 flex flex-col items-center space-y-6"
            >
              <button 
                disabled={status === 'SENDING'}
                className="bg-primary text-surface px-16 py-5 text-[10px] tracking-[0.4em] uppercase font-light transition-all duration-500 hover:bg-primary-dim hover:px-20 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed font-english"
              >
                {status === 'SENDING' ? 'SENDING...' : 'SEND INQUIRY'}
              </button>
              {status === 'ERROR' && (
                <p className="text-[10px] text-red-500 tracking-widest font-ultra-light">
                  エラーが発生しました。時間を置いて再度お試しください。
                </p>
              )}
            </motion.div>
          </form>
        )}

        {/* CTA Copy */}
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

        {/* Long Bottom Border Line */}
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
