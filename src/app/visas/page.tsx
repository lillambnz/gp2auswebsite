"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { 
  Plane, 
  Briefcase, 
  Users, 
  GraduationCap, 
  Clock, 
  DollarSign,
  CheckCircle,
  ArrowRight,
  Globe,
  FileCheck,
  Star
} from "lucide-react"

const visaTypes = [
  {
    id: "subclass-482",
    title: "Temporary Skill Shortage Visa (482)",
    subtitle: "Most Common for GPs",
    icon: Briefcase,
    description: "The most common visa for international GPs. Requires sponsorship from an approved Australian employer.",
    requirements: [
      "Job offer from approved sponsor",
      "Occupation on skilled occupation list (GP is listed)",
      "Relevant skills & qualifications",
      "English language proficiency",
      "Health & character requirements",
    ],
    benefits: [
      "Work in Australia for up to 4 years",
      "Bring family members",
      "Pathway to permanent residency",
      "No age limit",
    ],
    processingTime: "2-6 months",
    cost: "From $3,115 AUD",
    color: "from-sky-500 to-blue-500",
  },
  {
    id: "subclass-186",
    title: "Employer Nomination Scheme (186)",
    subtitle: "Permanent Residency",
    icon: FileCheck,
    description: "Permanent residency visa for skilled workers nominated by an Australian employer.",
    requirements: [
      "Nomination by approved employer",
      "3 years relevant work experience",
      "Skills assessment (if required)",
      "English language proficiency",
      "Under 45 years of age (exceptions apply)",
    ],
    benefits: [
      "Permanent residency from day one",
      "Work for any employer",
      "Access to Medicare",
      "Pathway to citizenship",
    ],
    processingTime: "6-12 months",
    cost: "From $4,640 AUD",
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "subclass-189",
    title: "Skilled Independent Visa (189)",
    subtitle: "Points-Based PR",
    icon: Users,
    description: "Permanent residency visa for skilled workers not sponsored by an employer or family member.",
    requirements: [
      "Occupation on Medium and Long-term Strategic Skills List",
      "Skills assessment",
      "Submit Expression of Interest",
      "Minimum 65 points",
      "Under 45 years of age",
    ],
    benefits: [
      "Permanent residency",
      "No employer sponsorship needed",
      "Live and work anywhere in Australia",
      "Include family members",
    ],
    processingTime: "8-12 months",
    cost: "From $4,640 AUD",
    color: "from-amber-500 to-orange-500",
  },
  {
    id: "subclass-190",
    title: "Skilled Nominated Visa (190)",
    subtitle: "State Nominated PR",
    icon: Globe,
    description: "Permanent residency visa nominated by an Australian state or territory government.",
    requirements: [
      "Nomination by Australian state/territory",
      "Occupation on state skilled occupation list",
      "Commit to living in nominating state",
      "Skills assessment & points test",
      "Under 45 years of age",
    ],
    benefits: [
      "Permanent residency",
      "Additional 5 points for nomination",
      "State support for settlement",
      "Family can be included",
    ],
    processingTime: "8-12 months",
    cost: "From $4,640 AUD",
    color: "from-purple-500 to-pink-500",
  },
]

const comparisonPoints = [
  { label: "Sponsorship Required", v482: "Yes", v186: "Yes", v189: "No", v190: "State Nomination" },
  { label: "Permanent Residency", v482: "Temporary (Pathway available)", v186: "Yes", v189: "Yes", v190: "Yes" },
  { label: "Age Limit", v482: "No limit", v186: "Under 45", v189: "Under 45", v190: "Under 45" },
  { label: "Work Restrictions", v482: "Limited to sponsor", v186: "None", v189: "None", v190: "None" },
  { label: "Processing Time", v482: "2-6 months", v186: "6-12 months", v189: "8-12 months", v190: "8-12 months" },
  { label: "Family Included", v482: "Yes", v186: "Yes", v189: "Yes", v190: "Yes" },
]

const faqs = [
  {
    question: "Which visa is best for international GPs?",
    answer: "The Temporary Skill Shortage (TSS) visa (subclass 482) is most common as it allows you to start working relatively quickly with employer sponsorship. Many GPs later transition to permanent residency through the Employer Nomination Scheme (186) or other pathways after gaining Australian experience.",
  },
  {
    question: "Can my family come with me on a work visa?",
    answer: "Yes, all the main work visas allow you to include family members (partner and dependent children) in your application. They will have the same visa conditions and can work or study in Australia.",
  },
  {
    question: "Do I need a job offer before applying for a visa?",
    answer: "For employer-sponsored visas (482 and 186), yes, you need a job offer and employer nomination. For independent visas (189 and 190), you don't need a job offer, but having one can strengthen your application.",
  },
  {
    question: "How does the points system work for visa 189/190?",
    answer: "Points are awarded for age (maximum 30 points for 25-32 years), English proficiency (up to 20 points), work experience (up to 20 points), education (up to 20 points), and other factors. You need at least 65 points to be eligible, but higher scores improve your chances of invitation.",
  },
  {
    question: "Can I change employers on a 482 visa?",
    answer: "Your 482 visa is tied to your sponsoring employer. If you want to change employers, your new employer must be an approved sponsor and nominate you. You have 60 days to find a new sponsor if your employment ends.",
  },
]

export default function VisasPage() {
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
              Visa Pathways
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Visa Options for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400">
                International GPs
              </span>
            </h1>
            <p className="text-xl text-sky-200">
              Understand your visa options for working as a GP in Australia. 
              Compare pathways, requirements, and find the best option for your situation.
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

      {/* Visa Types */}
      <section className="py-20 bg-[#0c4a6e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Choose Your Visa Pathway
            </h2>
            <p className="text-lg text-sky-300">
              Compare the main visa options available for international GPs looking to work in Australia.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {visaTypes.map((visa, index) => (
              <motion.div
                key={visa.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className={`w-14 h-14 bg-gradient-to-br ${visa.color} rounded-xl flex items-center justify-center`}>
                        <visa.icon className="w-7 h-7 text-white" />
                      </div>
                      <span className="px-3 py-1 bg-white/10 text-amber-300 rounded-full text-xs font-medium border border-white/10">
                        {visa.subtitle}
                      </span>
                    </div>
                    <CardTitle className="text-xl mt-4 text-white">{visa.title}</CardTitle>
                    <CardDescription className="text-sky-400">{visa.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex gap-4 text-sm">
                      <div className="flex items-center gap-2 text-sky-300">
                        <Clock className="w-4 h-4 text-amber-400" />
                        {visa.processingTime}
                      </div>
                      <div className="flex items-center gap-2 text-sky-300">
                        <DollarSign className="w-4 h-4 text-amber-400" />
                        {visa.cost}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm text-white mb-2">Requirements</h4>
                      <ul className="space-y-1">
                        {visa.requirements.slice(0, 4).map((req, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-sky-300">
                            <CheckCircle className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm text-white mb-2">Key Benefits</h4>
                      <ul className="space-y-1">
                        {visa.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-sky-300">
                            <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-[#082f4a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Visa Comparison
            </h2>
            <p className="text-lg text-sky-300">
              Quick comparison of the main visa options
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-white/20">
                  <th className="text-left py-4 px-4 font-semibold text-white">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-sky-400">482 (TSS)</th>
                  <th className="text-center py-4 px-4 font-semibold text-emerald-400">186 (ENS)</th>
                  <th className="text-center py-4 px-4 font-semibold text-amber-400">189 (Skilled)</th>
                  <th className="text-center py-4 px-4 font-semibold text-purple-400">190 (Nominated)</th>
                </tr>
              </thead>
              <tbody>
                {comparisonPoints.map((point, index) => (
                  <tr key={index} className="border-b border-white/10">
                    <td className="py-4 px-4 font-medium text-white">{point.label}</td>
                    <td className="py-4 px-4 text-center text-sm text-sky-300">{point.v482}</td>
                    <td className="py-4 px-4 text-center text-sm text-sky-300">{point.v186}</td>
                    <td className="py-4 px-4 text-center text-sm text-sky-300">{point.v189}</td>
                    <td className="py-4 px-4 text-center text-sm text-sky-300">{point.v190}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-br from-[#9a3412] via-[#c2410c] to-[#d97706] relative overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              General Application Process
            </h2>
            <p className="text-lg text-orange-100">
              Steps you&apos;ll typically follow when applying for an Australian work visa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Skills Assessment", desc: "Get your qualifications assessed by the relevant authority (AMC for GPs)" },
              { step: "2", title: "English Test", desc: "Complete IELTS, OET, PTE or TOEFL and achieve required scores" },
              { step: "3", title: "Apply/EOI", desc: "Submit visa application or Expression of Interest for points-based visas" },
              { step: "4", title: "Health & Character", desc: "Complete medical examinations and police clearances" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
              >
                <div className="w-12 h-12 bg-white text-orange-600 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-orange-100">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-[#0c4a6e]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Visa FAQs
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white/5 backdrop-blur-sm border-white/10 rounded-xl px-6">
                <AccordionTrigger className="text-left font-medium hover:no-underline py-4 text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sky-300 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#082f4a] to-[#0c4a6e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Need Help with Your Visa Application?
          </h2>
          <p className="text-xl text-sky-300 mb-8">
            Connect with our trusted migration partners who specialize in medical visas 
            and have helped thousands of GPs relocate to Australia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white border-0"
              onClick={() => window.location.href='/contact/'}
            >
              Get Visa Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/20 text-sky-200 hover:bg-white/10 hover:text-white bg-transparent"
              onClick={() => window.location.href='/calculator/'}
            >
              Calculate Visa Costs
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
