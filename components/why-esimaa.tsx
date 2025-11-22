"use client"

import { FeatureSteps } from "@/components/feature-steps"

const reasons = [
  {
    step: "Made in India, for the World",
    title: "Made in India, for the World",
    content: "Designed and built in India, optimised for local challenges and benchmarked to global standards.",
    image: "/indian-technology-innovation-modern-office.jpg",
  },
  {
    step: "Deep Tech + Domain Expertise",
    title: "Deep Tech + Domain Expertise",
    content: "AI, data science, computer vision, GIS, and ed‑tech experience in one multidisciplinary team.",
    image: "/ai-computer-vision-technology-team-collaboration.jpg",
  },
  {
    step: "Scalable and Reliable",
    title: "Scalable and Reliable",
    content: "Built to handle real‑world use cases—from pilots to nationwide deployments.",
    image: "/scalable-cloud-infrastructure-network.jpg",
  },
  {
    step: "Innovation with Purpose",
    title: "Innovation with Purpose",
    content: "We solve meaningful problems that drive measurable impact.",
    image: "/innovation-impact-technology-solutions.jpg",
  },
]

export function WhyEsimaa() {
  return (
    <section
      id="why"
      className="border-t border-border bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30"
    >
      <FeatureSteps
        features={reasons}
        title="Why Choose Esimaa"
        autoPlayInterval={4000}
        imageHeight="h-[400px] md:h-[500px]"
        className="py-16"
      />
    </section>
  )
}
