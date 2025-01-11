import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function CTASection() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join thousands of companies that trust BihiGroup for their business solutions.
            Let's start your digital transformation journey today.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              Get Started
            </Button>
          </form>
          <p className="text-sm text-gray-400 mt-4">
            We'll get back to you within 24 hours
          </p>
        </div>
      </div>
    </section>
  )
}

