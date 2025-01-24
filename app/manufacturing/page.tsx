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
import { ProductShowcase } from "./components/product-showcase"
import { ProcessFlow } from "./components/process-flow"
import { ContactForm } from "./components/contact-form"

export default function ManufacturingPage() {
  const [email, setEmail] = useState("")
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true })

  const stats = [
    { label: "Production Capacity", value: 1000000, unit: "tons/year" },
    { label: "Facilities", value: 15, unit: "across Africa" },
    { label: "Employees", value: 5000, unit: "skilled workers" },
    { label: "R&D Investment", value: 50, unit: "million USD/year" },
  ]

  const products = [
    {
      name: "Roofing Systems",
      image: "https://www.stahlroofing.ca/wp-content/uploads/2024/09/The-Role-Of-Residential-Metal-Roofing-In-Modern-Architectural-Designs.jpg.webp",
      description: "Durable and weather-resistant roofing solutions for various climates.",
      features: [
        "UV-resistant materials",
        "Thermal insulation",
        "Storm-proof design",
        "Easy installation system"
      ]
    },
    {
      name: "Cement",
      image: "https://static.theprint.in/wp-content/uploads/2023/11/cement.jpg",
      description: "High-quality cement for construction and infrastructure projects.",
      features: [
        "High early strength",
        "Superior durability",
        "Environmental compliance",
        "Multiple grade options"
      ]
    },
    {
      name: "Organic Fertilizers",
      image: "https://www.afdb.org/sites/default/files/styles/1700x900/public/csm_banner-affm_9fea638c56.jpg?itok=t6W0MzjQ",
      description: "Eco-friendly fertilizers to enhance soil fertility and crop yields.",
      features: [
        "100% organic materials",
        "Slow-release nutrients",
        "Soil enrichment",
        "Sustainable production"
      ]
    },
    {
      name: "Packaging Solutions",
      image: "https://hivelife.com/wp-content/uploads/2022/08/Hive-Life-Sustainabl.-Promoting-Circular-Economy--1024x427.jpg",
      description: "Innovative and sustainable packaging for diverse industries.",
      features: [
        "Biodegradable options",
        "Custom designs",
        "Food-grade materials",
        "Recycling programs"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Navigation /> */}

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-white">
        <Image
          src="https://www.market-prospects.com/storage/images/dbb2b53340cd2d814b9ebf6e8cb0c823.jpg"
          alt="Manufacturing Facility"
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
            Manufacturing Excellence
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Driving industrialization by producing essential materials for infrastructure and agriculture.
          </motion.p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Manufacturing Impact</h2>
        <p className="text-lg mb-12 text-gray-700 text-center">
          Our subsidiaries are at the forefront of Africa's industrial revolution, producing high-quality materials that
          form the backbone of infrastructure development and agricultural progress.
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

      {/* Products Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Product Range</h2>
          <Tabs defaultValue={products[0].name.toLowerCase().replace(" ", "-")} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              {products.map((product) => (
                <TabsTrigger 
                  key={product.name} 
                  value={product.name.toLowerCase().replace(" ", "-")}
                >
                  {product.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {products.map((product) => (
              <TabsContent 
                key={product.name} 
                value={product.name.toLowerCase().replace(" ", "-")}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="relative h-[300px] w-full">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-lg text-muted-foreground mb-4">
                        {product.description}
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        {product.features.map((feature, index) => (
                          <Card key={index} className="bg-muted/50">
                            <CardContent className="p-4">
                              <p className="text-sm">{feature}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Manufacturing Process Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Manufacturing Process</h2>
          <ProcessFlow />
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 px-4 md:px-8 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Commitment to Sustainability</h2>
          <p className="text-lg mb-12 text-gray-700 text-center">
            We are dedicated to sustainable manufacturing practices that minimize environmental impact and promote
            resource efficiency.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Renewable Energy</CardTitle>
              </CardHeader>
              <CardContent>
                Our facilities are increasingly powered by renewable energy sources, reducing our carbon footprint.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Waste Reduction</CardTitle>
              </CardHeader>
              <CardContent>
                We implement advanced recycling and waste management systems to minimize industrial waste.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Water Conservation</CardTitle>
              </CardHeader>
              <CardContent>
                Our water treatment and recycling initiatives ensure responsible use of this precious resource.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Get in Touch</h2>
          <p className="text-lg mb-12 text-gray-700 text-center">
            Interested in our products or want to learn more about our manufacturing capabilities? Contact us today.
          </p>
          <ContactForm />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 md:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Industrial Revolution</h2>
          <p className="text-xl mb-8">
            Be part of our mission to drive Africa's industrialization. Stay updated with our latest innovations and
            opportunities.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <Button size="lg" variant="secondary">
              Explore Careers
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

