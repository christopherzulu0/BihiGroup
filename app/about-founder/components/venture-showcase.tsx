import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const ventures = [
  {
    name: "RoadBarks.com",
    description:
      "A state-of-the-art load board platform connecting freight carriers and shippers for seamless logistics solutions.",
  },
  {
    name: "GetterHub.com",
    description: "A platform empowering businesses and freelancers with tools for productivity and collaboration.",
  },
  {
    name: "OnionTable.com",
    description:
      "Africa's first multilingual storytelling platform, connecting readers and writers across the continent to share diverse stories.",
  },
  {
    name: "GetterHost.com",
    description: "A reliable web hosting platform designed to support businesses in building their online presence.",
  },
]

export function VentureShowcase() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {ventures.map((venture, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{venture.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{venture.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

