import Image from "next/image"

const partners = [
  { name: "TechGiant", logo: "/placeholder.svg?height=80&width=200" },
  { name: "InnovateCo", logo: "/placeholder.svg?height=80&width=200" },
  { name: "FutureSoft", logo: "/placeholder.svg?height=80&width=200" },
  { name: "DataDynamics", logo: "/placeholder.svg?height=80&width=200" },
  { name: "CloudMasters", logo: "/placeholder.svg?height=80&width=200" },
]

export function TechnologyPartners() {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Technology Partners</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center justify-center">
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={200}
                height={80}
                className="max-w-[200px] h-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

