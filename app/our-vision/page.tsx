"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { VisionPillars } from "./components/vision-pillars"
import { ImpactMetrics } from "./components/impact-metrics"

export default function OurVisionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
     

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-white">
        <Image
          src="https://res.cloudinary.com/mkrstudio/image/upload/c_fill,w_400/f_auto,q_auto,dpr_3.0/wvnzcontent/resources/worldvision/media/generalimages/africa.jpg"
          alt="Our Vision"
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
            Our Vision
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Leading Africa's transformation into a hub of innovation, sustainability, and economic empowerment
          </motion.p>
        </div>
      </section>

      {/* Vision Statement Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Vision Statement</h2>
        <Card>
          <CardContent className="p-6">
            <p className="text-xl text-center">
              "To lead Africa's transformation into a hub of innovation, sustainability, and economic empowerment by
              investing in industries that create lasting impact."
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Vision Pillars Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Vision Pillars</h2>
          <VisionPillars />
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Impact</h2>
          <ImpactMetrics />
        </div>
      </section>

      {/* Future Goals Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Future Goals</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Expand Renewable Energy</CardTitle>
              </CardHeader>
              <CardContent>
                Increase our renewable energy capacity to power 50% of Africa's households by 2030.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Enhance Digital Connectivity</CardTitle>
              </CardHeader>
              <CardContent>Provide high-speed internet access to 80% of Africa's population by 2035.</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Sustainable Agriculture</CardTitle>
              </CardHeader>
              <CardContent>
                Implement climate-smart agricultural practices across 10 million hectares by 2040.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 md:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Vision for Africa's Future</h2>
          <p className="text-xl mb-8">
            Be part of our mission to transform Africa into a global leader in innovation, sustainability, and economic
            growth.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <Button size="lg" variant="secondary">
              Explore Our Ventures
            </Button>
            <Button size="lg" variant="secondary">
              Partner With Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

