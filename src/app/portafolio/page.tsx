"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { projects, Project } from "@/mocks/projects.mock"
//import ParticlesBackground from "@/components/ParticlesBackground"

const categories = ["Todos", "Web", "WordPress", "Diseño"]


export default function PortfolioPage() {
    const [activeCategory, setActiveCategory] = useState("Todos")
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)

    const filteredProjects =
        activeCategory === "Todos"
            ? projects
            : projects.filter((p) => p.category === activeCategory)

    return (
        <section className="bg-black text-white px-6 py-12">

            <div className="max-w-7xl mx-auto">

                {/* Título */}
                <h2 className="text-5xl text-[#00CED1] font-montserrat font-bold uppercase tracking-widest text-center mb-12">
                    Portafolio
                </h2>

                {/* Filtros */}
                <div className="flex justify-center gap-6 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`font-poppins px-4 py-2 rounded-lg transition ${activeCategory === cat
                                ? "bg-[#006d6d] text-white"
                                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid de Proyectos */}
                <motion.div
                    layout
                    className="grid md:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group relative cursor-pointer rounded-lg overflow-hidden border border-gray-700 bg-gray-900"
                                onClick={() => setSelectedProject(project)}
                            >
                                {/* Imagen */}
                                <div className="relative w-full h-56">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                {/* Texto */}
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold font-montserrat mb-2 group-hover:text-[#00CED1] transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm font-poppins">
                                        {project.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Modal Detalle Proyecto */}
                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            className="fixed inset-0 bg-black/80 flex items-center justify-center p-6 z-100"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                        >
                            <motion.div
                                className="bg-gray-900 rounded-lg p-6 max-w-2xl w-full relative"
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.8 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    className="absolute top-0 right-2 text-gray-400 hover:text-white text-4xl"
                                    onClick={() => setSelectedProject(null)}
                                >
                                    &times;
                                </button>
                                <div className="relative w-full h-64 mb-4">
                                    <Image
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        fill
                                        className="object-cover rounded-lg"
                                    />
                                </div>
                                <h3 className="text-2xl font-montserrat mb-2">
                                    {selectedProject.title}
                                </h3>
                                <p className="text-gray-400 mb-4 font-poppins">
                                    {selectedProject.description}
                                </p>
                                <a
                                    href={selectedProject.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-poppins"
                                >
                                    Ver Proyecto
                                </a>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    )
}