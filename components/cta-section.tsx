import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            Join thousands of companies that trust BihiGroup for their business solutions.
            Let's start your digital transformation journey today.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 flex-grow"
            />
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 transition-colors duration-300 w-full sm:w-auto">
              Get Started
            </Button>
          </form>
          <p className="text-sm text-blue-200 mt-4">
            We'll get back to you within 24 hours
          </p>
        </div>
      </div>
    </section>
  )
}