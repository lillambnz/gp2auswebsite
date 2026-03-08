"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Heart, 
  Users, 
  Target, 
  Award,
  Globe,
  Stethoscope,
  Star
} from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Doctor-Focused",
    description: "Built by GPs, for GPs. We understand your journey because we've lived it.",
  },
  {
    icon: Target,
    title: "Accuracy First",
    description: "Every piece of information is verified and regularly updated to ensure reliability.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Powered by the collective wisdom of thousands of international GPs in Australia.",
  },
  {
    icon: Globe,
    title: "Comprehensive",
    description: "From registration to retirement — we've got every step of your journey covered.",
  },
]

const stats = [
  { value: "15,000+", label: "GPs Helped" },
  { value: "50+", label: "Countries Represented" },
  { value: "98%", label: "Success Rate" },
  { value: "2019", label: "Founded" },
]

const team = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Co-Founder & GP",
    image: "SM",
    bio: "Former UK GP who relocated to Melbourne in 2015. Passionate about helping others navigate the same journey.",
  },
  {
    name: "Dr. James Chen",
    role: "Co-Founder & GP",
    image: "JC",
    bio: "Canadian-trained GP now practicing in Sydney. Specialist in IMG registration pathways.",
  },
  {
    name: "Priya Sharma",
    role: "Head of Operations",
    image: "PS",
    bio: "Former migration agent specializing in medical visas. Ensures smooth transitions for all our doctors.",
  },
  {
    name: "Dr. Michael Roberts",
    role: "Medical Advisor",
    image: "MR",
    bio: "RACGP examiner with 20+ years experience. Guides our clinical content and resources.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0c4a6e]">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#0c4a6e] via-[#075985] to-[#0369a1] relative overflow-hidden">
        {/* Stars */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 0.6, 0.2] }}
              transition={{ 
                duration: 2 + (i % 3) * 0.5,
                repeat: Infinity,
                delay: i * 0.1
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
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Helping GPs Build Their{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400">
                Australian Dream
              </span>
            </h1>
            <p className="text-xl text-sky-200 max-w-2xl mx-auto">
              We&apos;re a team of international doctors and healthcare professionals 
              dedicated to making your transition to Australian general practice 
              as smooth as possible.
            </p>
          </motion.div>
        </div>
        
        {/* Mountain silhouette at bottom */}
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
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-amber-300 mb-1">{stat.value}</div>
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
                  GP2Aus was born from a simple frustration: the process of moving to Australia 
                  as an international GP was unnecessarily complicated, opaque, and lonely.
                </p>
                <p>
                  In 2019, Dr. Sarah Mitchell and Dr. James Chen, both international medical 
                  graduates who had successfully navigated the Australian healthcare system, 
                  decided to create the resource they wished they had when they started.
                </p>
                <p>
                  What began as a simple blog sharing tips about AHPRA registration has grown 
                  into a comprehensive platform serving thousands of GPs from over 50 countries. 
                  We&apos;ve helped doctors from the UK, Ireland, South Africa, India, Canada, 
                  Singapore, and beyond build successful careers in Australia.
                </p>
                <p>
                  Today, GP2Aus is more than just a website — it&apos;s a community. We offer 
                  tools, resources, job connections, and personalized support to help you at 
                  every step of your journey.
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
                  <p className="text-sky-400">Your partner in the journey</p>
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
              The principles that guide everything we do
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
              Passionate healthcare professionals dedicated to your success
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
                      {member.image}
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

      {/* Partners */}
      <section className="py-20 bg-[#082f4a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Partners</h2>
            <p className="text-sky-300">
              We work with leading organizations to provide you with the best resources and opportunities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["RACGP", "ACRRM", "AMC", "AHPRA"].map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-center p-8 bg-white/5 rounded-xl border border-white/10"
              >
                <span className="text-xl font-bold text-sky-400">{partner}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-gradient-to-br from-[#9a3412] via-[#c2410c] to-[#d97706] relative overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <Award className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Recognized for Excellence
          </h2>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Proud recipients of the 2023 Australian Healthcare Innovation Award 
            for our contribution to supporting international medical graduates.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
