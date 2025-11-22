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
  title: "Esimaa Tech Solutions LLP — AI & Computer Vision",
  description:
    "Esimaa Tech Solutions LLP builds practical, scalable AI and Computer Vision solutions for education, surveying, automation and infrastructure.",
  generator: "v0.app",
  openGraph: {
    title: "Esimaa Tech Solutions LLP — AI & Computer Vision",
    description:
      "Made-in-India AI ecosystem: Udaan (surveying), Parishodh (education), Ram Setu (computer vision for automation).",
    type: "website",
    url: "https://www.esimaa.com/",
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
