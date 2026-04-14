import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Separate from '@/components/sections/Separate'
import Services from '@/components/sections/Services'
import Poetry from '@/components/sections/Poetry'
import Works from '@/components/sections/Works'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-primary/10 selection:text-primary scroll-smooth">
      <Navbar />
      <main>
        {/* ① Hero (Video + 3D rings + Typography) */}
        <Hero />
        
        {/* ② About (Philosophy) */}
        <About />
        
        {/* ③ Bridge / Process (3-row images + Flow) */}
        <Separate />
        
        {/* ④ Services (Icon Grid) */}
        <Services />
        
        {/* ⑤ Bridge Poetry (Quotes) */}
        <Poetry />
        
        {/* ⑥ Works (Masonry Grid + Long Text) */}
        <Works />
        
        {/* ⑦ Contact (Italic Inquire + Form) */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
