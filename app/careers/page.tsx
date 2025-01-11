import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const jobListings = [
  {
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "We're looking for a senior software engineer to help lead our team in developing cutting-edge solutions. You'll be working on complex problems and mentoring junior developers.",
    requirements: [
      "7+ years of experience in software development",
      "Strong proficiency in React, Node.js, and TypeScript",
      "Experience with cloud technologies (AWS, Azure, or GCP)",
      "Excellent problem-solving and communication skills"
    ]
  },
  {
    title: "Data Scientist",
    department: "Analytics",
    location: "New York, NY",
    type: "Full-time",
    description: "Join our data science team to uncover insights from complex datasets and drive business decisions. You'll be working with big data technologies and machine learning algorithms.",
    requirements: [
      "Master's or PhD in Computer Science, Statistics, or related field",
      "3+ years of experience in data science or machine learning",
      "Proficiency in Python, R, and SQL",
      "Experience with big data technologies like Hadoop and Spark"
    ]
  },
  {
    title: "UX Designer",
    department: "Design",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Help create intuitive and beautiful user experiences for our products and services. You'll be working closely with product managers and engineers to bring designs to life.",
    requirements: [
      "5+ years of experience in UX design",
      "Strong portfolio demonstrating your design process",
      "Proficiency in design tools like Figma or Sketch",
      "Experience with user research and usability testing"
    ]
  },
  {
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Chicago, IL",
    type: "Part-time",
    description: "We're seeking a creative and data-driven marketing specialist to help grow our brand and attract new clients. You'll be involved in both digital and traditional marketing campaigns.",
    requirements: [
      "3+ years of experience in B2B marketing",
      "Strong writing and communication skills",
      "Experience with SEO, SEM, and social media marketing",
      "Analytical mindset with experience in marketing analytics"
    ]
  }
]

export default function CareersPage() {
  return (
    <div className="container py-24">
      <h1 className="text-4xl font-bold mb-8">Careers at BihiGroup</h1>
      <p className="text-xl mb-12">Join our team and help shape the future of technology. At BihiGroup, we're always looking for passionate, innovative individuals to help us drive our mission forward.</p>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {jobListings.map((job, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{job.title}</CardTitle>
              <CardDescription>{job.department} | {job.location}</CardDescription>
            </CardHeader>
            <CardContent>
              <Badge className="mb-2">{job.type}</Badge>
              <p className="mb-4">{job.description}</p>
              <h4 className="font-semibold mb-2">Requirements:</h4>
              <ul className="list-disc pl-5">
                {job.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button>Apply Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Don't see a role that fits?</h2>
        <p className="text-lg mb-8">We're always on the lookout for talent. Send us your resume and we'll keep you in mind for future opportunities.</p>
        <Button size="lg">Submit Your Resume</Button>
      </div>
    </div>
  )
}

