"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Linkedin, Twitter } from "lucide-react"

export function Footer() {
  const [year, setYear] = useState("")

  useEffect(() => {
    setYear(new Date().getFullYear().toString())
  }, [])

  return (
    <footer className="border-t border-border bg-muted/30 py-8 md:py-12 text-muted-foreground">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="border-t border-border pt-4 md:pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <small className="text-xs md:text-sm text-center md:text-left">
              © {year} Delightloop. All rights reserved.
            </small>
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
              <Link href="#" className="hover:text-foreground cursor-pointer" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
              </Link>
              <Link href="#" className="hover:text-foreground cursor-pointer" aria-label="Twitter">
                <Twitter className="h-4 w-4 md:h-5 md:w-5" />
              </Link>
              <span className="hidden md:inline text-muted-foreground" aria-hidden="true">
                |
              </span>
              <Link href="#" className="text-xs md:text-sm hover:text-foreground hover:underline cursor-pointer">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs md:text-sm hover:text-foreground hover:underline cursor-pointer">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
