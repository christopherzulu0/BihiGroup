'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useQuery } from 'react-query'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Smartphone, Cloud, Zap } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const features = [
  { icon: <Code className="h-6 w-6" />, title: "Full-Stack Development", description: "End-to-end web application development" },
  { icon: <Smartphone className="h-6 w-6" />, title: "Mobile App Development", description: "Native and cross-platform mobile apps" },
  { icon: <Cloud className="h-6 w-6" />, title: "Cloud Solutions", description: "Scalable and efficient cloud-native applications" },
  { icon: <Zap className="h-6 w-6" />, title: "API Development", description: "Robust and scalable API design and integration" },
]

const fetchProjectData = async () => {
  // Simulating API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  return [
    { name: 'Web', completed: 85, ongoing: 15 },
    { name: 'Mobile', completed: 70, ongoing: 30 },
    { name: 'Cloud', completed: 90, ongoing: 10 },
    { name: 'API', completed: 80, ongoing: 20 },
  ]
}

export default function DevelopmentTeamPage() {
  const [selectedFeature, setSelectedFeature] = useState(null)
  const { data: projectData, isLoading } = useQuery('projectData', fetchProjectData)

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedFeature(feature)}
          >
            <Card className="cursor-pointer h-full">
              <CardHeader>
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg sm:text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-sm sm:text-base">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedFeature && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="mb-8 sm:mb-12">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">{selectedFeature.title}</CardTitle>
                <CardDescription className="text-sm sm:text-base">{selectedFeature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm sm:text-base">Our expertise in {selectedFeature.title.toLowerCase()}:</p>
                <ul className="list-disc list-inside text-sm sm:text-base">
                  <li>Latest technologies and frameworks</li>
                  <li>Agile development methodology</li>
                  <li>Scalable and maintainable code</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl mb-2">Project Completion Status</CardTitle>
            <CardDescription className="text-sm sm:text-base">Overview of our current development projects</CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <p className="text-sm sm:text-base">Loading project data...</p>
            ) : (
              <ResponsiveContainer width="100%" height={300} minWidth={300}>
                <BarChart data={projectData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="completed" stackId="a" fill="#8884d8" />
                  <Bar dataKey="ongoing" stackId="a" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8 sm:mt-12 text-center"
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Ready to start your next project?</h2>
        <p className="text-sm sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
          Our team of expert developers is ready to turn your vision into reality.
        </p>
        <Button size="lg" className="w-full sm:w-auto">Start Your Project</Button>
      </motion.div>
    </div>
  )
}

