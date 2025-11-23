"use client"

import { useState, useEffect, useRef } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// Custom SVG Icons
const FilterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" className="h-auto w-4 shrink-0">
    <title>filter-3</title>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="#212121">
      <path d="M10.5 15.75L7.5 17.25V11.75L3.75 6.75H14.25L10.5 11.75V15.75Z"></path>
      <path d="M9 2C9.552 2 10 1.551 10 1C10 0.449 9.552 0 9 0C8.448 0 8 0.449 8 1C8 1.551 8.448 2 9 2Z" fill="#212121" data-stroke="none" stroke="none"></path>
      <path d="M5.5 2C6.052 2 6.5 1.551 6.5 1C6.5 0.449 6.052 0 5.5 0C4.948 0 4.5 0.449 4.5 1C4.5 1.551 4.948 2 5.5 2Z" fill="#212121" data-stroke="none" stroke="none"></path>
      <path d="M12.5 2C13.052 2 13.5 1.551 13.5 1C13.5 0.449 13.052 0 12.5 0C11.948 0 11.5 0.449 11.5 1C11.5 1.551 11.948 2 12.5 2Z" fill="#212121" data-stroke="none" stroke="none"></path>
      <path d="M10.75 4.5C11.302 4.5 11.75 4.051 11.75 3.5C11.75 2.949 11.302 2.5 10.75 2.5C10.198 2.5 9.75 2.949 9.75 3.5C9.75 4.051 10.198 4.5 10.75 4.5Z" fill="#212121" data-stroke="none" stroke="none"></path>
      <path d="M7.25 4.5C7.802 4.5 8.25 4.051 8.25 3.5C8.25 2.949 7.802 2.5 7.25 2.5C6.698 2.5 6.25 2.949 6.25 3.5C6.25 4.051 6.698 4.5 7.25 4.5Z" fill="#212121" data-stroke="none" stroke="none"></path>
    </g>
  </svg>
)

const HandshakeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" className="h-auto w-4 shrink-0">
    <title>users-shaking-hands</title>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="#212121">
      <path d="M3.75 5.25C4.7165 5.25 5.5 4.4665 5.5 3.5C5.5 2.5335 4.7165 1.75 3.75 1.75C2.7835 1.75 2 2.5335 2 3.5C2 4.4665 2.7835 5.25 3.75 5.25Z" fill="#212121" fillOpacity="0.3" data-stroke="none" stroke="none"></path>
      <path d="M14.25 5.25C15.2165 5.25 16 4.4665 16 3.5C16 2.5335 15.2165 1.75 14.25 1.75C13.2835 1.75 12.5 2.5335 12.5 3.5C12.5 4.4665 13.2835 5.25 14.25 5.25Z" fill="#212121" fillOpacity="0.3" data-stroke="none" stroke="none"></path>
      <path d="M3.75 5.25C4.7165 5.25 5.5 4.4665 5.5 3.5C5.5 2.5335 4.7165 1.75 3.75 1.75C2.7835 1.75 2 2.5335 2 3.5C2 4.4665 2.7835 5.25 3.75 5.25Z"></path>
      <path d="M5.75 12.75V14.25C5.75 14.802 5.302 15.25 4.75 15.25H2.75C2.198 15.25 1.75 14.802 1.75 14.25V9.75C1.75 8.645 2.645 7.75 3.75 7.75C4.855 7.75 5.391 8.41 5.859 9.484C6.282 10.453 7.146 10.89 7.82 11.088"></path>
      <path d="M12.25 12.75V14.25C12.25 14.802 12.698 15.25 13.25 15.25H15.25C15.802 15.25 16.25 14.802 16.25 14.25V9.75C16.25 8.645 15.355 7.75 14.25 7.75C13.145 7.75 12.609 8.41 12.141 9.484C11.718 10.453 10.854 10.89 10.18 11.088"></path>
      <path d="M14.25 5.25C15.2165 5.25 16 4.4665 16 3.5C16 2.5335 15.2165 1.75 14.25 1.75C13.2835 1.75 12.5 2.5335 12.5 3.5C12.5 4.4665 13.2835 5.25 14.25 5.25Z"></path>
    </g>
  </svg>
)

const InterviewIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" className="h-auto w-4 shrink-0">
    <title>interview</title>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="#212121">
      <path opacity="0.3" d="M10.75 1.25H7.25C6.423 1.25 5.75 1.923 5.75 2.75V4.25C5.75 5.077 6.423 5.75 7.25 5.75H7.75V7.75L9.97701 5.75H10.75C11.577 5.75 12.25 5.077 12.25 4.25V2.75C12.25 1.923 11.577 1.25 10.75 1.25Z" fill="#212121" data-stroke="none" stroke="none"></path>
      <path d="M10.75 1.25H7.25C6.423 1.25 5.75 1.923 5.75 2.75V4.25C5.75 5.077 6.423 5.75 7.25 5.75H7.75V7.75L9.97701 5.75H10.75C11.577 5.75 12.25 5.077 12.25 4.25V2.75C12.25 1.923 11.577 1.25 10.75 1.25Z"></path>
      <path d="M1.75005 16.25V14.75H3.10304C3.96804 14.75 4.68704 14.082 4.74904 13.218L4.84105 11.944L6.08205 11.448L4.84404 9.797C4.84404 7.542 3.33605 5.63801 1.27405 5.04001"></path>
      <path d="M2.5 10C2.914 10 3.25 9.664 3.25 9.25C3.25 8.836 2.914 8.5 2.5 8.5C2.086 8.5 1.75 8.836 1.75 9.25C1.75 9.664 2.086 10 2.5 10Z" fill="#212121" data-stroke="none" stroke="none"></path>
      <path d="M16.25 16.25V14.75H14.897C14.032 14.75 13.313 14.082 13.251 13.218L13.159 11.944L11.918 11.448L13.156 9.797C13.156 7.542 14.664 5.63801 16.726 5.04001"></path>
      <path d="M15.5 10C15.914 10 16.25 9.664 16.25 9.25C16.25 8.836 15.914 8.5 15.5 8.5C15.086 8.5 14.75 8.836 14.75 9.25C14.75 9.664 15.086 10 15.5 10Z" fill="#212121" data-stroke="none" stroke="none"></path>
    </g>
  </svg>
)

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
      icon: <FilterIcon />,
      label: "Create More Pipeline",
      content: {
        title: (
          <>
            <span className="text-[#5716EF]">Find & Engage Prospects with Relevant Gifts</span>
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
      icon: <HandshakeIcon />,
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
      icon: <InterviewIcon />,
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
  const [fadeKey, setFadeKey] = useState(0) // For fade animation
  const progressRef = useRef(0)
  const activeTabRef = useRef(tabs[0].value)
  const contentContainerRef = useRef<HTMLDivElement>(null)
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
    setFadeKey((prev) => prev + 1) // Trigger fade animation
    setActiveTab(value)
    setProgress(0)
    progressRef.current = 0
  }

  // Update fade key when auto-rotating
  useEffect(() => {
    if (activeTab !== activeTabRef.current) {
      setFadeKey((prev) => prev + 1)
    }
  }, [activeTab])

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
          <div 
            ref={contentContainerRef}
            className="mx-auto mt-4 max-w-screen-xl rounded-2xl bg-muted/70 p-6 lg:p-16 relative overflow-hidden"
            style={{ minHeight: '600px' }}
          >
            {tabs.map((tab) => (
              <div
                key={tab.value}
                className={`grid place-items-center gap-20 lg:grid-cols-2 lg:gap-10 transition-opacity duration-500 ease-in-out ${
                  activeTab === tab.value 
                    ? 'opacity-100 relative z-10' 
                    : 'opacity-0 absolute inset-0 pointer-events-none z-0'
                }`}
              >
                <div className="flex flex-col gap-5 w-full">
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
              </div>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export { Feature108 }

