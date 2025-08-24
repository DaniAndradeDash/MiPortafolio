export default function Hero() {
    return (
        <section
            className="h-screen bg-cover bg-center flex items-center"
            style={{ backgroundImage: "url('/ataberk-guler-S4ivgQRxaPo-unsplash.jpg')" }}
        >
            <div className="bg-black/50 w-full h-full flex flex-col justify-center px-10">
                <h1 className="font-montserrat text-5xl text-[#00CED1] font-bold">Daniel Andrade <br />Desarrollador Web Full-Stack</h1>
                <p className="mt-4 font-poppins text-lg max-w-xl">
                    Construyendo experiencias digitales modernas con React, Next.js y Tailwind, Bases de datos con Node.js, PostgressSQL y SQL.
                </p>
                <div className="w-full mt-6 flex gap-4 text-end">
                    <a href="#Resume" className="transition duration-150 bg-transparent hover:bg-[#00918A] cursor-pointer border border-white hover:border-none hover:-translate-y-1 hover:scale-110 px-6 py-3 rounded-lg font-semibold">
                        Resumen
                    </a>
                    <a href="#Portfolio" className="transition duration-150 bg-transparent hover:bg-[#00918A] cursor-pointer border border-white hover:border-none hover:-translate-y-1 hover:scale-110 px-6 py-3 rounded-lg font-semibold">
                        Portafolio
                    </a>
                </div>
            </div>
        </section>
    )
}
