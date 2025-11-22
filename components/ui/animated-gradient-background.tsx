"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface AnimatedGradientBackgroundProps {
  className?: string
  fromColor?: string
  toColor?: string
  position?: "top" | "bottom"
}

export function AnimatedGradientBackground({
  className,
  fromColor = "#fff",
  toColor = "#5716EF",
  position = "top",
}: AnimatedGradientBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: position === "top" ? 10 : 90 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [position])

  return (
    <div
      className={cn("absolute inset-0 z-0 transition-all duration-1000 ease-out", className)}
      style={{
        background: `radial-gradient(125% 125% at ${mousePosition.x}% ${mousePosition.y}%, ${fromColor} 40%, ${toColor} 100%)`,
      }}
    />
  )
}

