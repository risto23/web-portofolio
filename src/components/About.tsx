'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function About() {
    return (
        <section id="about" className="py-24 px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">About Me</h2>
                    <div className="h-px bg-gradient-to-r from-cyan-500 to-transparent flex-grow"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-12 bg-slate-900/50 border border-white/5 rounded-3xl p-8 lg:p-10 backdrop-blur-sm hover:border-cyan-500/30 transition-colors duration-500 shadow-2xl shadow-black/50">

                    {/* Foto Profile */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="relative group w-64 h-64 md:w-80 md:h-80 shrink-0"
                    >
                        <div className="absolute inset-0 border-2 border-cyan-500 rounded-2xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 z-0"></div>
                        <Image
                            src="/profile.jpeg" // Sesuaikan dengan foto Anda
                            alt="Profile"
                            width={320}
                            height={320}
                            className="relative z-10 w-full h-full rounded-2xl object-cover shadow-xl saturate-50 group-hover:saturate-100 transition-all duration-500 bg-slate-800"
                        />
                    </motion.div>

                    {/* Deskripsi Teks */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="flex-1 space-y-6 text-gray-300 text-lg leading-relaxed font-light"
                    >
                        <p>
                            I&apos;m a passionate software engineer dedicated to turning complex problems into elegant, scalable digital solutions. My tech journey began with a degree in Informatics from the <span className="text-cyan-400 font-semibold border-b border-cyan-400/30 pb-0.5">Institute of Technology Indonesia</span>.
                        </p>
                        <p>
                            With over 5 years of solid experience as a <span className="text-white font-medium">Fullstack & Mobile Developer</span>, I specialize in engineering robust applications. From building seamless insurance platforms to integrating advanced biometric hardware, I leverage modern technologies like React Native, Flutter, Next.js, and PHP to deliver high-quality products.
                        </p>
                        <p>
                            I thrive in dynamic environments where I can continuously learn and push the boundaries of what&apos;s possible, delivering applications that don&apos;t just function well, but truly drive business operations forward.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}