"use client"

import { useEffect, useState } from "react"

export default function LineMinimap() {
  const [scrollY, setScrollY] = useState(0)
  const [orangeLinePosition, setOrangeLinePosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)

      // Get document height to calculate scroll progress
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollProgress = Math.min(currentScrollY / documentHeight, 1)

      // Major lines are at positions: 0, 70, 140, 210 (corresponding to sections)
      const majorLinePositions = [0, 70, 140, 210]

      let targetPosition = 0

      // Handle scroll progress from 0 to 1 and map to vertical lines
      if (scrollProgress <= 0.25) {
        // First section (0 to 70px)
        targetPosition = scrollProgress * 4 * 70 // Map 0-0.25 to 0-70
      } else if (scrollProgress <= 0.5) {
        // Second section (70 to 140px)
        const sectionProgress = (scrollProgress - 0.25) / 0.25
        targetPosition = 70 + sectionProgress * 70
      } else if (scrollProgress <= 0.75) {
        // Third section (140 to 210px)
        const sectionProgress = (scrollProgress - 0.5) / 0.25
        targetPosition = 140 + sectionProgress * 70
      } else {
        // Final section - stay at 210px
        targetPosition = 210
      }

      // Ensure position stays within bounds
      const finalPosition = Math.max(0, Math.min(targetPosition, 210))
      setOrangeLinePosition(finalPosition)

      console.log("[v0] Scroll progress:", scrollProgress)
      console.log("[v0] Orange line position:", finalPosition)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-30">
      <div
        className="flex h-px w-screen left-8 bg-orange-500 absolute pointer-events-none max-[960px]:left-0 z-10 transition-transform duration-150 ease-out"
        style={{ transform: `translateY(${orangeLinePosition}px)` }}
      >
        <svg
          width="10"
          height="8"
          viewBox="0 0 7 6"
          fill="none"
          className="translate-y-[-3px] -ml-4 -rotate-90 max-[960px]:hidden"
        >
          <path d="M3.54688 6L0.515786 0.75L6.57796 0.75L3.54688 6Z" fill="#FF5800"></path>
        </svg>

        <a
          href="/"
          className="absolute right-32 max-[640px]:right-10 font-mono uppercase h-6 px-2 text-[13px] flex items-center bg-orange-500 text-white whitespace-nowrap cursor-pointer pointer-events-auto"
        >
          newsletter 
        </a>
      </div>

      {/* linhas verticais - agora funcionam como menu das seções do blog */}
      <div className="flex flex-col mx-8 gap-2">
        {/* Introdução */}
        <div className="bg-neutral-800 w-10 h-px" />
        <div className="bg-neutral-500 w-6 h-px" />
        <div className="bg-neutral-500 w-6 h-px" />
        <div className="bg-neutral-500 w-6 h-px" />
        <div className="bg-neutral-500 w-6 h-px" />
        <div className="bg-neutral-500 w-6 h-px" />
        <div className="bg-neutral-500 w-6 h-px" />
        {/* Inteligência Artificial */}
        <div className="bg-neutral-800 w-10 h-px" />
        <div className="bg-neutral-500 w-6 h-px" />
        <div className="bg-neutral-500 w-6 h-px" />
        <div className="bg-neutral-500 w-6 h-px" />
        <div className="bg-neutral-500 w-6 h-px" />
        <div className="bg-neutral-500 w-6 h-px" />
        <div className="bg-neutral-500 w-6 h-px" />
        {/* Cloud Computing e DevOps */}
        <div className="bg-neutral-800 w-10 h-px" />
        <div className="bg-neutral-500 w-6 h-px" />
        <div className="bg-neutral-500 w-6 h-px" />
        <div className="bg-neutral-500 w-6 h-px" />
        <div className="bg-neutral-500 w-6 h-px" />
        <div className="bg-neutral-500 w-6 h-px" />
        <div className="bg-neutral-500 w-6 h-px" />
        <div className="bg-neutral-500 w-6 h-px" />
        {/* Segurança Cibernética */}
        <div className="bg-neutral-800 w-10 h-px" />
        <div className="bg-neutral-500 w-6 h-px" />
        <div className="bg-neutral-500 w-6 h-px" />
        <div className="bg-neutral-500 w-6 h-px" />
        <div className="bg-neutral-500 w-6 h-px" />
        <div className="bg-neutral-500 w-6 h-px" />
        <div className="bg-neutral-500 w-6 h-px" />
        {/* Conclusão */}
        <div className="bg-neutral-800 w-10 h-px" />
      </div>
    </div>
  )
}
