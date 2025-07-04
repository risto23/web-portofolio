'use client'

import { motion } from 'framer-motion'
import { FaPhp, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa'
import { TbApi } from "react-icons/tb";
import { SiRedux, SiMysql, SiJavascript, SiHtml5, SiCss3, SiNextdotjs, SiFlutter, SiFirebase, SiJquery } from 'react-icons/si'

const techSkills = [
    { name: 'PHP', icon: <FaPhp size={36} /> },
    { name: 'React / React Native', icon: <FaReact size={36} /> },
    { name: 'Next JS', icon: <SiNextdotjs size={36} /> },
    { name: 'Flutter', icon: <SiFlutter size={36} /> },
    { name: 'Firebase', icon: <SiFirebase size={36} /> },
    { name: 'MySQL / SQL', icon: <SiMysql size={36} /> },
    { name: 'JavaScript', icon: <SiJavascript size={36} /> },
    { name: 'JQuery', icon: <SiJquery size={36} /> },
    { name: 'Redux', icon: <SiRedux size={36} /> },
    { name: 'Git', icon: <FaGitAlt size={36} /> },
    { name: 'HTML', icon: <SiHtml5 size={36} /> },
    { name: 'CSS', icon: <SiCss3 size={36} /> },
    { name: 'REST API ', icon: <TbApi size={36} /> },
]

const softSkills = [
    'Problem Solving',
    'Adaptability',
    'Teamwork',
    'Communication',
    'Creativity',
    'Critical Thinking'
]

export default function Skills() {
    return (
        <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold text-cyan-400 mb-10 text-center">Skills</h2>

                {/* Technical Skills */}
                <div className="grid md:grid-cols-3 gap-6 mb-10">
                    {techSkills.map((skill, index) => (
                        <div
                            key={index}
                            className="border border-cyan-500 rounded-lg p-6 flex flex-col items-center hover:bg-cyan-500/10 transition"
                        >
                            <div className="text-cyan-500 mb-2">{skill.icon}</div>
                            <div className="text-white font-medium">{skill.name}</div>
                        </div>
                    ))}
                </div>

                {/* Soft Skills */}
                <h3 className="text-xl font-semibold text-white mb-4 text-center">Soft Skills</h3>
                <div className="flex flex-wrap justify-center gap-3">
                    {softSkills.map((skill, index) => (
                        <span
                            key={index}
                            className="border border-cyan-500 text-cyan-500 px-3 py-1 rounded-full text-sm hover:bg-cyan-500 hover:text-white transition"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
