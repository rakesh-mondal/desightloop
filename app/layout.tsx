import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Delightloop All-in-One Gifting Platform for Autonomous Growth Marketing",
  description:
    "All-in-One B2B Growth Marketing Gifting Platform to generate more leads, Close Deals Faster and Reduce Churn by building meaningful relationships with your prospects & customers",
  generator: "v0.app",
  openGraph: {
    title: "Delightloop All-in-One Gifting Platform for Autonomous Growth Marketing",
    description:
      "All-in-One B2B Growth Marketing Gifting Platform to generate more leads, Close Deals Faster and Reduce Churn by building meaningful relationships with your prospects & customers",
    type: "website",
    url: "https://www.delightloop.com/",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} font-sans antialiased`}>
        {children}
        {/* Analytics component removed due to error */}
      </body>
    </html>
  )
}
