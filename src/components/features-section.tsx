"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calculator, MapPin, FileCheck, BookOpen, Users, HeadphonesIcon } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Calculator,
    title: "Cost Calculator",
    desc: "Plan your finances with our detailed cost calculator. Estimate registration fees, visa costs, relocation expenses & more.",
    link: "/calculator",
    stats: "$15K-45K",
    statsLabel: "Typical total costs",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: MapPin,
    title: "Location Explorer",
    desc: "Compare 500+ Australian locations. Analyze climate, cost of living, schools, job opportunities & GP earnings by region.",
    link: "/locations",
    stats: "500+",
    statsLabel: "Locations analyzed",
    color: "from-sky-500 to-blue-500",
  },
  {
    icon: FileCheck,
    title: "Documents Checklist",
    desc: "Never miss a document again. Our interactive checklist tracks your progress through AHPRA, visa & job applications.",
    link: "/checklist",
    stats: "50+",
    statsLabel: "Documents tracked",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: BookOpen,
    title: "GP Starter Pack",
    desc: "Everything you need for your first day: Australian billing guide, MBS cheat sheet, clinical guidelines & more.",
    link: "/resources",
    stats: "200+",
    statsLabel: "Resources included",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Users,
    title: "Jobs Board",
    desc: "Browse verified GP positions with salary transparency. Connect directly with Australian clinics & practices hiring now.",
    link: "/jobs",
    stats: "300+",
    statsLabel: "Active listings",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: HeadphonesIcon,
    title: "1-on-1 Support",
    desc: "Get personalized guidance from our team of GP relocation specialists. Book consultations for complex cases.",
    link: "/contact",
    stats: "48hr",
    statsLabel: "Response time",
    color: "from-cyan-500 to-blue-500",
  },
]

export function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-[#0c4a6e] relative overflow-hidden">
      {/* Background decoration - subtle earth tones */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#9a3412]/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-amber-500/20 text-amber-400 rounded-full text-sm font-medium mb-4 border border-amber-500/30">
            Toolkit
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Everything You Need to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              Relocate with Confidence
            </span>
          </h2>
          <p className="text-lg text-sky-300">
            Powerful tools and resources designed specifically for international GPs 
            making the move to Australia.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={feature.link}>
                <div className="group bg-[#0f5b85]/50 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-amber-500/30 transition-all duration-300 h-full hover:shadow-xl hover:shadow-amber-500/10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-amber-400">{feature.stats}</div>
                      <div className="text-xs text-sky-400">{feature.statsLabel}</div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sky-300/80 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
