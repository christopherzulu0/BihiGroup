import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, ArrowRight } from 'lucide-react'

const newsItems = [
  {
    id: "1",
    title: "BihiGroup Launches Revolutionary AI Platform",
    date: "2024-01-05",
    image: "/placeholder.svg?height=200&width=400",
    excerpt: "Introducing our latest AI-powered solution that's transforming business intelligence..."
  },
  {
    id: "2",
    title: "Expanding Global Operations",
    date: "2024-01-03",
    image: "/placeholder.svg?height=200&width=400",
    excerpt: "BihiGroup continues its international expansion with new offices in Asia and Europe..."
  },
  {
    id: "3",
    title: "Recognition for Innovation Excellence",
    date: "2024-01-01",
    image: "/placeholder.svg?height=200&width=400",
    excerpt: "BihiGroup receives prestigious industry award for breakthrough technology solutions..."
  },
  {
    id: "4",
    title: "Partnership with Leading Tech Giant",
    date: "2023-12-28",
    image: "/placeholder.svg?height=200&width=400",
    excerpt: "BihiGroup announces strategic partnership to accelerate digital transformation initiatives..."
  },
  {
    id: "5",
    title: "Sustainable Technology Initiative",
    date: "2023-12-20",
    image: "/placeholder.svg?height=200&width=400",
    excerpt: "BihiGroup commits to developing eco-friendly tech solutions for a sustainable future..."
  },
  {
    id: "6",
    title: "BihiGroup Hosts Annual Tech Summit",
    date: "2023-12-15",
    image: "/placeholder.svg?height=200&width=400",
    excerpt: "Industry leaders gather to discuss emerging trends and innovations in technology..."
  }
]

export default function NewsPage() {
  return (
    <div className="container py-24">
      <h1 className="text-4xl font-bold mb-12 text-center">Latest News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item, index) => (
          <Card key={index} className="group hover:shadow-lg transition-all">
            <CardHeader className="p-0">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex items-center text-sm text-muted-foreground mb-4">
                <Calendar className="mr-2 h-4 w-4" />
                {new Date(item.date).toLocaleDateString()}
              </div>
              <CardTitle className="mb-4">{item.title}</CardTitle>
              <p className="text-muted-foreground">{item.excerpt}</p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button variant="link" className="p-0" asChild>
                <Link href={`/news/${item.id}`}>
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button size="lg">
          Load More News
        </Button>
      </div>
    </div>
  )
}

