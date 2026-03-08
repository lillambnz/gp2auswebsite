import type { Metadata } from "next"
import { DM_Sans, Inter } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "GP2Aus – The Ultimate Guide for International GPs Moving to Australia",
  description: "Everything you need to thrive as an international GP moving to Australia: finding jobs, AHPRA registration, visa options, cost calculators, location guides and much more!",
  keywords: "international GP Australia, AHPRA registration, medical migration, GP jobs Australia, medical visa Australia, overseas doctor Australia",
  authors: [{ name: "GP2Aus" }],
  openGraph: {
    title: "GP2Aus – The Ultimate Guide for International GPs Moving to Australia",
    description: "Everything you need to thrive as an international GP moving to Australia: finding jobs, AHPRA registration, visa options, earnings and workload and much more!",
    type: "website",
    url: "https://gp2aus.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
