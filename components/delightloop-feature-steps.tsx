"use client"

import { FeatureSteps } from "@/components/ui/feature-section"
import { ReversedFeatureSection } from "@/components/ui/reversed-feature-section"

export function DelightLoopFeatureSteps() {
  const features = [
    {
      step: "Step 1",
      title: "We run everything for you so you can focus on generating more revenue.",
      content:
        "We can source, negotiate, procure your favorite collection of gifts globally. We can store your collection in our global warehouses in US, Asia or Europe for faster delivery or help you manage your own inventory.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    },
    {
      step: "Step 2",
      title: "Improve Deliverability by 3x.",
      content:
        "AI Agent not only does Address verification & Accuracy but will initiate a conversational bot with the customer in case of missing address and low delivery confidence score.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    },
    {
      step: "Step 3",
      title: "Gifting ROI with CTA Tracking",
      content:
        "Its not just enough to deliver the gift, its important we track acknowledgement of receipt through CTAs. It updates the Lead score in CRM to analyzes Gifting ROI for better investment decisions",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    },
  ]

  const reversedFeatures = [
    {
      step: "Step 1",
      title: "From hand written notes to creating custom gift packs - you are covered!",
      content:
        "Our warehouse Gifting Operations team will take care of every details and any special instructions before dispatching the final swag package to each customer.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    },
    {
      step: "Step 2",
      title: "Launch Campaigns",
      content:
        "Whether you are launching a new product or a new business, we will find the perfect giveaway that helps elevate the positioning.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    },
    {
      step: "Step 3",
      title: "We GOT it!",
      content:
        "Our Gift Operations Team (GOT) can handle anything from digital gifts to gift cards, from custom media on tablets to physical gifts on top of an already extensive catalog of curated items.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    },
  ]

  return (
    <>
      <FeatureSteps
        features={features}
        sectionHeading="Fill up Your Sales Pipeline & Accelerate Closure Predictably"
        sectionDescription="Our Gifting Platform is packed with features, here are the top 5 that customers love"
        title="Automated Gifting Operations"
        description="Sending gifts is cool, managing its operations is not!"
        autoPlayInterval={6000}
        imageHeight="h-[500px]"
        className="mb-16 md:mb-24 lg:mb-32"
      />
      <ReversedFeatureSection
        title="Human + AI✦"
        description="Our AI✦ Agents will HyperPersonalize but our Gift Designers can help customize"
        features={reversedFeatures}
        autoPlayInterval={6000}
      />
    </>
  )
}

