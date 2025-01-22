"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ArrowRight, CheckCircle } from 'lucide-react'

export function FeaturedCaseStudy() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Case Study
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="lg:flex">
              <div className="lg:w-1/2 relative overflow-hidden group">
                <Image
                  src="https://www.worldbank.org/content/dam/photos/780x439/2021/jan/Tanzania.jpg"
                  alt="Case Study: TechCorp Transformation"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="lg:w-1/2 p-8">
                <CardHeader>
                  <div className="flex justify-between items-center mb-4">
                    <Badge variant="secondary" className="text-sm font-medium">Technology</Badge>
                    <span className="text-sm text-muted-foreground">June 2023</span>
                  </div>
                  <CardTitle className="text-3xl mb-3 font-bold">TechCorp Digital Transformation</CardTitle>
                  <CardDescription className="text-lg">How BihiGroup helped a leading tech company revolutionize their operations</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-6 text-muted-foreground">
                    TechCorp faced challenges in scaling their infrastructure to meet growing demand. 
                    BihiGroup implemented a comprehensive cloud migration strategy, resulting in:
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "40% reduction in operational costs",
                      "99.99% uptime achieved",
                      "50% faster time-to-market for new features"
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger asChild>
                      <Button className="w-full sm:w-auto">
                        Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>TechCorp Digital Transformation</DialogTitle>
                        <DialogDescription>
                          Detailed insights into how BihiGroup revolutionized TechCorp's operations through our comprehensive cloud migration strategy.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <p>
                          Our team worked closely with TechCorp to understand their unique challenges and design a tailored solution. The migration process involved:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Comprehensive infrastructure assessment</li>
                          <li>Phased migration approach to minimize disruptions</li>
                          <li>Implementation of auto-scaling and load balancing</li>
                          <li>Enhanced security measures and compliance protocols</li>
                          <li>Continuous monitoring and optimization</li>
                        </ul>
                        <p>
                          The results speak for themselves, with significant improvements in cost-efficiency, reliability, and agility. TechCorp is now well-positioned for future growth and innovation.
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

