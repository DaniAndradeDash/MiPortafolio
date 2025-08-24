// app/page.tsx
import Hero from '@/components/Hero'
import About from './abaout/page';
import Resume from './resume/page';
import Portfolio from './portafolio/page';
import Tecnologies from './tecnologies/page';

export default function HomePage() {
  return (
    <main className="h-screen overflow-y-auto scroll-smooth snap-y snap-mandatory scrollbar-hide">
      <section id='Hero' className="h-screen snap-start">
        <Hero />
      </section>
      <section id='About' className="h-screen snap-start">
        <About />
      </section>
      <section id='Resume' className="h-screen snap-start">
        <Resume />
      </section>
      <section id='Portfolio' className="h-screen snap-start">
        <Portfolio />
      </section>
      <section id='Tecnologias' className="h-screen snap-start">
        <Tecnologies />
      </section>
    </main>

  )
}
