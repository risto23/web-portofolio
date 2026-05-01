'use client'

import { useState, useEffect } from 'react'

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const updateScroll = () => {
            const currentScroll = window.scrollY
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
            if (scrollHeight) {
                setProgress((currentScroll / scrollHeight) * 100)
            }
        }
        window.addEventListener('scroll', updateScroll)
        return () => window.removeEventListener('scroll', updateScroll)
    }, [])

    return (
        <div
            className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 z-[60] transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
        ></div>
    )
}