import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    const analytics = await db.analyticsData.findMany({
      select: {
        id: true,
        type: true,
        metrics: {
          select: {
            name: true,
            value: true,
            unit: true,
          }
        },
        periodStart: true,
        periodEnd: true,
      }
    })
    
    // Transform the data to match our frontend type
    const transformedAnalytics = analytics.map(item => ({
      id: item.id,
      type: item.type,
      metrics: item.metrics,
      period: {
        start: item.periodStart.toISOString(),
        end: item.periodEnd.toISOString(),
      }
    }))
    
    return NextResponse.json(transformedAnalytics)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    )
  }
} 