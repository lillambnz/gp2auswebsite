"use client"

import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"

const trustBadges = [
  "15,000+ GPs Helped",
  "500+ Partner Clinics", 
  "98% Success Rate",
  "Trusted by RACGP",
]

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0c4a6e]">
      {/* Australian Landscape Gradient Background */}
      <div className="absolute inset-0">
        {/* Sky */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c4a6e] via-[#075985] to-[#0369a1]" />
        
        {/* Sun */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-20 right-[15%] w-64 h-64 md:w-96 md:h-96"
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-[#fbbf24] via-[#f59e0b] to-[#d97706] opacity-60 blur-3xl" />
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[#fcd34d] to-[#fbbf24] opacity-40 blur-2xl" />
        </motion.div>

        {/* Mountains */}
        <svg 
          className="absolute bottom-0 left-0 right-0 w-full h-auto"
          viewBox="0 0 1440 400" 
          preserveAspectRatio="none"
        >
          {/* Back mountains */}
          <motion.path
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            d="M0,400 L0,250 Q200,180 400,220 T800,200 Q1000,160 1200,210 T1440,180 L1440,400 Z"
            fill="#9a3412"
            opacity="0.4"
          />
          {/* Middle hills */}
          <motion.path
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            d="M0,400 L0,300 Q300,260 600,290 T1200,280 Q1300,270 1440,290 L1440,400 Z"
            fill="#92400e"
            opacity="0.6"
          />
          {/* Front dunes */}
          <motion.path
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            d="M0,400 L0,340 Q200,320 500,340 T1000,330 Q1200,320 1440,340 L1440,400 Z"
            fill="#c2410c"
            opacity="0.8"
          />
        </svg>

        {/* Stars */}
        <div className="absolute inset-0 overflow-hidden">
          {[
            { top: 15, left: 10 }, { top: 25, left: 25 }, { top: 12, left: 40 },
            { top: 30, left: 55 }, { top: 18, left: 70 }, { top: 35, left: 85 },
            { top: 22, left: 95 }, { top: 28, left: 15 }, { top: 38, left: 45 },
            { top: 14, left: 60 }, { top: 32, left: 75 }, { top: 20, left: 90 },
          ].map((star, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{ 
                duration: 2 + (i % 3) * 0.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: `${star.top}%`,
                left: `${star.left}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Your Australian
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400">
              GP Adventure Starts Here
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-sky-200 max-w-2xl mx-auto mb-10"
          >
            From registration to your first day in practice. Everything you need 
            to build your medical career under the Australian sun.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white text-lg px-8 py-6 shadow-xl shadow-amber-500/30 group"
              onClick={() => window.location.href='/registration/'}
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8"
          >
            {trustBadges.map((badge, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 text-sky-300/80 text-sm"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                {badge}
              </div>
            ))}
          </motion.div>
        </div>
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
