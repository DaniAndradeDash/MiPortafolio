// app/page.tsx
import Hero from '@/components/Hero'
import About from './abaout/page';
import Resume from './resume/page';
import Portfolio from './portafolio/page';
import Tecnologies from './tecnologies/page';

export default function HomePage() {
  return (
    <main className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
      <section className="h-screen snap-start">
        <Hero />
      </section>
      <section className="h-screen snap-start">
        <About />
      </section>
      <section className="h-screen snap-start">
        <Resume />
      </section>
      <section className="h-screen snap-start">
        <Portfolio />
      </section>
      <section className="h-screen snap-start">
        <Tecnologies />
      </section>
    </main>

  )
}
