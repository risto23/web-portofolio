'use client'

import { motion } from 'framer-motion'
import * as FaIcons from 'react-icons/fa'
import * as TbIcons from 'react-icons/tb'
import * as FiIcons from 'react-icons/fi'
import * as SiIcons from 'react-icons/si'

const techSkills = [
    { name: 'React / Native', icon: <FaIcons.FaReact size={36} /> },
    { name: 'Flutter', icon: <SiIcons.SiFlutter size={36} /> },
    { name: 'Dart', icon: <SiIcons.SiDart size={36} /> },
    { name: 'PHP', icon: <FaIcons.FaPhp size={36} /> },
    { name: 'Laravel', icon: <SiIcons.SiLaravel size={36} /> },
    { name: 'Next JS', icon: <SiIcons.SiNextdotjs size={36} /> },
    { name: 'MySQL', icon: <SiIcons.SiMysql size={36} /> },
    { name: 'PostgreSQL', icon: <SiIcons.SiPostgresql size={36} /> },
    { name: 'JavaScript', icon: <SiIcons.SiJavascript size={36} /> },
    { name: 'Tailwind CSS', icon: <SiIcons.SiTailwindcss size={36} /> },
    { name: 'Bootstrap', icon: <SiIcons.SiBootstrap size={36} /> },
    { name: 'REST API', icon: <TbIcons.TbApi size={36} /> },
    { name: 'Redux / BLOC', icon: <SiIcons.SiRedux size={36} /> },
    { name: 'Git', icon: <FaIcons.FaGitAlt size={36} /> },
    { name: 'JIRA', icon: <SiIcons.SiJira size={36} /> },
    { name: 'Figma', icon: <SiIcons.SiFigma size={36} /> },
]

const softSkills = [
    'Problem Solving', 'Adaptability', 'Teamwork',
    'Communication', 'Creativity', 'Critical Thinking'
]

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6 relative z-10 bg-slate-900/30">
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-4 mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">My Skills</h2>
                    <div className="h-px bg-gradient-to-r from-cyan-500 to-transparent flex-grow"></div>
                </div>

                <div className="flex flex-col gap-16">
                    {/* Technical Skills */}
                    <div>
                        <h3 className="text-xl font-semibold text-cyan-400 mb-8 flex items-center gap-2">
                            <FiIcons.FiCode size={20} /> Technical Expertise
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {techSkills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                    className="group flex flex-col items-center justify-center gap-3 p-5 bg-slate-900 border border-white/5 rounded-xl hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 cursor-pointer hover:-translate-y-1 shadow-sm hover:shadow-cyan-500/10"
                                >
                                    <div className="text-gray-400 group-hover:text-cyan-400 transition-colors">
                                        {skill.icon}
                                    </div>
                                    <span className="text-gray-300 font-medium text-xs md:text-sm group-hover:text-white transition-colors text-center">
                                        {skill.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Soft Skills */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-semibold text-blue-400 mb-6 flex items-center gap-2">
                            <FiIcons.FiBriefcase size={20} /> Professional Skills
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {softSkills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-5 py-2.5 bg-slate-900 border border-white/5 rounded-full text-gray-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer font-light"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}