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
    <div className="container py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 lg:mb-16 text-center">Latest News</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
        {newsItems.map((item, index) => (
          <Card key={index} className="group hover:shadow-lg transition-all flex flex-col">
            <CardHeader className="p-0">
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 lg:p-8 flex-grow">
              <div className="flex items-center text-sm lg:text-base text-muted-foreground mb-3 sm:mb-4">
                <Calendar className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                {new Date(item.date).toLocaleDateString()}
              </div>
              <CardTitle className="mb-3 sm:mb-4 text-lg sm:text-xl lg:text-2xl">{item.title}</CardTitle>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">{item.excerpt}</p>
            </CardContent>
            <CardFooter className="p-4 sm:p-6 lg:p-8 pt-0">
              <Button variant="link" className="p-0 text-sm sm:text-base lg:text-lg" asChild>
                <Link href={`/news/${item.id}`}>
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
        <Button size="lg" className="text-base sm:text-lg lg:text-xl px-6 py-3 lg:px-8 lg:py-4">
          Load More News
        </Button>
      </div>
    </div>
  )
}

