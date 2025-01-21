import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="font-bold text-xl">
            AgriTech Africa
          </Link>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-700 hover:text-primary">
              About
            </Link>
            <Link href="#" className="text-gray-700 hover:text-primary">
              Services
            </Link>
            <Link href="#" className="text-gray-700 hover:text-primary">
              Contact
            </Link>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

