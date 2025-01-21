import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface ProjectShowcaseProps {
  name: string
  description: string
}

export function ProjectShowcase({ name, description }: ProjectShowcaseProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
        <Image
          src={`/placeholder.svg?height=400&width=600&text=${name}`}
          alt={name}
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-2xl font-bold mb-4">{name}</h3>
        <p className="text-gray-700 mb-6">{description}</p>
        <Button>Learn More</Button>
      </motion.div>
    </div>
  )
}

