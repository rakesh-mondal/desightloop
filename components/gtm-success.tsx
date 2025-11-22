"use client"

import { AnimatedGradientBackground } from "@/components/ui/animated-gradient-background"

export function GTMSuccess() {
  return (
    <section className="w-full py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <AnimatedGradientBackground
        fromColor="rgba(255, 255, 255, 1)"
        toColor="rgba(87, 22, 239, 0.15)"
        position="top"
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center space-y-4 md:space-y-6">
          {/* Main Headline */}
          <h2 className="text-lg font-light text-pretty lg:text-3xl text-center w-full text-gray-900">
            Guarantee your GTM Success
          </h2>
          
          {/* Sub-headline */}
          <div className="max-w-3xl mx-auto space-y-2">
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
              Outstanding Results without spending more
            </p>
          </div>

          {/* KPIs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 w-full max-w-5xl mx-auto mt-12">
            {/* KPI 1 */}
            <div className="flex flex-col items-center space-y-2">
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#5716EF]">
                4X
              </div>
              <p className="text-base md:text-lg text-gray-700 font-medium">
                Qualified Pipeline
              </p>
            </div>

            {/* KPI 2 */}
            <div className="flex flex-col items-center space-y-2">
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#5716EF]">
                2X
              </div>
              <p className="text-base md:text-lg text-gray-700 font-medium">
                Deals Closed
              </p>
            </div>

            {/* KPI 3 */}
            <div className="flex flex-col items-center space-y-2">
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#5716EF]">
                10%
              </div>
              <p className="text-base md:text-lg text-gray-700 font-medium">
                Churn Reduction
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

