'use client'

import { motion } from 'framer-motion'
import { FiMonitor, FiSmartphone, FiDatabase } from 'react-icons/fi'

const experiences = [
    {
        period: '2020 - Present',
        position: 'Fullstack Developer',
        company: 'PT. Asuransi Raksa',
        description:
            'Developing internal tools and mobile apps using React Native, PHP, and SQL for insurance and marketing systems. Delivered functional, efficient, and scalable solutions.',
        icon: <FiMonitor />
    }
]

export default function Experience() {
    return (
        <section id="experience" className="py-20 px-6 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-cyan-500 mb-10">Experience</h2>
            <div className="relative border-l-2 border-cyan-500 pl-8">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative mb-10 group bg-transparent rounded-lg p-4 hover:bg-cyan-500/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                        {/* icon */}
                        <div className="absolute -left-20 top-2 w-6 h-6 flex items-center justify-center">
                            <motion.div
                                whileHover={{
                                    rotate: [0, -10, 10, -10, 10, 0],
                                    transition: { duration: 0.6 }
                                }}
                                className="text-cyan-500 text-xl"
                            >
                                {exp.icon}
                            </motion.div>
                        </div>

                        {/* content */}
                        <div className="pl-2">
                            <span className="text-sm text-gray-400">{exp.period}</span>
                            <h3 className="text-lg font-semibold text-white">
                                {exp.position}{' '}
                                <span className="text-cyan-500">- {exp.company}</span>
                            </h3>
                            <p className="text-gray-300">{exp.description}</p>
                        </div>

                        {/* hover ring effect */}
                        <div className="absolute inset-0 rounded-lg group-hover:ring-2 group-hover:ring-cyan-500/30 pointer-events-none"></div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
