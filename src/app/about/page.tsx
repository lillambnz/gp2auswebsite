"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Heart,
  Users,
  Target,
  Globe,
  Stethoscope,
  Star,
  ArrowRight,
} from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "GP-First",
    description: "Everything we do is built around the GP and the practice — not the process.",
  },
  {
    icon: Target,
    title: "Precision Over Volume",
    description: "We don&apos;t flood practices with CVs. We match the right person to the right role.",
  },
  {
    icon: Users,
    title: "Long-Term Relationships",
    description: "We build lasting partnerships with both GPs and practices. Not just placements.",
  },
  {
    icon: Globe,
    title: "UK Specialists",
    description: "We focus exclusively on UK-trained GPs. That depth of focus is our advantage.",
  },
]

const team = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Co-Founder",
    initials: "SM",
    bio: "UK-trained GP who relocated to Melbourne. Founded GP2Aus to make the journey easier for others.",
  },
  {
    name: "Dr. James Chen",
    role: "Co-Founder",
    initials: "JC",
    bio: "GP with experience across NHS and Australian general practice. Specialist in IMG registration pathways.",
  },
  {
    name: "Priya Sharma",
    role: "Head of Operations",
    initials: "PS",
    bio: "Former migration agent specialising in medical visas. Ensures every placement runs smoothly.",
  },
  {
    name: "Dr. Michael Roberts",
    role: "Medical Advisor",
    initials: "MR",
    bio: "RACGP examiner with 20+ years experience. Guides our clinical vetting and quality standards.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0c4a6e]">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#0c4a6e] via-[#075985] to-[#0369a1] relative overflow-hidden">
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
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-amber-300 rounded-full text-sm font-medium mb-6 border border-white/10">
              <Star className="w-4 h-4 fill-amber-400" />
              About GP2Aus
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              The UK to Australia{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400">
                GP Recruitment Specialists
              </span>
            </h1>
            <p className="text-xl text-sky-200 max-w-2xl mx-auto">
              We are a specialist recruitment agency connecting UK-trained GPs with Australian practices. We handle the process so you can focus on the opportunity.
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

      {/* Stats */}
      <section className="py-12 bg-[#082f4a] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Successful Placements" },
              { value: "200+", label: "Partner Practices" },
              { value: "Founded 2019", label: "Years of Experience" },
              { value: "UK Only", label: "Our Specialisation" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-amber-300 mb-1">{stat.value}</div>
                <div className="text-sm text-sky-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-[#0c4a6e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-sky-300">
                <p>
                  GP2Aus was founded in 2019 by two UK-trained GPs who had personally navigated the process of moving to Australia. They knew firsthand how complicated it could be — and how much smoother it would have been with the right support.
                </p>
                <p>
                  What started as a small recruitment consultancy has grown into a specialist agency with a network of 200+ Australian practices and a proven track record of over 500 successful placements.
                </p>
                <p>
                  We focus exclusively on UK-trained GPs because that focus makes us better. We understand your qualifications, your NHS experience, your motivations, and what Australian practices are really looking for.
                </p>
                <p>
                  Our mission is simple: connect the right GP with the right practice, and manage every step of the journey in between.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-3xl flex items-center justify-center border border-white/10">
                <div className="text-center">
                  <Stethoscope className="w-32 h-32 text-amber-400 mx-auto mb-6" />
                  <p className="text-2xl font-bold text-white">GP2Aus</p>
                  <p className="text-sky-400">UK to Australia. Done properly.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#082f4a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-lg text-sky-300">
              The principles that guide how we work with GPs and practices alike.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-white/10">
                      <value.icon className="w-7 h-7 text-amber-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                    <p className="text-sm text-sky-400">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[#0c4a6e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-sky-300">
              Healthcare professionals and recruitment specialists dedicated to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                      {member.initials}
                    </div>
                    <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                    <p className="text-sm text-amber-300 mb-3">{member.role}</p>
                    <p className="text-sm text-sky-400">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Whether you&apos;re a GP looking to relocate or a practice seeking talent — let&apos;s talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-orange-700 hover:bg-gray-100"
              onClick={() => window.location.href = '/contact/'}
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
