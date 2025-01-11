import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container py-24">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">About BihiGroup</h1>
        <p className="text-xl text-muted-foreground">
          Transforming businesses through innovative technology solutions since 2010
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
          <p className="text-lg mb-6">
            Founded in 2010, BihiGroup has been at the forefront of technological innovation,
            helping businesses across various industries to thrive in the digital age.
            Our journey began with a simple mission: to empower organizations with
            cutting-edge solutions that drive growth and efficiency.
          </p>
          <p className="text-lg mb-6">
            Over the years, we've expanded our expertise to cover a wide range of
            services, from business consulting and data analytics to security solutions
            and team development. Our commitment to excellence and customer satisfaction
            has earned us the trust of over 500 global clients.
          </p>
          <p className="text-lg mb-6">
            Today, BihiGroup stands as a leader in the tech industry, known for our innovative
            approaches to solving complex business challenges. Our team of experts
            continues to push the boundaries of what's possible, always staying ahead
            of the curve in an ever-evolving technological landscape.
          </p>
          <Button size="lg">Learn More About Our Services</Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl transform rotate-3"></div>
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="BihiGroup Team"
            width={600}
            height={400}
            className="rounded-3xl relative"
          />
        </div>
      </div>

      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-12 mb-24">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Innovation", description: "We constantly push the boundaries of what's possible in technology, striving to create solutions that are ahead of their time." },
            { title: "Integrity", description: "We uphold the highest ethical standards in all our business practices, ensuring transparency and trust in every interaction." },
            { title: "Collaboration", description: "We believe in the power of teamwork and partnership, both within our organization and with our clients, to achieve extraordinary results." },
          ].map((value) => (
            <Card key={value.title}>
              <CardHeader>
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="text-center mb-24">
        <h2 className="text-3xl font-semibold mb-8">Our Global Presence</h2>
        <Image
          src="/placeholder.svg?height=400&width=800"
          alt="BihiGroup Global Offices"
          width={800}
          height={400}
          className="rounded-lg mx-auto mb-8"
        />
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          With offices in over 30 countries, we provide localized expertise with a global perspective.
          Our international network allows us to serve clients across different time zones and cultural contexts,
          ensuring that we deliver solutions that are both globally competitive and locally relevant.
        </p>
      </div>

      <div className="mb-24">
        <h2 className="text-3xl font-semibold mb-8 text-center">Meet Our Leadership</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Jane Doe", title: "CEO", image: "/placeholder.svg?height=200&width=200" },
            { name: "John Smith", title: "CTO", image: "/placeholder.svg?height=200&width=200" },
            { name: "Emily Johnson", title: "COO", image: "/placeholder.svg?height=200&width=200" },
          ].map((leader) => (
            <Card key={leader.name}>
              <CardContent className="pt-6">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-center">{leader.name}</h3>
                <p className="text-center text-muted-foreground">{leader.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

