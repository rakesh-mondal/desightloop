"use client"
import { useState, useEffect, useRef } from "react"

interface Slide {
  title: string
  description: string
  image: string
  bgColor: string
  textColor: string
}

interface InteractiveScrollingStoryProps {
  slides: Slide[]
  ctaText?: string
  ctaLink?: string
}

export function InteractiveScrollingStory({
  slides,
  ctaText = "Learn More",
  ctaLink = "#",
}: InteractiveScrollingStoryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const stickyPanelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollableHeight = container.scrollHeight - window.innerHeight
      const stepHeight = scrollableHeight / slides.length
      const newActiveIndex = Math.min(slides.length - 1, Math.floor(container.scrollTop / stepHeight))
      setActiveIndex(newActiveIndex)
    }

    container.addEventListener("scroll", handleScroll)
    return () => container.removeEventListener("scroll", handleScroll)
  }, [slides.length])

  const handleIndicatorClick = (index: number) => {
    const container = scrollContainerRef.current
    if (container) {
      const scrollableHeight = container.scrollHeight - window.innerHeight
      const targetScroll = (scrollableHeight / slides.length) * index + 10 // Added small offset for better alignment
      container.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      })
      setActiveIndex(index) // Immediately update active index for better UX
    }
  }

  const dynamicStyles = {
    backgroundColor: slides[activeIndex].bgColor,
    color: slides[activeIndex].textColor,
    transition: "background-color 0.7s ease, color 0.7s ease",
  }

  return (
    <div
      ref={scrollContainerRef}
      className="h-[75vh] w-full overflow-y-auto"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div style={{ height: `${slides.length * 75}vh` }}>
        <div
          ref={stickyPanelRef}
          className="sticky top-0 h-[75vh] w-full flex flex-col items-center justify-center"
          style={dynamicStyles}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full max-w-7xl mx-auto">
            {/* Left Column: Text Content, Pagination & Button */}
            <div className="relative flex flex-col justify-center p-8 md:p-16 border-r border-black/10">
              <div className="absolute top-12 left-8 md:left-16 flex flex-col space-y-3">
                <div className="text-xs md:text-sm font-medium tracking-widest opacity-50 uppercase">Our Ecosystem</div>
                {/* Pagination Bars */}
                <div className="flex space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleIndicatorClick(index)}
                      className={`h-1 rounded-full transition-all duration-500 ease-in-out cursor-pointer hover:bg-black/40 ${
                        index === activeIndex ? "w-12 bg-black/80" : "w-6 bg-black/20"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className="relative h-64 w-full">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === activeIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                  >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">{slide.title}</h2>
                    <p className="mt-6 text-base md:text-lg lg:text-xl max-w-md leading-relaxed">{slide.description}</p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="absolute bottom-16 left-8 md:left-16">
                <a
                  href={ctaLink}
                  className="px-8 md:px-10 py-3 md:py-4 bg-[#5716EF] text-white font-semibold rounded-full uppercase tracking-wider hover:bg-[#5716EF]/90 transition-colors text-sm md:text-base cursor-pointer"
                >
                  {ctaText}
                </a>
              </div>
            </div>

            {/* Right Column: Image Content with Grid Background */}
            <div className="hidden md:flex items-center justify-center p-8">
              <div className="relative w-[50%] h-[60vh] rounded-2xl overflow-hidden shadow-2xl border-4 border-black/5">
                <div
                  className="absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateY(-${activeIndex * 100}%)` }}
                >
                  {slides.map((slide, index) => (
                    <div key={index} className="w-full h-full">
                      <img
                        src={slide.image || "/placeholder.svg"}
                        alt={slide.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
