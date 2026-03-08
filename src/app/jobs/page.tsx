"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  MapPin,
  Briefcase,
  DollarSign,
  Star,
  ArrowRight,
  Lock,
} from "lucide-react"

const jobListings = [
  {
    id: 1,
    title: "VR GP - Coastal Location",
    practice: "Coastal Medical Centre",
    location: "Sunshine Coast, QLD",
    salaryRange: "$350K - $450K",
    type: "Full-time",
    featured: true,
    highlights: ["DPA & DWS", "Visa sponsorship available", "Modern facility"],
  },
  {
    id: 2,
    title: "General Practitioner",
    practice: "Inner City Health",
    location: "Melbourne, VIC",
    salaryRange: "$300K - $400K",
    type: "Full-time / Part-time",
    featured: true,
    highlights: ["Allied health on-site", "Teaching practice", "Flexible hours"],
  },
  {
    id: 3,
    title: "VR GP - Regional Location",
    practice: "Highlands Medical Group",
    location: "Toowoomba, QLD",
    salaryRange: "$400K - $500K",
    type: "Full-time",
    featured: false,
    highlights: ["Rural incentives", "Large patient base", "Housing assistance"],
  },
  {
    id: 4,
    title: "GP - Premium Practice",
    practice: "Sydney Family Practice",
    location: "Sydney, NSW",
    salaryRange: "$320K - $420K",
    type: "Full-time",
    featured: false,
    highlights: ["High SES area", "Nursing support", "Modern IT systems"],
  },
  {
    id: 5,
    title: "VR GP - Wellness Centre",
    practice: "Perth Wellness Centre",
    location: "Perth, WA",
    salaryRange: "$380K - $480K",
    type: "Full-time",
    featured: true,
    highlights: ["AGPAL accredited", "Skin cancer clinic", "Visa sponsorship"],
  },
  {
    id: 6,
    title: "General Practitioner",
    practice: "Adelaide Hills Clinic",
    location: "Adelaide Hills, SA",
    salaryRange: "$340K - $440K",
    type: "Full-time / Part-time",
    featured: false,
    highlights: ["Work-life balance", "Scenic location", "Small team"],
  },
]

const locations = ["All Locations", "QLD", "VIC", "NSW", "WA", "SA"]

export default function JobsPage() {
  const [selectedLocation, setSelectedLocation] = useState("All Locations")

  const filteredJobs = jobListings.filter((job) => {
    return selectedLocation === "All Locations" || job.location.includes(selectedLocation)
  })

  return (
    <main className="min-h-screen bg-[#0c4a6e]">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#0c4a6e] via-[#075985] to-[#0369a1] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 0.6, 0.2] }}
              transition={{
                duration: 2 + (i % 3) * 0.5,
                repeat: Infinity,
                delay: i * 0.1,
              }}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: `${10 + (i * 5) % 40}%`,
                left: `${5 + (i * 7) % 90}%`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-amber-300 rounded-full text-sm font-medium mb-6 border border-white/10">
              <Star className="w-4 h-4 fill-amber-400" />
              GP Positions in Australia
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Find Your Next{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400">
                GP Role
              </span>{" "}
              in Australia
            </h1>
            <p className="text-xl text-sky-200 max-w-2xl">
              Browse a selection of active GP vacancies across Australia. Register with us to access all positions and apply through our team.
            </p>
          </motion.div>
        </div>

        <svg
          className="absolute bottom-0 left-0 right-0 w-full h-24"
          viewBox="0 0 1440 96"
          preserveAspectRatio="none"
        >
          <path
            d="M0,96 L0,60 Q200,40 400,55 T800,50 Q1000,35 1200,50 T1440,45 L1440,96 Z"
            fill="#0c4a6e"
            opacity="0.5"
          />
        </svg>
      </section>

      {/* Register CTA Banner */}
      <section className="py-6 bg-teal-700/40 border-y border-teal-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Lock className="w-5 h-5 text-teal-300 shrink-0" />
            <p className="text-sky-200 text-sm">
              <span className="font-semibold text-white">Register to apply.</span>{" "}
              All positions are filled exclusively through our team. Create your profile to access full details and apply.
            </p>
          </div>
          <Button
            className="shrink-0 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white border-0"
            onClick={() => window.location.href = '/contact/'}
          >
            Register Now
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* Location Filter */}
      <section className="py-6 bg-[#0c4a6e]/95 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm text-sky-400 font-medium">Filter by state:</span>
            {locations.map((loc) => (
              <button
                key={loc}
                onClick={() => setSelectedLocation(loc)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  selectedLocation === loc
                    ? "bg-amber-500 text-white"
                    : "bg-white/10 text-sky-300 hover:bg-white/20 hover:text-white border border-white/10"
                }`}
              >
                {loc}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-12 bg-[#0c4a6e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-semibold text-white">
              {filteredJobs.length} positions shown
            </h2>
            <p className="text-sm text-sky-400">Register to see all available roles</p>
          </div>

          <div className="grid gap-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card
                  className={`bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all ${
                    job.featured ? "border-amber-500/50 ring-1 ring-amber-500/30" : ""
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                      {/* Main Content */}
                      <div className="flex-grow">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              {job.featured && (
                                <span className="px-2 py-0.5 bg-amber-500/20 text-amber-300 rounded text-xs font-medium flex items-center gap-1">
                                  <Star className="w-3 h-3 fill-amber-400" />
                                  Featured
                                </span>
                              )}
                            </div>
                            <h3 className="text-xl font-semibold text-white">
                              {job.title}
                            </h3>
                            <p className="text-sky-300">{job.practice}</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-sky-300">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4 text-amber-400" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4 text-amber-400" />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4 text-amber-400" />
                            {job.salaryRange}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {job.highlights.map((highlight, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-white/10 text-sky-200 rounded-full text-xs font-medium border border-white/10"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="lg:min-w-[160px]">
                        <Button
                          className="w-full bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white border-0"
                          onClick={() => window.location.href = '/contact/'}
                        >
                          Register to Apply
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-br from-[#9a3412] via-[#c2410c] to-[#d97706] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Register with us to access all positions and apply
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              We work exclusively with a select network of Australian practices. Register today and our team will match you to the right opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100"
                onClick={() => window.location.href = '/contact/'}
              >
                Register as a GP
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
                onClick={() => window.location.href = '/partnerships/'}
              >
                I&apos;m a Practice
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
