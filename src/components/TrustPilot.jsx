import React from 'react'
import { Star, CheckCircle } from 'lucide-react'

const TrustPilot = () => {
  const reviews = [
    {
      name: "Sarah Mitchell",
      company: "Tech Solutions Ltd",
      rating: 5,
      review: "Switch Watt saved us £8,500 on our annual energy bills! The switching process was seamless and their team was incredibly helpful.",
      date: "2 days ago",
      verified: true
    },
    {
      name: "James Thompson", 
      company: "Manchester Retail Group",
      rating: 5,
      review: "Excellent service! They found us a much better deal on our business electricity and handled everything. Highly recommend!",
      date: "1 week ago",
      verified: true
    },
    {
      name: "Emma Davies",
      company: "Davies Manufacturing",
      rating: 5,
      review: "We've been using Switch Watt for 3 years now. They consistently find us the best energy deals and save us thousands every year.",
      date: "2 weeks ago",
      verified: true
    },
    {
      name: "Robert Chen",
      company: "Restaurant Chain UK",
      rating: 5,
      review: "Professional, efficient, and saved us over 35% on our gas and electricity. Can't ask for more!",
      date: "3 weeks ago",
      verified: true
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Trusted</span> by Thousands of UK Businesses
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-green-500 fill-current" />
              ))}
            </div>
            <span className="text-xl font-bold">4.9/5</span>
            <span className="text-gray-600">based on 2,847 reviews</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-green-600 font-semibold">Excellent</span>
            <span className="text-gray-600">on</span>
            <div className="inline-flex items-center space-x-1">
              <Star className="h-5 w-5 text-green-500 fill-current" />
              <span className="font-bold text-gray-800">Trustpilot</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-green-500 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                "{review.review}"
              </p>
              
              <div className="border-t pt-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-600">{review.company}</p>
                  </div>
                  {review.verified && (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  )}
                </div>
                <p className="text-xs text-gray-500">{review.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a 
            href="https://www.trustpilot.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-outline"
          >
            View All Reviews on Trustpilot
          </a>
        </div>
      </div>
    </section>
  )
}

export default TrustPilot