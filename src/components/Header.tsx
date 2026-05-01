'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import * as FiIcons from 'react-icons/fi'

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${scrolled ? 'bg-slate-950/80 backdrop-blur-md shadow-lg shadow-cyan-900/20 py-3' : 'bg-transparent py-5'
                }`}
        >
            <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link href="#home" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-wide font-heading">
                    Risto<span className="text-white">.</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 text-sm font-medium items-center uppercase tracking-wider text-[13px]">
                    {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                        <Link key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group">
                            {item}
                            <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                    <a
                        href="/resume.pdf"
                        download
                        className="ml-4 border border-cyan-500/50 text-cyan-400 px-5 py-2 rounded-full hover:bg-cyan-500 hover:text-slate-900 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]"
                    >
                        RESUME
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-300 hover:text-cyan-400 transition-transform hover:scale-110"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <FiIcons.FiX size={28} /> : <FiIcons.FiMenu size={28} />}
                </button>
            </nav>

            {/* Mobile Menu Panel */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-lg border-b border-white/10 shadow-xl flex flex-col items-center overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
                {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                    <Link
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-gray-300 hover:text-cyan-400 text-lg font-medium w-full text-center py-3 border-b border-white/5 last:border-0"
                    >
                        {item}
                    </Link>
                ))}
            </div>
        </header>
    )
}