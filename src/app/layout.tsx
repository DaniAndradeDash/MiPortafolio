import type { Metadata } from "next";
import "@/styles/globals.css";
import { Poppins, Montserrat } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Ajusta según lo que uses
  variable: '--font-poppins'
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
  variable: '--font-montserrat'
})

export const metadata = {
  title: 'Mi Portafolio',
  description: 'Landing Page de Daniel'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${poppins.variable} ${montserrat.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
