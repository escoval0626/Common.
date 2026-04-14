export default function Footer() {
  return (
    <footer className="bg-surface py-32 px-12 md:px-32 border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-24">
        
        {/* Left Side: Brand Identity */}
        <div className="space-y-8 max-w-sm">
          <div className="text-3xl font-light tracking-tighter-extra lowercase text-primary">
            common.
          </div>
          <p className="text-[10px] tracking-[0.3em] uppercase leading-relaxed text-secondary font-ultra-light whitespace-pre-wrap md:whitespace-nowrap">
            目に見えるものだけでなく、その背後にある気配を形に。
          </p>
        </div>

        {/* Right Side: Links & SNS */}
        <div className="flex flex-wrap gap-16 md:gap-32">
          {/* Location Block */}
          <div className="space-y-4">
            <span className="text-[8px] tracking-[0.4em] text-zinc-400 uppercase font-ultra-light block mb-6">STUDIO</span>
            <div className="space-y-2">
              <p className="text-[10px] tracking-widest text-secondary font-ultra-light uppercase font-english">Nagareyama, Chiba, Japan</p>
              <p className="text-[9px] tracking-[0.2em] text-zinc-400 font-ultra-light font-japanese">千葉県流山市</p>
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-[8px] tracking-[0.4em] text-zinc-400 uppercase font-ultra-light block mb-6">FOLLOW</span>
            <div className="flex gap-10">
              {['Instagram', 'note'].map((link) => (
                <a key={link} href="#" className="text-[10px] tracking-widest uppercase text-secondary hover:text-primary transition-colors font-ultra-light">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 md:pt-0">
          <p className="text-[10px] tracking-widest uppercase text-zinc-400 font-ultra-light">
            © 2026 common. all rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}
