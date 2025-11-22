import { RainbowButton } from "@/components/ui/rainbow-button"
import { RetroGrid } from "@/components/ui/retro-grid"

export function Partner() {
  return (
    <section
      id="partner"
      className="relative border-t border-border bg-[#5716EF] py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      {/* Retro Grid Background */}
      <RetroGrid className="!opacity-70 z-0" angle={65} />
      
      <div className="container mx-auto max-w-4xl px-4 md:px-6 text-center relative z-10">
        <h2 className="mb-4 md:mb-6 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight">
          Revolutionize your Gifting with
          <br />
          <span className="text-white">Delightloop</span>
        </h2>
        <p className="mb-8 md:mb-10 text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
          Book a call with our team to see how Delightloop can help
        </p>
        <div className="flex justify-center">
          <RainbowButton className="rounded-full px-6 py-2 text-white">
            Book a Demo <span className="ml-1">&gt;</span>
          </RainbowButton>
        </div>
      </div>
    </section>
  )
}
