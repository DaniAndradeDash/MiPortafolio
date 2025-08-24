import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="fixed w-full bg-black/70 backdrop-blur-sm z-50">
            <div className="w-full mx-auto flex justify-between items-center px-6 py-4 flex-wrap">

                {/* Título */}
                <span className="font-montserrat text-xl font-bold order-2 
                    iphone:text-lg
                    android:text-base
                    samsung:text-base
                    tablet:text-xl
                    desktop:text-2xl">
                    Mi Portafolio - Daniel Andrade
                </span>

                {/* Menú */}
                <div className="flex gap-6 font-poppins order-1 
                iphone:gap-3 iphone:text-sm android:gap-2 android:text-sm 
                samsung:gap-2 samsung:text-sm tablet:gap-4 tablet:text-base desktop:gap-6 desktop:text-lg">
                    <a href="#Hero" className="hover:text-[#006d6d]">Inicio</a>
                    <a href="#About" className="hover:text-[#006d6d]">Acerca de mí</a>
                    <a href="#Resume" className="hover:text-[#006d6d]">Resumen</a>
                    <a href="#Portfolio" className="hover:text-[#006d6d]">Portafolio</a>
                </div>

            </div>
        </nav>

    )
}
