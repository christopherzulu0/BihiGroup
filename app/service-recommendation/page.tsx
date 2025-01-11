'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowRight } from 'lucide-react'

const questions = [
  {
    id: 'company-size',
    question: 'What is the size of your company?',
    options: ['1-10', '11-50', '51-200', '201+'],
  },
  {
    id: 'industry',
    question: 'What industry are you in?',
    options: ['Technology', 'Finance', 'Healthcare', 'Retail', 'Other'],
  },
  {
    id: 'challenge',
    question: 'What is your biggest business challenge?',
    options: ['Efficiency', 'Growth', 'Competition', 'Innovation'],
  },
]

const recommendations = {
  'small-tech-efficiency': 'Business Consulting',
  'large-finance-growth': 'Data Analytics',
  'medium-healthcare-innovation': 'Security Solutions',
  'default': 'Team Development',
}

export default function ServiceRecommendationPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [recommendation, setRecommendation] = useState<string | null>(null)

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: answer })
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Generate recommendation based on answers
      const key = `${answers['company-size']}-${answers['industry']}-${answer}`.toLowerCase()
      setRecommendation(recommendations[key as keyof typeof recommendations] || recommendations.default)
    }
  }

  return (
    <div className="container py-24">
      <h1 className="text-4xl font-bold mb-8 text-center">Service Recommendation Engine</h1>
      
      {recommendation ? (
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Our Recommendation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold mb-4">
              Based on your responses, we recommend our {recommendation} service.
            </p>
            <p className="mb-4">
              This service is tailored to address the unique challenges faced by businesses like yours.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <a href={`/services/${recommendation.toLowerCase().replace(' ', '-')}`}>
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>{questions[currentQuestion].question}</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup onValueChange={handleAnswer}>
              {questions[currentQuestion].options.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option}>{option}</Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

