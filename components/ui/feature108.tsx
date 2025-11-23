"use client"

import { useState, useEffect, useRef } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Layout, Pointer, Zap, Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface TabContent {
  badge?: string
  title: string | React.ReactNode
  description: string
  buttonText?: string
  imageSrc: string
  imageAlt: string
  benefits?: string[]
}

interface Tab {
  value: string
  icon: React.ReactNode
  label: string
  content: TabContent
}

interface Feature108Props {
  badge?: string
  heading?: string
  description?: string
  tabs?: Tab[]
}

const Feature108 = ({
  tabs = [
    {
      value: "tab-1",
      icon: <Zap className="h-auto w-4 shrink-0" />,
      label: "Create More Pipeline",
      content: {
        title: (
          <>
            <span className="text-[#5716EF]">Find & Engage Prospects</span>
            <br />
            <span className="text-[#5716EF]">with Relevant Gifts</span>
            <br />
            <span className="text-black">instead of Digital Spam!</span>
          </>
        ),
        description:
          "Leverage Gifty the AI Agent to orchestrate everything from identifying Ideal Customer Profile (ICP), deliver a hyperpersonalized gift that connects with your brand & campaign theme and followup to successfully execute your Call to Action (CTA). Augment your digital campaigns with physical gifts to get attention & engage faster",
        imageSrc:
          "/4FYgLAbII2pWr1F0NP9jlNBdkZE.avif",
        imageAlt: "Gifty AI Agent Process Flow - Find & Engage Prospects with Relevant Gifts",
        benefits: ["More Attendees", "More Leads", "Deeper Engagement"],
      },
    },
    {
      value: "tab-2",
      icon: <Pointer className="h-auto w-4 shrink-0" />,
      label: "Close Deals Faster",
      content: {
        title: (
          <>
            <span className="text-[#5716EF]">Build deeper relationships with Account Stakeholders that matter</span>
            <br />
            <span className="text-black">instead of Spray & Pray</span>
          </>
        ),
        description:
          "Optimize ABM (Account Based Marketing) by sending AI-curated, personalised gifts at key moments to key influencers & decision makers through out the buying journey.",
        imageSrc:
          "/ZpbgjcHnzmN53AbooCpbKXTp0.avif",
        imageAlt: "Build deeper relationships with Account Stakeholders",
        benefits: ["Emotional Connect", "Brand Recall", "IceBreaker"],
      },
    },
    {
      value: "tab-3",
      icon: <Layout className="h-auto w-4 shrink-0" />,
      label: "Improve Referrals, Reduce Churn",
      content: {
        title: (
          <>
            <span className="text-[#5716EF]">DeRisk Opportunities in Pipeline & Proactively Protect Renewals</span>
            <br />
            <span className="text-black">instead of Last minute Rush</span>
          </>
        ),
        description:
          "Identify opportunities at risk with DelightSense and engage with decision makers, influencers & stakeholders with thoughtful gifts. Build goodwill with Champions through tangible expressions of appreciation and get more referrals.",
        imageSrc:
          "/v8RLIxYSa4bSUuLqhD4fK9Bbx80.avif",
        imageAlt: "DeRisk Opportunities in Pipeline & Proactively Protect Renewals",
        benefits: ["Customer Loyalty", "Reduced Renewal Risk", "Stronger Referrals"],
      },
    },
  ],
}: Feature108Props) => {
  const [activeTab, setActiveTab] = useState(tabs[0].value)
  const [progress, setProgress] = useState(0)
  const progressRef = useRef(0)
  const activeTabRef = useRef(tabs[0].value)
  const ROTATION_INTERVAL = 5000 // 5 seconds (medium time gap)

  // Update refs when state changes
  useEffect(() => {
    activeTabRef.current = activeTab
  }, [activeTab])

  useEffect(() => {
    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + (100 / (ROTATION_INTERVAL / 50)) // Update every 50ms
        
        if (newProgress >= 100) {
          // When progress reaches 100%, move to next tab
          const currentIndex = tabs.findIndex((tab) => tab.value === activeTabRef.current)
          const nextIndex = (currentIndex + 1) % tabs.length
          setActiveTab(tabs[nextIndex].value)
          progressRef.current = 0
          return 0 // Reset progress
        }
        
        progressRef.current = newProgress
        return newProgress
      })
    }, 50)

    return () => {
      clearInterval(progressInterval)
    }
  }, [tabs])

  // Reset progress when tab changes manually
  const handleTabChange = (value: string) => {
    setActiveTab(value)
    setProgress(0)
    progressRef.current = 0
  }

  return (
    <section className="w-full pt-4 pb-32 relative">
      <div className="container mx-auto px-4">
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <div className="flex flex-col items-center w-full mb-4 pt-8 md:pt-12">
            <TabsList className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4 !bg-transparent border-0 shadow-none">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="relative flex items-center justify-center gap-2 rounded-xl px-6 py-5 text-sm font-semibold text-muted-foreground data-[state=active]:text-primary data-[state=active]:bg-transparent bg-transparent hover:bg-transparent whitespace-nowrap min-h-[48px]"
              >
                <span className="flex items-center gap-2">
                  {tab.icon} {tab.label}
                </span>
                {/* Progress Indicator inside tab */}
                {activeTab === tab.value && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted/30 overflow-hidden">
                    <div
                      className="h-full bg-[#5716EF] transition-all duration-75 ease-linear"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}
              </TabsTrigger>
            ))}
            </TabsList>
          </div>
          <div className="mx-auto mt-4 max-w-screen-xl rounded-2xl bg-muted/70 p-6 lg:p-16">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-20 lg:grid-cols-2 lg:gap-10"
              >
                <div className="flex flex-col gap-5">
                  {tab.content.badge && (
                    <Badge variant="outline" className="w-fit bg-background">
                      {tab.content.badge}
                    </Badge>
                  )}
                  <h3 className="text-[28px] font-semibold leading-tight">
                    {tab.content.title}
                  </h3>
                  <p className="text-muted-foreground text-base">
                    {tab.content.description}
                  </p>
                  {tab.content.benefits && (
                    <div className="flex flex-col gap-3 mt-2">
                      {tab.content.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-[#5716EF] shrink-0" />
                          <span className="text-base">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {tab.content.buttonText && (
                    <Button className="mt-2.5 w-fit gap-2 bg-[#5716EF] hover:bg-[#5716EF]/90" size="lg">
                      {tab.content.buttonText}
                    </Button>
                  )}
                </div>
                <img
                  src={tab.content.imageSrc}
                  alt={tab.content.imageAlt}
                  className="rounded-xl w-full h-auto object-cover"
                />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export { Feature108 }

