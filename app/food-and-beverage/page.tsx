"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { useInView } from "react-intersection-observer"
import { Navigation } from "../components/navigation"
import { ProductShowcase } from "./components/product-showcase"
import { NutritionFacts } from "./components/nutrition-facts"
import { TestimonialCarousel } from "./components/testimonial-carousel"

export default function FoodAndBeveragePage() {
  const [email, setEmail] = useState("")
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true })

  const stats = [
    { label: "Products", value: 50, unit: "varieties" },
    { label: "Distribution", value: 30, unit: "countries" },
    { label: "Quality Certifications", value: 5, unit: "international standards" },
    { label: "Customer Satisfaction", value: 98, unit: "%" },
  ]

  const products = [
    {
      name: "Soft Drinks",
      image: "https://www.coca-cola.com/content/dam/onexp/ng/home-image/brands/fanta/banner%20desktop%20fanta.png",
      description: "Refreshing beverages for every occasion, made with natural ingredients.",
      features: [
        "Natural sweeteners",
        "Zero preservatives",
        "Vitamin-enriched",
        "Multiple flavors"
      ]
    },
    {
      name: "Cooking Oils",
      image: "https://www.holar.com.tw/wp-content/uploads/Holar-Blog-What-are-the-uses-for-different-edible-oils-when-cooking-Cover.jpg",
      description: "High-quality, heart-healthy cooking oils for all your culinary needs.",
      features: [
        "Cold-pressed",
        "Heart-healthy formulation",
        "Multiple varieties",
        "Sustainable sourcing"
      ]
    },
    {
      name: "Wheat Flour",
      image: "https://www.preservemania.com/wp-content/uploads/2024/12/image-972.jpeg",
      description: "Premium wheat flour for perfect baking results every time.",
      features: [
        "High protein content",
        "Fortified with vitamins",
        "Multiple grades available",
        "Consistent quality"
      ]
    },
    {
      name: "Corn Flour",
      image: "https://assets.epicurious.com/photos/663161561bf7ed43154d58dd/16:9/w_4581,h_2577,c_limit/cornstarch-substitutions_HERO_041124_4050_VOG_final.jpg",
      description: "Versatile corn flour for a variety of traditional and modern recipes.",
      features: [
        "Fine texture",
        "GMO-free corn",
        "Gluten-free option",
        "Local sourcing"
      ]
    },
    {
      name: "Ready-to-eat Products",
      image: "https://www.kapilabakers.com/images/slider/erbil-apartment-rent-hawler-iraq-kurdistan-for-rent-main2.png",
      description: "Convenient, nutritious meals for busy lifestyles without compromising on taste.",
      features: [
        "Balanced nutrition",
        "No artificial preservatives",
        "Quick preparation",
        "Traditional recipes"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Navigation /> */}

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-white">
        <Image
          src="https://www.kerry.com/content/dam/kerry/en/images/about/purpose/sustainability/society/community-impact/Nourishing-Communities.jpg"
          alt="Food and Beverage Showcase"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Nourishing Communities
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Delivering high-quality food and beverage products that enhance daily living.
          </motion.p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Food & Beverage Impact</h2>
        <p className="text-lg mb-12 text-gray-700 text-center">
          At Bihi Group, we're committed to providing nutritious and delicious products that cater to the diverse tastes
          of African communities, contributing to healthier and more enjoyable lifestyles.
        </p>
        <div ref={statsRef} className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">{stat.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-center text-primary">{statsInView ? stat.value : "0"}</p>
                  <p className="text-center text-gray-600">{stat.unit}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Product Range</h2>
          <Tabs defaultValue={products[0].name.toLowerCase().replace(" ", "-")} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
              {products.map((product) => (
                <TabsTrigger 
                  key={product.name} 
                  value={product.name.toLowerCase().replace(" ", "-")}
                >
                  {product.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {products.map((product) => (
              <TabsContent 
                key={product.name} 
                value={product.name.toLowerCase().replace(" ", "-")}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="relative h-[300px] w-full">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-lg text-muted-foreground mb-4">
                        {product.description}
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        {product.features.map((feature, index) => (
                          <Card key={index} className="bg-muted/50">
                            <CardContent className="p-4">
                              <p className="text-sm">{feature}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Quality and Nutrition Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Quality & Nutrition</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Commitment to Excellence</h3>
              <p className="text-lg text-gray-700 mb-6">
                We adhere to the highest standards of quality and food safety, ensuring that every product that reaches
                your table is not only delicious but also safe and nutritious.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Rigorous quality control processes</li>
                <li>Use of premium, locally-sourced ingredients</li>
                <li>Compliance with international food safety standards</li>
                <li>Regular nutritional analysis and optimization</li>
              </ul>
            </div>
            <NutritionFacts />
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 px-4 md:px-8 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Sustainable Approach</h2>
          <p className="text-lg mb-12 text-gray-700 text-center">
            We're committed to sustainable practices that benefit our communities and the environment.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Local Sourcing</CardTitle>
              </CardHeader>
              <CardContent>
                We prioritize local farmers and suppliers, supporting community economies and reducing our carbon
                footprint.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Eco-Friendly Packaging</CardTitle>
              </CardHeader>
              <CardContent>
                Our packaging is designed to be recyclable or biodegradable, minimizing environmental impact.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Waste Reduction</CardTitle>
              </CardHeader>
              <CardContent>
                We implement advanced processes to minimize food waste and repurpose by-products.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Our Customers Say</h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 md:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Culinary Journey</h2>
          <p className="text-xl mb-8">
            Be the first to know about our latest products, recipes, and nutritional tips. Sign up for our newsletter
            today!
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <Button size="lg" variant="secondary">
              Explore Recipes
            </Button>
            <div className="flex">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-r-none bg-white text-primary"
              />
              <Button type="submit" className="rounded-l-none">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

