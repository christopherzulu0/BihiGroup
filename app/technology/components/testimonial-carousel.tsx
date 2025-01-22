import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah M.",
    role: "Small Business Owner",
    content:
      "Bihi Group's e-commerce platform has transformed my business, allowing me to reach customers across the continent.",
  },
  {
    name: "David K.",
    role: "IT Manager",
    content:
      "The IT services provided by Bihi Group have significantly improved our company's efficiency and cybersecurity.",
  },
  {
    name: "Amina L.",
    role: "University Student",
    content:
      "Thanks to Bihi Group's reliable internet service, I can now attend online classes and access educational resources from anywhere.",
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

