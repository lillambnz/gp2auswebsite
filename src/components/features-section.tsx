"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Target,
  ShieldCheck,
  Building2,
  PackageCheck,
  HeadphonesIcon,
  Stethoscope,
} from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Expert Matching",
    desc: "We know both markets inside out. We match the right GP to the right practice — not just by location, but by values and clinical interests.",
    color: "from-teal-500 to-sky-500",
  },
  {
    icon: ShieldCheck,
    title: "Visa & Registration Support",
    desc: "We guide you through every step of AHPRA registration and visa sponsorship. You focus on your career — we handle the paperwork.",
    color: "from-sky-500 to-blue-500",
  },
  {
    icon: Building2,
    title: "Practice Partnerships",
    desc: "Access to 200+ vetted Australian practices actively seeking UK-trained GPs, from coastal Queensland to metropolitan Melbourne.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: PackageCheck,
    title: "Relocation Assistance",
    desc: "From your first call to your first day in practice, we support your relocation every step of the way.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: HeadphonesIcon,
    title: "Ongoing Support",
    desc: "Our relationship doesn't end when you land. We&apos;re with you for the long term — settling in, career progression, and beyond.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Stethoscope,
    title: "UK GP Specialists",
    desc: "We only work with UK-trained doctors. That means we understand your qualifications, your experience, and your career goals.",
    color: "from-emerald-500 to-teal-500",
  },
]

export function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-[#0c4a6e] relative overflow-hidden">
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
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why GPs Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              GP2Aus
            </span>
          </h2>
          <p className="text-lg text-sky-300">
            We&apos;re not a job board. We&apos;re a specialist recruitment agency that manages every part of your journey.
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
              <div className="group bg-[#0f5b85]/50 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-amber-500/30 transition-all duration-300 h-full hover:shadow-xl hover:shadow-amber-500/10">
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sky-300/80 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
