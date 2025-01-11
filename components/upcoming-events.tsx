import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarDays, MapPin } from 'lucide-react'

const events = [
  {
    title: "BihiGroup Tech Conference 2023",
    date: "September 15-17, 2023",
    location: "San Francisco, CA",
    description: "Join us for three days of inspiring talks, workshops, and networking opportunities with industry leaders.",
  },
  {
    title: "AI in Business Webinar",
    date: "July 28, 2023",
    location: "Online",
    description: "Learn how artificial intelligence is transforming businesses and how you can leverage it for your company.",
  },
  {
    title: "Cybersecurity Summit",
    date: "October 5, 2023",
    location: "New York, NY",
    description: "Stay ahead of cyber threats with insights from top security experts and hands-on training sessions.",
  },
]

export function UpcomingEvents() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center">Upcoming Events</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription>
                  <div className="flex items-center mt-2">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    {event.date}
                  </div>
                  <div className="flex items-center mt-1">
                    <MapPin className="mr-2 h-4 w-4" />
                    {event.location}
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{event.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

