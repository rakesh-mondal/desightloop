import { Eye, Target, Lightbulb } from "lucide-react"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"

export function About() {
  const cards = [
    {
      icon: Eye,
      title: "Vision",
      description: "Make India a global leader in applied AI through indigenous innovation and real‑world solutions.",
      gradient: "from-orange-500 via-amber-400 to-yellow-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-amber-50",
    },
    {
      icon: Target,
      title: "Mission",
      description:
        "Simplify complex problems with AI & Computer Vision so organisations can make smarter, faster, data‑backed decisions.",
      gradient: "from-emerald-500 via-teal-400 to-cyan-500",
      bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
    },
    {
      icon: Lightbulb,
      title: "Philosophy",
      description: "Built for Bharat: local context, intelligent design, and global scale.",
      gradient: "from-blue-500 via-indigo-400 to-purple-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
    },
  ]

  return (
    <section
      id="about"
      className="bg-gradient-to-b from-amber-50/40 via-orange-50/30 to-stone-100/50 py-12 md:py-16 lg:py-20"
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 md:mb-16 text-center max-w-4xl mx-auto">
          <TextGenerateEffect
            words="Building the Future with AI and Computer Vision"
            className="text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6"
            duration={0.8}
            filter={true}
          />
          <TextGenerateEffect
            words="We build practical, scalable solutions that transform how industries, institutions, and governments work across education, surveying, automation, and infrastructure. Our mission is to empower India through cutting-edge technology that makes a real difference."
            className="text-sm md:text-base text-gray-600 font-normal leading-relaxed"
            duration={0.6}
            filter={false}
          />
        </div>

        <h2 className="mb-8 md:mb-12 text-center text-xl font-bold tracking-tight md:text-2xl lg:text-3xl">
          Who We Are
        </h2>

        <article className="max-w-5xl mx-auto">
          {cards.map((card, index) => {
            const Icon = card.icon
            const isLast = index === cards.length - 1

            return (
              <section
                key={index}
                className={`${card.bgColor} grid place-content-center min-h-[60vh] md:min-h-[70vh] sticky top-0 ${
                  !isLast ? "rounded-tr-3xl rounded-tl-3xl" : ""
                } overflow-hidden`}
              >
                {/* Grid pattern overlay */}
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

                {/* Content */}
                <div className="relative z-10 px-6 md:px-12 py-8 md:py-12 max-w-3xl mx-auto text-center">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-2xl mx-auto transform transition-transform duration-500 hover:scale-110 hover:rotate-6">
                    <Icon className="h-10 w-10 text-gray-800" strokeWidth={2} />
                  </div>

                  <h3
                    className={`mb-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-br bg-clip-text text-transparent ${card.gradient}`}
                  >
                    {card.title}
                  </h3>

                  <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700 mb-6">
                    {card.description}
                  </p>

                  <a
                    href="#"
                    className="inline-flex items-center text-sm md:text-base font-semibold text-gray-800 hover:translate-x-1 transition-transform duration-300 cursor-pointer"
                  >
                    Learn More
                    <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </section>
            )
          })}
        </article>
      </div>
    </section>
  )
}
