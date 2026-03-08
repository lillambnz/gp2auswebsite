"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Mail, Phone, Linkedin, Twitter, Facebook, Instagram } from "lucide-react"

const footerLinks = {
  resources: [
    { name: "Registration Guide", href: "/registration" },
    { name: "Visa Pathways", href: "/visas" },
    { name: "Cost Calculator", href: "/calculator" },
    { name: "Documents Checklist", href: "/checklist" },
    { name: "Location Explorer", href: "/locations" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "GP Jobs", href: "/jobs" },
    { name: "Resources", href: "/resources" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
    { name: "Partnerships", href: "/partnerships" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
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
            <a href="/" className="flex items-center mb-6">
              <Image
                src="/gp2auslogo_transparent.png"
                alt="GP2Aus"
                width={180}
                height={60}
                className="h-14 w-auto object-contain"
              />
            </a>
            <p className="text-sky-400 mb-6 max-w-sm">
              The complete guide for international GPs moving to Australia. 
              Registration, jobs, relocation — everything you need under the Australian sun.
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

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm hover:text-amber-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm hover:text-amber-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
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
            © {new Date().getFullYear()} GP2Aus. All rights reserved.
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
