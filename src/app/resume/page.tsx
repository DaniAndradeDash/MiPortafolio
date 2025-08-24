export default function ResumePage() {
    return (
        <section className="min-h-screen bg-black text-white px-6 flex justify-center items-center pt-12">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

                {/* Columna izquierda */}
                <div className="space-y-10">
                    {/* Software Skills */}
                    <div>
                        <h3 className="text-xl font-montserrat font-bold border-b border-gray-700 pb-2 mb-4 uppercase">
                            Software Skills
                        </h3>
                        <ul className="space-y-2 text-gray-300 font-poppins">
                            <li>Photoshop</li>
                            <li>Illustrator</li>
                            <li>InDesign</li>
                            <li>Premiere</li>
                            <li>After Effects</li>
                        </ul>
                    </div>

                    {/* Languages */}
                    <div>
                        <h3 className="text-xl font-montserrat font-bold border-b border-gray-700 pb-2 mb-4 uppercase">
                            Languages
                        </h3>
                        <ul className="space-y-2 text-gray-300 font-poppins">
                            <li>English</li>
                            <li>Spanish</li>
                            <li>Portuguese</li>
                        </ul>
                    </div>

                    {/* Personal Skills */}
                    <div>
                        <h3 className="text-xl font-montserrat font-bold border-b border-gray-700 pb-2 mb-4 uppercase">
                            Personal Skills
                        </h3>
                        <ul className="space-y-2 text-gray-300 font-poppins">
                            <li>Creativity</li>
                            <li>Team Work</li>
                            <li>Organisation</li>
                        </ul>
                    </div>
                </div>

                {/* Columna derecha */}
                <div className="space-y-10">
                    {/* Experience */}
                    <div>
                        <h3 className="text-xl font-montserrat font-bold border-b border-gray-700 pb-2 mb-4 uppercase">
                            Experience
                        </h3>
                        <div className="space-y-4 text-gray-300 font-poppins">
                            <div>
                                <p className="font-semibold">White Fish Advertising Co. — Art Director</p>
                                <p className="text-sm text-gray-500">2017 - Presente</p>
                            </div>
                            <div>
                                <p className="font-semibold">Pyramids Sun Advertising Co. — Senior Graphic Designer</p>
                                <p className="text-sm text-gray-500">2013 - 2017</p>
                            </div>
                            <div>
                                <p className="font-semibold">Planet Stationary & Printing Services Co. — Graphic Designer</p>
                                <p className="text-sm text-gray-500">2009 - 2012</p>
                            </div>
                        </div>
                    </div>

                    {/* Education */}
                    <div>
                        <h3 className="text-xl font-montserrat font-bold border-b border-gray-700 pb-2 mb-4 uppercase">
                            Education
                        </h3>
                        <ul className="space-y-2 text-gray-300 font-poppins">
                            <li>BS/MS en Ingeniería en Computación — Universidad Autónoma de Nuevo León</li>
                        </ul>
                    </div>

                    {/* What Can I Do */}
                    <div>
                        <h3 className="text-xl font-montserrat font-bold border-b border-gray-700 pb-2 mb-4 uppercase">
                            What Can I Do?
                        </h3>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-gray-300 font-poppins">
                            <li>Logo</li>
                            <li>Branding</li>
                            <li>Stationery</li>
                            <li>Newsletter</li>
                            <li>Packaging</li>
                            <li>Catalog</li>
                            <li>Strategy</li>
                            <li>Advertisement</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    )
}