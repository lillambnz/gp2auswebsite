"use client"

import { MapPin, Mail, Phone, Linkedin, Twitter, Facebook, Instagram } from "lucide-react"

const footerLinks = {
  forGPs: [
    { name: "Find a Job", href: "/jobs" },
    { name: "Registration Guide", href: "/registration" },
    { name: "Visa Information", href: "/visas" },
    { name: "Location Guide", href: "/locations" },
    { name: "Relocation Costs", href: "/calculator" },
  ],
  forPractices: [
    { name: "Post a Vacancy", href: "/partnerships" },
    { name: "How It Works", href: "/partnerships#how" },
    { name: "Recruitment Packages", href: "/partnerships#pricing" },
    { name: "Contact Sales", href: "/contact" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
}

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-[#082f4a] text-sky-300 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">GP</span>
              </div>
              <span className="text-xl font-bold text-white">GP2Aus</span>
            </a>
            <p className="text-sky-400 mb-6 max-w-sm">
              The UK to Australia GP recruitment specialists. We connect UK-trained GPs with leading Australian practices and manage every step of the journey.
            </p>
            <div className="space-y-3">
              <a href="mailto:hello@gp2aus.com" className="flex items-center gap-3 text-sm hover:text-amber-400 transition-colors">
                <Mail className="w-4 h-4" />
                hello@gp2aus.com
              </a>
              <a href="tel:+611800000000" className="flex items-center gap-3 text-sm hover:text-amber-400 transition-colors">
                <Phone className="w-4 h-4" />
                1800 GP2AUS
              </a>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4" />
                Melbourne, Australia
              </div>
            </div>
          </div>

          {/* For GPs */}
          <div>
            <h3 className="text-white font-semibold mb-4">For GPs</h3>
            <ul className="space-y-3">
              {footerLinks.forGPs.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm hover:text-amber-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Practices */}
          <div>
            <h3 className="text-white font-semibold mb-4">For Practices</h3>
            <ul className="space-y-3">
              {footerLinks.forPractices.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm hover:text-amber-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-white/10">
                <h3 className="text-white font-semibold mb-3">Company</h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-sm hover:text-amber-400 transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm hover:text-amber-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-sky-500">
            © {new Date().getFullYear()} GP2Aus. All rights reserved. UK to Australia GP Recruitment Specialists.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-amber-500/20 transition-colors group"
                aria-label={social.name}
              >
                <social.icon className="w-4 h-4 text-sky-400 group-hover:text-amber-400 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
