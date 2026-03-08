"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
  CheckCircle,
  Heart
} from "lucide-react"
import Link from "next/link"

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
    highlights: ["DPA & DWS", "High patient demand", "Modern facility", " visa sponsorship available"],
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
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 relative overflow-hidden">
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
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-medium mb-4 border border-white/20">
              GP Jobs Hub
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Find Your Dream GP Position in Australia
            </h1>
            <p className="text-xl text-emerald-100">
              Browse verified GP jobs across Australia. Connect directly with clinics 
              and practices hiring international doctors now.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs, locations, or practices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
              </select>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                {types.map(type => <option key={type} value={type}>{type}</option>)}
              </select>
              <select
                value={selectedBilling}
                onChange={(e) => setSelectedBilling(e.target.value)}
                className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                {billings.map(b => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-semibold text-gray-900">
              {filteredJobs.length} Jobs Found
            </h2>
            <div className="flex items-center gap-2 text-sm text-gray-500">
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
                <Card className={`hover:shadow-lg transition-shadow ${job.featured ? 'border-amber-300 bg-amber-50/30' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      {/* Main Content */}
                      <div className="flex-grow">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              {job.featured && (
                                <span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded text-xs font-medium flex items-center gap-1">
                                  <Star className="w-3 h-3 fill-amber-700" />
                                  Featured
                                </span>
                              )}
                              <span className="text-sm text-gray-500">{job.posted}</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 hover:text-teal-600 transition-colors">
                              {job.title}
                            </h3>
                            <p className="text-gray-600">{job.practice}</p>
                          </div>
                          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 transition-colors" />
                          </button>
                        </div>

                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />
                            {job.salary}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {job.billing}
                          </span>
                        </div>

                        <p className="text-gray-600 text-sm mb-4">{job.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {job.highlights.map((highlight, i) => (
                            <span key={i} className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-medium">
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex lg:flex-col gap-3 lg:min-w-[160px]">
                        <Button 
                          className="flex-grow lg:w-full"
                          onClick={() => window.location.href=`/jobs/${job.id}/`}
                        >
                          View Details
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                        <Button 
                          variant="outline" 
                          className="flex-grow lg:w-full"
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
              <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No jobs found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search criteria or filters</p>
              <Button onClick={() => {setSearchTerm(""); setSelectedLocation("All Locations"); setSelectedType("All Types"); setSelectedBilling("All Billing")}}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Post Job CTA */}
      <section className="py-20 bg-gradient-to-br from-[#9a3412] via-[#c2410c] to-[#d97706]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Are You a Clinic Looking to Hire?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Post your GP vacancies to our network of 15,000+ international doctors. 
            Find qualified candidates faster with our targeted recruitment platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => window.location.href='/partnerships/'}
            >
              Post a Job
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
              <div className="text-sm text-gray-400">Avg. Time to Hire</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
