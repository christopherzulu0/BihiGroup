"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Building2, LineChart, Shield, Users, Code, Cloud, ArrowRight } from 'lucide-react'

const services = [
  {
    title: "Business Consulting",
    description: "Strategic guidance to optimize your business operations and growth",
    icon: Building2,
    details: "Our business consulting services provide in-depth analysis and expert advice to help you streamline operations, identify growth opportunities, and overcome challenges. We work closely with you to develop tailored strategies that align with your goals and market dynamics.",
  },
  {
    title: "Data Analytics",
    description: "Transform your data into actionable insights",
    icon: LineChart,
    details: "Leverage the power of your data with our advanced analytics services. We use cutting-edge tools and techniques to extract meaningful insights, helping you make data-driven decisions, predict trends, and gain a competitive edge in your industry.",
  },
  {
    title: "Security Solutions",
    description: "Protect your assets with cutting-edge security measures",
    icon: Shield,
    details: "Our comprehensive security solutions safeguard your digital assets, intellectual property, and sensitive information. We offer risk assessments, implement robust security protocols, and provide ongoing monitoring to ensure your business stays protected against evolving cyber threats.",
  },
  {
    title: "Team Development",
    description: "Build and nurture high-performing teams",
    icon: Users,
    details: "Empower your workforce with our team development programs. We offer tailored training, leadership development, and team-building activities designed to enhance skills, improve collaboration, and boost overall productivity in your organization.",
  },
  {
    title: "Custom Software Development",
    description: "Tailored software solutions to meet your unique business needs",
    icon: Code,
    details: "Our expert developers create bespoke software solutions that address your specific business challenges. From web and mobile applications to enterprise systems, we deliver high-quality, scalable, and maintainable software that drives efficiency and innovation in your operations.",
  },
  {
    title: "Cloud Services",
    description: "Scalable and flexible cloud solutions for your business",
    icon: Cloud,
    details: "Harness the power of cloud computing with our comprehensive cloud services. We assist in cloud migration, optimization, and management, ensuring your business benefits from increased flexibility, scalability, and cost-efficiency while maintaining robust security and performance.",
  },
]

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null)

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We offer comprehensive solutions tailored to meet your business needs and drive success
        </p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="transition-all shadow-md hover:shadow-xl group cursor-pointer h-full flex flex-col justify-between">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <service.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between space-y-4">
                <CardDescription className="text-base mb-4">{service.description}</CardDescription>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full mt-auto group-hover:bg-primary group-hover:text-white transition-all">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>{service.title}</DialogTitle>
                      <DialogDescription>
                        {service.details}
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

