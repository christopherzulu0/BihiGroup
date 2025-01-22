import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const metrics = [
  { label: "Jobs Created", value: 100000, unit: "jobs" },
  { label: "Renewable Energy Capacity", value: 1000, unit: "MW" },
  { label: "People with Improved Access to Clean Water", value: 5000000, unit: "people" },
  { label: "Sustainable Agriculture Land", value: 500000, unit: "hectares" },
]

export function ImpactMetrics() {
  const { ref, inView } = useInView({ triggerOnce: true })
  const [counts, setCounts] = useState(metrics.map(() => 0))

  if (inView) {
    metrics.forEach((metric, index) => {
      setTimeout(() => {
        const interval = setInterval(() => {
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts]
            if (newCounts[index] < metric.value) {
              newCounts[index] += Math.ceil(metric.value / 100)
              if (newCounts[index] > metric.value) newCounts[index] = metric.value
            }
            return newCounts
          })
        }, 20)

        setTimeout(() => clearInterval(interval), 2000)
      }, index * 200)
    })
  }

  return (
    <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {metrics.map((metric, index) => (
        <motion.div
          key={index}
          className="bg-white p-6 rounded-lg shadow-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h3 className="text-2xl font-bold mb-2">{counts[index].toLocaleString()}</h3>
          <p className="text-gray-600">{metric.unit}</p>
          <p className="text-lg font-semibold mt-2">{metric.label}</p>
        </motion.div>
      ))}
    </div>
  )
}

