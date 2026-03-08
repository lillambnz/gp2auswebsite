"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ClipboardCheck, FileSearch, Plane, Stethoscope, Briefcase, Award } from "lucide-react"
import Link from "next/link"

const steps = [
  {
    number: "01",
    icon: FileSearch,
    title: "Check Your Eligibility",
    desc: "Use our free assessment tool to understand your registration pathway and visa options.",
    link: "/registration",
    color: "from-sky-500 to-blue-500",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "AHPRA Registration",
    desc: "Follow our step-by-step guide through the Australian Health Practitioner Regulation Agency process.",
    link: "/registration",
    color: "from-amber-500 to-orange-500",
  },
  {
    number: "03",
    icon: Briefcase,
    title: "Find Your Job",
    desc: "Browse verified GP positions across Australia. Connect directly with clinics hiring now.",
    link: "/jobs",
    color: "from-orange-500 to-red-500",
  },
  {
    number: "04",
    icon: Award,
    title: "Secure Your Visa",
    desc: "Navigate visa pathways with our comprehensive guides and trusted migration partner network.",
    link: "/visas",
    color: "from-red-500 to-rose-500",
  },
  {
    number: "05",
    icon: Plane,
    title: "Plan Your Move",
    desc: "Access our relocation toolkit: housing, schooling, cost calculators & location guides.",
    link: "/locations",
    color: "from-amber-400 to-yellow-500",
  },
  {
    number: "06",
    icon: Stethoscope,
    title: "Start Practicing",
    desc: "Hit the ground running with our GP Essentials pack and ongoing practice support.",
    link: "/resources",
    color: "from-green-500 to-emerald-500",
  },
]

export function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-[#0a3d5c] relative overflow-hidden">
      {/* Background Pattern - subtle wave pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z" fill="white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-amber-500/20 text-amber-400 rounded-full text-sm font-medium mb-4 border border-amber-500/30">
            Your Journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Six Steps to Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              Australian GP Career
            </span>
          </h2>
          <p className="text-lg text-sky-300">
            We&apos;ve helped thousands of international GPs navigate the journey. 
            Follow our proven pathway to success.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={step.link}>
                <div className="group relative bg-[#0f5b85]/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-[#136a99]/50 transition-all duration-300 border border-white/5 hover:border-amber-500/30 h-full">
                  {/* Number Badge */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-[#0c4a6e] rounded-full shadow-md flex items-center justify-center text-sm font-bold text-amber-400 border border-amber-500/30">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sky-300/80 text-sm leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Arrow */}
                  <div className="mt-4 flex items-center text-sm font-medium text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
