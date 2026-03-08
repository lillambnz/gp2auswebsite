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
  Clock, 
  Search,
  Filter,
  Star,
  ChevronRight,
  Building2,
  Heart,
  ArrowRight
} from "lucide-react"

const jobListings = [
  {
    id: 1,
    title: "VR GP - DPA Location",
    practice: "Coastal Medical Centre",
    location: "Sunshine Coast, QLD",
    salary: "$350K - $450K + GST",
    type: "Full-time",
    billing: "70% - 75%",
    posted: "2 days ago",
    featured: true,
    highlights: ["DPA & DWS", "High patient demand", "Modern facility", "Visa sponsorship"],
    description: "Well-established practice in beautiful coastal location seeking a VR GP. High patient demand with mixed billing. Excellent earning potential.",
  },
  {
    id: 2,
    title: "General Practitioner",
    practice: "Inner City Health",
    location: "Melbourne, VIC",
    salary: "$300K - $400K",
    type: "Full-time / Part-time",
    billing: "Mixed Billing",
    posted: "3 days ago",
    featured: true,
    highlights: ["Close to CBD", "Allied health on-site", "Teaching practice", "Flexible hours"],
    description: "Progressive inner-city practice looking for a GP to join our diverse team. Strong focus on preventative care and chronic disease management.",
  },
  {
    id: 3,
    title: "VR GP - Regional Location",
    practice: "Highlands Medical Group",
    location: "Toowoomba, QLD",
    salary: "$400K - $500K + GST",
    type: "Full-time",
    billing: "65% - 70%",
    posted: "1 week ago",
    featured: false,
    highlights: ["Rural incentives", "Training practice", "Large patient base", "Housing assistance"],
    description: "Busy regional practice with large established patient base. Opportunity for high earnings with rural incentives and great work-life balance.",
  },
  {
    id: 4,
    title: "Fellow GP",
    practice: "Sydney Family Practice",
    location: "Sydney, NSW",
    salary: "$320K - $420K",
    type: "Full-time",
    billing: "Private Billing",
    posted: "4 days ago",
    featured: false,
    highlights: ["Premium location", "High SES area", "Nursing support", "Modern IT systems"],
    description: "Prestigious practice in Sydney's inner west. Well-equipped with full nursing support and modern practice management systems.",
  },
  {
    id: 5,
    title: "VR GP - AGPAL Accredited",
    practice: "Perth Wellness Centre",
    location: "Perth, WA",
    salary: "$380K - $480K",
    type: "Full-time",
    billing: "Mixed Billing",
    posted: "5 days ago",
    featured: true,
    highlights: ["AGPAL accredited", "Skin cancer clinic", "Allied health hub", "Work visa sponsorship"],
    description: "Modern wellness centre with comprehensive services. Special interest in skin cancer medicine welcomed.",
  },
  {
    id: 6,
    title: "General Practitioner",
    practice: "Adelaide Hills Clinic",
    location: "Adelaide Hills, SA",
    salary: "$340K - $440K",
    type: "Full-time / Part-time",
    billing: "Bulk Billing",
    posted: "1 week ago",
    featured: false,
    highlights: ["Work-life balance", "Scenic location", "Small team", "Autonomy"],
    description: "Friendly, family-oriented practice in the beautiful Adelaide Hills. Seeking a GP who values quality care and work-life balance.",
  },
]

const locations = ["All Locations", "Sydney, NSW", "Melbourne, VIC", "Brisbane, QLD", "Perth, WA", "Adelaide, SA", "Regional QLD", "Regional NSW", "Regional VIC"]
const types = ["All Types", "Full-time", "Part-time", "Locum"]
const billings = ["All Billing", "Mixed Billing", "Private Billing", "Bulk Billing"]

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("All Locations")
  const [selectedType, setSelectedType] = useState("All Types")
  const [selectedBilling, setSelectedBilling] = useState("All Billing")

  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         job.practice.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLocation = selectedLocation === "All Locations" || job.location.includes(selectedLocation.split(",")[0])
    const matchesType = selectedType === "All Types" || job.type.includes(selectedType)
    const matchesBilling = selectedBilling === "All Billing" || job.billing.includes(selectedBilling.split(" ")[0])
    
    return matchesSearch && matchesLocation && matchesType && matchesBilling
  })

  return (
    <main className="min-h-screen bg-[#0c4a6e]">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#0c4a6e] via-[#075985] to-[#0369a1] relative overflow-hidden">
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
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-amber-300 rounded-full text-sm font-medium mb-6 border border-white/10">
              <Star className="w-4 h-4 fill-amber-400" />
              GP Jobs Hub
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Find Your Dream{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400">
                GP Position
              </span>
              {" "}in Australia
            </h1>
            <p className="text-xl text-sky-200 max-w-2xl">
              Browse verified GP jobs across Australia. Connect directly with clinics 
              and practices hiring international doctors now.
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

      {/* Search & Filters */}
      <section className="py-8 bg-[#0c4a6e]/95 backdrop-blur-xl border-b border-white/10 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-sky-400" />
              <input
                type="text"
                placeholder="Search jobs, locations, or practices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder:text-sky-400"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 text-white [&>option]:text-gray-900"
              >
                {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
              </select>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 text-white [&>option]:text-gray-900"
              >
                {types.map(type => <option key={type} value={type}>{type}</option>)}
              </select>
              <select
                value={selectedBilling}
                onChange={(e) => setSelectedBilling(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 text-white [&>option]:text-gray-900"
              >
                {billings.map(b => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-12 bg-[#0c4a6e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-semibold text-white">
              {filteredJobs.length} Jobs Found
            </h2>
            <div className="flex items-center gap-2 text-sm text-sky-400">
              <Filter className="w-4 h-4" />
              Sorted by: Featured
            </div>
          </div>

          <div className="grid gap-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className={`bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all ${job.featured ? 'border-amber-500/50 ring-1 ring-amber-500/30' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
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
                              <span className="text-sm text-sky-400">{job.posted}</span>
                            </div>
                            <h3 className="text-xl font-semibold text-white hover:text-amber-300 transition-colors">
                              {job.title}
                            </h3>
                            <p className="text-sky-300">{job.practice}</p>
                          </div>
                          <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                            <Heart className="w-5 h-5 text-sky-400 hover:text-amber-400 transition-colors" />
                          </button>
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
                            {job.salary}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4 text-amber-400" />
                            {job.billing}
                          </span>
                        </div>

                        <p className="text-sky-300 text-sm mb-4">{job.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {job.highlights.map((highlight, i) => (
                            <span key={i} className="px-3 py-1 bg-white/10 text-sky-200 rounded-full text-xs font-medium border border-white/10">
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex lg:flex-col gap-3 lg:min-w-[160px]">
                        <Button 
                          className="flex-grow lg:w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white border-0"
                          onClick={() => window.location.href=`/jobs/${job.id}/`}
                        >
                          View Details
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                        <Button 
                          variant="outline" 
                          className="flex-grow lg:w-full border-white/20 text-sky-200 hover:bg-white/10 hover:text-white bg-transparent"
                          onClick={() => window.location.href='/contact/'}
                        >
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-16">
              <Building2 className="w-16 h-16 text-sky-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">No jobs found</h3>
              <p className="text-sky-400 mb-6">Try adjusting your search criteria or filters</p>
              <Button 
                onClick={() => {setSearchTerm(""); setSelectedLocation("All Locations"); setSelectedType("All Types"); setSelectedBilling("All Billing")}}
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white border-0"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Post Job CTA */}
      <section className="py-20 bg-gradient-to-br from-[#9a3412] via-[#c2410c] to-[#d97706] relative overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Are You a Clinic Looking to Hire?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Post your GP vacancies to our network of 15,000+ international doctors. 
              Find qualified candidates faster with our targeted recruitment platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-gray-100"
                onClick={() => window.location.href='/partnerships/'}
              >
                Post a Job
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 bg-transparent"
                onClick={() => window.location.href='/partnerships/'}
              >
                Learn More
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-300">500+</div>
                <div className="text-sm text-orange-200">Partner Clinics</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-300">15K+</div>
                <div className="text-sm text-orange-200">GPs in Network</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-300">48hr</div>
                <div className="text-sm text-orange-200">Avg. Time to Hire</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
