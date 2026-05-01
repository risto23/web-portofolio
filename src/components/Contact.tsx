'use client'

import { motion } from 'framer-motion'
import * as FaIcons from 'react-icons/fa'
import * as FiIcons from 'react-icons/fi'

export default function Contact() {
    return (
        <section id="contact" className="py-32 px-6 relative z-10 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto flex flex-col items-center"
            >
                <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs uppercase tracking-widest font-semibold backdrop-blur-md">
                    What&apos;s Next?
                </div>

                <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 font-heading tracking-tight">Get In Touch</h2>

                <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light">
                    I&apos;m currently open for new opportunities. Whether you have a question, a project idea, or just want to say hi, I&apos;ll try my best to get back to you!
                </p>

                <a
                    href="mailto:risto9f@gmail.com"
                    className="flex items-center gap-2 bg-gradient-to-r from-white to-gray-200 text-slate-950 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 mb-16 shadow-lg shadow-white/10"
                >
                    <FiIcons.FiMail size={20} /> Say Hello
                </a>

                <div className="flex justify-center gap-8">
                    {[
                        { icon: <FaIcons.FaGithub className="text-3xl" />, label: 'GitHub', link: 'https://github.com/risto23' },
                        { icon: <FaIcons.FaLinkedin className="text-3xl" />, label: 'LinkedIn', link: 'https://www.linkedin.com/in/risto15/' },
                        { icon: <FaIcons.FaInstagram className="text-3xl" />, label: 'Instagram', link: 'https://www.instagram.com/risto_15/' }
                    ].map((social, index) => (
                        <a
                            key={index}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative text-gray-400 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center"
                        >
                            {social.icon}
                            {/* Tooltip Hover Effect */}
                            <span className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium bg-slate-800 text-white px-3 py-1.5 rounded shadow-lg whitespace-nowrap pointer-events-none">
                                {social.label}
                            </span>
                        </a>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}