"use client"

import { LayoutGroup, motion } from "motion/react"
import { TextRotate } from "@/components/ui/text-rotate"
import { RainbowButton } from "@/components/ui/rainbow-button"

export function TextRotateSection() {
  return (
    <section 
      className="w-full py-12 md:py-16 lg:py-20"
      style={{
        background: 'linear-gradient(to bottom, rgba(87, 22, 239, 0.08), rgba(87, 22, 239, 0.04), rgba(255, 255, 255, 1))'
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center space-y-6 md:space-y-8">
          {/* Rotating text */}
          <div className="w-full text-2xl sm:text-3xl md:text-5xl flex flex-row items-center justify-center font-light overflow-hidden">
            <LayoutGroup>
              <motion.p className="flex whitespace-pre" layout>
                <motion.span
                  className="pt-0.5 sm:pt-1 md:pt-2"
                  layout
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                >
                  Get More{" "}
                </motion.span>
                <TextRotate
                  texts={[
                    "Demos",
                    "Leads",
                    "Trials",
                    "Oppos",
                  ]}
                  mainClassName="text-white px-2 sm:px-2 md:px-3 bg-[#5716EF] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </motion.p>
            </LayoutGroup>
          </div>

          {/* Description text */}
          <div className="max-w-3xl mx-auto space-y-2">
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
              Deliver Delight Across the Customer Journey Continuously.
            </p>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
              Increase Pipeline & Retain Customers through AI✦ Powered Gifting
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-2">
            <RainbowButton className="rounded-full px-6 py-2 text-white">
              Book a Demo
            </RainbowButton>
          </div>
        </div>
      </div>
    </section>
  )
}

