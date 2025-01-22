import { motion } from "framer-motion"

const milestones = [
  { year: "2000-2005", event: "Gained experience at UPS and Exel Logistics" },
  { year: "2005-2010", event: "Managed operations at Fort McKay Logistics" },
  { year: "2010-2015", event: "Scaled Richmond Freight System Inc. from 3 to 60 trucks" },
  { year: "2015", event: "Founded Bihi Group" },
  { year: "2016", event: "Launched RoadBarks.com" },
  { year: "2018", event: "Launched GetterHub.com" },
  { year: "2020", event: "Launched OnionTable.com" },
  { year: "2022", event: "Launched GetterHost.com" },
]

export function Timeline() {
  return (
    <div className="relative">
      {milestones.map((milestone, index) => (
        <motion.div
          key={index}
          className="mb-8 flex"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="flex-shrink-0 w-24 text-right pr-4">
            <span className="font-bold">{milestone.year}</span>
          </div>
          <div className="flex-grow pl-4 border-l-2 border-primary">
            <p className="text-gray-700">{milestone.event}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

