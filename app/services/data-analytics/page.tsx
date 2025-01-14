'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useQuery } from 'react-query'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, TrendingUp, Database, PieChart } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const features = [
  { icon: <BarChart3 className="h-6 w-6" />, title: "Advanced Visualizations", description: "Create stunning, interactive data visualizations" },
  { icon: <TrendingUp className="h-6 w-6" />, title: "Predictive Analytics", description: "Forecast trends and make data-driven decisions" },
  { icon: <Database className="h-6 w-6" />, title: "Big Data Processing", description: "Handle large-scale data sets with ease" },
  { icon: <PieChart className="h-6 w-6" />, title: "Custom Dashboards", description: "Build tailored dashboards for your specific needs" },
]

const fetchData = async () => {
  // Simulating API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  return [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 5000 },
    { name: 'Apr', value: 4500 },
    { name: 'May', value: 6000 },
    { name: 'Jun', value: 5500 },
  ]
}

export default function DataAnalyticsPage() {
  const [selectedFeature, setSelectedFeature] = useState(null)
  const { data, isLoading } = useQuery('analyticsData', fetchData)

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
                <p className="mb-4 text-sm sm:text-base">Learn more about how our {selectedFeature.title.toLowerCase()} can help your business:</p>
                <ul className="list-disc list-inside text-sm sm:text-base">
                  <li>Feature benefit 1</li>
                  <li>Feature benefit 2</li>
                  <li>Feature benefit 3</li>
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
            <CardTitle className="text-xl sm:text-2xl mb-2">Data Visualization Example</CardTitle>
            <CardDescription className="text-sm sm:text-base">Interactive chart showing sample analytics data</CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <p className="text-sm sm:text-base">Loading data...</p>
            ) : (
              <ResponsiveContainer width="100%" height={300} minWidth={300}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
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
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Ready to harness the power of your data?</h2>
        <p className="text-sm sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
          Our team of data scientists and analysts is ready to help you unlock the full potential of your data.
        </p>
        <Button size="lg" className="w-full sm:w-auto">Schedule a Consultation</Button>
      </motion.div>
    </div>
  )
}

