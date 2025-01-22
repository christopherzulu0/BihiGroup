import { useState } from "react"
import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const regions = ["West Africa", "East Africa", "North Africa", "Southern Africa", "Central Africa"]

export function ImpactMap() {
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
          src={`/placeholder.svg?height=400&width=600&text=Impact+Map+for+${selectedRegion}`}
          alt={`Renewable energy impact map for ${selectedRegion}`}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <p className="mt-4 text-sm text-gray-600">
        Our renewable energy and environmental solutions impact in {selectedRegion} as of{" "}
        {new Date().toLocaleDateString()}. Impact may vary by location.
      </p>
    </div>
  )
}

