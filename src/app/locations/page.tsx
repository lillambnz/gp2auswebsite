"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  MapPin, 
  Sun, 
  Users, 
  DollarSign, 
  GraduationCap,
  Thermometer,
  Briefcase,
  Search,
  Filter,
  Heart,
  ArrowRight
} from "lucide-react"
import Link from "next/link"

const locations = [
  {
    id: "sydney",
    name: "Sydney, NSW",
    image: "SY",
    population: "5.3M",
    climate: "Temperate",
    avgTemp: "18°C",
    costOfLiving: "Very High",
    medianHousePrice: "$1.4M",
    gpSalary: "$300K-400K",
    lifestyle: "Urban, beaches, multicultural",
    highlights: ["Iconic beaches", "World-class dining", "Strong job market", "Excellent schools"],
    description: "Australia's largest city offers world-famous beaches, a thriving cultural scene, and excellent career opportunities for GPs.",
    category: "metro",
  },
  {
    id: "melbourne",
    name: "Melbourne, VIC",
    image: "ME",
    population: "5.0M",
    climate: "Temperate",
    avgTemp: "16°C",
    costOfLiving: "High",
    medianHousePrice: "$950K",
    gpSalary: "$300K-400K",
    lifestyle: "Cultural, arts, coffee culture",
    highlights: ["Arts & culture", "Food scene", "Education hub", "Four seasons"],
    description: "Known as Australia's cultural capital, Melbourne offers incredible food, arts, and a strong healthcare sector.",
    category: "metro",
  },
  {
    id: "brisbane",
    name: "Brisbane, QLD",
    image: "BR",
    population: "2.6M",
    climate: "Subtropical",
    avgTemp: "22°C",
    costOfLiving: "Moderate",
    medianHousePrice: "$780K",
    gpSalary: "$320K-420K",
    lifestyle: "Outdoor, warm weather, relaxed",
    highlights: ["Year-round sunshine", "Proximity to coast", "Growing economy", "Affordable housing"],
    description: "The Sunshine State capital offers warm weather year-round, outdoor lifestyle, and strong earning potential for GPs.",
    category: "metro",
  },
  {
    id: "perth",
    name: "Perth, WA",
    image: "PE",
    population: "2.1M",
    climate: "Mediterranean",
    avgTemp: "19°C",
    costOfLiving: "High",
    medianHousePrice: "$650K",
    gpSalary: "$350K-450K",
    lifestyle: "Beaches, outdoor, isolated",
    highlights: ["Beautiful beaches", "High GP demand", "Mining industry", "Laid-back lifestyle"],
    description: "Australia's most isolated major city offers stunning beaches, high GP demand, and excellent salaries.",
    category: "metro",
  },
  {
    id: "adelaide",
    name: "Adelaide, SA",
    image: "AD",
    population: "1.4M",
    climate: "Mediterranean",
    avgTemp: "17°C",
    costOfLiving: "Moderate",
    medianHousePrice: "$720K",
    gpSalary: "$300K-380K",
    lifestyle: "Relaxed, wine region, affordable",
    highlights: ["Wine regions nearby", "Affordable living", "Less traffic", "Good work-life balance"],
    description: "Known for its wine regions and festivals, Adelaide offers affordable living and great work-life balance.",
    category: "metro",
  },
  {
    id: "gold-coast",
    name: "Gold Coast, QLD",
    image: "GC",
    population: "700K",
    climate: "Subtropical",
    avgTemp: "23°C",
    costOfLiving: "Moderate",
    medianHousePrice: "$850K",
    gpSalary: "$320K-400K",
    lifestyle: "Beaches, tourism, outdoor",
    highlights: ["Famous beaches", "Tourism industry", "Theme parks", "Lifestyle location"],
    description: "World-famous beaches and tourist attractions make this a lifestyle destination with strong GP opportunities.",
    category: "regional",
  },
  {
    id: "sunshine-coast",
    name: "Sunshine Coast, QLD",
    image: "SC",
    population: "350K",
    climate: "Subtropical",
    avgTemp: "22°C",
    costOfLiving: "Moderate-High",
    medianHousePrice: "$900K",
    gpSalary: "$340K-420K",
    lifestyle: "Relaxed coastal, family-friendly",
    highlights: ["Stunning beaches", "Growing region", "Family friendly", "DPA available"],
    description: "A rapidly growing coastal region with high GP demand, especially in DPA areas.",
    category: "regional",
  },
  {
    id: "newcastle",
    name: "Newcastle, NSW",
    image: "NE",
    population: "500K",
    climate: "Temperate",
    avgTemp: "18°C",
    costOfLiving: "Moderate",
    medianHousePrice: "$750K",
    gpSalary: "$300K-380K",
    lifestyle: "Harbour city, beaches, emerging",
    highlights: ["Harbour lifestyle", "Surf beaches", "Proximity to Sydney", "Revitalized city"],
    description: "A harbour city with great beaches, close to Sydney but more affordable and relaxed.",
    category: "regional",
  },
  {
    id: "cairns",
    name: "Cairns, QLD",
    image: "CA",
    population: "170K",
    climate: "Tropical",
    avgTemp: "26°C",
    costOfLiving: "Moderate",
    medianHousePrice: "$550K",
    gpSalary: "$350K-450K",
    lifestyle: "Tropical, gateway to reef",
    highlights: ["Great Barrier Reef", "Tropical climate", "Rural incentives", "Tourism hub"],
    description: "Gateway to the Great Barrier Reef with tropical climate and strong rural incentives for GPs.",
    category: "regional",
  },
  {
    id: "hobart",
    name: "Hobart, TAS",
    image: "HO",
    population: "250K",
    climate: "Temperate",
    avgTemp: "13°C",
    costOfLiving: "Moderate",
    medianHousePrice: "$680K",
    gpSalary: "$280K-350K",
    lifestyle: "Scenic, cooler, community",
    highlights: ["Natural beauty", "MONA gallery", "Tight community", "Cooler climate"],
    description: "Tasmania's capital offers stunning natural scenery, cooler climate, and a tight-knit community.",
    category: "regional",
  },
  {
    id: "darwin",
    name: "Darwin, NT",
    image: "DA",
    population: "150K",
    climate: "Tropical",
    avgTemp: "28°C",
    costOfLiving: "High",
    medianHousePrice: "$580K",
    gpSalary: "$380K-500K",
    lifestyle: "Tropical, frontier, unique",
    highlights: ["Highest GP salaries", "Unique indigenous health", "Outdoor lifestyle", "Remote incentives"],
    description: "Australia's tropical northern capital offers the highest GP salaries and unique remote health opportunities.",
    category: "regional",
  },
  {
    id: "canberra",
    name: "Canberra, ACT",
    image: "CB",
    population: "460K",
    climate: "Continental",
    avgTemp: "14°C",
    costOfLiving: "High",
    medianHousePrice: "$950K",
    gpSalary: "$300K-380K",
    lifestyle: "Planned city, political, education",
    highlights: ["Highest education levels", "Planned city", "Museums/galleries", "Bush capital"],
    description: "Australia's purpose-built capital offers excellent schools, museums, and a unique 'bush capital' feel.",
    category: "metro",
  },
]

export default function LocationsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [favorites, setFavorites] = useState<string[]>([])

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    )
  }

  const filteredLocations = locations.filter(loc => {
    const matchesSearch = loc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         loc.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || loc.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-700 relative overflow-hidden">
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
              Location Explorer
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Find Your Perfect Australian Location
            </h1>
            <p className="text-xl text-purple-100">
              Compare cities and regions across Australia. Explore climate, cost of living, 
              GP salaries, and lifestyle factors to find your ideal destination.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-white border-b border-gray-200 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="flex gap-2">
              {[
                { id: "all", label: "All Locations" },
                { id: "metro", label: "Major Cities" },
                { id: "regional", label: "Regional" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl font-medium transition-colors ${
                    selectedCategory === cat.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLocations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow group">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                          {location.image}
                        </div>
                        <div>
                          <CardTitle className="text-lg">{location.name}</CardTitle>
                          <p className="text-sm text-gray-500 flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {location.population}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleFavorite(location.id)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <Heart 
                          className={`w-5 h-5 transition-colors ${
                            favorites.includes(location.id) 
                              ? 'fill-red-500 text-red-500' 
                              : 'text-gray-400'
                          }`} 
                        />
                      </button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-600 line-clamp-2">{location.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Thermometer className="w-4 h-4 text-amber-500" />
                        {location.avgTemp}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Sun className="w-4 h-4 text-amber-500" />
                        {location.climate}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <DollarSign className="w-4 h-4 text-emerald-500" />
                        {location.costOfLiving}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Briefcase className="w-4 h-4 text-blue-500" />
                        {location.gpSalary}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {location.highlights.slice(0, 3).map((highlight, i) => (
                        <span 
                          key={i}
                          className="px-2 py-0.5 bg-purple-50 text-purple-700 rounded text-xs"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500 transition-colors"
                      onClick={() => window.location.href=`/locations/${location.id}/`}
                    >
                      Explore Location
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredLocations.length === 0 && (
            <div className="text-center py-16">
              <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No locations found</h3>
              <p className="text-gray-600">Try adjusting your search criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Comparison CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-indigo-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Not Sure Which Location is Right for You?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Take our personalized quiz to find the best Australian locations 
            based on your preferences, family needs, and career goals.
          </p>
          <Button size="lg" className="bg-white text-amber-700 hover:bg-gray-100" onClick={() => window.location.href='/contact/'}>
            Get Personalized Recommendations
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
