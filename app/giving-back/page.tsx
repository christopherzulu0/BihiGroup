import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function GivingBackPage() {
  return (
    <div className="container px-4 py-12 md:py-24">
      <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Giving Back to Our Community</h1>
        <p className="text-xl text-muted-foreground">
          At BihiGroup, we believe in the power of technology to create positive change in the world.
          Our commitment to social responsibility drives us to make a meaningful impact beyond our business operations.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
        <div>
          <h2 className="text-3xl font-semibold mb-6">Our Commitment</h2>
          <div className="space-y-4 text-lg">
            <p>
              We're dedicated to using our resources and expertise to support communities
              in need and foster the next generation of tech innovators. Through various
              initiatives and partnerships, we strive to make a lasting impact on society
              and the environment.
            </p>
            <p>
              Our giving back programs focus on three key areas: education, environmental
              sustainability, and digital inclusion. We believe these areas are crucial
              for building a better future and align closely with our expertise and values.
            </p>
          </div>
          <Button size="lg" className="mt-6">Get Involved</Button>
        </div>
        <div className="relative mt-8 md:mt-0">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-600 rounded-3xl transform rotate-3"></div>
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="BihiGroup Giving Back"
            width={600}
            height={400}
            className="rounded-3xl relative shadow-lg"
          />
        </div>
      </div>

      <div className="mb-16 md:mb-24">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Initiatives</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Tech Education",
              description: "We provide free coding workshops and STEM programs for underprivileged youth, aiming to inspire the next generation of tech innovators. Our employees volunteer as mentors, sharing their knowledge and experience.",
              image: "/placeholder.svg?height=200&width=300"
            },
            {
              title: "Environmental Sustainability",
              description: "BihiGroup is committed to reducing our environmental footprint. We implement green technologies in our operations and support reforestation projects. Our goal is to be carbon neutral by 2025.",
              image: "/placeholder.svg?height=200&width=300"
            },
            {
              title: "Digital Inclusion",
              description: "We're bridging the digital divide by donating equipment and providing internet access to underserved communities. This initiative aims to ensure that everyone has the opportunity to participate in the digital economy.",
              image: "/placeholder.svg?height=200&width=300"
            },
          ].map((initiative) => (
            <Card key={initiative.title} className="transition-all hover:shadow-lg">
              <CardHeader>
                <Image
                  src={initiative.image}
                  alt={initiative.title}
                  width={300}
                  height={200}
                  className="rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-4 text-xl">{initiative.title}</CardTitle>
                <p className="text-muted-foreground">{initiative.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-lg p-8 md:p-12 mb-16 md:mb-24">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "10,000+", label: "Students Reached" },
            { number: "50,000+", label: "Trees Planted" },
            { number: "100+", label: "Community Partners" },
            { number: "$5M+", label: "Funds Donated" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-8">Join Us in Making a Difference</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          We invite our employees, clients, and partners to join us in our mission to create positive change.
          Whether it's through volunteering, donations, or collaborative projects, every contribution counts.
        </p>
        <Button size="lg">Learn About Volunteer Opportunities</Button>
      </div>
    </div>
  )
}

