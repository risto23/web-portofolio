'use client'

import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

export default function BackToTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 300)
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        visible && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-5 right-5 p-3 bg-cyan-600 text-white rounded-full shadow-md hover:bg-cyan-500 transition"
                aria-label="Back to top"
            >
                <FaArrowUp />
            </button>
        )
    )
}
