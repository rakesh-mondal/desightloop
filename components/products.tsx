"use client"

import { InteractiveScrollingStory } from "@/components/ui/interactive-scrolling-story"

const ecosystemSlides = [
  {
    title: "Udaan",
    description:
      "GPS-based platform for ground and drone surveying delivering centimetre-level accuracy for urban planning, land management, and infrastructure development.",
    image: "/drone-surveying-over-landscape.jpg",
    bgColor: "#fdf4f5",
    textColor: "#000000",
  },
  {
    title: "Parishodh",
    description:
      "Transforms evaluations into data-driven insights with AI and analytics to help educators and institutions improve continuously.",
    image: "/students-using-laptops-in-classroom-analytics-setu.jpg",
    bgColor: "#f0f9ff",
    textColor: "#000000",
  },
  {
    title: "Ram Setu",
    description:
      "AI Vision Systems bringing automation and visual intelligence to industries—from smart surveillance to process automation—with accuracy and reliability.",
    image: "/industrial-automation-with-computer-vision.jpg",
    bgColor: "#faf5ff",
    textColor: "#000000",
  },
]

export function Products() {
  return (
    <section id="products" className="relative border-t border-border">
      <InteractiveScrollingStory slides={ecosystemSlides} ctaText="Learn More" ctaLink="#contact" />
    </section>
  )
}
