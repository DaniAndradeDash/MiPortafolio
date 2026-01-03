// app/page.tsx
import Hero from '@/components/Hero'
import About from './abaout/page';
import Resume from './resume/page';
import Portfolio from './portafolio/page';
import Tecnologies from './tecnologies/page';

export default function HomePage() {
  return (
    <main className="overflow-y-auto scroll-smooth">
      <section id='Hero' className="snap-start">
        <Hero />
      </section>
      <section id='About' className="snap-start">
        <About />
      </section>
      <section id='Resume' className="snap-start">
        <Resume />
      </section>
      <section id='Portfolio' className="snap-start">
        <Portfolio />
      </section>
      <section id='Tecnologias' className="snap-start">
        <Tecnologies />
      </section>
    </main>

  )
}
