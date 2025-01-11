'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Bell, Settings, User } from 'lucide-react'

export default function UserDashboardPage() {
  const [user] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    projectsCompleted: 12,
    tasksInProgress: 5,
    nextMeeting: '2023-06-15T14:00:00',
  })

  return (
    <div className="container py-24">
      <h1 className="text-4xl font-bold mb-8">Welcome back, {user.name}!</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Projects Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{user.projectsCompleted}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Tasks In Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{user.tasksInProgress}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Next Meeting</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl">{new Date(user.nextMeeting).toLocaleString()}</p>
          </CardContent>
        </Card>
      </div>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Current Project Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={33} className="w-full" />
          <p className="mt-2 text-center">33% Complete</p>
        </CardContent>
      </Card>
      
      <div className="flex justify-center space-x-4">
        <Button variant="outline">
          <Bell className="mr-2 h-4 w-4" /> Notifications
        </Button>
        <Button variant="outline">
          <User className="mr-2 h-4 w-4" /> Profile
        </Button>
        <Button variant="outline">
          <Settings className="mr-2 h-4 w-4" /> Settings
        </Button>
      </div>
    </div>
  )
}

