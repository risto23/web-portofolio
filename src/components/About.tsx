'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function About() {
    return (
        <section
            id="about"
            className="relative py-20 px-6 max-w-5xl mx-auto rounded-xl bg-gradient-to-r from-[#171717] via-[#171717] to-[#171717]
                 hover:ring-4 hover:ring-cyan-500/50 transition-all duration-500 group"
        >
            {/* Ring animasi pulse saat hover */}
            <div className="absolute inset-0 rounded-xl ring-0 ring-cyan-500/30 opacity-0 group-hover:opacity-100 group-hover:animate-pulse pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold text-cyan-500 mb-10">About Me</h2>
                <div className="flex flex-col md:flex-row items-center gap-8">

                    {/* Foto dengan animasi dan efek */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="flex-shrink-0"
                    >
                        <Image
                            src="/profile.jpeg"
                            alt="Profile Photo"
                            width={300}
                            height={300}
                            className="rounded-xl border-2 border-cyan-500 shadow-cyan-500/50 shadow-lg hover:scale-105 transition-transform duration-300 object-cover"
                        />
                    </motion.div>

                    {/* Teks */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-gray-300 leading-relaxed mb-4">
                            I’m an adaptable and driven Informatics graduate from the Institute of Technology Indonesia, passionate about turning ideas into impactful digital solutions.
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            With solid experience as a Fullstack Developer, I specialize in building both web and mobile applications using technologies like React, React Native, PHP, SQL, and Next.js. I thrive on solving real-world challenges by creating applications that are functional, efficient, and beautifully designed.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Always eager to learn, I continuously explore new tools and frameworks to enhance my skills and deliver better solutions.
                        </p>
                    </motion.div>

                </div>
            </motion.div>
        </section>
    )
}
