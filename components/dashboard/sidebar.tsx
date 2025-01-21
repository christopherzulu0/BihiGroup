'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Users,
  FolderKanban,
  BarChart3,
  Settings,
  HelpCircle,
} from "lucide-react"

const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
  },
  {
    label: 'Team',
    icon: Users,
    href: '/dashboard/team',
  },
  {
    label: 'Projects',
    icon: FolderKanban,
    href: '/dashboard/projects',
  },
  {
    label: 'Analytics',
    icon: BarChart3,
    href: '/dashboard/analytics',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/dashboard/settings',
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-[200px] flex-col border-r bg-muted/10">
      <div className="flex h-14 items-center border-b px-3">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="text-xl">🚀</span>
          BihiGroup
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-2 text-sm font-medium">
          {routes.map((route, i) => (
            <Link
              key={i}
              href={route.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground",
                pathname === route.href && "bg-muted text-foreground"
              )}
            >
              <route.icon className="h-4 w-4" />
              {route.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mt-auto p-4">
        <Link
          href="/help"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <HelpCircle className="h-4 w-4" />
          Help & Support
        </Link>
      </div>
    </div>
  )
} 