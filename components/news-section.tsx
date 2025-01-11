import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, ArrowRight } from 'lucide-react'

const newsItems = [
  {
    id: "1",
    title: "METL Launches Revolutionary AI Platform",
    date: "2024-01-05",
    image: "/placeholder.svg?height=200&width=400",
    excerpt: "Introducing our latest AI-powered solution that's transforming business intelligence..."
  },
  {
    id: "2",
    title: "Expanding Global Operations",
    date: "2024-01-03",
    image: "/placeholder.svg?height=200&width=400",
    excerpt: "METL continues its international expansion with new offices in Asia and Europe..."
  },
  {
    id: "3",
    title: "Recognition for Innovation Excellence",
    date: "2024-01-01",
    image: "/placeholder.svg?height=200&width=400",
    excerpt: "METL receives prestigious industry award for breakthrough technology solutions..."
  }
]

export function NewsSection() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Latest News</h2>
          <Button variant="outline" asChild>
            <Link href="/news">
              View All News
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <Card key={item.id} className="group hover:shadow-lg transition-all">
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
      </div>
    </section>
  )
}

