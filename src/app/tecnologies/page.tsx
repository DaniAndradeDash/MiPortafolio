"use client"

import { FaReact, FaCss3Alt, FaBootstrap, FaGithub, FaWordpress, FaUnity, FaHtml5 } from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss, SiSharp, SiAdobeillustrator, SiAdobephotoshop } from "react-icons/si"
import { motion } from "framer-motion"

const techs = [
    { name: "React", icon: <FaReact className="text-[#61DBFB]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-[#38BDF8]" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952B3]" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
    { name: "WordPress", icon: <FaWordpress className="text-[#21759B]" /> },
    { name: "Unity", icon: <FaUnity className="text-white" /> },
    { name: "C#", icon: <SiSharp className="text-[#239120]" /> },
    { name: "Photoshop", icon: <SiAdobephotoshop className="text-[#31A8FF]" /> },
    { name: "Illustrator", icon: <SiAdobeillustrator className="text-[#FF9A00]" /> },
]

export default function TechnologiesPage() {
    return (
        <section className="min-h-screen bg-black text-white px-6 py-20">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-5xl font-montserrat font-bold uppercase tracking-widest mb-16">
                    Tecnologías
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10">
                    {techs.map((tech, index) => (
                        <div
                            key={tech.name} // <-- Agrega el key aquí
                            style={{ ["--neon-color" as any]: tech.icon.props.className.includes("text-[#") ? tech.icon.props.className.match(/#([0-9A-Fa-f]{6})/)[0] : "#00FFFF" }}
                        >
                            <motion.div
                                className="flex flex-col items-center justify-center p-6 rounded-lg bg-gray-900 border border-gray-800 shadow-lg hover:shadow-[0_0_20px_var(--neon-color)] transition"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                <div className="text-6xl mb-4 drop-shadow-[0_0_10px_var(--neon-color)]">
                                    {tech.icon}
                                </div>
                                <p className="font-poppins text-sm text-gray-300">{tech.name}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}