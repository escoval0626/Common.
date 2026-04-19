'use client'

import { useState, useEffect } from 'react'
import * as motion from 'framer-motion/client'
import { AnimatePresence } from 'framer-motion'

export default function PrivacyPolicy() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#privacy-policy') {
        setIsOpen(true)
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    // ページロード時のチェック
    handleHashChange()

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const closeModal = () => {
    setIsOpen(false)
    window.history.replaceState(null, '', window.location.pathname)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-surface/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-2xl bg-surface border border-outline-variant p-8 md:p-16 max-h-[80vh] overflow-y-auto"
          >
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 text-[10px] tracking-[0.4em] text-zinc-400 hover:text-primary transition-colors uppercase font-ultra-light"
            >
              Close
            </button>

            <div className="space-y-12">
              <header className="space-y-4">
                <span className="text-[10px] tracking-[0.5em] text-zinc-400 uppercase font-ultra-light">Common. Legal</span>
                <h2 className="text-2xl font-light tracking-tighter-extra text-primary font-japanese">Privacy Policy</h2>
              </header>

              <div className="space-y-8 text-[12px] leading-relaxed text-secondary font-light font-japanese tracking-wider">
                <section className="space-y-4">
                  <h3 className="text-primary font-medium">個人情報の取り扱いについて</h3>
                  <p>
                    当スタジオ「Common.」は、お客様からお預かりする個人情報の重要性を認識し、適切に保護・管理いたます。
                  </p>
                </section>

                <section className="space-y-4">
                  <h3 className="text-primary font-medium">アクセス解析ツールについて</h3>
                  <p>
                    本サイトでは、サービス向上を目的としてGoogle Analyticsを利用しています。データ収集のためにCookie（クッキー）を使用していますが、このデータは匿名で収集されており、個人を特定するものではありません。
                  </p>
                </section>

                <section className="space-y-4">
                  <h3 className="text-primary font-medium">お問い合わせ情報の利用</h3>
                  <p>
                    お問い合わせフォームよりいただいた情報は、ご質問への回答や必要な情報のご連絡にのみ利用し、法的な要請がある場合を除き、第三者に開示することはありません。
                  </p>
                </section>

                <footer className="pt-8 border-t border-outline-variant/30 text-[10px] text-zinc-400">
                  制定日：2026年4月17日<br />
                  Common. Creative Studio
                </footer>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
