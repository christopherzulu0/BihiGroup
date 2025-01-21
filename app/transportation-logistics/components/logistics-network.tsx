import { useState } from "react"
import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const regions = ["West Africa", "East Africa", "North Africa", "Southern Africa", "Central Africa"]

export function LogisticsNetwork() {
  const [selectedRegion, setSelectedRegion] = useState(regions[0])

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="mb-4">
        <Select onValueChange={setSelectedRegion} defaultValue={selectedRegion}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a region" />
          </SelectTrigger>
          <SelectContent>
            {regions.map((region) => (
              <SelectItem key={region} value={region}>
                {region}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="relative h-[400px] w-full">
        <Image
          src={`/placeholder.svg?height=400&width=600&text=Logistics+Network+in+${selectedRegion}`}
          alt={`Logistics network map for ${selectedRegion}`}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <p className="mt-4 text-sm text-gray-600">
        Our logistics network in {selectedRegion} as of {new Date().toLocaleDateString()}. Network coverage may vary.
      </p>
    </div>
  )
}

