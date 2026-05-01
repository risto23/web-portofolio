'use client'

import Link from 'next/link'
import Typewriter from './Typewriter'
import { useState, useEffect } from 'react'
import * as FiIcons from 'react-icons/fi'

// Komponen Background Particles (Khusus untuk Hero)
interface Particle {
    id: number
    left: string
    top: string
    animationDuration: string
    animationDelay: string
}

const BackgroundParticles = () => {
    const [particles, setParticles] = useState<Particle[]>([])

    useEffect(() => {
        const newParticles = Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            animationDelay: `${Math.random() * 5}s`,
        }))
        setParticles(newParticles)
    }, [])

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float"
                    style={{
                        left: p.left,
                        top: p.top,
                        animationDuration: p.animationDuration,
                        animationDelay: p.animationDelay,
                        boxShadow: '0 0 8px rgba(6, 182, 212, 0.8)'
                    }}
                />
            ))}
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; }
                    50% { transform: translateY(-100px) translateX(20px); opacity: 0.8; }
                }
                .animate-float { animation: float infinite ease-in-out; }
            `}</style>
        </div>
    )
}

export default function Hero() {
    return (
        <section
            id="home"
            className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950"
        >
            <BackgroundParticles />

            {/* Glow Effects Latar Belakang */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/20 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>

            {/* Konten Hero */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-center mt-10">
                <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs uppercase tracking-widest font-semibold backdrop-blur-md animate-bounce">
                    Welcome to my portfolio
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tighter font-heading">
                    Hello, I’m <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-300% animate-gradient">
                        Risto Kurniawan
                    </span>
                </h1>

                <div className="mb-8 text-xl md:text-2xl font-medium text-cyan-400 flex items-center gap-2">
                    <Typewriter />
                </div>

                <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed font-light">
                    Creating impactful digital solutions from intuitive user interfaces to scalable backends. Transforming ideas into elegant code.
                </p>

                <div className="flex flex-wrap justify-center gap-5 uppercase tracking-wide text-sm">
                    <Link
                        href="#projects"
                        className="group flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3.5 rounded-full font-bold shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-1"
                    >
                        Explore Projects <FiIcons.FiChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
                    </Link>
                    <Link
                        href="#contact"
                        className="flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-md text-white px-8 py-3.5 rounded-full font-bold hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300"
                    >
                        Get in Touch
                    </Link>
                </div>
            </div>
        </section>
    )
}