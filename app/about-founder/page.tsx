"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { Timeline } from "./components/timeline"
import { VentureShowcase } from "./components/venture-showcase"

export default function AboutFounderPage() {
  return (
    <div className="min-h-screen bg-gray-50">
     

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-white">
        <Image
          src="/placeholder.svg?height=1080&width=1920&text=Yassin+Bihi:+Founder+and+CEO"
          alt="Yassin Bihi: Founder and CEO"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Yassin Bihi
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Visionary Founder and CEO of Bihi Group
          </motion.p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">A Visionary Leader</h2>
            <p className="text-lg text-gray-700 mb-6">
              Yassin Bihi is the visionary founder and CEO of Bihi Group, bringing over 20 years of expertise in the
              transportation and logistics industry. His career is marked by exceptional leadership, innovation, and a
              passion for creating impactful businesses that drive progress across Africa.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Yassin's journey began at leading companies such as UPS, Exel Logistics, and Fort McKay Logistics, where
              he gained extensive experience in supply chain management and transportation operations. He later joined
              Richmond Freight System Inc. as a manager, where he successfully scaled the company from a fleet of just
              three trucks to an impressive 60-truck operation.
            </p>
            <Button size="lg">Learn More About Yassin's Vision</Button>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=600&width=600&text=Yassin+Bihi+Portrait"
              alt="Yassin Bihi"
              width={600}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Career Timeline Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Career Milestones</h2>
          <Timeline />
        </div>
      </section>

      {/* Innovative Ventures Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Innovative Ventures</h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            In addition to founding Bihi Group, Yassin is the visionary behind several innovative platforms:
          </p>
          <VentureShowcase />
        </div>
      </section>

      {/* Leadership Philosophy Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Leadership Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                Yassin believes in harnessing cutting-edge technology and creative solutions to address Africa's unique
                challenges and opportunities.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                At the core of Yassin's leadership is a commitment to sustainable practices that benefit both
                communities and the environment.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Empowerment</CardTitle>
              </CardHeader>
              <CardContent>
                Yassin is dedicated to creating opportunities that empower individuals and communities across Africa to
                thrive and prosper.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 md:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Yassin's Vision for Africa</h2>
          <p className="text-xl mb-8">
            Be part of the journey to transform Africa into a hub of innovation, sustainability, and economic
            empowerment.
          </p>
          <Button size="lg" variant="secondary">
            Explore Opportunities with Bihi Group
          </Button>
        </div>
      </section>
    </div>
  )
}

