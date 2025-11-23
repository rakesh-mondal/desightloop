"use client"

// Custom SVG Icons - no lucide-react imports needed
import { Card } from "@/components/ui/card"

// Custom SVG Icons
const EventsManagerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" className="h-6 w-6" viewBox="0 0 49 48">
    <path fill="#D7E0FF" d="M42.204 8.088H7.184a3.184 3.184 0 0 0-3.183 3.183v30.244A3.184 3.184 0 0 0 7.185 44.7h35.019a3.184 3.184 0 0 0 3.183-3.184V11.271a3.184 3.184 0 0 0-3.183-3.183Z"/>
    <path stroke="#4147D5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.43" d="M15.144 12.863v-9.55m9.55 9.55v-9.55m9.551 9.55v-9.55m7.959 4.775H7.184a3.184 3.184 0 0 0-3.183 3.183v30.244A3.184 3.184 0 0 0 7.185 44.7h35.019a3.184 3.184 0 0 0 3.183-3.184V11.271a3.184 3.184 0 0 0-3.183-3.183Z"/>
    <path fill="#D7E0FF" d="M25.067 30.483a5.921 5.921 0 1 0 .275-11.84 5.921 5.921 0 0 0-.275 11.84Z"/>
    <path stroke="#4147D5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.43" d="M25.067 31.483a5.921 5.921 0 1 0 .275-11.84 5.921 5.921 0 0 0-.275 11.84ZM14.899 42.975A11.814 11.814 0 0 1 25.07 37.03c4.17.01 8.118 2.314 10.172 5.946"/>
  </svg>
)

const DemandGenManagerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" className="h-6 w-6" viewBox="0 0 48 48">
    <path fill="#D7E0FF" d="M24 27.184a7.96 7.96 0 0 0-7.297 4.775h14.593A7.96 7.96 0 0 0 24 27.184Z"/>
    <path stroke="#4147D5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.43" d="M8.208 44.53v-7.897h7.896"/>
    <path stroke="#4147D5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.43" d="M44.18 20.227c1.965 10.448-4.428 20.805-14.867 23.603-7.989 2.14-16.14-.74-21.105-6.705M3.82 27.773C1.855 17.325 8.249 6.968 18.687 4.17c7.988-2.14 16.14.738 21.104 6.703"/>
    <path stroke="#4147D5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.43" d="M39.791 3.471v7.896h-7.896"/>
    <path fill="#D7E0FF" d="M20.02 18.429a3.98 3.98 0 1 0 7.959 0 3.98 3.98 0 0 0-7.959 0Z"/>
    <path stroke="#4147D5" strokeWidth="3.43" d="M20.02 18.429a3.98 3.98 0 1 0 7.959 0 3.98 3.98 0 0 0-7.959 0Z"/>
    <path stroke="#4147D5" strokeLinecap="round" strokeWidth="3.43" d="M16.703 31.96a7.96 7.96 0 0 1 14.593 0"/>
  </svg>
)

const SalesAccountExecutiveIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" className="h-6 w-6" viewBox="0 0 48 48">
    <path fill="#fff" d="M24.94 33.455a2.808 2.808 0 0 1 2.807-2.807h14.046a2.809 2.809 0 0 1 2.808 2.81v8.428a2.808 2.808 0 0 1-2.808 2.807H27.747a2.808 2.808 0 0 1-2.808-2.807v-8.43Z"/>
    <path fill="#D7E0FF" d="M6.662 19.304a11.142 11.142 0 0 1 19.025 7.88v4.775h-5.405L18.69 44.693h-8.293L8.805 31.96H3.399v-4.775a11.142 11.142 0 0 1 3.263-7.88Z"/>
    <path fill="#D7E0FF" d="M14.545 16.041a6.367 6.367 0 1 0 0-12.734 6.367 6.367 0 0 0 0 12.734Z"/>
    <path stroke="#4147D5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.43" d="M14.545 16.041a6.367 6.367 0 1 0 0-12.734 6.367 6.367 0 0 0 0 12.734Z"/>
    <path stroke="#4147D5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.43" d="m19.912 35.22-1.184 9.473h-8.331L8.805 31.96H3.399v-4.775a11.142 11.142 0 0 1 22.1-2.019m-.559 8.289a2.808 2.808 0 0 1 2.807-2.807h14.046a2.809 2.809 0 0 1 2.808 2.81v8.428a2.808 2.808 0 0 1-2.808 2.807H27.747a2.808 2.808 0 0 1-2.808-2.807v-8.43Zm5.987-2.808v-2.069a3.184 3.184 0 0 1 3.184-3.183h1.312a3.183 3.183 0 0 1 3.183 3.183v2.07"/>
  </svg>
)

const CustomerSuccessManagerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" className="h-6 w-6" viewBox="0 0 48 48">
    <path fill="#D7E0FF" fillRule="evenodd" d="M44.693 24c0 11.429-9.264 20.693-20.693 20.693C12.572 44.693 3.307 35.43 3.307 24a20.59 20.59 0 0 1 3.182-11.03 4.08 4.08 0 0 0-.028.414c0 4.42 5.288 8.047 6.538 8.047s6.537-3.628 6.537-8.047c-.044-2.968-3.379-5.722-6.537-1.847-1.392-1.707-2.818-2.128-3.982-1.81A20.634 20.634 0 0 1 24 3.307a20.634 20.634 0 0 1 14.984 6.42c-1.164-.318-2.592.101-3.984 1.81-3.16-3.875-6.494-1.121-6.538 1.847 0 4.42 5.288 8.047 6.538 8.047s6.537-3.628 6.537-8.047a4.078 4.078 0 0 0-.028-.418A20.598 20.598 0 0 1 44.693 24Z" clipRule="evenodd"/>
    <path fill="#fff" d="M12.999 11.538C9.84 7.662 6.505 10.416 6.46 13.384c0 4.42 5.288 8.047 6.538 8.047s6.537-3.628 6.537-8.047c-.044-2.968-3.379-5.722-6.537-1.846Zm22.001 0c3.158-3.876 6.493-1.122 6.537 1.846 0 4.42-5.287 8.047-6.537 8.047s-6.538-3.628-6.538-8.047c.044-2.968 3.379-5.722 6.538-1.846Z"/>
    <path stroke="#4147D5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.43" d="M44.693 24c0 11.429-9.264 20.693-20.693 20.693C12.572 44.693 3.307 35.43 3.307 24M19.225 3.86A20.75 20.75 0 0 1 24 3.308c1.644 0 3.243.192 4.776.554m-15.777 7.676C9.84 7.662 6.505 10.416 6.46 13.384c0 4.42 5.288 8.047 6.538 8.047s6.537-3.628 6.537-8.047c-.044-2.968-3.379-5.722-6.537-1.846Zm22.001 0c3.158-3.876 6.493-1.122 6.537 1.846 0 4.42-5.287 8.047-6.537 8.047s-6.538-3.628-6.538-8.047c.044-2.968 3.379-5.722 6.538-1.846Z"/>
    <path stroke="#4147D5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.43" d="M13.494 27.184c1.592 5.73 7.96 9.232 13.69 7.64 3.501-1.273 6.367-4.138 7.322-7.64"/>
  </svg>
)

const roles = [
  {
    icon: EventsManagerIcon,
    title: "Events Manager",
    description: "Boost Event & Webinar Registrations, Gamify Participation & Post Event CTA Rates",
    metric: "100%",
    metricDescription: "ROI for online & offline events. 200 Hours saved on average",
  },
  {
    icon: DemandGenManagerIcon,
    title: "Demand Gen Manager",
    description: "Faster Activations in ABM & Field Marketing Campaigns",
    metric: "4X",
    metricDescription: "Growth of high qualified leads in the funnel through Automations",
  },
  {
    icon: SalesAccountExecutiveIcon,
    title: "Sales Account Executive",
    description: "Increase in booked meetings, deal velocity & close rates",
    metric: "20%",
    metricDescription: "Increase in Conversion Rates and 4x Returned Calls & CTAs",
  },
  {
    icon: CustomerSuccessManagerIcon,
    title: "Customer Success Manager",
    description: "Increase in Customer Satisfaction & Referrals. Reduced Churn through Proactive Relationship Repairing",
    metric: "2-5%",
    metricDescription: "Churn Avoidance.",
  },
]

export function TeamRoles() {
  return (
    <section className="w-full pt-2.5 md:pt-3 lg:pt-3.5 pb-16 md:pb-20 lg:pb-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          {/* Main Headline */}
          <h2 className="text-lg font-semibold text-pretty lg:text-3xl text-center w-full text-gray-900 mb-4 max-w-4xl">
            Equip every team to bring back the Relationship
            <br />
            ("R" in CRM!)
          </h2>
          
          {/* Sub-headline */}
          <p className="text-base md:text-lg text-gray-700 max-w-3xl leading-relaxed">
            HyperPersonalized Gifts demonstrates a Thoughtful Gesture which is the fastest way of building real relationships, goodwill & brand recall.
          </p>
        </div>

        {/* Role Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {roles.map((role, index) => {
            const Icon = role.icon
            return (
              <Card key={index} className="bg-white border border-[#5716EF] rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col h-full">
                  {/* Icon and Title in same row, left-aligned, top-aligned */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="shrink-0 mt-0.5">
                      <Icon />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {role.title}
                    </h3>
                  </div>
                  
                  {/* Description - left aligned */}
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed text-left">
                    {role.description}
                  </p>
                  
                  {/* Metric - Top aligned, left aligned */}
                  <div className="mt-auto flex flex-col items-start">
                    <div className="text-3xl md:text-4xl font-bold text-[#5716EF] mb-2 leading-none">
                      {role.metric}
                    </div>
                    <p className="text-xs md:text-sm text-[#5716EF] leading-relaxed text-left">
                      {role.metricDescription}
                    </p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

