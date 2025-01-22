"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { useInView } from "react-intersection-observer"

import { ProjectShowcase } from "./components/project-showcase"
import { ProjectTimeline } from "./components/project-timeline"
import { TestimonialCarousel } from "./components/testimonial-carousel"

export default function ConstructionInfrastructurePage() {
  const [email, setEmail] = useState("")
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true })

  const stats = [
    { label: "Projects Completed", value: 500, unit: "major projects" },
    { label: "Kilometers of Roads", value: 10000, unit: "km built" },
    { label: "Affordable Homes", value: 50000, unit: "units constructed" },
    { label: "Jobs Created", value: 100000, unit: "employment opportunities" },
  ]

  const projects = [
    {
      name: "Roads and Bridges",
      description:
        "Connecting communities and driving economic growth through state-of-the-art transportation infrastructure.",
    },
    {
      name: "Affordable Housing",
      description:
        "Creating quality, accessible housing solutions to meet the needs of Africa's growing urban population.",
    },
    {
      name: "Industrial Parks",
      description: "Developing modern industrial complexes to attract investment and foster economic diversification.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-white">
        <Image
          src="/placeholder.svg?height=1080&width=1920&text=Construction+and+Infrastructure"
          alt="Construction and Infrastructure Showcase"
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
            Delivering transformative infrastructure projects that foster urbanization and economic progress.
          </motion.p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Infrastructure Impact</h2>
        <p className="text-lg mb-12 text-gray-700 text-center">
          At Bihi Group, we're reshaping Africa's landscape through innovative construction and infrastructure projects
          that drive sustainable development and improve quality of life.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Projects</h2>
          <Tabs defaultValue="roads-and-bridges" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {projects.map((project) => (
                <TabsTrigger key={project.name} value={project.name.toLowerCase().replace(" ", "-")}>
                  {project.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {projects.map((project) => (
              <TabsContent key={project.name} value={project.name.toLowerCase().replace(" ", "-")}>
                <ProjectShowcase name={project.name} description={project.description} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 px-4 md:px-8 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Sustainable Infrastructure</h2>
          <p className="text-lg mb-12 text-gray-700 text-center">
            Our commitment to sustainability is at the core of every project we undertake.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Green Building Practices</CardTitle>
              </CardHeader>
              <CardContent>
                We incorporate energy-efficient designs and sustainable materials in all our construction projects.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Environmental Protection</CardTitle>
              </CardHeader>
              <CardContent>
                Our infrastructure projects are designed to minimize environmental impact and preserve natural habitats.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Community Development</CardTitle>
              </CardHeader>
              <CardContent>
                We prioritize local community needs and create job opportunities in all our projects.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Timeline Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Project Lifecycle</h2>
          <ProjectTimeline />
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner with Us in Building Africa's Future</h2>
          <p className="text-xl mb-8">
            Stay informed about our latest projects, investment opportunities, and infrastructure insights. Sign up for
            our newsletter today!
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

