// app/page.tsx
import Hero from '@/components/Hero'
import About from './abaout/page';
import Resume from './resume/page';
import Portfolio from './portafolio/page';
import Tecnologies from './tecnologies/page';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Resume />
      <Portfolio />
      <Tecnologies />
    </>
  )
}
