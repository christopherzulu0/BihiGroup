import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, ArrowRight } from "lucide-react"

const newsItems = [
  {
    id: "1",
    title: "METL Launches Revolutionary AI Platform",
    date: "2024-01-05",
    image: "https://d12aarmt01l54a.cloudfront.net/cms/images/UserMedia-20240430215632/808-440.png",
    excerpt: "Introducing our latest AI-powered solution that's transforming business intelligence...",
  },
  {
    id: "2",
    title: "Expanding Global Operations",
    date: "2024-01-03",
    image: "https://d.newsweek.com/en/full/2321605/african-business-team.jpg",
    excerpt: "METL continues its international expansion with new offices in Asia and Europe...",
  },
  {
    id: "3",
    title: "Recognition for Innovation Excellence",
    date: "2024-01-01",
    image: "https://aicontentfy-customer-images.s3.eu-central-1.amazonaws.com/ces_0b8e92cf-7347-46db-b6e7-957967eebfab.png",
    excerpt: "METL receives prestigious industry award for breakthrough technology solutions...",
  },
]

export function NewsSection() {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">Latest News</h2>
          <Button variant="outline" asChild className="self-start md:self-auto">
            <Link href="/news" className="flex items-center">
              View All News
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {newsItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-lg transition-all flex flex-col">
              <CardHeader className="p-0">
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 flex-grow">
                <div className="flex items-center text-sm text-muted-foreground mb-2 md:mb-4">
                  <Calendar className="mr-2 h-4 w-4" />
                  {new Date(item.date).toLocaleDateString()}
                </div>
                <CardTitle className="mb-2 md:mb-4 text-lg md:text-xl">{item.title}</CardTitle>
                <p className="text-muted-foreground text-sm md:text-base">{item.excerpt}</p>
              </CardContent>
              <CardFooter className="p-4 md:p-6 pt-0">
                <Button variant="link" className="p-0 text-sm md:text-base" asChild>
                  <Link href={`/news/${item.id}`} className="flex items-center">
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

