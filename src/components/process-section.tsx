"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import {
  UserPlus,
  Search,
  ShieldCheck,
  Plane,
  ClipboardList,
  Users,
  MessagesSquare,
  CheckCircle2,
} from "lucide-react"

const gpSteps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Register with us",
    desc: "A 2-minute form is all it takes to get started. Tell us about your background and what you're looking for.",
    color: "from-teal-500 to-sky-500",
  },
  {
    number: "02",
    icon: Search,
    title: "We match you to practices",
    desc: "Our team searches our network of 200+ Australian practices to find the right fit for your skills and preferences.",
    color: "from-sky-500 to-blue-500",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "We guide you through the process",
    desc: "From AHPRA registration to visa sponsorship, we manage every step on your behalf so you don't have to.",
    color: "from-amber-500 to-orange-500",
  },
  {
    number: "04",
    icon: Plane,
    title: "Start your Australian career",
    desc: "Land in Australia ready to practice. We'll still be here for you every step of the way.",
    color: "from-orange-500 to-red-500",
  },
]

const practiceSteps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Post your vacancy",
    desc: "Tell us what you need — location, hours, specialty interests. It takes minutes and there's no obligation.",
    color: "from-amber-500 to-orange-500",
  },
  {
    number: "02",
    icon: Users,
    title: "We source pre-screened UK GPs",
    desc: "We match your vacancy against our network of UK-trained GPs who are ready and motivated to relocate.",
    color: "from-orange-500 to-red-500",
  },
  {
    number: "03",
    icon: MessagesSquare,
    title: "Interview your shortlist",
    desc: "We present a curated shortlist of candidates. You interview only those who meet your standards.",
    color: "from-sky-500 to-blue-500",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "We handle onboarding support",
    desc: "Once you've made your choice, we support the GP through visa, registration, and relocation logistics.",
    color: "from-teal-500 to-sky-500",
  },
]

export function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState<"gps" | "practices">("gps")

  const steps = activeTab === "gps" ? gpSteps : practiceSteps

  return (
    <section ref={ref} className="py-24 bg-[#0a3d5c] relative overflow-hidden">
      {/* Background Pattern */}
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
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-amber-500/20 text-amber-400 rounded-full text-sm font-medium mb-4 border border-amber-500/30">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Simple.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              Supported. Successful.
            </span>
          </h2>
          <p className="text-lg text-sky-300">
            Whether you&apos;re a GP seeking a new chapter or a practice needing talent, we make it effortless.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-white/5 border border-white/10 rounded-xl p-1">
            <button
              onClick={() => setActiveTab("gps")}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === "gps"
                  ? "bg-teal-600 text-white shadow"
                  : "text-sky-300 hover:text-white"
              }`}
            >
              For GPs
            </button>
            <button
              onClick={() => setActiveTab("practices")}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === "practices"
                  ? "bg-amber-500 text-white shadow"
                  : "text-sky-300 hover:text-white"
              }`}
            >
              For Practices
            </button>
          </div>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={`${activeTab}-${step.number}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative bg-[#0f5b85]/50 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-amber-500/30 hover:bg-[#136a99]/50 transition-all duration-300 h-full">
                {/* Number Badge */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-[#0c4a6e] rounded-full shadow-md flex items-center justify-center text-sm font-bold text-amber-400 border border-amber-500/30">
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sky-300/80 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
