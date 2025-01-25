import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const ventures = [
  {
    name: "FreightSync.io",
    description:
      "A cutting-edge logistics platform bridging the gap between carriers and shippers for effortless freight management.",
  },
  {
    name: "TaskHive.co",
    description: "A dynamic workspace platform enabling teams and freelancers to organize, collaborate, and achieve their goals seamlessly.",
  },
  {
    name: "StoryBridge.africa",
    description:
      "An inclusive platform for sharing and discovering compelling stories, connecting writers and readers across the African continent.",
  },
  {
    name: "SiteHaven.com",
    description: "A dependable web hosting service designed to help businesses launch and scale their online presence with ease.",
  },
];


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

