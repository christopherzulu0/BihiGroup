import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface StatCardProps {
  label: string
  value: number
  inView: boolean
}

export function StatCard({ label, value, inView }: StatCardProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (inView) {
      let start = 0
      const end = value
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start > end) {
          clearInterval(timer)
          setCount(end)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [inView, value])

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card>
        <CardHeader>
          <CardTitle className="text-center">{label}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold text-center text-primary">{count.toLocaleString()}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

