'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ease-in-out ${scrolled
                ? 'bg-[#171717]/90 shadow-md' : 'bg-[#171717]'
                }`}
        >
            <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold text-cyan-400">
                    Risto Kurniawan
                </Link>
                <div className="space-x-4 text-sm font-medium flex items-center">
                    <Link href="#about" className="text-white hover:text-cyan-400 transition-colors">
                        About
                    </Link>
                    <Link href="#projects" className="text-white hover:text-cyan-400 transition-colors">
                        Projects
                    </Link>
                    <Link href="#experience" className="text-white hover:text-cyan-400 transition-colors">
                        Experience
                    </Link>
                    <Link href="#contact" className="text-white hover:text-cyan-400 transition-colors">
                        Contact
                    </Link>
                    <a
                        href="/resume.pdf"
                        download
                        className="border border-cyan-500 text-cyan-500 px-3 py-1 rounded-md hover:bg-cyan-500 hover:text-white transition-colors duration-300 animate-pulse"
                    >
                        Resume
                    </a>
                </div>
            </nav>
        </header>
    )
}
