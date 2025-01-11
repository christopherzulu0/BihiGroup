"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Building, Users, Globe, Award } from 'lucide-react'

const stats = [
  {
    label: "Global Clients",
    value: "500+",
    icon: Building,
    description: "Trusted by leading companies"
  },
  {
    label: "Team Members",
    value: "100+",
    icon: Users,
    description: "Expert professionals"
  },
  {
    label: "Countries",
    value: "30+",
    icon: Globe,
    description: "International presence"
  },
  {
    label: "Awards",
    value: "25+",
    icon: Award,
    description: "Industry recognition"
  }
]

export function StatsSection() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6 text-center text-white">
                  <motion.div 
                    className="flex justify-center mb-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <stat.icon className="w-10 h-10" />
                  </motion.div>
                  <motion.div 
                    className="text-4xl font-bold mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 100, delay: index * 0.1 + 0.2 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-lg mb-2 font-semibold">{stat.label}</div>
                  <div className="text-sm text-white/80">{stat.description}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

