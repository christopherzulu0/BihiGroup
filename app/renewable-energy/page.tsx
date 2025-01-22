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
import { SolutionShowcase } from "./components/solution-showcase"
import { ImpactMap } from "./components/impact-map"
import { TestimonialCarousel } from "./components/testimonial-carousel"

export default function RenewableEnergyPage() {
  const [email, setEmail] = useState("")
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true })

  const stats = [
    { label: "Clean Energy Generated", value: 500, unit: "MW" },
    { label: "CO2 Emissions Reduced", value: 1000000, unit: "tons annually" },
    { label: "Communities Served", value: 500, unit: "across Africa" },
    { label: "Water Purified", value: 100000000, unit: "liters daily" },
  ]

  const solutions = [
    {
      name: "Solar Energy",
      description:
        "Harnessing the power of the sun to provide clean, renewable electricity to communities across Africa.",
    },
    {
      name: "Wind Energy",
      description: "Utilizing wind power to generate sustainable energy and reduce reliance on fossil fuels.",
    },
    {
      name: "Waste-to-Energy",
      description:
        "Innovative solutions that convert waste into valuable energy, addressing both waste management and energy needs.",
    },
    {
      name: "Water Purification",
      description: "Cutting-edge technologies to provide clean, safe drinking water to underserved communities.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-white">
        <Image
          src="/placeholder.svg?height=1080&width=1920&text=Renewable+Energy+and+Environmental+Solutions"
          alt="Renewable Energy and Environmental Solutions Showcase"
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
            Powering a Sustainable Future
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Innovative clean energy and eco-friendly solutions for a greener Africa.
          </motion.p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Environmental Impact</h2>
        <p className="text-lg mb-12 text-gray-700 text-center">
          At Bihi Group, we're committed to sustainable development through investments in clean energy and eco-friendly
          technologies, driving Africa towards a greener future.
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

      {/* Solutions Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Solutions</h2>
          <Tabs defaultValue="solar-energy" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              {solutions.map((solution) => (
                <TabsTrigger key={solution.name} value={solution.name.toLowerCase().replace(/\s+/g, "-")}>
                  {solution.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {solutions.map((solution) => (
              <TabsContent key={solution.name} value={solution.name.toLowerCase().replace(/\s+/g, "-")}>
                <SolutionShowcase name={solution.name} description={solution.description} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Impact Map Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Impact Across Africa</h2>
          <p className="text-lg mb-12 text-gray-700 text-center">
            Explore how our renewable energy and environmental solutions are transforming communities across the
            continent.
          </p>
          <ImpactMap />
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Driving Innovation</h2>
          <p className="text-lg mb-12 text-gray-700 text-center">
            We're at the forefront of developing and implementing cutting-edge technologies for a sustainable future.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Smart Grid Technology</CardTitle>
              </CardHeader>
              <CardContent>
                Implementing advanced smart grid systems to optimize energy distribution and reduce waste.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Energy Storage Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                Developing innovative energy storage technologies to ensure consistent power supply from renewable
                sources.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>AI-Powered Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                Utilizing artificial intelligence to maximize the efficiency of our renewable energy and water
                purification systems.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4 md:px-8 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Voices of Change</h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 md:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Us in Building a Sustainable Africa</h2>
          <p className="text-xl mb-8">
            Stay informed about our latest projects, innovations, and environmental initiatives. Sign up for our
            newsletter today!
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <Button size="lg" variant="secondary">
              Explore Our Projects
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

