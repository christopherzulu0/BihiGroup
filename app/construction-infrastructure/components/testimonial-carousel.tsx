import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "John Doe",
    role: "City Planner",
    content:
      "Bihi Group's infrastructure projects have transformed our city, improving connectivity and quality of life for our residents.",
  },
  {
    name: "Jane Smith",
    role: "Community Leader",
    content: "The affordable housing project by Bihi Group has provided much-needed homes for our community members.",
  },
  {
    name: "Michael Johnson",
    role: "Business Owner",
    content:
      "The new industrial park developed by Bihi Group has attracted investments and created numerous job opportunities in our region.",
  },
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <p className="text-lg mb-4">{testimonials[currentIndex].content}</p>
              <p className="font-semibold">{testimonials[currentIndex].name}</p>
              <p className="text-sm text-gray-600">{testimonials[currentIndex].role}</p>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2"
        onClick={prevTestimonial}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2"
        onClick={nextTestimonial}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

