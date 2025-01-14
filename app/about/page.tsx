'use client'

import { useState } from 'react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { ChevronDown } from 'lucide-react'

export default function AboutPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <div className="container px-4 py-8 sm:py-12 md:py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-16"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">About BihiGroup</h1>
        <p className="text-lg sm:text-xl text-muted-foreground">
          Transforming businesses through innovative technology solutions since 2010
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 sm:mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Our Story</h2>
          <div className="space-y-4 text-base sm:text-lg">
            <p>
              Founded in 2010, BihiGroup has been at the forefront of technological innovation,
              helping businesses across various industries to thrive in the digital age.
              Our journey began with a simple mission: to empower organizations with
              cutting-edge solutions that drive growth and efficiency.
            </p>
            <Button 
              variant="link" 
              onClick={() => toggleSection('story')}
              className="p-0 h-auto font-semibold text-primary"
            >
              Read More <ChevronDown className={`ml-1 transform transition-transform ${expandedSection === 'story' ? 'rotate-180' : ''}`} />
            </Button>
            {expandedSection === 'story' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p>
                  Over the years, we've expanded our expertise to cover a wide range of
                  services, from business consulting and data analytics to security solutions
                  and team development. Our commitment to excellence and customer satisfaction
                  has earned us the trust of over 500 global clients.
                </p>
                <p>
                  Today, BihiGroup stands as a leader in the tech industry, known for our innovative
                  approaches to solving complex business challenges. Our team of experts
                  continues to push the boundaries of what's possible, always staying ahead
                  of the curve in an ever-evolving technological landscape.
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
        <motion.div 
          className="relative mt-8 md:mt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl transform rotate-3"></div>
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="BihiGroup Team"
            width={600}
            height={400}
            className="rounded-3xl relative shadow-lg"
          />
        </motion.div>
      </div>

      <Tabs defaultValue="values" className="mb-12 sm:mb-16 md:mb-24">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="values">Our Values</TabsTrigger>
          <TabsTrigger value="presence">Global Presence</TabsTrigger>
          <TabsTrigger value="leadership">Leadership</TabsTrigger>
        </TabsList>
        <TabsContent value="values">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-lg p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-center">Our Core Values</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {[
                { title: "Innovation", description: "We constantly push the boundaries of what's possible in technology, striving to create solutions that are ahead of their time." },
                { title: "Integrity", description: "We uphold the highest ethical standards in all our business practices, ensuring transparency and trust in every interaction." },
                { title: "Collaboration", description: "We believe in the power of teamwork and partnership, both within our organization and with our clients, to achieve extraordinary results." },
              ].map((value) => (
                <Card key={value.title} className="transition-all hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl md:text-2xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm sm:text-base text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="presence">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">Our Global Presence</h2>
            <div className="relative rounded-lg overflow-hidden mb-6 sm:mb-8">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="BihiGroup Global Offices"
                width={800}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              With offices in over 30 countries, we provide localized expertise with a global perspective.
              Our international network allows us to serve clients across different time zones and cultural contexts,
              ensuring that we deliver solutions that are both globally competitive and locally relevant.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="leadership">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-center">Meet Our Leadership</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { name: "Jane Doe", title: "CEO", image: "/placeholder.svg?height=200&width=200" },
              { name: "John Smith", title: "CTO", image: "/placeholder.svg?height=200&width=200" },
              { name: "Emily Johnson", title: "COO", image: "/placeholder.svg?height=200&width=200" },
            ].map((leader) => (
              <Card key={leader.name} className="text-center transition-all hover:shadow-lg">
                <CardContent className="pt-6">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-lg sm:text-xl font-semibold">{leader.name}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{leader.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Ready to Transform Your Business?</h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8">
          Discover how BihiGroup can help you leverage cutting-edge technology to drive growth,
          increase efficiency, and stay ahead of the competition.
        </p>
        <Button size="lg">
          Schedule a Consultation
        </Button>
      </motion.div>
    </div>
  )
}

