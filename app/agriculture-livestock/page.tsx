"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { useInView } from "react-intersection-observer"
import { Navigation } from "./components/navigation"
import { StatCard } from "./components/stat-card"
import { TestimonialCarousel } from "./components/testimonial-carousel"

export default function AgricultureLivestockPage() {
  const [email, setEmail] = useState("")
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true })

  const stats = [
    { label: "Hectares Cultivated", value: 50000 },
    { label: "Farmers Supported", value: 10000 },
    { label: "Livestock Managed", value: 100000 },
    { label: "Annual Yield (tons)", value: 500000 },
  ]

  const crops = ["Olive", "Sesame", "Wheat", "Corn", "Cotton"]
  const livestock = ["Goats", "Cattle", "Ostriches", "Poultry", "Aquaculture"]

  const faqs = [
    {
      question: "What sustainable practices do you employ?",
      answer:
        "We use crop rotation, integrated pest management, and water-efficient irrigation systems to minimize environmental impact and maximize resource efficiency.",
    },
    {
      question: "How do you support local farmers?",
      answer:
        "We provide training programs, access to modern farming technologies, and fair market prices for their produce. We also offer microfinancing options to help farmers invest in their operations.",
    },
    {
      question: "What technologies do you use in livestock management?",
      answer:
        "We utilize IoT devices for health monitoring, AI for predictive health analysis, and blockchain for supply chain transparency.",
    },
    {
      question: "How do you ensure food safety and quality?",
      answer:
        "We adhere to strict quality control measures, implement HACCP protocols, and conduct regular third-party audits to ensure the highest standards of food safety and quality.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Navigation /> */}

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-white">
        <Image
          src="https://media.licdn.com/dms/image/v2/D4D22AQHBrEPbHeH1ug/feedshare-shrink_800/feedshare-shrink_800/0/1720707689372?e=2147483647&v=beta&t=VT2DLhchcOh_nmiQVrGr9wDWiK_FB1V3tjIbz2FMNks"
          alt="Agriculture and Livestock Hero"
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
            Agriculture and Livestock
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Revolutionizing agriculture and livestock management to meet Africa's growing needs.
          </motion.p>
        </div>
      </section>

      {/* Statistics Section */}
      <section ref={statsRef} className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} label={stat.label} value={stat.value} inView={statsInView} />
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Revolutionary Approach</h2>
        <p className="text-lg mb-8 text-gray-700">
          At the forefront of agricultural innovation, we're implementing cutting-edge technologies and sustainable
          practices to transform Africa's agriculture and livestock sectors. Our approach combines traditional wisdom
          with modern science to increase productivity, ensure food security, and promote environmental stewardship.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Sustainable Practices</CardTitle>
            </CardHeader>
            <CardContent>
              Implementing eco-friendly farming techniques to preserve soil health and biodiversity.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Technology Integration</CardTitle>
            </CardHeader>
            <CardContent>
              Utilizing IoT, AI, and data analytics to optimize crop yields and livestock management.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Community Empowerment</CardTitle>
            </CardHeader>
            <CardContent>
              Training local farmers and providing resources to build a resilient agricultural ecosystem.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Crops and Livestock Section */}
      <section className="py-16 px-4 md:px-8 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Crops and Livestock</h2>
          <Tabs defaultValue="crops" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="crops">Crops</TabsTrigger>
              <TabsTrigger value="livestock">Livestock</TabsTrigger>
            </TabsList>
            <TabsContent value="crops">
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                {crops.map((crop) => (
                  <Card key={crop}>
                    <CardHeader>
                      <CardTitle>{crop}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src={`/placeholder.svg?height=200&width=300&text=${crop}`}
                        alt={crop}
                        width={300}
                        height={200}
                        className="rounded-md mb-4"
                      />
                      <CardDescription>
                        Our {crop.toLowerCase()} cultivation employs advanced techniques to maximize yield and quality,
                        contributing to Africa's agricultural self-sufficiency.
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="livestock">
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                {livestock.map((animal) => (
                  <Card key={animal}>
                    <CardHeader>
                      <CardTitle>{animal}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src={`/placeholder.svg?height=200&width=300&text=${animal}`}
                        alt={animal}
                        width={300}
                        height={200}
                        className="rounded-md mb-4"
                      />
                      <CardDescription>
                        Our {animal.toLowerCase()} management focuses on ethical practices, optimal nutrition, and
                        advanced veterinary care to ensure healthy and productive livestock.
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">What Our Partners Say</h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 md:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Agricultural Revolution</h2>
          <p className="text-xl mb-8">
            Be part of our mission to transform Africa's agriculture and livestock sectors. Whether you're a farmer,
            investor, or technology partner, there's a place for you in our ecosystem.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <Button size="lg" variant="secondary">
              Get Involved
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

