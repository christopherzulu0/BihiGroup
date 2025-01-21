import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "John Doe",
    role: "Property Investor",
    content:
      "Bihi Group's real estate developments have consistently delivered excellent returns. Their commitment to quality and innovation is unmatched.",
  },
  {
    name: "Jane Smith",
    role: "Urban Planner",
    content:
      "The sustainable approach Bihi Group takes in their projects is setting new standards for urban development in Africa.",
  },
  {
    name: "Michael Johnson",
    role: "Business Owner",
    content:
      "Our company's productivity has soared since moving into one of Bihi Group's commercial spaces. The attention to detail and modern amenities are impressive.",
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

