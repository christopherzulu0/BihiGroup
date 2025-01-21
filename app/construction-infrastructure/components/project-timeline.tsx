import { motion } from "framer-motion"

const timelineSteps = [
  { title: "Planning", description: "Project conceptualization and feasibility studies" },
  { title: "Design", description: "Detailed engineering and architectural designs" },
  { title: "Procurement", description: "Sourcing materials and selecting contractors" },
  { title: "Construction", description: "Building and implementing the project" },
  { title: "Quality Assurance", description: "Rigorous testing and quality checks" },
  { title: "Handover", description: "Project completion and client handover" },
]

export function ProjectTimeline() {
  return (
    <div className="relative">
      {timelineSteps.map((step, index) => (
        <motion.div
          key={index}
          className="mb-8 flex"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
            {index + 1}
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        </motion.div>
      ))}
      <div className="absolute left-5 top-0 h-full w-0.5 bg-gray-200" />
    </div>
  )
}

