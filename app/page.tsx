import { Hero } from "@/components/hero"
import { WhyEsimaa } from "@/components/why-esimaa"
import { Partner } from "@/components/partner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Logos3 } from "@/components/ui/logos3"
import { TextRotateSection } from "@/components/text-rotate-section"
import { GTMSuccess } from "@/components/gtm-success"

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
        <GTMSuccess />
        <WhyEsimaa />
        <Partner />
      </main>
      <Footer />
    </>
  )
}
