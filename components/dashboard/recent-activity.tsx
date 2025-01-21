'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"

const activities = [
  {
    user: {
      name: "John Doe",
      avatar: "/avatars/01.png",
      initials: "JD"
    },
    action: "completed task",
    target: "Homepage Redesign",
    time: "2 hours ago"
  },
  // Add more activities...
]

export function RecentActivity() {
  return (
    <ScrollArea className="h-[400px]">
      <div className="space-y-4">
        {activities.map((activity, i) => (
          <div key={i} className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src={activity.user.avatar} />
              <AvatarFallback>{activity.user.initials}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <p className="text-sm">
                <span className="font-medium">{activity.user.name}</span>
                {' '}{activity.action}{' '}
                <span className="font-medium">{activity.target}</span>
              </p>
              <p className="text-xs text-muted-foreground">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
} 