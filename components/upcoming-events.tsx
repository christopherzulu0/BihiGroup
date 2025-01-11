"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, ChevronDown, ChevronUp } from 'lucide-react'

const events = [
  {
    title: "BihiGroup Tech Conference 2023",
    date: "September 15-17, 2023",
    location: "San Francisco, CA",
    description: "Join us for three days of inspiring talks, workshops, and networking opportunities with industry leaders.",
    tags: ["Technology", "Networking", "Innovation"]
  },
  {
    title: "AI in Business Webinar",
    date: "July 28, 2023",
    location: "Online",
    description: "Learn how artificial intelligence is transforming businesses and how you can leverage it for your company.",
    tags: ["AI", "Business", "Online"]
  },
  {
    title: "Cybersecurity Summit",
    date: "October 5, 2023",
    location: "New York, NY",
    description: "Stay ahead of cyber threats with insights from top security experts and hands-on training sessions.",
    tags: ["Security", "Training", "Expert Insights"]
  },
]

export function UpcomingEvents() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null)

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 mx-auto">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Upcoming Events
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col transition-shadow hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center mt-2 text-muted-foreground">
                      <CalendarDays className="mr-2 h-4 w-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center mt-1 text-muted-foreground">
                      <MapPin className="mr-2 h-4 w-4" />
                      {event.location}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground mb-4">
                    {expandedEvent === index
                      ? event.description
                      : `${event.description.slice(0, 100)}...`}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <Button variant="outline" size="sm" onClick={() => setExpandedEvent(expandedEvent === index ? null : index)}>
                    {expandedEvent === index ? (
                      <>
                        Less Info
                        <ChevronUp className="ml-2 h-4 w-4" />
                      </>
                    ) : (
                      <>
                        More Info
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                  <Button size="sm">Register</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
