import ParticlesBackground from "@/components/ParticlesBackground";

export default function ResumePage() {
    return (
        <section className="min-h-screen bg-black text-white px-6 flex justify-center items-center pt-12 relative">
            {/* Fondo decorativo sutil */}
            <ParticlesBackground />

            <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f0f] via-[#0a0a0a] to-[#1a1a1a] opacity-40 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 z-10">

                {/* Columna izquierda */}
                <div className="space-y-10">
                    {/* Software Skills */}
                    <div>
                        <h3 className="text-xl text-[#006d6d] font-montserrat font-bold border-b border-gray-700 pb-2 mb-4 uppercase">
                            Software Skills
                        </h3>
                        <ul className="space-y-2 text-gray-300 font-poppins grid grid-cols-2 gap-x-4 gap-y-2">
                            <li>React</li>
                            <li>Next.js</li>
                            <li>Tailwind CSS</li>
                            <li>TypeScript</li>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>Unity (C#)</li>
                            <li>WordPress (PHP)</li>
                            <li>Git & GitHub</li>
                            <li>Postman</li>
                            <li>Photoshop</li>
                            <li>Illustrator</li>
                        </ul>

                    </div>

                    {/* Languages */}
                    {/*<div>
                        <h3 className="text-xl text-[#006d6d] font-montserrat font-bold border-b border-gray-700 pb-2 mb-4 uppercase">
                            Languages
                        </h3>
                        <ul className="space-y-2 text-gray-300 font-poppins">
                            <li>English</li>
                            <li>Spanish</li>
                            <li>Portuguese</li>
                        </ul>
                    </div>*/}

                    {/* Personal Skills */}
                    <div>
                        <h3 className="text-xl text-[#006d6d] font-montserrat font-bold border-b border-gray-700 pb-2 mb-4 uppercase">
                            Habilidades Personales
                        </h3>
                        <ul className="space-y-2 text-gray-300 font-poppins">
                            <li>Resolución de problemas complejos</li>
                            <li>Autonomía y toma de decisiones</li>
                            <li>Pensamiento estructurado y creativo</li>
                            <li>Colaboración en equipos multidisciplinarios</li>
                            <li>Adaptabilidad a nuevas tecnologías</li>
                            <li>Comunicación técnica clara</li>
                        </ul>

                    </div>
                </div>

                {/* Columna derecha */}
                <div className="space-y-10">
                    {/* Experience */}
                    <div>
                        <h3 className="text-xl text-[#006d6d] font-montserrat font-bold border-b border-gray-700 pb-2 mb-4 uppercase">
                            Experiencia
                        </h3>
                        <div className="space-y-4 text-gray-300 font-poppins">
                            <div>
                                <p className="font-semibold">Cadtoner — Desarrollador Web Full-Stack</p>
                                <p className="text-sm text-gray-500">Marzo 2025 - Presente</p>
                            </div>
                            <div>
                                <p className="font-semibold">Virtual Bifrots — Desarrollador de simuladores</p>
                                <p className="text-sm text-gray-500">Julio 2021 - Octubre 2024</p>
                            </div>
                            <div>
                                <p className="font-semibold">InvoiceOne — Soporte Técnico</p>
                                <p className="text-sm text-gray-500">Marzo 2020 - Junio 2021</p>
                            </div>
                        </div>
                    </div>

                    {/* Education */}
                    <div>
                        <h3 className="text-xl text-[#006d6d] font-montserrat font-bold border-b border-gray-700 pb-2 mb-4 uppercase">
                            Educación
                        </h3>
                        <ul className="space-y-2 text-gray-300 font-poppins">
                            <li>Ing. en Tecnologías y Sistemas de la Información — Universidad del Valle de México(UVM) - Trunca</li>
                        </ul>
                    </div>

                    {/* What Can I Do */}
                    <div>
                        <h3 className="text-xl text-[#006d6d] font-montserrat font-bold border-b border-gray-700 pb-2 mb-4 uppercase">
                            ¿Qué puedo hacer?
                        </h3>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-gray-300 font-poppins">
                            <li>Landing pages con Next.js y React</li>
                            <li>Aplicaciones con Node.js y Express</li>
                            <li>Simuladores con Unity y C#</li>
                            <li>Diseño de APIs RESTful</li>
                            <li>Gestión de hosting y dominios</li>
                            <li>Integración de metadatos SEO</li>
                            <li>CRM y ERP personalizados</li>
                            <li>Diseño de logos minimalistas</li>
                            <li>Maquetación y bosetaje web</li>
                            <li>Posicionamiento básico en Google</li>
                            <li>Desarrollo en WordPress y PHP</li>
                            <li>Control de versiones con Git y GitHub</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    )
}