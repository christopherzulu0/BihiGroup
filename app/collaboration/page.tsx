'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type Task = {
  id: number
  title: string
  description: string
  status: 'todo' | 'in-progress' | 'done'
}

export default function CollaborationPage() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState({ title: '', description: '' })

  // Simulating real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate receiving updates from a server
      setTasks(currentTasks => 
        currentTasks.map(task => 
          Math.random() > 0.8 
            ? { ...task, status: ['todo', 'in-progress', 'done'][Math.floor(Math.random() * 3)] as Task['status'] }
            : task
        )
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const addTask = () => {
    if (newTask.title && newTask.description) {
      setTasks([...tasks, { ...newTask, id: Date.now(), status: 'todo' }])
      setNewTask({ title: '', description: '' })
    }
  }

  return (
    <div className="container py-24">
      <h1 className="text-4xl font-bold mb-8">Real-time Project Collaboration</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {(['todo', 'in-progress', 'done'] as const).map(status => (
          <Card key={status}>
            <CardHeader>
              <CardTitle className="capitalize">{status.replace('-', ' ')}</CardTitle>
            </CardHeader>
            <CardContent>
              {tasks.filter(task => task.status === status).map(task => (
                <Card key={task.id} className="mb-4">
                  <CardHeader>
                    <CardTitle>{task.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{task.description}</p>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Add New Task</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="title">Title</Label>
              <Input 
                id="title" 
                value={newTask.title}
                onChange={e => setNewTask({...newTask, title: e.target.value})}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">Description</Label>
              <Textarea 
                id="description" 
                value={newTask.description}
                onChange={e => setNewTask({...newTask, description: e.target.value})}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={addTask}>Add Task</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

