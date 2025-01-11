"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Linkedin, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const footerLinks = [
  { title: "Quick Links", links: [
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ]},
  { title: "Contact Info", links: [
    { label: "123 Business Street" },
    { label: "New York, NY 10001" },
    { label: "Phone: (555) 123-4567" },
    { label: "Email: info@BihiGroup.com" },
  ]},
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              Leading provider of innovative solutions for businesses worldwide. We help
              organizations transform, grow, and succeed in today's dynamic market.
            </p>
            <form className="mt-4">
              <h4 className="text-white text-sm font-semibold mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white border-gray-700 focus:border-primary"
                />
                <Button type="submit" className="ml-2">Subscribe</Button>
              </div>
            </form>
          </motion.div>
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-white text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.label}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {link.href ? (
                      <Link href={link.href} className="hover:text-white transition-colors">
                        {link.label}
                      </Link>
                    ) : (
                      <span>{link.label}</span>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link href={social.href} className="hover:text-white transition-colors" aria-label={social.label}>
                    <social.icon className="h-6 w-6" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          className="border-t border-gray-800 mt-8 pt-8 text-sm text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p>&copy; {new Date().getFullYear()} BihiGroup. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

