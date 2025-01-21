'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useQuery } from "@tanstack/react-query"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Overview } from "@/components/dashboard/overview"

type AnalyticsData = {
  id: string
  type: 'revenue' | 'performance' | 'engagement'
  metrics: {
    name: string
    value: number
    unit: string
  }[]
  period: {
    start: string
    end: string
  }
}

export default function AnalyticsPage() {
  const { data: analytics, isLoading } = useQuery<AnalyticsData[]>({
    queryKey: ['analytics'],
    queryFn: async () => {
      const response = await fetch('/api/analytics')
      return response.json()
    }
  })

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Analytics</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {analytics?.map((metric) => (
          <Card key={metric.id}>
            <CardHeader>
              <CardTitle className="text-sm font-medium">
                {metric.type.charAt(0).toUpperCase() + metric.type.slice(1)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {metric.metrics.map((m, i) => (
                <div key={i} className="mt-2">
                  <p className="text-2xl font-bold">
                    {m.value} {m.unit}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {m.name}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <Overview />
        </CardContent>
      </Card>
    </div>
  )
} 