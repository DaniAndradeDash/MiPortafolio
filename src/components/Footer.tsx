import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-black/80 text-gray-400 py-6">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

                {/* Texto copyright */}
                <p className="text-sm font-poppins">
                    © {new Date().getFullYear()} Daniel. Todos los derechos reservados.
                </p>

                {/* Redes sociales */}
                <div className="flex gap-4 text-lg">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        <FaGithub />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        <FaTwitter />
                    </a>
                </div>
            </div>
        </footer>
    )
}