import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const pillars = [
  {
    title: "Innovation",
    description:
      "Fostering a culture of innovation across all our ventures to drive technological advancement and economic growth in Africa.",
  },
  {
    title: "Sustainability",
    description:
      "Implementing sustainable practices in all our operations to ensure long-term environmental and social benefits for Africa.",
  },
  {
    title: "Economic Empowerment",
    description:
      "Creating opportunities for economic growth and empowerment at both individual and community levels across the continent.",
  },
  {
    title: "Pan-African Collaboration",
    description:
      "Promoting collaboration and partnerships across African nations to leverage collective strengths and resources.",
  },
]

export function VisionPillars() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {pillars.map((pillar, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{pillar.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{pillar.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

