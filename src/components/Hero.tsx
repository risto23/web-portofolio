'use client'

import Link from 'next/link'
import Typewriter from './Typewriter'

export default function Hero() {
    return (
        <section
            className="relative w-full h-screen bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url('/bg-hero.jpeg')` }} // ganti bg-hero.jpg sesuai gambar kamu
        >
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

            {/* Konten Hero */}
            <div className="relative z-10 max-w-3xl px-6 ml-10">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                    Hello, I’m <span className="text-cyan-400">Risto</span>
                    <br />
                    {/* <span className="text-cyan-400">Fullstack Developer</span> */}
                    <Typewriter/>
                </h1>
                <p className="text-gray-300 text-lg md:text-xl mb-6">
                    Creating impactful digital solutions from intuitive interfaces to scalable backends
                </p>
                <div className="flex flex-wrap gap-3">
                    <Link
                        href="#projects"
                        className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-md font-medium shadow-md"
                    >
                        My Projects
                    </Link>
                    <Link
                        href="#contact"
                        className="inline-block border border-cyan-500 text-cyan-500 px-5 py-2 rounded-md hover:bg-cyan-500 hover:text-white transition"
                    >
                        Get in Touch
                    </Link>
                    <Link
                        href="/resume.pdf"
                        download
                        className="inline-flex items-center gap-2 border border-cyan-500 text-cyan-500 px-5 py-2 rounded-md hover:bg-cyan-500 hover:text-white transition"
                    >
                        Download CV
                    </Link>
                </div>
            </div>
        </section>
    )
}
