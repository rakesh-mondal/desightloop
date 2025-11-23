import { Hero } from "@/components/hero"
import { Partner } from "@/components/partner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Logos3 } from "@/components/ui/logos3"
import { TextRotateSection } from "@/components/text-rotate-section"
import { GTMSuccess } from "@/components/gtm-success"
import { Feature108 } from "@/components/ui/feature108"
import { AnimatedGradientBackground } from "@/components/ui/animated-gradient-background"
import { TeamRoles } from "@/components/team-roles"
import { DelightLoopTimeline } from "@/components/delightloop-timeline"
import { DelightLoopFeatureSteps } from "@/components/delightloop-feature-steps"

export default function Home() {
  return (
    <>
      <a className="sr-only" href="#main">
        Skip to content
      </a>
      <Header />
      <Hero />
      <main id="main">
        <TextRotateSection />
        <Logos3 heading="Sales & Marketing Leaders who trust DelightLoop to help achieve" />
        {/* Unified background section */}
        <div className="relative overflow-hidden">
          <AnimatedGradientBackground
            fromColor="rgba(255, 255, 255, 1)"
            toColor="rgba(87, 22, 239, 0.15)"
            position="top"
          />
          <div className="relative z-10">
            <GTMSuccess />
            <Feature108 />
          </div>
        </div>
        <TeamRoles />
        <DelightLoopTimeline />
        <DelightLoopFeatureSteps />
        <Partner />
      </main>
      <Footer />
    </>
  )
}
