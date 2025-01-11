'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, MapPin, DollarSign, Clock, Search, Filter, X } from 'lucide-react'

type JobListing = {
  id: number
  title: string
  department: string
  location: string
  type: 'Full-time' | 'Part-time' | 'Contract'
  salary: number
  experience: number
  description: string
  requirements: string[]
  benefits: string[]
  postedDate: string
}

const jobListings: JobListing[] = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: 130000,
    experience: 5,
    description: "We're seeking an experienced Full Stack Developer to lead our engineering team in building scalable web applications.",
    requirements: [
      "5+ years of experience in full stack development",
      "Proficiency in React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS, GCP, or Azure)",
      "Strong problem-solving and communication skills"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Remote-first work environment",
      "Comprehensive health insurance",
      "401(k) matching",
      "Continuous learning opportunities"
    ],
    postedDate: "2023-05-15"
  },
  {
    id: 2,
    title: "UX/UI Designer",
    department: "Design",
    location: "New York, NY",
    type: "Full-time",
    salary: 95000,
    experience: 3,
    description: "Join our design team to create intuitive and visually appealing user interfaces for our products.",
    requirements: [
      "3+ years of experience in UX/UI design",
      "Proficiency in Figma, Sketch, and Adobe Creative Suite",
      "Strong portfolio showcasing your design process",
      "Experience with user research and usability testing"
    ],
    benefits: [
      "Competitive salary",
      "Flexible work hours",
      "Health and dental insurance",
      "Annual learning stipend",
      "Creative work environment"
    ],
    postedDate: "2023-05-20"
  },
  {
    id: 3,
    title: "Data Scientist",
    department: "Analytics",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: 140000,
    experience: 4,
    description: "We're looking for a Data Scientist to help us derive insights from complex datasets and drive data-informed decisions.",
    requirements: [
      "4+ years of experience in data science or related field",
      "Strong programming skills in Python and R",
      "Experience with machine learning and statistical modeling",
      "Excellent data visualization and communication skills"
    ],
    benefits: [
      "Competitive salary and bonus structure",
      "Flexible work arrangements",
      "Comprehensive health coverage",
      "401(k) with company match",
      "Professional development opportunities"
    ],
    postedDate: "2023-05-18"
  },
  {
    id: 4,
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Chicago, IL",
    type: "Part-time",
    salary: 60000,
    experience: 2,
    description: "Join our marketing team to help develop and execute digital marketing strategies for our products.",
    requirements: [
      "2+ years of experience in digital marketing",
      "Proficiency in SEO, SEM, and social media marketing",
      "Experience with marketing analytics tools",
      "Strong writing and communication skills"
    ],
    benefits: [
      "Competitive hourly rate",
      "Flexible schedule",
      "Opportunity for full-time employment",
      "Professional development budget",
      "Collaborative work environment"
    ],
    postedDate: "2023-05-22"
  },
  {
    id: 5,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: 120000,
    experience: 4,
    description: "We're seeking a DevOps Engineer to help us streamline our development and deployment processes.",
    requirements: [
      "4+ years of experience in DevOps or related field",
      "Strong knowledge of cloud platforms (AWS, GCP, or Azure)",
      "Experience with containerization and orchestration (Docker, Kubernetes)",
      "Proficiency in scripting languages (Python, Bash)"
    ],
    benefits: [
      "Competitive salary and stock options",
      "Remote work flexibility",
      "Comprehensive health and dental coverage",
      "401(k) with generous company match",
      "Continuous learning and certification support"
    ],
    postedDate: "2023-05-25"
  }
]

export default function CareersPage() {
  const [filters, setFilters] = useState({
    search: '',
    department: 'all',
    location: 'all',
    type: 'all',
    salary: [0, 200000],
    experience: [0, 10],
    remote: false
  })
  const [selectedJob, setSelectedJob] = useState<JobListing | null>(null)
  const [visibleJobs, setVisibleJobs] = useState(3)
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false
  })

  const filterJobs = useCallback(() => {
    return jobListings.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                            job.description.toLowerCase().includes(filters.search.toLowerCase())
      const matchesDepartment = filters.department === 'all' || job.department === filters.department
      const matchesLocation = filters.location === 'all' || job.location === filters.location
      const matchesType = filters.type === 'all' || job.type === filters.type
      const matchesSalary = job.salary >= filters.salary[0] && job.salary <= filters.salary[1]
      const matchesExperience = job.experience >= filters.experience[0] && job.experience <= filters.experience[1]
      const matchesRemote = !filters.remote || job.location === 'Remote'

      return matchesSearch && matchesDepartment && matchesLocation && matchesType && matchesSalary && matchesExperience && matchesRemote
    })
  }, [filters])

  const filteredJobs = filterJobs()

  useEffect(() => {
    if (inView) {
      setVisibleJobs(prevVisible => Math.min(prevVisible + 3, filteredJobs.length))
    }
  }, [inView, filteredJobs.length])

  const resetFilters = () => {
    setFilters({
      search: '',
      department: 'all',
      location: 'all',
      type: 'all',
      salary: [0, 200000],
      experience: [0, 10],
      remote: false
    })
  }

  return (
    <div className="container px-4 py-12 md:py-24 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover exciting career opportunities and be part of our mission to innovate and transform industries.
        </p>
      </motion.div>

      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="col-span-full">
              <Label htmlFor="search" className="sr-only">Search</Label>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="search"
                  placeholder="Search jobs..."
                  value={filters.search}
                  onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
                  className="pl-8"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="department">Department</Label>
              <Select
                value={filters.department}
                onValueChange={(value) => setFilters(prev => ({ ...prev, department: value }))}
              >
                <SelectTrigger id="department">
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="Engineering">Engineering</SelectItem>
                  <SelectItem value="Design">Design</SelectItem>
                  <SelectItem value="Analytics">Analytics</SelectItem>
                  <SelectItem value="Marketing">Marketing</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="location">Location</Label>
              <Select
                value={filters.location}
                onValueChange={(value) => setFilters(prev => ({ ...prev, location: value }))}
              >
                <SelectTrigger id="location">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="Remote">Remote</SelectItem>
                  <SelectItem value="New York, NY">New York, NY</SelectItem>
                  <SelectItem value="San Francisco, CA">San Francisco, CA</SelectItem>
                  <SelectItem value="Chicago, IL">Chicago, IL</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="type">Job Type</Label>
              <Select
                value={filters.type}
                onValueChange={(value) => setFilters(prev => ({ ...prev, type: value }))}
              >
                <SelectTrigger id="type">
                  <SelectValue placeholder="Select job type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Full-time">Full-time</SelectItem>
                  <SelectItem value="Part-time">Part-time</SelectItem>
                  <SelectItem value="Contract">Contract</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-full">
              <Label htmlFor="salary">Salary Range (USD)</Label>
              <Slider
                id="salary"
                min={0}
                max={200000}
                step={10000}
                value={filters.salary}
                onValueChange={(value) => setFilters(prev => ({ ...prev, salary: value }))}
                className="mt-2"
              />
              <div className="flex justify-between mt-1 text-sm text-muted-foreground">
                <span>${filters.salary[0].toLocaleString()}</span>
                <span>${filters.salary[1].toLocaleString()}</span>
              </div>
            </div>
            <div className="col-span-full">
              <Label htmlFor="experience">Years of Experience</Label>
              <Slider
                id="experience"
                min={0}
                max={10}
                step={1}
                value={filters.experience}
                onValueChange={(value) => setFilters(prev => ({ ...prev, experience: value }))}
                className="mt-2"
              />
              <div className="flex justify-between mt-1 text-sm text-muted-foreground">
                <span>{filters.experience[0]} years</span>
                <span>{filters.experience[1]} years</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="remote"
                checked={filters.remote}
                onCheckedChange={(checked) => setFilters(prev => ({ ...prev, remote: checked }))}
              />
              <Label htmlFor="remote">Remote only</Label>
            </div>
            <Button
              variant="outline"
              className="mt-4 md:mt-0"
              onClick={resetFilters}
            >
              <X className="mr-2 h-4 w-4" /> Reset Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {filteredJobs.length} {filteredJobs.length === 1 ? 'Job' : 'Jobs'} Found
        </h2>
        <div className="space-y-6">
          <AnimatePresence>
            {filteredJobs.slice(0, visibleJobs).map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {job.title}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="outline" className="flex items-center">
                        <Briefcase className="mr-1 h-3 w-3" /> {job.department}
                      </Badge>
                      <Badge variant="outline" className="flex items-center">
                        <MapPin className="mr-1 h-3 w-3" /> {job.location}
                      </Badge>
                      <Badge variant="outline" className="flex items-center">
                        <Clock className="mr-1 h-3 w-3" /> {job.type}
                      </Badge>
                      <Badge variant="outline" className="flex items-center">
                        <DollarSign className="mr-1 h-3 w-3" /> {job.salary.toLocaleString()} USD
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    <Tabs defaultValue="requirements">
                      <TabsList>
                        <TabsTrigger value="requirements">Requirements</TabsTrigger>
                        <TabsTrigger value="benefits">Benefits</TabsTrigger>
                      </TabsList>
                      <TabsContent value="requirements">
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          {job.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </TabsContent>
                      <TabsContent value="benefits">
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          {job.benefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                          ))}
                        </ul>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <p className="text-sm text-muted-foreground">Posted on {job.postedDate}</p>
                    <Button onClick={() => setSelectedJob(job)}>Apply Now</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {visibleJobs < filteredJobs.length && (
          <div ref={ref} className="text-center mt-8">
            <Button variant="outline" onClick={() => setVisibleJobs(prev => Math.min(prev + 3, filteredJobs.length))}>
              Load More
            </Button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedJob(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-background p-6 rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4">{selectedJob.title}</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="flex items-center">
                  <Briefcase className="mr-1 h-3 w-3" /> {selectedJob.department}
                </Badge>
                <Badge variant="outline" className="flex items-center">
                  <MapPin className="mr-1 h-3 w-3" /> {selectedJob.location}
                </Badge>
                <Badge variant="outline" className="flex items-center">
                  <Clock className="mr-1 h-3 w-3" /> {selectedJob.type}
                </Badge>
                <Badge variant="outline" className="flex items-center">
                  <DollarSign className="mr-1 h-3 w-3" /> {selectedJob.salary.toLocaleString()} USD
                </Badge>
              </div>
              <p className="text-muted-foreground mb-4">{selectedJob.description}</p>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Requirements</h3>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  {selectedJob.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Benefits</h3>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  {selectedJob.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-end space-x-4">
                <Button variant="outline" onClick={() => setSelectedJob(null)}>Close</Button>
                <Button>Apply Now</Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-muted rounded-lg p-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Don't see a perfect fit?</h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          We're always on the lookout for talented individuals. If you're passionate about technology and innovation, we'd love to hear from you!
        </p>
        <Button size="lg">Submit Your Resume</Button>
      </div>
    </div>
  )
}

