import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function InvestmentCalculator() {
  const [investment, setInvestment] = useState(100000)
  const [years, setYears] = useState(5)
  const [returnRate, setReturnRate] = useState(8)

  const calculateReturn = () => {
    return (investment * Math.pow(1 + returnRate / 100, years)).toFixed(2)
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Investment Calculator</CardTitle>
        <CardDescription>Estimate your potential returns</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="investment">Initial Investment (USD)</Label>
            <Input
              id="investment"
              type="number"
              value={investment}
              onChange={(e) => setInvestment(Number(e.target.value))}
            />
          </div>
          <div>
            <Label htmlFor="years">Investment Period (Years)</Label>
            <Input id="years" type="number" value={years} onChange={(e) => setYears(Number(e.target.value))} />
          </div>
          <div>
            <Label htmlFor="returnRate">Estimated Annual Return (%)</Label>
            <Input
              id="returnRate"
              type="number"
              value={returnRate}
              onChange={(e) => setReturnRate(Number(e.target.value))}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="w-full text-center">
          <p className="text-lg font-semibold mb-2">Estimated Future Value</p>
          <p className="text-3xl font-bold text-primary">${calculateReturn()}</p>
        </div>
      </CardFooter>
    </Card>
  )
}

