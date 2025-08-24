export default function Hero() {
    return (
        <section
            className="h-screen bg-cover bg-center flex items-center"
            style={{ backgroundImage: "url('/ataberk-guler-S4ivgQRxaPo-unsplash.jpg')" }}
        >
            <div className="bg-black/50 w-full h-full flex flex-col justify-center px-10">
                <h1 className="font-montserrat text-5xl font-bold">DANIEL — Desarrollador Web</h1>
                <p className="mt-4 font-poppins text-lg max-w-xl">
                    Construyendo experiencias digitales modernas con React, Next.js y Tailwind.
                </p>
                <div className="mt-6 flex gap-4">
                    <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold">
                        Resumen
                    </button>
                    <button className="bg-transparent border border-white px-6 py-3 rounded-lg font-semibold">
                        Portafolio
                    </button>
                </div>
            </div>
        </section>
    )
}
