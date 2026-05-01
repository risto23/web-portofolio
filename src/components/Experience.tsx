'use client'

import { motion } from 'framer-motion'

const experiences = [
    {
        period: 'Aug 2025 - Present',
        position: 'Mobile Developer',
        company: 'PT Himalaya Indo Karya',
        description: 'Developed mobile applications based on user needs and requests, including adding new features, debugging issues, and solving technical problems to improve application functionality and overall user experience.'
    },
    {
        period: 'Sep 2020 - Aug 2025',
        position: 'Fullstack Developer',
        company: 'PT Asuransi Raksa',
        description: 'Built and maintained mobile and web apps for insurance operations. Designed APIs, databases, and reporting tools. Collaborated across teams to deliver efficient, user-friendly solutions that support business goals.'
    }
]

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">Experience</h2>
                    <div className="h-px bg-gradient-to-r from-cyan-500 to-transparent flex-grow"></div>
                </div>

                <div className="space-y-12 pl-4 border-l border-white/10 ml-4 md:ml-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative pl-8 group"
                        >
                            {/* Timeline Dot with Glow */}
                            <div className="absolute w-4 h-4 bg-cyan-500 rounded-full -left-[24.5px] top-1.5 ring-4 ring-slate-950 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>

                            <div className="bg-slate-900/50 border border-white/5 p-6 md:p-8 rounded-2xl backdrop-blur-sm group-hover:border-cyan-500/30 transition-colors duration-300 shadow-xl">
                                <span className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-semibold rounded-full mb-4 border border-cyan-500/20 uppercase tracking-widest">
                                    {exp.period}
                                </span>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-1 font-heading">
                                    {exp.position}
                                </h3>
                                <h4 className="text-blue-400 font-medium mb-4">{exp.company}</h4>
                                <p className="text-gray-400 leading-relaxed font-light">{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}