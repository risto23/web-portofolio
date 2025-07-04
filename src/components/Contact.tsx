'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold text-cyan-400 mb-4">Contact</h2>
                <p className="text-gray-400 mb-8">
                    Feel free to connect with me through any of these platforms:
                </p>

                <div className="flex justify-center gap-6">
                    <a
                        href="https://github.com/risto23"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center text-gray-300 hover:text-cyan-400 transition-transform duration-300 hover:scale-110"
                    >
                        <FaGithub className="text-4xl" />
                        <span className="text-xs mt-1 group-hover:text-cyan-400">GitHub</span>
                    </a>

                    <a
                        href="https://www.instagram.com/risto_15/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center text-gray-300 hover:text-cyan-400 transition-transform duration-300 hover:scale-110"
                    >
                        <FaInstagram className="text-4xl" />
                        <span className="text-xs mt-1 group-hover:text-cyan-400">Instagram</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/risto15/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center text-gray-300 hover:text-cyan-400 transition-transform duration-300 hover:scale-110"
                    >
                        <FaLinkedin className="text-4xl" />
                        <span className="text-xs mt-1 group-hover:text-cyan-400">LinkedIn</span>
                    </a>
                </div>

                <a
                    href="/resume.pdf"
                    download
                    className="inline-block mt-8 border border-cyan-500 text-cyan-500 px-6 py-2 rounded-md hover:bg-cyan-500 hover:text-white transition-colors duration-300"
                >
                    Download Resume
                </a>
            </motion.div>
        </section>
    )
}
