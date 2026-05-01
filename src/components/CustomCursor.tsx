'use client'

import { useState, useEffect } from 'react'

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY })

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button')
            ) {
                setIsHovering(true)
            } else {
                setIsHovering(false)
            }
        }

        window.addEventListener('mousemove', updatePosition)
        window.addEventListener('mouseover', handleMouseOver)

        return () => {
            window.removeEventListener('mousemove', updatePosition)
            window.removeEventListener('mouseover', handleMouseOver)
        }
    }, [])

    return (
        <div
            className="hidden md:block fixed top-0 left-0 pointer-events-none z-[100] transition-transform duration-75 ease-out"
            style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        >
            <div className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400 transition-all duration-300 ${isHovering ? 'w-12 h-12 bg-cyan-400/10' : 'w-6 h-6'}`}></div>
            <div className="absolute -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"></div>
        </div>
    )
}