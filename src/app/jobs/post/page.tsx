"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowLeft, Building2, MapPin, DollarSign, Briefcase, Clock, Star } from "lucide-react"

const packages = [
  {
    id: "basic",
    name: "Basic Listing",
    price: "$299",
    description: "30-day standard listing",
  },
  {
    id: "featured",
    name: "Featured Listing",
    price: "$499",
    description: "60-day featured listing with promotion",
  },
  {
    id: "partnership",
    name: "Recruiter Partnership",
    price: "$1,999/mo",
    description: "Unlimited listings for agencies",
  },
]

export default function PostJobPage() {
  const [step, setStep] = useState(1)
  const [selectedPackage, setSelectedPackage] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    clinicName: "",
    contactName: "",
    email: "",
    phone: "",
    jobTitle: "",
    location: "",
    salary: "",
    jobType: "",
    billing: "",
    description: "",
    requirements: "",
    dpaStatus: "",
    visaSponsorship: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#0c4a6e]">
        <Navigation />
        <section className="pt-32 pb-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-amber-400" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-4">
                Job Posted Successfully!
              </h1>
              <p className="text-sky-300 mb-8">
                Thank you for posting with GP2Aus. Our team will review your listing 
                and it will be live within 24 hours. You&apos;ll receive an email confirmation 
                with payment instructions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.location.href='/jobs/'}
                  className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white border-0"
                >
                  View Job Board
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => window.location.href='/partnerships/'}
                  className="border-white/20 text-sky-200 hover:bg-white/10 hover:text-white bg-transparent"
                >
                  Back to Partnerships
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#0c4a6e]">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-8 bg-gradient-to-b from-[#0c4a6e] via-[#075985] to-[#0369a1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => window.location.href='/partnerships/'}
            className="text-sky-400 hover:text-white flex items-center gap-2 mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Partnerships
          </button>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Post a GP Job
          </h1>
          <p className="text-sky-300 mt-2">
            Reach 15,000+ qualified international GPs
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 bg-[#0c4a6e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress */}
          <div className="flex items-center gap-4 mb-8">
            <div className={`flex items-center gap-2 ${step >= 1 ? 'text-amber-400' : 'text-sky-600'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white' : 'bg-white/10 text-sky-400'}`}>1</div>
              <span className="font-medium">Package</span>
            </div>
            <div className="flex-1 h-1 bg-white/10 rounded">
              <div className={`h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded transition-all ${step >= 2 ? 'w-full' : 'w-0'}`} />
            </div>
            <div className={`flex items-center gap-2 ${step >= 2 ? 'text-amber-400' : 'text-sky-600'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white' : 'bg-white/10 text-sky-400'}`}>2</div>
              <span className="font-medium">Details</span>
            </div>
          </div>

          {step === 1 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Select a Package</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {packages.map((pkg) => (
                  <Card 
                    key={pkg.id}
                    className={`cursor-pointer transition-all bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 ${selectedPackage === pkg.id ? 'border-amber-500/50 ring-1 ring-amber-500/30' : ''}`}
                    onClick={() => setSelectedPackage(pkg.id)}
                  >
                    <CardHeader>
                      <CardTitle className="text-lg text-white">{pkg.name}</CardTitle>
                      <div className="text-2xl font-bold text-amber-400">{pkg.price}</div>
                      <p className="text-sm text-sky-400">{pkg.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedPackage === pkg.id ? 'border-amber-500 bg-amber-500' : 'border-white/20'}`}>
                        {selectedPackage === pkg.id && <CheckCircle className="w-4 h-4 text-white" />}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="flex justify-end">
                <Button 
                  size="lg"
                  disabled={!selectedPackage}
                  onClick={() => setStep(2)}
                  className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white border-0"
                >
                  Continue
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Clinic Information */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-amber-400" />
                    Clinic Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-sky-300 mb-1">Clinic/Practice Name *</label>
                      <input
                        required
                        type="text"
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder:text-sky-600"
                        value={formData.clinicName}
                        onChange={(e) => setFormData({...formData, clinicName: e.target.value})}
                        placeholder="e.g., Sydney Family Practice"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-sky-300 mb-1">Contact Name *</label>
                      <input
                        required
                        type="text"
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder:text-sky-600"
                        value={formData.contactName}
                        onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                        placeholder="e.g., Dr. Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-sky-300 mb-1">Email *</label>
                      <input
                        required
                        type="email"
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder:text-sky-600"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="admin@clinic.com.au"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-sky-300 mb-1">Phone</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder:text-sky-600"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+61 2 1234 5678"
                      />
                    </div>
                  </div>
                </div>

                {/* Job Details */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-amber-400" />
                    Job Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-sky-300 mb-1">Job Title *</label>
                      <input
                        required
                        type="text"
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder:text-sky-600"
                        value={formData.jobTitle}
                        onChange={(e) => setFormData({...formData, jobTitle: e.target.value})}
                        placeholder="e.g., VR GP - DPA Location"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-sky-300 mb-1">Location *</label>
                        <input
                          required
                          type="text"
                          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder:text-sky-600"
                          value={formData.location}
                          onChange={(e) => setFormData({...formData, location: e.target.value})}
                          placeholder="e.g., Brisbane, QLD"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-sky-300 mb-1">Salary Range *</label>
                        <input
                          required
                          type="text"
                          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder:text-sky-600"
                          value={formData.salary}
                          onChange={(e) => setFormData({...formData, salary: e.target.value})}
                          placeholder="e.g., $350K - $450K"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-sky-300 mb-1">Job Type</label>
                        <select
                          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white [&>option]:text-gray-900"
                          value={formData.jobType}
                          onChange={(e) => setFormData({...formData, jobType: e.target.value})}
                        >
                          <option value="">Select...</option>
                          <option value="full-time">Full-time</option>
                          <option value="part-time">Part-time</option>
                          <option value="locum">Locum</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-sky-300 mb-1">Billing Type</label>
                        <select
                          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white [&>option]:text-gray-900"
                          value={formData.billing}
                          onChange={(e) => setFormData({...formData, billing: e.target.value})}
                        >
                          <option value="">Select...</option>
                          <option value="mixed">Mixed Billing</option>
                          <option value="private">Private Billing</option>
                          <option value="bulk">Bulk Billing</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-sky-300 mb-1">DPA Status *</label>
                        <select
                          required
                          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white [&>option]:text-gray-900"
                          value={formData.dpaStatus}
                          onChange={(e) => setFormData({...formData, dpaStatus: e.target.value})}
                        >
                          <option value="">Select...</option>
                          <option value="dpa">DPA</option>
                          <option value="non-dpa">Non-DPA</option>
                          <option value="dws">DWS Only</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-sky-300 mb-1">Visa Sponsorship Available?</label>
                        <select
                          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white [&>option]:text-gray-900"
                          value={formData.visaSponsorship}
                          onChange={(e) => setFormData({...formData, visaSponsorship: e.target.value})}
                        >
                          <option value="">Select...</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-sky-300 mb-1">Job Description *</label>
                      <textarea
                        required
                        rows={4}
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder:text-sky-600 resize-none"
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                        placeholder="Describe the position, practice, patient demographics, support staff, etc."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-sky-300 mb-1">Requirements</label>
                      <textarea
                        rows={3}
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder:text-sky-600 resize-none"
                        value={formData.requirements}
                        onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                        placeholder="e.g., FRACGP, AHPRA registration, 2+ years experience..."
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setStep(1)}
                    className="border-white/20 text-sky-200 hover:bg-white/10 hover:text-white bg-transparent"
                  >
                    Back
                  </Button>
                  <Button 
                    type="submit" 
                    size="lg"
                    className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white border-0"
                  >
                    Submit Job Posting
                  </Button>
                </div>
              </form>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
