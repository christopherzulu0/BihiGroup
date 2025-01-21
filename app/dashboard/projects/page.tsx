'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useQuery } from "@tanstack/react-query"

type Project = {
  id: string
  title: string
  description: string
  status: 'planning' | 'in-progress' | 'completed' | 'on-hold'
  startDate: string
  endDate?: string
  progress: number
  budgetAllocated: number
  budgetSpent: number
  currency: string
}

export default function ProjectsPage() {
  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ['projects'],
    queryFn: async () => {
      const response = await fetch('/api/projects')
      return response.json()
    }
  })

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Projects</h1>

      <Card>
        <CardHeader>
          <CardTitle>All Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Project</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Budget</TableHead>
                <TableHead>Timeline</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects?.map((project) => (
                <TableRow key={project.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{project.title}</p>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={
                      project.status === 'completed' ? 'default' :
                      project.status === 'in-progress' ? 'secondary' :
                      project.status === 'on-hold' ? 'destructive' :
                      'outline'
                    }>
                      {project.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={project.progress} className="w-[60px]" />
                      <span className="text-sm text-muted-foreground">
                        {project.progress}%
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <p>Spent: {project.currency} {project.budgetSpent}</p>
                      <p className="text-muted-foreground">
                        Budget: {project.currency} {project.budgetAllocated}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <p>Start: {new Date(project.startDate).toLocaleDateString()}</p>
                      {project.endDate && (
                        <p className="text-muted-foreground">
                          End: {new Date(project.endDate).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
} 