import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "BihiGroup transformed our business operations with their innovative solutions. The results exceeded our expectations.",
    author: "Sarah Johnson",
    position: "CEO, TechCorp",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    quote: "Their team's expertise and dedication to excellence made all the difference in our digital transformation journey.",
    author: "Michael Chen",
    position: "CTO, InnovateCo",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    quote: "Working with BihiGroup has been a game-changer for our organization. Their solutions are cutting-edge and effective.",
    author: "Emily Rodriguez",
    position: "Director, GlobalTech",
    image: "/placeholder.svg?height=100&width=100"
  }
]

export function TestimonialsSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied clients
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <CardContent className="pt-12 pb-8">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-primary rounded-full p-3">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </div>
                <blockquote className="text-center mb-8">
                  <p className="text-lg text-gray-700">{testimonial.quote}</p>
                </blockquote>
                <div className="flex flex-col items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={64}
                    height={64}
                    className="rounded-full mb-4"
                  />
                  <div className="text-center">
                    <cite className="font-semibold not-italic">{testimonial.author}</cite>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

