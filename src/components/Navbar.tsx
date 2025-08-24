import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="fixed w-full bg-black/70 backdrop-blur-sm z-50">
            <div className="w-full mx-auto flex justify-between items-center px-6 py-4">
                <span className="font-montserrat mr-12 text-xl font-bold order-2">Mi Portafolio - Daniel Andrade</span>
                <div className="flex gap-6 ml-12 font-poppins order-1">
                    <Link href="#Hero" className="hover:text-[#006d6d]">Inicio</Link>
                    <Link href="#About" className="hover:text-[#006d6d]">Acerca de mí</Link>
                    <Link href="#Resume" className="hover:text-[#006d6d]">Resumen</Link>
                    <Link href="#Portfolio" className="hover:text-[#006d6d]">Portafolio</Link>
                </div>
            </div>
        </nav>
    )
}
