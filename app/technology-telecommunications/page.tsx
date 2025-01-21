"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { useInView } from "react-intersection-observer"
import { Navigation } from "../components/navigation"
import { ServiceShowcase } from "./components/service-showcase"
import { CoverageMap } from "./components/coverage-map"
import { TestimonialCarousel } from "./components/testimonial-carousel"

export default function TechnologyTelecommunicationsPage() {
  const [email, setEmail] = useState("")
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true })

  const stats = [
    { label: "Internet Users Served", value: 5000000, unit: "users" },
    { label: "Network Coverage", value: 80, unit: "% of population" },
    { label: "IT Projects Completed", value: 1000, unit: "projects" },
    { label: "E-commerce Transactions", value: 10000000, unit: "annually" },
  ]

  const services = [
    {
      name: "IT Services",
      description: "Comprehensive IT solutions tailored for businesses of all sizes, from startups to enterprises.",
    },
    {
      name: "Telecommunications",
      description: "Reliable and high-speed internet and mobile services connecting communities across Africa.",
    },
    {
      name: "E-commerce Platforms",
      description: "Innovative online marketplaces empowering businesses and consumers in the digital economy.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-white">
        <Image
          src="/placeholder.svg?height=1080&width=1920&text=Technology+and+Telecommunications"
          alt="Technology and Telecommunications Showcase"
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
            Bridging the Digital Divide
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Innovative tech solutions and reliable internet services for a connected Africa.
          </motion.p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Digital Impact</h2>
        <p className="text-lg mb-12 text-gray-700 text-center">
          At Bihi Group, we're revolutionizing Africa's digital landscape by providing cutting-edge technology solutions
          and expanding telecommunications infrastructure to connect the unconnected.
        </p>
        <div ref={statsRef} className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">{stat.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-center text-primary">
                    {statsInView ? stat.value.toLocaleString() : "0"}
                  </p>
                  <p className="text-center text-gray-600">{stat.unit}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Services</h2>
          <Tabs defaultValue="it-services" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {services.map((service) => (
                <TabsTrigger key={service.name} value={service.name.toLowerCase().replace(" ", "-")}>
                  {service.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {services.map((service) => (
              <TabsContent key={service.name} value={service.name.toLowerCase().replace(" ", "-")}>
                <ServiceShowcase name={service.name} description={service.description} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Network Coverage</h2>
          <p className="text-lg mb-12 text-gray-700 text-center">
            We're expanding our reach to bring reliable connectivity to every corner of Africa.
          </p>
          <CoverageMap />
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Driving Innovation</h2>
          <p className="text-lg mb-12 text-gray-700 text-center">
            Our commitment to innovation is shaping the future of technology in Africa.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>5G Network Rollout</CardTitle>
              </CardHeader>
              <CardContent>
                We're at the forefront of 5G technology deployment, bringing ultra-fast connectivity to major African
                cities.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>AI-Powered Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                Leveraging artificial intelligence to enhance customer experiences and optimize business operations.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Blockchain Integration</CardTitle>
              </CardHeader>
              <CardContent>
                Exploring blockchain technology to improve security and transparency in digital transactions.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Our Clients Say</h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 md:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Digital Revolution</h2>
          <p className="text-xl mb-8">
            Stay informed about our latest tech innovations, service updates, and digital transformation insights. Sign
            up for our newsletter today!
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <Button size="lg" variant="secondary">
              Explore Our Services
            </Button>
            <div className="flex">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-r-none bg-white text-primary"
              />
              <Button type="submit" className="rounded-l-none">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

