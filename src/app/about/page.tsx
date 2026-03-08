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
  Stethoscope
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
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-teal-600 via-emerald-600 to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-medium mb-4 border border-white/20">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Helping GPs Build Their Australian Dream
            </h1>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              We&apos;re a team of international doctors and healthcare professionals 
              dedicated to making your transition to Australian general practice 
              as smooth as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-gray-200">
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
                <div className="text-4xl font-bold text-teal-600 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
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
              <div className="aspect-square bg-gradient-to-br from-teal-100 to-emerald-100 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <Stethoscope className="w-32 h-32 text-teal-600 mx-auto mb-6" />
                  <p className="text-2xl font-bold text-teal-800">GP2Aus</p>
                  <p className="text-teal-600">Your partner in the journey</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600">
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
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-7 h-7 text-teal-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600">
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
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                      {member.image}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-sm text-teal-600 mb-3">{member.role}</p>
                    <p className="text-sm text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Partners</h2>
            <p className="text-gray-600">
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
                className="flex items-center justify-center p-8 bg-gray-50 rounded-xl"
              >
                <span className="text-xl font-bold text-gray-400">{partner}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Recognized for Excellence
          </h2>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            Proud recipients of the 2023 Australian Healthcare Innovation Award 
            for our contribution to supporting international medical graduates.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
