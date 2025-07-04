'use client'

import { useEffect, useState } from 'react'

export default function Typewriter() {
    const words = ['Fullstack Developer', 'Mobile Developer', 'Problem Solver', 'Creative Coder', 'Tech Enthusiast']
    const [text, setText] = useState('')
    const [wordIndex, setWordIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)

    useEffect(() => {
        const currentWord = words[wordIndex]
        if (charIndex < currentWord.length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + currentWord[charIndex])
                setCharIndex(charIndex + 1)
            }, 100)
            return () => clearTimeout(timeout)
        } else {
            const timeout = setTimeout(() => {
                setText('')
                setCharIndex(0)
                setWordIndex((wordIndex + 1) % words.length)
            }, 1500)
            return () => clearTimeout(timeout)
        }
    }, [charIndex, wordIndex, words])
      
    return (
        <span className=" text-xl md:text-2xl text-cyan-400">
            {text}
            <span className="animate-pulse">|</span>
        </span>
    )
}
