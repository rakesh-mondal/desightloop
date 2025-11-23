"use client"

import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function DelightLoopTimeline() {
  const data = [
    {
      title: "Right Time",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base font-normal mb-4">
            Sending the right nudge at the right time can unlock and unblock revenue opportunities so <span className="font-bold">Timing is Everything!</span>
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-base font-normal mb-6">
            Integrate with your favorite AI-SDR, current campaign workflows or leverage DelightSense to automate gifting. Popular triggers are -
          </p>
          <div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-base mb-2">
              <svg className="h-4 w-4 text-[#5716EF] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Job Changes in Key Accounts
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-base mb-2">
              <svg className="h-4 w-4 text-[#5716EF] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Champion Identification
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-base mb-2">
              <svg className="h-4 w-4 text-[#5716EF] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Rotting Leads (Lack of Activity)
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-base mb-2">
              <svg className="h-4 w-4 text-[#5716EF] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              TakeOut Campaigns
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-base mb-2">
              <svg className="h-4 w-4 text-[#5716EF] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Pre/Post Event Activations
            </div>
          </div>
        </div>
      ),
      image: (
        <Image
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
          alt="Right Time - Automated Gifting"
          width={800}
          height={600}
          className="rounded-lg object-cover w-full h-auto shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        />
      ),
    },
    {
      title: "Right Gift",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base font-normal mb-4">
            Our AI <span className="inline-flex items-center">✨</span> Agent will match the perfect gift, find the right address to deliver & make them feel special, so you can monetize that delight!
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-base font-normal">
            Leveraging all CRM activities, call records, external information from Linkedin etc. our AI agent will continuously build a psychographic profile using 14+ signals and suggest the perfect gift within your catalog and budget.
          </p>
        </div>
      ),
      image: (
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
          alt="Right Gift - AI Agent Matching"
          width={800}
          height={600}
          className="rounded-lg object-cover w-full h-auto shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        />
      ),
    },
    {
      title: "Right Person",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base font-semibold mb-4">
            DelightDiscover AI<span className="text-[#5716EF]">◆</span> Agent will find the ideal customer personas in desired target accounts who have high intent to buy. No Guesswork or wasted resources
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-base font-normal">
            While every lead, prospect & customer could use a special nudge with a physical gift, the AI agent will prioritize the ones who will yield the highest Gift ROI.
          </p>
        </div>
      ),
      image: (
        <Image
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop"
          alt="Right Person - DelightDiscover AI Agent"
          width={800}
          height={600}
          className="rounded-lg object-cover w-full h-auto shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        />
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline 
        data={data}
        heading="Automated Gifting Portals are so 2024.."
        description="Replace Spray & Pray models of generic interactions with a cost effective way to close deals with Predictable ROI"
      />
    </div>
  );
}

