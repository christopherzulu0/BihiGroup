'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion, AnimatePresence } from "framer-motion"

type Task = {
  id: number
  title: string
  description: string
  status: 'todo' | 'in-progress' | 'done'
  assignee: string
  priority: 'low' | 'medium' | 'high'
}

const users = [
  { name: 'Alice Johnson', avatar: '/placeholder.svg?height=32&width=32' },
  { name: 'Bob Smith', avatar: '/placeholder.svg?height=32&width=32' },
  { name: 'Charlie Brown', avatar: '/placeholder.svg?height=32&width=32' },
  { name: 'Diana Ross', avatar: '/placeholder.svg?height=32&width=32' },
]

export default function CollaborationPage() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState<Omit<Task, 'id'>>({
    title: '',
    description: '',
    status: 'todo',
    assignee: '',
    priority: 'medium'
  })

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
    if (newTask.title && newTask.description && newTask.assignee) {
      setTasks([...tasks, { ...newTask, id: Date.now() }])
      setNewTask({
        title: '',
        description: '',
        status: 'todo',
        assignee: '',
        priority: 'medium'
      })
    }
  }

  const moveTask = (taskId: number, newStatus: Task['status']) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, status: newStatus } : task
    ))
  }

  return (
    <div className="container px-4 py-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Real-time Project Collaboration</h1>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {(['todo', 'in-progress', 'done'] as const).map(status => (
          <Card key={status} className="h-full">
            <CardHeader>
              <CardTitle className="capitalize text-xl">{status.replace('-', ' ')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <AnimatePresence>
                {tasks.filter(task => task.status === status).map(task => (
                  <motion.div
                    key={task.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="transition-all hover:shadow-md">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{task.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-2">{task.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Avatar>
                              <AvatarImage src={users.find(u => u.name === task.assignee)?.avatar} />
                              <AvatarFallback>{task.assignee.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <span className="text-sm">{task.assignee}</span>
                          </div>
                          <Badge variant={task.priority === 'high' ? 'destructive' : task.priority === 'medium' ? 'default' : 'secondary'}>
                            {task.priority}
                          </Badge>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between pt-2">
                        {status !== 'todo' && (
                          <Button size="sm" variant="outline" onClick={() => moveTask(task.id, 'todo')}>Move to Todo</Button>
                        )}
                        {status !== 'in-progress' && (
                          <Button size="sm" variant="outline" onClick={() => moveTask(task.id, 'in-progress')}>Move to In Progress</Button>
                        )}
                        {status !== 'done' && (
                          <Button size="sm" variant="outline" onClick={() => moveTask(task.id, 'done')}>Move to Done</Button>
                        )}
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Add New Task</CardTitle>
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
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="assignee">Assignee</Label>
              <Select onValueChange={value => setNewTask({...newTask, assignee: value})}>
                <SelectTrigger id="assignee">
                  <SelectValue placeholder="Select assignee" />
                </SelectTrigger>
                <SelectContent>
                  {users.map(user => (
                    <SelectItem key={user.name} value={user.name}>{user.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="priority">Priority</Label>
              <Select onValueChange={value => setNewTask({...newTask, priority: value as Task['priority']})}>
                <SelectTrigger id="priority">
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={addTask} size="lg" className="w-full">Add Task</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

