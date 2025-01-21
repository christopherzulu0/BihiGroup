'use client'

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Building2,
  Wheat,
  Factory,
  Coffee,
  Home,
  Laptop,
  Truck,
  Sun,
  Gem,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const sectors = [
  {
    title: "Agriculture & Livestock",
    icon: Wheat,
    description: "Revolutionizing agriculture and livestock management to meet Africa's growing needs.",
    href: "/agriculture-livestock",
    items: [
      "Crops: Olive, sesame, wheat, corn, and cotton",
      "Livestock: Goats, cattle, ostriches, poultry, and aquaculture"
    ]
  },
  {
    title: "Manufacturing",
    icon: Factory,
    description: "Driving industrialization by producing essential materials.",
    href: "/manufacturing",
    items: [
      "Roofing systems",
      "Cement",
      "Organic fertilizers",
      "Packaging solutions"
    ]
  },
  {
    title: "Food & Beverage",
    icon: Coffee,
    description: "Delivering high-quality food and beverage products.",
    href: "/food-beverage",
    items: [
      "Soft drinks",
      "Cooking oils",
      "Wheat flour",
      "Corn flour",
      "Ready-to-eat products"
    ]
  },
  {
    title: "Real Estate",
    icon: Home,
    description: "Meeting Africa's increasing demand for residential, commercial, and industrial spaces.",
    href: "/real-estate"
  },
  {
    title: "Technology",
    icon: Laptop,
    description: "Bridging the digital divide with innovative tech solutions.",
    href: "/technology",
    items: [
      "IT services",
      "Telecommunications",
      "E-commerce platforms"
    ]
  },
  {
    title: "Mining",
    icon: Gem,
    description: "Unlocking Africa's natural wealth through sustainable mining.",
    href: "/mining",
    items: [
      "Gold mining",
      "Gemstone exploration and processing"
    ]
  },
  {
    title: "Transportation",
    icon: Truck,
    description: "Ensuring seamless movement of goods and people.",
    href: "/transportation",
    items: [
      "Freight and cargo logistics",
      "Public transport systems",
      "Vehicle leasing and rental services",
      "Supply chain optimization"
    ]
  },
  {
    title: "Renewable Energy",
    icon: Sun,
    description: "Committed to sustainable development through clean energy.",
    href: "/renewable-energy",
    items: [
      "Solar and wind energy",
      "Waste-to-energy initiatives",
      "Water purification solutions"
    ]
  }
]

export default function WhatWeDoPage() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What We Do
        </motion.h1>
        <motion.p 
          className="text-xl text-muted-foreground max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At Bihi Group, we provide strategic leadership and oversight to a diverse portfolio of
          subsidiaries, operating across multiple sectors.
        </motion.p>
      </section>

      {/* Sectors Grid */}
      <motion.div 
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {sectors.map((sector, index) => (
          <Link href={sector.href} key={index}>
            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <sector.icon className="h-8 w-8 text-primary" />
                  <CardTitle>{sector.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{sector.description}</p>
                {sector.items && (
                  <ul className="list-disc list-inside space-y-2">
                    {sector.items.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground">{item}</li>
                    ))}
                  </ul>
                )}
                <div className="pt-4 flex items-center text-primary font-medium">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.section 
        className="text-center py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold">Ready to Collaborate?</h2>
          <p className="text-lg text-muted-foreground">
            Join us in our mission to transform Africa through innovative and sustainable solutions.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </motion.section>
    </div>
  )
} 