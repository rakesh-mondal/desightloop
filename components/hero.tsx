"use client"

import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero"

export function Hero() {
  return (
    <ScrollExpandMedia
      mediaType="video"
      mediaSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/output_progressive_57c1b9d3-b52e-458a-b0b2-b69c00f2bcab-prptCsO61MNKzhkWaPWEVi5i6gL5RN.mp4"
      bgImageSrc="/background-image.jpg"
      title="Empowering Corporate Gifting"
      scrollToExpand="Scroll to Explore"
    />
  )
}
