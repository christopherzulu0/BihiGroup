import { useState } from "react"
import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const countries = ["Kenya", "Nigeria", "South Africa", "Egypt", "Ghana"]

export function CoverageMap() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0])

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="mb-4">
        <Select onValueChange={setSelectedCountry} defaultValue={selectedCountry}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a country" />
          </SelectTrigger>
          <SelectContent>
            {countries.map((country) => (
              <SelectItem key={country} value={country}>
                {country}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="relative h-[400px] w-full">
        <Image
          src={`/placeholder.svg?height=400&width=600&text=Coverage+Map+for+${selectedCountry}`}
          alt={`Network coverage map for ${selectedCountry}`}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <p className="mt-4 text-sm text-gray-600">
        Network coverage as of {new Date().toLocaleDateString()}. Actual coverage may vary.
      </p>
    </div>
  )
}

