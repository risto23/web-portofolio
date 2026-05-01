'use client'

import { useEffect, useState } from 'react'

const WORDS = ['Fullstack Developer', 'Mobile Developer', 'Problem Solver', 'Creative Coder', 'Tech Enthusiast']

export default function Typewriter() {
    const [text, setText] = useState('')
    const [wordIndex, setWordIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)

    useEffect(() => {
        const currentWord = WORDS[wordIndex]
        if (charIndex < currentWord.length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + currentWord[charIndex])
                setCharIndex((i) => i + 1)
            }, 80)
            return () => clearTimeout(timeout)
        } else {
            const pause = setTimeout(() => {
                setText('')
                setCharIndex(0)
                setWordIndex((w) => (w + 1) % WORDS.length)
            }, 1400)
            return () => clearTimeout(pause)
        }
    }, [charIndex, wordIndex])

    return (
        <span className="text-xl md:text-2xl" style={{ color: 'var(--accent)' }}>
            {text}
            <span className="cursor" aria-hidden="true"></span>
        </span>
    )
}
