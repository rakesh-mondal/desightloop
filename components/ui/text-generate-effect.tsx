"use client"
import { useEffect, useRef } from "react"
import { motion, stagger, useAnimate, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string
  className?: string
  filter?: boolean
  duration?: number
}) => {
  const [scope, animate] = useAnimate()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "0px", amount: 0.3 })
  const wordsArray = words.split(" ")

  useEffect(() => {
    if (isInView) {
      console.log("[v0] Text animation triggered")
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration,
          delay: stagger(0.1),
        },
      )
    }
  }, [isInView, animate, duration, filter])

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="text-gray-900 opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          )
        })}
      </motion.div>
    )
  }

  return (
    <div ref={ref} className={cn("font-bold", className)}>
      <div>{renderWords()}</div>
    </div>
  )
}
