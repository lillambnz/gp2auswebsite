"use client"

import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { ArrowRight, Briefcase, Building2 } from "lucide-react"

const stats = [
  "500+ Placements",
  "200+ Partner Practices",
  "UK Specialists",
  "End-to-End Support",
]

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0c4a6e]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c4a6e] via-[#075985] to-[#0369a1]" />

        {/* Subtle glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-20 right-[10%] w-72 h-72 md:w-96 md:h-96"
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-[#fbbf24] via-[#f59e0b] to-[#d97706] opacity-20 blur-3xl" />
        </motion.div>

        {/* Bottom wave */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full h-auto"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
        >
          <motion.path
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            d="M0,200 L0,140 Q360,100 720,130 T1440,110 L1440,200 Z"
            fill="#082f4a"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 md:pt-44 pb-32">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <span className="inline-block px-4 py-1.5 bg-amber-500/20 text-amber-400 rounded-full text-sm font-medium border border-amber-500/30">
            UK to Australia GP Recruitment Agency
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 text-center"
        >
          Your Gateway to GP
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400">
            Practice in Australia
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-sky-200 max-w-2xl mx-auto mb-12 text-center"
        >
          We connect UK-trained GPs with leading Australian practices. Let us handle everything — from matching to relocation.
        </motion.p>

        {/* Two CTA Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16"
        >
          {/* Card 1 - For GPs */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-white/15 transition-all group">
            <div className="w-14 h-14 bg-teal-500/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-500/40 transition-colors">
              <Briefcase className="w-7 h-7 text-teal-300" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              I&apos;m a GP looking to move to Australia
            </h3>
            <p className="text-sky-300 text-sm mb-6">
              Register with us and we&apos;ll match you to the right practice and guide you through every step.
            </p>
            <Button
              className="w-full bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white border-0 group"
              onClick={() => window.location.href = '/contact/'}
            >
              Register Now
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Card 2 - For Practices */}
          <div className="bg-white/10 backdrop-blur-sm border border-amber-500/30 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-white/15 transition-all group">
            <div className="w-14 h-14 bg-amber-500/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-500/40 transition-colors">
              <Building2 className="w-7 h-7 text-amber-300" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              My practice needs a GP
            </h3>
            <p className="text-sky-300 text-sm mb-6">
              Access our network of pre-screened UK-trained GPs ready to relocate to your practice.
            </p>
            <Button
              variant="outline"
              className="w-full border-amber-400 text-amber-300 hover:bg-amber-500/10 hover:text-amber-200 bg-transparent"
              onClick={() => window.location.href = '/partnerships/'}
            >
              Post a Vacancy
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-6 md:gap-10"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sky-300/80 text-sm font-medium"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              {stat}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
