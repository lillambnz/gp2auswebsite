"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    role: "GP from UK",
    location: "Now in Melbourne",
    image: "SC",
    quote: "GP2Aus made my registration process so much clearer. The step-by-step guides saved me weeks of confusion. I landed my dream job within 2 months of arriving!",
    rating: 5,
  },
  {
    name: "Dr. Raj Patel",
    role: "GP from India",
    location: "Now in Sydney",
    image: "RP",
    quote: "The cost calculator was incredibly accurate. I knew exactly what to budget for. The job board connected me directly with clinics — no recruiters needed.",
    rating: 5,
  },
  {
    name: "Dr. Emily O'Connor",
    role: "GP from Ireland",
    location: "Now in Brisbane",
    image: "EO",
    quote: "Moving with a family seemed impossible until I found the Location Explorer. Found the perfect suburb with great schools. Couldn't have done it without this resource!",
    rating: 5,
  },
  {
    name: "Dr. Michael Wong",
    role: "GP from Singapore",
    location: "Now in Perth",
    image: "MW",
    quote: "The documents checklist kept me organized through AHPRA and visa applications. Worth every penny for the peace of mind alone.",
    rating: 5,
  },
  {
    name: "Dr. Priya Sharma",
    role: "GP from South Africa",
    location: "Now in Adelaide",
    image: "PS",
    quote: "From eligibility check to first day at my practice, GP2Aus was with me every step. The starter pack made my transition seamless.",
    rating: 5,
  },
  {
    name: "Dr. James Miller",
    role: "GP from Canada",
    location: "Now in Gold Coast",
    image: "JM",
    quote: "The 1-on-1 consultation was a game-changer. They helped me navigate a complex registration pathway. Highly recommend for any international GP!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-[#0a3d5c] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-amber-500/20 text-amber-400 rounded-full text-sm font-medium mb-4 border border-amber-500/30">
            Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Join{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              15,000+ GPs
            </span>{" "}
            Who Made the Move
          </h2>
          <p className="text-lg text-sky-300">
            Hear from international doctors who successfully relocated to Australia with our help.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-[#0f5b85]/50 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-amber-500/30 transition-all duration-300 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center mb-4">
                  <Quote className="w-5 h-5 text-amber-400" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sky-200 text-sm leading-relaxed mb-6 flex-grow">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-xs text-sky-400">
                      {testimonial.role} • {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
