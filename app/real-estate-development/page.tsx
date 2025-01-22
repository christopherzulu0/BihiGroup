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
import { ProjectShowcase } from "./components/project-showcase"
import { InvestmentCalculator } from "./components/investment-calculator"
import { TestimonialCarousel } from "./components/testimonial-carousel"

export default function RealEstateDevelopmentPage() {
  const [email, setEmail] = useState("")
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true })

  const stats = [
    { label: "Projects Completed", value: 50, unit: "developments" },
    { label: "Square Meters Developed", value: 1000000, unit: "m²" },
    { label: "Cities Present", value: 15, unit: "major African cities" },
    { label: "Investment Value", value: 500, unit: "million USD" },
  ]

  const projects = [
    {
      name: "Residential",
      description: "Modern, sustainable housing solutions for Africa's growing urban population.",
    },
    { name: "Commercial", description: "State-of-the-art office spaces and retail centers driving economic growth." },
    { name: "Industrial", description: "Efficient, strategically-located industrial parks and warehouses." },
    { name: "Mixed-Use", description: "Integrated developments combining living, working, and leisure spaces." },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Navigation /> */}

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-white">
        <Image
          src="/placeholder.svg?height=1080&width=1920&text=Real+Estate+Development"
          alt="Real Estate Development Showcase"
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
            Building Africa's Future
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Innovative real estate projects meeting the continent's growing demand for residential, commercial, and
            industrial spaces.
          </motion.p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Real Estate Impact</h2>
        <p className="text-lg mb-12 text-gray-700 text-center">
          At Bihi Group, we're transforming Africa's urban landscape with innovative, sustainable, and high-quality real
          estate developments that cater to the diverse needs of the continent's rapidly growing population and economy.
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

      {/* Projects Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Project Portfolio</h2>
          <Tabs defaultValue="residential" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              {projects.map((project) => (
                <TabsTrigger key={project.name} value={project.name.toLowerCase()}>
                  {project.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {projects.map((project) => (
              <TabsContent key={project.name} value={project.name.toLowerCase()}>
                <ProjectShowcase name={project.name} description={project.description} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 px-4 md:px-8 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Sustainable Development</h2>
          <p className="text-lg mb-12 text-gray-700 text-center">
            Our commitment to sustainability is at the core of every project we undertake.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Green Building Practices</CardTitle>
              </CardHeader>
              <CardContent>
                We incorporate energy-efficient designs, renewable energy systems, and sustainable materials in all our
                developments.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Smart City Integration</CardTitle>
              </CardHeader>
              <CardContent>
                Our projects leverage IoT and smart technologies to optimize resource usage and enhance quality of life.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Community-Centric Approach</CardTitle>
              </CardHeader>
              <CardContent>
                We prioritize community needs, creating spaces that foster social interaction and economic
                opportunities.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Opportunity Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Investment Opportunities</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Why Invest with Us?</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Strong track record of successful projects</li>
                <li>Diverse portfolio across multiple African markets</li>
                <li>Commitment to sustainable and innovative development</li>
                <li>Experienced team with deep local market knowledge</li>
                <li>Attractive returns and long-term growth potential</li>
              </ul>
              <Button size="lg">Explore Investment Options</Button>
            </div>
            <InvestmentCalculator />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Our Stakeholders Say</h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 md:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Us in Shaping Africa's Future</h2>
          <p className="text-xl mb-8">
            Stay informed about our latest projects, investment opportunities, and real estate insights. Sign up for our
            newsletter today!
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <Button size="lg" variant="secondary">
              View Current Projects
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

