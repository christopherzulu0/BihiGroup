import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const practices = [
  {
    title: "Environmental Stewardship",
    description: "Implementing rigorous environmental management systems to minimize our ecological footprint.",
  },
  {
    title: "Community Development",
    description: "Investing in local communities through education, healthcare, and infrastructure projects.",
  },
  {
    title: "Responsible Water Management",
    description: "Employing advanced water recycling and treatment technologies to reduce water consumption.",
  },
  {
    title: "Land Rehabilitation",
    description: "Committed to restoring mined lands to their natural state or repurposing them for community benefit.",
  },
]

export function SustainabilityPractices() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {practices.map((practice, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{practice.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{practice.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

