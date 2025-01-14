'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useQuery } from 'react-query'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, XCircle } from 'lucide-react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'

const features = [
  { icon: <Shield className="h-6 w-6" />, title: "Threat Detection", description: "Identify and neutralize security threats in real-time" },
  { icon: <Lock className="h-6 w-6" />, title: "Data Encryption", description: "Protect sensitive information with advanced encryption" },
  { icon: <Eye className="h-6 w-6" />, title: "Access Management", description: "Control and monitor access to your systems" },
  { icon: <AlertTriangle className="h-6 w-6" />, title: "Incident Response", description: "Rapid response to security incidents and breaches" },
]

const fetchSecurityData = async () => {
  // Simulating API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  return [
    { name: 'Secure', value: 75 },
    { name: 'At Risk', value: 25 },
  ]
}

const COLORS = ['#0088FE', '#FF8042']

export default function SecuritySolutionsPage() {
  const [selectedFeature, setSelectedFeature] = useState(null)
  const { data: securityData, isLoading } = useQuery('securityData', fetchSecurityData)

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
                <p className="mb-4 text-sm sm:text-base">Key benefits of our {selectedFeature.title.toLowerCase()} solution:</p>
                <ul className="list-disc list-inside text-sm sm:text-base">
                  <li>Enhanced security posture</li>
                  <li>Reduced risk of data breaches</li>
                  <li>Compliance with industry regulations</li>
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
            <CardTitle className="text-xl sm:text-2xl mb-2">Security Assessment Overview</CardTitle>
            <CardDescription className="text-sm sm:text-base">Visual representation of your current security status</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center items-center">
            {isLoading ? (
              <p className="text-sm sm:text-base">Loading security data...</p>
            ) : (
              <ResponsiveContainer width="100%" height={300} minWidth={300}>
                <PieChart>
                  <Pie
                    data={securityData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius="80%"
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {securityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
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
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Ready to secure your digital assets?</h2>
        <p className="text-sm sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
          Our security experts are ready to help you build a robust defense against cyber threats.
        </p>
        <Button size="lg" className="w-full sm:w-auto">Get a Security Assessment</Button>
      </motion.div>
    </div>
  )
}

