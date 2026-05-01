'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import * as FiIcons from 'react-icons/fi'

const allProjects = [
    {
        year: 'Mar 2026 - Present',
        title: 'POS Platform',
        category: 'Web',
        description: 'A multi-tenant web-based Point of Sale (POS) platform for retail and restaurants. Features include multi-outlet management, role access, cashier transactions, kitchen displays, and guest ordering.',
        tech: ['Next.js', 'Prisma', 'PostgreSQL', 'TypeScript']
    },
    {
        year: 'Jan 2026 - Feb 2026',
        title: 'Secure App',
        category: 'Mobile',
        description: 'Android-based multi-function identification app integrating hardware modules like fingerprint, face recognition, iris scanning, QR/barcode, UHF, and NFC reading.',
        tech: ['React Native', 'Biometrics', 'NFC', 'Java']
    },
    {
        year: 'Dec 2025 - Present',
        title: 'HRIS',
        category: 'Both',
        description: 'Local Human Resource Information System designed to support employee management, attendance tracking, leave requests, payroll slips, and HR reporting.',
        tech: ['Next.js', 'Prisma', 'PostgreSQL', 'TypeScript']
    },
    {
        year: 'Nov 2025 - Present',
        title: 'Gumilang Mobile',
        category: 'Mobile',
        description: 'Mobile app for workforce operations management enabling location-based attendance, activity reports with progress updates, leave applications, and SOS incident broadcast alerts.',
        tech: ['React Native', 'API', 'Geolocation']
    },
    {
        year: 'Aug 2025 - Present',
        title: 'SGP Guard',
        category: 'Mobile',
        description: 'Mobile application for security workforce management featuring work-radius attendance, patrol reports, leave requests, and automated SOS broadcasts to nearby personnel.',
        tech: ['React Native', 'Geolocation', 'API']
    },
    {
        year: 'Nov 2023 - Dec 2024',
        title: 'Smart Underwriting',
        category: 'Web',
        description: 'A web app for underwriting teams to manage offers, quotations, and voting processes supporting informed underwriting decisions.',
        tech: ['PHP', 'MySQL', 'Web App']
    },
    {
        year: 'Mar 2023 - Nov 2023',
        title: 'Underwriting Approval',
        category: 'Mobile',
        description: 'An approval app for marketing heads and directors to review and approve policy proposals, accelerating approval workflows and compliance.',
        tech: ['React Native', 'PHP', 'MySQL']
    },
    {
        year: 'Feb 2023 - Jun 2023',
        title: 'Raksa Online',
        category: 'Mobile',
        description: 'A mobile solution enabling policyholders to manage insurance policies, submit requests, and access services anytime.',
        tech: ['React Native', 'PHP', 'MySQL']
    },
    {
        year: 'Aug 2022 - Feb 2023',
        title: 'Raksa Partner',
        category: 'Mobile',
        description: 'A dedicated app for agents to submit insurance policy offers and claim requests, streamlining operations.',
        tech: ['React Native', 'PHP', 'MySQL']
    },
    {
        year: 'Feb 2022 - Present',
        title: 'ESPK',
        category: 'Mobile',
        description: 'A mobile app that simplifies car inspection workflows for surveyors, including image capture and report submission.',
        tech: ['React Native', 'PHP', 'MySQL']
    },
    {
        year: 'Jan 2021 - Present',
        title: 'Web-Based Reporting Tools',
        category: 'Web',
        description: 'A powerful dashboard that enables seamless reporting, analytics, and data exports to help management make informed decisions.',
        tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap']
    },
    {
        year: 'Sep 2020 - Present',
        title: 'Raksa TransMet',
        category: 'Mobile',
        description: 'An internal mobile app empowering the marketing team to input activity reports and manage requests efficiently on the go.',
        tech: ['React Native', 'PHP', 'MySQL']
    }
]

export default function ProjectSection() {
    const [filter, setFilter] = useState('All')

    const filteredProjects = filter === 'All'
        ? allProjects
        : allProjects.filter(p => p.category === filter)

    return (
        <section id="projects" className="py-24 px-6 relative z-10 bg-slate-900/30">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div className="flex items-center gap-4 flex-grow">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">Featured Projects</h2>
                        <div className="h-px bg-gradient-to-r from-cyan-500 to-transparent w-full hidden md:block"></div>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex gap-2 bg-slate-900 p-1.5 rounded-full border border-white/5 uppercase tracking-wider font-semibold text-[11px]">
                        {['All', 'Mobile', 'Web'].map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-5 py-2 rounded-full transition-all duration-300 ${filter === cat
                                        ? 'bg-cyan-500 text-slate-900 shadow-md'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={`${project.title}-${filter}`} // Memaksa animasi ulang saat filter diganti
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="flex flex-col h-full bg-slate-900 border border-white/5 rounded-2xl p-6 group hover:-translate-y-2 hover:border-cyan-500/50 hover:shadow-[0_10px_30px_rgba(6,182,212,0.1)] transition-all duration-300"
                        >
                            <div className="flex justify-between items-start mb-5">
                                <div className="flex items-center gap-2">
                                    {project.category === 'Mobile' && (
                                        <div className="p-2 bg-slate-800 rounded-lg text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-900 transition-colors">
                                            <FiIcons.FiSmartphone size={24} />
                                        </div>
                                    )}

                                    {project.category === 'Web' && (
                                        <div className="p-2 bg-slate-800 rounded-lg text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-900 transition-colors">
                                            <FiIcons.FiMonitor size={24} />
                                        </div>
                                    )}

                                    {project.category === 'Both' && (
                                        <>
                                            <div className="p-2 bg-slate-800 rounded-lg text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-900 transition-colors">
                                                <FiIcons.FiSmartphone size={24} />
                                            </div>

                                            <div className="p-2 bg-slate-800 rounded-lg text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-900 transition-colors">
                                                <FiIcons.FiMonitor size={24} />
                                            </div>
                                        </>
                                    )}
                                </div>
                                {/* Link Icon (Opsional, arahkan href sesuai link github Anda) */}
                                <div className="flex gap-3">
                                    <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors" title="View Source">
                                        <FiIcons.FiGithub size={20} />
                                    </a>
                                    <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors" title="Live Preview">
                                        <FiIcons.FiExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <span className="text-[11px] text-cyan-400 font-mono tracking-widest uppercase mb-2 block">{project.year}</span>
                            <h3 className="text-2xl font-bold text-white mb-3 font-heading tracking-tight">{project.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow font-light">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="text-[11px] font-mono tracking-wide text-cyan-300/80 bg-cyan-500/10 px-2 py-1 rounded border border-cyan-500/10"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}