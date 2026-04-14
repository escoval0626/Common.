import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-8 text-[#333] mix-blend-multiply md:px-16">
      <div className="flex items-center gap-3">
        <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#333] text-[10px] font-light">
          +
        </div>
        <span className="text-xl font-light tracking-wide">Common.</span>
      </div>
      
      <nav className="hidden gap-10 md:flex">
        {['Story', 'Service', 'Works', 'Contact'].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-xs font-light tracking-[0.2em] text-[#666] transition-colors hover:text-[#111]"
          >
            {item}
          </Link>
        ))}
      </nav>
    </header>
  )
}
