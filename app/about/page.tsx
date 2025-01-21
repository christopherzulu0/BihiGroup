'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-20">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Bihi Group
        </motion.h1>
        <motion.p 
          className="text-xl text-muted-foreground max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Africa's newest and fastest-growing conglomerate, dedicated to driving
          economic transformation across the continent.
        </motion.p>
      </section>

      {/* Vision & Mission */}
      <section className="grid md:grid-cols-2 gap-12">
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold">Our Vision</h2>
          <p className="text-lg text-muted-foreground">
            To lead Africa's transformation into a hub of innovation, sustainability, and economic
            empowerment by investing in industries that create lasting impact.
          </p>
        </motion.div>
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="text-lg text-muted-foreground">
            To unlock Africa's potential by investing in forward-thinking industries and
            creating opportunities that build a brighter future for generations to come.
          </p>
        </motion.div>
      </section>

      {/* Founder Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold">About the Founder and CEO</h2>
          <h3 className="text-2xl font-semibold">Yassin Bihi</h3>
          <p className="text-lg text-muted-foreground">
            Yassin Bihi is the visionary founder and CEO of Bihi Group, bringing over 20 years of
            expertise in the transportation and logistics industry. His career is marked by exceptional
            leadership, innovation, and a passion for creating impactful businesses that drive progress.
          </p>
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Innovative Platforms</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="font-semibold">RoadBarks.com:</span>
                <span className="text-muted-foreground">Load board platform for logistics solutions</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-semibold">GetterHub.com:</span>
                <span className="text-muted-foreground">Business and freelancer productivity platform</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-semibold">OnionTable.com:</span>
                <span className="text-muted-foreground">Africa's multilingual storytelling platform</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-semibold">GetterHost.com:</span>
                <span className="text-muted-foreground">Web hosting platform</span>
              </li>
            </ul>
          </div>
        </motion.div>
        <motion.div 
          className="relative h-[600px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/founder.jpg"
            alt="Yassin Bihi"
            fill
            className="object-cover rounded-lg"
          />
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-8 py-12">
        <h2 className="text-3xl font-bold">Join Our Vision</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Partner with us to build the future of Africa. Discover how Bihi Group is transforming
          industries and creating lasting impact.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/ventures">Explore Our Ventures</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

