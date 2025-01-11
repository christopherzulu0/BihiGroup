import Image from "next/image"
import { notFound } from "next/navigation"
import { Calendar, ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"

// This would typically come from a database or API
const newsItems = [
  {
    id: "1",
    title: "BihiGroup Launches Revolutionary AI Platform",
    date: "2024-01-05",
    image: "/placeholder.svg?height=400&width=800",
    content: `
      <p>BihiGroup is proud to announce the launch of our groundbreaking AI platform, set to revolutionize the way businesses handle data and make decisions. This cutting-edge solution combines advanced machine learning algorithms with intuitive user interfaces, making AI accessible to companies of all sizes.</p>
      
      <h2>Key Features:</h2>
      <ul>
        <li>Real-time data analysis and insights</li>
        <li>Predictive modeling for business forecasting</li>
        <li>Natural language processing for customer interaction analysis</li>
        <li>Seamless integration with existing business systems</li>
      </ul>
      
      <p>The platform has been in development for over two years, with a team of top AI researchers and software engineers working tirelessly to create a solution that's both powerful and user-friendly. Early adopters have reported significant improvements in operational efficiency and decision-making processes.</p>
      
      <p>"This is more than just another AI tool," says Dr. Sarah Chen, Lead AI Researcher at BihiGroup. "We've created an ecosystem that learns and grows with your business, providing increasingly valuable insights over time."</p>
      
      <p>The launch of this AI platform marks a significant milestone for BihiGroup and reinforces our position as a leader in innovative business solutions. As we continue to push the boundaries of what's possible with AI, we remain committed to our mission of empowering businesses through technology.</p>
    `
  },
  {
    id: "2",
    title: "Expanding Global Operations",
    date: "2024-01-03",
    image: "/placeholder.svg?height=400&width=800",
    content: `
      <p>BihiGroup is excited to announce a major expansion of our global operations, with new offices opening in key locations across Asia and Europe. This strategic move is part of our ongoing commitment to providing localized support and expertise to our growing international client base.</p>
      
      <h2>New Office Locations:</h2>
      <ul>
        <li>Tokyo, Japan</li>
        <li>Singapore</li>
        <li>Berlin, Germany</li>
        <li>Amsterdam, Netherlands</li>
      </ul>
      
      <p>These new locations will serve as hubs for our regional operations, allowing us to better serve our clients in these important markets. Each office will be staffed with a team of local experts who understand the unique challenges and opportunities in their respective regions.</p>
      
      <p>"This expansion is a testament to the growing demand for our services worldwide," says Emma Rodriguez, BihiGroup's Chief Operating Officer. "By establishing a stronger presence in these key markets, we're better positioned to support our clients' global ambitions and drive innovation on an international scale."</p>
      
      <p>In addition to enhancing our service capabilities, this expansion will also create numerous job opportunities in each location. We're committed to fostering local talent and contributing to the tech ecosystems in these cities.</p>
      
      <p>As we continue to grow our global footprint, we remain dedicated to our core values of innovation, integrity, and collaboration. We look forward to the new partnerships and opportunities that this expansion will bring.</p>
    `
  },
  // Add more news items here...
]

export default function NewsItemPage({ params }: { params: { id: string } }) {
  const newsItem = newsItems.find(item => item.id === params.id)

  if (!newsItem) {
    notFound()
  }

  return (
    <div className="container py-24">
      <Button variant="ghost" className="mb-8" asChild>
        <a href="/news">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to News
        </a>
      </Button>
      
      <h1 className="text-4xl font-bold mb-6">{newsItem.title}</h1>
      
      <div className="flex items-center text-sm text-muted-foreground mb-8">
        <Calendar className="mr-2 h-4 w-4" />
        {new Date(newsItem.date).toLocaleDateString()}
      </div>
      
      <Image
        src={newsItem.image}
        alt={newsItem.title}
        width={800}
        height={400}
        className="rounded-lg mb-8"
      />
      
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: newsItem.content }} />
    </div>
  )
}

