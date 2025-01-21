'use client'

import { Progress } from "@/components/ui/progress"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    name: "Website Redesign",
    progress: 65,
    status: "in_progress",
    dueDate: "2024-04-01",
  },
  {
    name: "Mobile App Development",
    progress: 25,
    status: "planning",
    dueDate: "2024-05-15",
  },
  {
    name: "CRM Integration",
    progress: 90,
    status: "completed",
    dueDate: "2024-03-20",
  },
]

export function ProjectsOverview() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Progress</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Due Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((project) => (
          <TableRow key={project.name}>
            <TableCell className="font-medium">{project.name}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Progress value={project.progress} className="w-[60px]" />
                <span className="text-sm text-muted-foreground">
                  {project.progress}%
                </span>
              </div>
            </TableCell>
            <TableCell>
              <Badge variant={
                project.status === 'completed' ? 'default' :
                project.status === 'in_progress' ? 'secondary' :
                'outline'
              }>
                {project.status.replace('_', ' ')}
              </Badge>
            </TableCell>
            <TableCell>{new Date(project.dueDate).toLocaleDateString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
} 