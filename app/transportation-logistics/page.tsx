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
import { LogisticsNetwork } from "./components/logistics-network"
import { TestimonialCarousel } from "./components/testimonial-carousel"

export default function TransportationLogisticsPage() {
  const [email, setEmail] = useState("")
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true })

  const stats = [
    { label: "Cargo Handled", value: 10000000, unit: "tons annually" },
    { label: "Fleet Size", value: 5000, unit: "vehicles" },
    { label: "Cities Served", value: 100, unit: "across Africa" },
    { label: "On-Time Delivery", value: 98, unit: "%" },
  ]

  const services = [
    {
      name: "Freight and Cargo Logistics",
      description: "Efficient and reliable transportation of goods across land, sea, and air.",
    },
    {
      name: "Public Transport Systems",
      description: "Modern and sustainable public transportation solutions for urban and rural areas.",
    },
    { name: "Vehicle Leasing and Rental", description: "Flexible vehicle solutions for businesses and individuals." },
    {
      name: "Supply Chain Optimization",
      description: "Advanced analytics and technology to streamline supply chains and reduce costs.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Navigation /> */}

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-white">
        <Image
          src="/placeholder.svg?height=1080&width=1920&text=Transportation+and+Logistics"
          alt="Transportation and Logistics Showcase"
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
            Connecting Africa
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Seamless movement of goods and people, driving connectivity and trade across the continent.
          </motion.p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Logistics Impact</h2>
        <p className="text-lg mb-12 text-gray-700 text-center">
          At Bihi Group, we're revolutionizing transportation and logistics across Africa, connecting businesses,
          communities, and individuals through innovative and efficient solutions.
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
          <Tabs defaultValue="freight-and-cargo-logistics" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              {services.map((service) => (
                <TabsTrigger key={service.name} value={service.name.toLowerCase().replace(/\s+/g, "-")}>
                  {service.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {services.map((service) => (
              <TabsContent key={service.name} value={service.name.toLowerCase().replace(/\s+/g, "-")}>
                <ServiceShowcase name={service.name} description={service.description} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Logistics Network Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Logistics Network</h2>
          <p className="text-lg mb-12 text-gray-700 text-center">
            Our extensive network connects major cities, ports, and trade hubs across Africa, enabling efficient and
            reliable transportation of goods and people.
          </p>
          <LogisticsNetwork />
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Driving Innovation</h2>
          <p className="text-lg mb-12 text-gray-700 text-center">
            We're leveraging cutting-edge technology to revolutionize transportation and logistics in Africa.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>AI-Powered Route Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                Utilizing artificial intelligence to optimize routes, reduce fuel consumption, and improve delivery
                times.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Blockchain for Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                Implementing blockchain technology to enhance supply chain transparency and traceability.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>IoT Fleet Management</CardTitle>
              </CardHeader>
              <CardContent>
                Employing Internet of Things (IoT) devices for real-time tracking and predictive maintenance of our
                fleet.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 px-4 md:px-8 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Commitment to Sustainability</h2>
          <p className="text-lg mb-12 text-gray-700 text-center">
            We're dedicated to reducing our environmental impact and promoting sustainable transportation solutions.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Electric Vehicle Fleet</CardTitle>
              </CardHeader>
              <CardContent>
                Transitioning to electric vehicles to reduce emissions and promote clean energy in transportation.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Eco-Friendly Packaging</CardTitle>
              </CardHeader>
              <CardContent>
                Using sustainable packaging materials to minimize waste and environmental impact in our logistics
                operations.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Green Warehousing</CardTitle>
              </CardHeader>
              <CardContent>
                Implementing energy-efficient technologies and practices in our warehouses and distribution centers.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Our Clients Say</h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 md:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner with Us in Connecting Africa</h2>
          <p className="text-xl mb-8">
            Stay informed about our latest logistics solutions, service updates, and industry insights. Sign up for our
            newsletter today!
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

