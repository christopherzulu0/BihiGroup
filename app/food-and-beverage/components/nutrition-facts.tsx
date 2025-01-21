import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function NutritionFacts() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center">Nutrition Facts</CardTitle>
      </CardHeader>
      <CardContent>
        <table className="w-full text-sm">
          <tbody>
            <tr className="border-b">
              <td className="py-1 font-bold">Serving Size</td>
              <td className="py-1 text-right">1 cup (240ml)</td>
            </tr>
            <tr className="border-b">
              <td colSpan={2} className="py-2 font-bold">
                Amount Per Serving
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-1">
                <strong>Calories</strong>
              </td>
              <td className="py-1 text-right">120</td>
            </tr>
            <tr className="border-b">
              <td colSpan={2} className="py-2 text-right">
                <strong>% Daily Value*</strong>
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-1">
                <strong>Total Fat</strong> 2g
              </td>
              <td className="py-1 text-right">3%</td>
            </tr>
            <tr className="border-b">
              <td className="py-1 pl-4">Saturated Fat 0g</td>
              <td className="py-1 text-right">0%</td>
            </tr>
            <tr className="border-b">
              <td className="py-1">
                <strong>Sodium</strong> 15mg
              </td>
              <td className="py-1 text-right">1%</td>
            </tr>
            <tr className="border-b">
              <td className="py-1">
                <strong>Total Carbohydrate</strong> 23g
              </td>
              <td className="py-1 text-right">8%</td>
            </tr>
            <tr className="border-b">
              <td className="py-1 pl-4">Dietary Fiber 1g</td>
              <td className="py-1 text-right">4%</td>
            </tr>
            <tr className="border-b">
              <td className="py-1 pl-4">Total Sugars 18g</td>
              <td className="py-1 text-right"></td>
            </tr>
            <tr className="border-b">
              <td className="py-1">
                <strong>Protein</strong> 3g
              </td>
              <td className="py-1 text-right">6%</td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs mt-2">* Percent Daily Values are based on a 2,000 calorie diet.</p>
      </CardContent>
    </Card>
  )
}

