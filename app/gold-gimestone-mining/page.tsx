"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { useInView } from "react-intersection-observer"
import { MiningOperations } from "./components/mining-operations"
import { SustainabilityPractices } from "./components/sustainability-practices"
import { TestimonialCarousel } from "./components/testimonial-carousel"

export default function GoldGemstoneMiningPage() {
  const [email, setEmail] = useState("")
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true })

  const stats = [
    { label: "Gold Produced", value: 50000, unit: "ounces annually" },
    { label: "Gemstones Processed", value: 1000000, unit: "carats annually" },
    { label: "Local Jobs Created", value: 5000, unit: "employees" },
    { label: "Community Investment", value: 10, unit: "million USD annually" },
  ]

  const operations = [
    {
      name: "Gold Mining",
      description: "State-of-the-art gold mining operations using sustainable and efficient extraction methods.",
    },
    {
      name: "Gemstone Exploration",
      description: "Cutting-edge exploration techniques to discover and ethically source precious gemstones.",
    },
    {
      name: "Mineral Processing",
      description: "Advanced processing facilities ensuring the highest quality output of gold and gemstones.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-white">
        <Image
          src="/placeholder.svg?height=1080&width=1920&text=Gold+and+Gemstone+Mining"
          alt="Gold and Gemstone Mining Showcase"
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
            Unlocking Africa's Natural Wealth
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Sustainable mining operations for gold and gemstones, driving economic growth and resource optimization.
          </motion.p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Mining Impact</h2>
        <p className="text-lg mb-12 text-gray-700 text-center">
          At Bihi Group, we're committed to responsible mining practices that benefit local communities and contribute
          to Africa's economic development.
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

      {/* Operations Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Mining Operations</h2>
          <Tabs defaultValue="gold-mining" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {operations.map((operation) => (
                <TabsTrigger key={operation.name} value={operation.name.toLowerCase().replace(/\s+/g, "-")}>
                  {operation.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {operations.map((operation) => (
              <TabsContent key={operation.name} value={operation.name.toLowerCase().replace(/\s+/g, "-")}>
                <MiningOperations name={operation.name} description={operation.description} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Sustainable Mining Practices</h2>
          <p className="text-lg mb-12 text-gray-700 text-center">
            Our commitment to sustainability is at the core of every mining operation we undertake.
          </p>
          <SustainabilityPractices />
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Driving Innovation in Mining</h2>
          <p className="text-lg mb-12 text-gray-700 text-center">
            We're at the forefront of implementing cutting-edge technologies to improve efficiency and reduce
            environmental impact.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>AI-Powered Exploration</CardTitle>
              </CardHeader>
              <CardContent>
                Utilizing artificial intelligence and machine learning to optimize mineral exploration and reduce
                environmental disturbance.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Eco-Friendly Extraction</CardTitle>
              </CardHeader>
              <CardContent>
                Developing and implementing environmentally friendly extraction methods to minimize ecological impact.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Blockchain Traceability</CardTitle>
              </CardHeader>
              <CardContent>
                Implementing blockchain technology to ensure transparency and traceability in our supply chain.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Community Voices</h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 md:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Us in Responsible Resource Development</h2>
          <p className="text-xl mb-8">
            Stay informed about our latest mining projects, sustainability initiatives, and community investments. Sign
            up for our newsletter today!
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <Button size="lg" variant="secondary">
              Explore Our Operations
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

