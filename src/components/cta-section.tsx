"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Left Block - For GPs */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-700 to-[#075985] p-10 flex flex-col justify-between">
            {/* Pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: "32px 32px",
              }}
            />
            <div className="relative">
              <span className="inline-block px-3 py-1 bg-white/10 text-teal-200 rounded-full text-xs font-medium mb-4 border border-white/20">
                For UK GPs
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                Ready to start your Australian career?
              </h2>
              <p className="text-teal-100 mb-8">
                Register with us today. Our team will be in touch within 24 hours to discuss your options and match you to the right practices.
              </p>
              <Button
                size="lg"
                className="bg-white text-teal-700 hover:bg-gray-100 shadow-xl shadow-black/20 group"
                onClick={() => window.location.href = '/contact/'}
              >
                Register as a GP
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Block - For Practices */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#082f4a] to-[#0c4a6e] p-10 flex flex-col justify-between border border-amber-500/20">
            {/* Pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: "32px 32px",
              }}
            />
            <div className="relative">
              <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-xs font-medium mb-4 border border-amber-500/30">
                For Practices
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                Looking for a UK-trained GP?
              </h2>
              <p className="text-sky-200 mb-8">
                Post your vacancy and we&apos;ll match you with pre-screened, motivated UK GPs who are ready to relocate and ready to practice.
              </p>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-amber-400 text-amber-300 hover:bg-amber-500/10 bg-transparent group"
                onClick={() => window.location.href = '/partnerships/'}
              >
                Post a Vacancy
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
