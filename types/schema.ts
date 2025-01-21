// User Related Types
interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'user' | 'client'
  avatar?: string
  projectsCompleted: number
  tasksInProgress: number
  nextMeeting?: string
  createdAt: Date
  updatedAt: Date
}

// Project Related Types
interface Project {
  id: string
  title: string
  description: string
  status: 'planning' | 'in-progress' | 'completed' | 'on-hold'
  startDate: Date
  endDate?: Date
  clientId: string
  teamMembers: string[] // User IDs
  progress: number
  technologies: string[]
  budget: {
    allocated: number
    spent: number
    currency: string
  }
  createdAt: Date
  updatedAt: Date
}

// Task Related Types
interface Task {
  id: string
  title: string
  description: string
  status: 'todo' | 'in-progress' | 'done'
  priority: 'low' | 'medium' | 'high'
  assignee: string // User ID
  projectId: string
  dueDate?: Date
  tags: string[]
  attachments?: Attachment[]
  createdAt: Date
  updatedAt: Date
}

// Service Related Types
interface Service {
  id: string
  title: string
  description: string
  category: 'development' | 'consulting' | 'analytics' | 'security'
  features: {
    icon: string
    title: string
    description: string
  }[]
  pricing?: {
    amount: number
    currency: string
    billingPeriod: 'monthly' | 'yearly' | 'one-time'
  }
  createdAt: Date
  updatedAt: Date
}

// Career Related Types
interface JobPosting {
  id: string
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
  status: 'open' | 'closed'
  applications?: JobApplication[]
}

interface JobApplication {
  id: string
  jobId: string
  applicantName: string
  email: string
  resume: string // URL to stored resume
  coverLetter?: string
  status: 'pending' | 'reviewed' | 'interviewed' | 'accepted' | 'rejected'
  submittedAt: Date
}

// Support Types
interface Attachment {
  id: string
  filename: string
  url: string
  type: string
  size: number
  uploadedBy: string // User ID
  uploadedAt: Date
}

interface Testimonial {
  id: string
  quote: string
  author: string
  position: string
  company: string
  image?: string
  rating: number
  verified: boolean
  createdAt: Date
}

interface Partner {
  id: string
  name: string
  logo: string
  website: string
  category: 'technology' | 'business' | 'service'
  description: string
  active: boolean
  since: Date
}

// Analytics Types
interface AnalyticsData {
  id: string
  projectId?: string
  serviceId?: string
  type: 'revenue' | 'performance' | 'engagement'
  metrics: {
    name: string
    value: number
    unit: string
  }[]
  period: {
    start: Date
    end: Date
  }
  createdAt: Date
}

export type {
  User,
  Project,
  Task,
  Service,
  JobPosting,
  JobApplication,
  Attachment,
  Testimonial,
  Partner,
  AnalyticsData
} 