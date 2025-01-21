import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const steps = ["Raw Material Sourcing", "Quality Control", "Processing", "Manufacturing", "Packaging", "Distribution"]

export function ProcessFlow() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
      {steps.map((step, index) => (
        <motion.div
          key={step}
          className="flex flex-col items-center mb-4 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-2">
            {index + 1}
          </div>
          <p className="text-center">{step}</p>
          {index < steps.length - 1 && <ArrowRight className="hidden md:block mt-2 text-gray-400" />}
        </motion.div>
      ))}
    </div>
  )
}

