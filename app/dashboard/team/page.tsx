'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useQuery } from "@tanstack/react-query"

type User = {
  id: string
  name: string
  email: string
  role: 'admin' | 'user' | 'client'
  avatarUrl?: string
  projectsCompleted: number
  tasksInProgress: number
}

export default function TeamPage() {
  const { data: users, isLoading } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await fetch('/api/users')
      return response.json()
    }
  })

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Team Management</h1>

      <Card>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Member</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Projects Completed</TableHead>
                <TableHead>Tasks In Progress</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users?.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={user.avatarUrl} />
                        <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={
                      user.role === 'admin' ? 'default' :
                      user.role === 'client' ? 'secondary' :
                      'outline'
                    }>
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.projectsCompleted}</TableCell>
                  <TableCell>{user.tasksInProgress}</TableCell>
                  <TableCell>
                    <Badge variant={user.tasksInProgress > 0 ? 'default' : 'outline'}>
                      {user.tasksInProgress > 0 ? 'Active' : 'Available'}
                    </Badge>
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