"use client"

import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero"

export function Hero() {
  return (
    <ScrollExpandMedia
      mediaType="video"
      mediaSrc="/sfx 2.1_updated.mp4"
      bgImageSrc="/background-image.jpg"
      title="Empowering Corporate Gifting"
      scrollToExpand="Scroll to Explore"
    />
  )
}
