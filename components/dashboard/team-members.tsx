'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const teamMembers = [
  {
    name: "John Doe",
    role: "Lead Developer",
    avatar: "/avatars/01.png",
    initials: "JD",
    status: "active",
    currentTask: "Website Redesign"
  },
  {
    name: "Jane Smith",
    role: "UI Designer",
    avatar: "/avatars/02.png",
    initials: "JS",
    status: "busy",
    currentTask: "Mobile App Design"
  },
  {
    name: "Mike Johnson",
    role: "Backend Developer",
    avatar: "/avatars/03.png",
    initials: "MJ",
    status: "offline",
    currentTask: "API Development"
  }
]

export function TeamMembers() {
  return (
    <div className="space-y-4">
      {teamMembers.map((member) => (
        <div key={member.name} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={member.avatar} />
              <AvatarFallback>{member.initials}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">{member.name}</p>
              <p className="text-xs text-muted-foreground">{member.role}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant={
              member.status === 'active' ? 'default' :
              member.status === 'busy' ? 'secondary' :
              'outline'
            }>
              {member.status}
            </Badge>
          </div>
        </div>
      ))}
    </div>
  )
} 