'use client'

import { motion } from 'framer-motion'

const projects = [
    {
        year: '2020 - Present',
        title: 'Raksa TransMet',
        description: 'An internal mobile app empowering the marketing team to input activity reports and manage requests efficiently on the go.',
        tech: ['React Native', 'PHP', 'MySQL']
    },
    {
        year: '2021 - Present',
        title: 'Web-Based Reporting Tools',
        description: 'A powerful dashboard that enables seamless reporting, analytics, and data exports to help management make informed decisions.',
        tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap']
    },
    {
        year: '2022 - Present',
        title: 'ESPK',
        description: 'A mobile app that simplifies car inspection workflows for surveyors, including image capture and report submission.',
        tech: ['React Native', 'PHP', 'MySQL']
    },
    {
        year: '2022 - 2023',
        title: 'Raksa Partner',
        description: 'A dedicated app for agents to submit insurance policy offers and claim requests, streamlining operations.',
        tech: ['React Native', 'PHP', 'MySQL']
    },
    {
        year: '2023',
        title: 'Raksa Online',
        description: 'A mobile solution enabling policyholders to manage insurance policies, submit requests, and access services anytime.',
        tech: ['React Native', 'PHP', 'MySQL']
    }
]

export default function ProjectSection() {
    return (
        <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-cyan-500 mb-10">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="border border-cyan-500 rounded-lg p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-[#0f172a]/40 to-[#0f172a]/20"
                    >
                        <p className="text-sm text-gray-400 mb-1">{project.year}</p>
                        <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                        <p className="text-gray-300 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, i) => (
                                <span
                                    key={i}
                                    className="bg-cyan-500 text-white text-xs px-2 py-1 rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
