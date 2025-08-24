import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="fixed w-full bg-black/70 backdrop-blur-sm z-50">
            <div className="w-full mx-auto flex justify-between items-center px-6 py-4">
                <span className="font-montserrat text-xl font-bold order-2">Mi Portafolio</span>
                <div className="flex gap-6 font-poppins order-1">
                    <Link href="/">Inicio</Link>
                    <Link href="/about">Acerca de mí</Link>
                    <Link href="/resume">Resumen</Link>
                    <Link href="/portfolio">Portafolio</Link>
                </div>
            </div>
        </nav>
    )
}
