import Image from 'next/image';

export default function AboutPage() {
    return (
        <section className="w-full h-screen bg-black text-white">
            <div className="grid md:grid-cols-2 h-full">

                {/* Columna izquierda - Texto */}
                <div className="flex flex-col justify-center px-8 md:px-16 space-y-6">
                    <h2 className="text-5xl font-montserrat text-[#00CED1] font-bold uppercase tracking-widest">
                        Acerca de mí
                    </h2>

                    <p className="text-lg font-poppins text-[#008080]">
                        daniandrademty@gmail.com
                    </p>

                    <p className="text-gray-400 leading-relaxed font-poppins max-w-lg">
                        Desarrollador Web especializado en crear experiencias digitales modernas
                        usando React, Next.js y Tailwind.
                        Me apasiona integrar diseño y tecnología para generar productos funcionales
                        y visualmente atractivos.
                    </p>

                    <hr className="border-gray-700 w-3/4" />

                    <div className="text-gray-400 font-poppins space-y-1">
                        <p>Ubicación: General Escobedo, Nuevo León, México</p>
                        <p className="text-[#008080]">Tel: +52 8123374469</p>
                    </div>
                </div>

                {/* Columna derecha - Imagen */}
                <div className="relative w-full h-full 
                    iphone:h-[300px] android:h-[280px] samsung:h-[280px] 
                    tablet:h-[400px] desktop:h-full">
                    <Image
                        src="/daniel-about-dark.png"
                        alt="Foto de Daniel"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

            </div>
        </section>

    )
}
