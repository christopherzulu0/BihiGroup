"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, ArrowRight } from 'lucide-react'

const newsItems = [
  {
    id: "1",
    title: "BihiGroup Launches Revolutionary AI Platform",
    date: "2024-01-05",
    image: "/placeholder.svg?height=200&width=400",
    excerpt: "Introducing our latest AI-powered solution that's transforming business intelligence..."
  },
  {
    id: "2",
    title: "Expanding Global Operations",
    date: "2024-01-03",
    image: "/placeholder.svg?height=200&width=400",
    excerpt: "BihiGroup continues its international expansion with new offices in Asia and Europe..."
  },
  {
    id: "3",
    title: "Recognition for Innovation Excellence",
    date: "2024-01-01",
    image: "/placeholder.svg?height=200&width=400",
    excerpt: "BihiGroup receives prestigious industry award for breakthrough technology solutions..."
  }
]

export function NewsSection() {
  return (
    <section className="py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex flex-col sm:flex-row justify-between items-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 sm:mb-0">Latest News</h2>
          <Button variant="outline" asChild>
            <Link href="/news" className="flex items-center">
              View All News
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <CardHeader className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Calendar className="mr-2 h-4 w-4" />
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                  <CardTitle className="mb-4 group-hover:text-primary transition-colors">{item.title}</CardTitle>
                  <p className="text-muted-foreground">{item.excerpt}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="link" className="p-0 group" asChild>
                    <Link href={`/news/${item.id}`} className="flex items-center">
                      Read More
                      <motion.div
                        className="ml-2"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

