'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/dashboard/overview"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { ProjectsOverview } from "@/components/dashboard/projects-overview"
import { TeamMembers } from "@/components/dashboard/team-members"
import { MetricsCards } from "@/components/dashboard/metrics-cards"

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      {/* Key Metrics */}
      <MetricsCards />

      {/* Main Content */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        {/* Analytics Overview */}
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Analytics Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <Overview />
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentActivity />
          </CardContent>
        </Card>

        {/* Projects Overview */}
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <ProjectsOverview />
          </CardContent>
        </Card>

        {/* Team Members */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Team Members</CardTitle>
          </CardHeader>
          <CardContent>
            <TeamMembers />
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 