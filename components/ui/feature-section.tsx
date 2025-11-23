"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface Feature {
  step: string
  title?: string
  content: string
  image: string
}

interface FeatureStepsProps {
  features: Feature[]
  className?: string
  sectionHeading?: string
  sectionDescription?: string
  title?: string
  description?: string
  autoPlayInterval?: number
  imageHeight?: string
}

export function FeatureSteps({
  features,
  className,
  sectionHeading,
  sectionDescription,
  title = "How to get Started",
  description,
  autoPlayInterval = 3000,
  imageHeight = "h-[400px]",
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting)
        })
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Auto-rotation timer - only runs when section is in view
  useEffect(() => {
    if (!isInView) return

    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length)
        setProgress(0)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [progress, features.length, autoPlayInterval, isInView])

  const handleFeatureClick = (index: number) => {
    setCurrentFeature(index)
    setProgress(0)
  }

  return (
    <div ref={sectionRef} className={cn("p-8 md:p-12", className)}>
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Heading and Description */}
        {(sectionHeading || sectionDescription) && (
          <div className="flex flex-col items-center text-center mb-12 md:mb-20 lg:mb-24">
            {sectionHeading && (
              <h2 className="text-lg font-semibold text-pretty lg:text-3xl text-center w-full text-gray-900 mb-4 max-w-4xl">
                {sectionHeading}
              </h2>
            )}
            {sectionDescription && (
              <p className="text-base md:text-lg text-gray-700 max-w-3xl leading-relaxed mb-8 md:mb-12">
                {sectionDescription}
              </p>
            )}
          </div>
        )}
        
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10">
          <div className="order-2 md:order-1 space-y-8">
            {title && (
              <>
                <h2 className="text-lg font-semibold text-pretty lg:text-3xl text-left w-full text-gray-900 mb-4">
                  {title}
                </h2>
                {description && (
                  <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-8">
                    {description}
                  </p>
                )}
              </>
            )}
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col gap-2 cursor-pointer"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: index === currentFeature ? 1 : 0.3 }}
                transition={{ duration: 0.5 }}
                onClick={() => handleFeatureClick(index)}
              >
                {/* Horizontal Timer Indicator */}
                {index === currentFeature && (
                  <div className="h-1 bg-muted/30 rounded-full overflow-hidden mb-2">
                    <motion.div
                      className="h-full bg-[#5716EF] rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.1, ease: "linear" }}
                    />
                  </div>
                )}

                <div className="flex-1">
                  <h3 className="text-lg font-semibold">
                    {feature.title || feature.step}
                  </h3>
                  {index === currentFeature && (
                    <p className="text-base text-muted-foreground">
                      {feature.content}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div
            className={cn(
              "order-1 md:order-2 relative h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden rounded-lg"
            )}
          >
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 rounded-lg overflow-hidden"
                      initial={{ y: 100, opacity: 0, rotateX: -20 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -100, opacity: 0, rotateX: 20 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.step}
                        className="w-full h-full object-cover transition-transform transform"
                        width={1000}
                        height={500}
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-background via-background/50 to-transparent" />
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

