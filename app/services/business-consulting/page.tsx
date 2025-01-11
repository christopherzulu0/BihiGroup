import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Building2 } from 'lucide-react'

export default function BusinessConsultingPage() {
  return (
    <div className="container py-24">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Business Consulting</h1>
        <p className="text-xl text-muted-foreground">
          Strategic guidance to optimize your business operations and drive growth
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h2 className="text-3xl font-semibold mb-6">Transform Your Business</h2>
          <p className="text-lg mb-6">
            Our expert consultants work closely with you to analyze your business,
            identify opportunities for improvement, and develop tailored strategies
            to achieve your goals.
          </p>
          <ul className="space-y-4">
            {['Strategic Planning', 'Process Optimization', 'Market Analysis', 'Financial Modeling'].map((item) => (
              <li key={item} className="flex items-center">
                <CheckCircle className="text-green-500 mr-2" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Button size="lg" className="mt-8">
            Schedule a Consultation
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl transform rotate-3"></div>
          <Card className="relative">
            <CardContent className="p-8">
              <Building2 className="w-16 h-16 text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
              <ul className="space-y-2">
                <li>Experienced industry experts</li>
                <li>Customized solutions</li>
                <li>Data-driven approach</li>
                <li>Proven track record of success</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="bg-gray-100 rounded-lg p-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Consulting Process</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {['Discovery', 'Analysis', 'Strategy Development', 'Implementation'].map((step, index) => (
            <div key={step} className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step}</h3>
              <p className="text-muted-foreground">
                {index === 0 && "We gather information about your business and goals."}
                {index === 1 && "Our team analyzes your current situation and market."}
                {index === 2 && "We develop a tailored strategy for your success."}
                {index === 3 && "We assist in implementing the recommended changes."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

