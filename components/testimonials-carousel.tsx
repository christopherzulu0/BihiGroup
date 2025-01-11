"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: "John Doe",
    company: "Tech Corp",
    image: "/placeholder.svg?height=100&width=100",
    testimonial: "BihiGroup's solutions have transformed our business operations. Their expertise is unmatched.",
  },
  {
    name: "Jane Smith",
    company: "Innovate Inc",
    image: "/placeholder.svg?height=100&width=100",
    testimonial: "Working with BihiGroup has been a game-changer for our company. Their team is incredibly knowledgeable and supportive.",
  },
  {
    name: "Bob Johnson",
    company: "Global Systems",
    image: "/placeholder.svg?height=100&width=100",
    testimonial: "BihiGroup's data analytics solutions have given us insights we never thought possible. Highly recommended!",
  },
]

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative max-w-4xl mx-auto px-4 py-12">
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg">
        <CardContent className="pt-12 pb-8 px-8 text-center">
          <div className="mb-6">
            <Image
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              width={100}
              height={100}
              className="rounded-full mx-auto border-4 border-white shadow-md"
            />
          </div>
          <blockquote className="text-lg md:text-xl mb-6 text-gray-700 italic">"{testimonials[currentIndex].testimonial}"</blockquote>
          <cite className="font-semibold text-blue-600">{testimonials[currentIndex].name}</cite>
          <p className="text-sm text-gray-500">{testimonials[currentIndex].company}</p>
        </CardContent>
      </Card>
      <div className="flex justify-center mt-6 space-x-4">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full hover:bg-blue-100"
          onClick={prevTestimonial}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full hover:bg-blue-100"
          onClick={nextTestimonial}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}

