import React from 'react'
import { 
  Users, 
  Shield, 
  Star, 
  Award, 
  ArrowRight, 
  Phone, 
  TrendingUp, 
  Target, 
  Heart, 
  CheckCircle,
  Building,
  PiggyBank,
  Clock,
  Zap
} from 'lucide-react'

const AboutPage = () => {
  const stats = [
    { value: '900K+', label: 'Happy Customers' },
    { value: '£8.5M+', label: 'Total Savings' },
    { value: '30+', label: 'Energy Suppliers' },
    { value: '5 Years', label: 'Industry Experience' }
  ]

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Customer First',
      description: 'We put our customers at the heart of everything we do, ensuring they get the best possible service and savings.',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Trust & Transparency',
      description: 'We believe in complete transparency with no hidden fees and honest, straightforward advice.',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Innovation',
      description: 'We continuously improve our technology and processes to deliver better results for our customers.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Results Driven',
      description: 'We measure our success by the savings we deliver and the satisfaction of our customers.',
      color: 'from-orange-500 to-yellow-600'
    }
  ]

  const team = [
    {
      name: 'Sarah Johnson',
      position: 'Managing Director',
      experience: '15+ years in energy',
      description: 'Sarah leads our strategic vision and has helped over 50,000 businesses reduce their energy costs.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      position: 'Head of Technology',
      experience: '12+ years in tech',
      description: 'Michael oversees our digital platform that has streamlined energy switching for thousands of businesses.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Emma Williams',
      position: 'Customer Success Manager',
      experience: '8+ years in customer service',
      description: 'Emma ensures every client receives personalized support throughout their energy switching journey.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'James Thompson',
      position: 'Energy Market Analyst',
      experience: '10+ years in energy markets',
      description: 'James analyzes market trends to secure the most competitive energy deals for our business clients.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
    }
  ]

  const milestones = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'Switch Watt was established with a mission to simplify business energy switching.'
    },
    {
      year: '2020',
      title: 'Digital Platform Launch',
      description: 'Launched our online comparison platform, making it easier for businesses to switch.'
    },
    {
      year: '2022',
      title: '100,000 Customers',
      description: 'Reached our first major milestone of 100,000 satisfied customers.'
    },
    {
      year: '2023',
      title: '£5M Savings Milestone',
      description: 'Helped UK businesses save over £5 million in energy costs.'
    },
    {
      year: '2024',
      title: 'AI Technology Integration',
      description: 'Integrated AI technology to provide even better price predictions and recommendations.'
    }
  ]

  const benefits = [
    {
      icon: <PiggyBank className="h-6 w-6" />,
      title: 'Guaranteed Savings',
      description: 'We only recommend switches that will save you money'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Quick Process',
      description: 'Switch in minutes with our streamlined process'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'No Interruption',
      description: 'Your energy supply continues seamlessly'
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Expert Support',
      description: 'Dedicated energy consultants guide you through'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-2000"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-primary-100 to-secondary-100 px-4 py-2 rounded-full mb-6">
              <Users className="h-5 w-5 text-primary-500 mr-2" />
              <span className="text-sm font-semibold text-gray-800">About Switch Watt</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Making Business Energy
              <span className="gradient-text"> Simple</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We're the UK's leading business energy comparison service, helping over 900,000 
              businesses save money on their electricity and gas bills since 2019.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Switch Watt was founded in 2019 with a simple mission: to make business energy switching 
                transparent, efficient, and profitable for UK businesses. Our founders, frustrated by the 
                complex and time-consuming energy procurement process, decided to create a platform that 
                would democratize access to competitive energy deals.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Since our inception, we've helped over 900,000 businesses across the UK save millions 
                on their energy bills. Our technology-driven approach combines market expertise with 
                customer-focused service to deliver results that matter.
              </p>
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-6 text-white">
                <blockquote className="text-lg italic">
                  "Every business deserves access to fair energy prices. We're here to make that a reality."
                </blockquote>
                <cite className="block mt-3 font-semibold">Sarah Johnson, Managing Director</cite>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" 
                alt="Modern office environment representing Switch Watt team"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Est. 2019</p>
                    <p className="text-sm text-gray-600">Serving UK Businesses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Our <span className="gradient-text">Mission</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              To empower UK businesses with transparent, hassle-free energy switching that 
              delivers real savings and exceptional service.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Shield className="h-12 w-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Transparency</h3>
                <p className="text-gray-600">No hidden fees, clear contracts, honest advice</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <PiggyBank className="h-12 w-12 text-secondary-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Savings</h3>
                <p className="text-gray-600">Guaranteed better deals for your business</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Award className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Service</h3>
                <p className="text-gray-600">Expert support throughout your journey</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-90`}></div>
                <div className="relative z-10 p-8 text-white text-center">
                  <div className="mb-4 mx-auto">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-white/90 text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Our <span className="gradient-text">Journey</span>
              </h2>
              <p className="text-xl text-gray-600">
                Key milestones in our growth and development
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500 opacity-50"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-center mb-12 last:mb-0">
                  <div className="absolute left-8 w-4 h-4 -translate-x-1/2 bg-gradient-to-r from-primary-500 to-secondary-500 border-4 border-white rounded-full shadow-lg"></div>
                  <div className="ml-20 feature-card flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold">{milestone.title}</h3>
                      <span className="text-sm font-semibold gradient-text">{milestone.year}</span>
                    </div>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-gray-600">
              The experts behind your energy savings
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="feature-card text-center">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary-600 font-semibold mb-2">{member.position}</p>
                <p className="text-sm text-gray-500 mb-3">{member.experience}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose <span className="gradient-text">Switch Watt</span>?
            </h2>
            <p className="text-xl text-gray-600">
              The benefits of working with the UK's energy switching experts
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="feature-card text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-600">{benefit.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards and Recognition */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Awards & <span className="gradient-text">Recognition</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="feature-card text-center">
              <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Trustpilot Excellent</h3>
              <p className="text-gray-600">Rated 'Excellent' on Trustpilot with over 10,000 reviews</p>
            </div>
            <div className="feature-card text-center">
              <Award className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Industry Recognition</h3>
              <p className="text-gray-600">Winner of the Business Energy Innovation Award 2023</p>
            </div>
            <div className="feature-card text-center">
              <Building className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Business Focused</h3>
              <p className="text-gray-600">Specialist in business energy with dedicated B2B team</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Saving on Energy?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join over 900,000 UK businesses who trust Switch Watt to manage their 
            energy switching and deliver guaranteed savings.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://app.watt.co.uk/company"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl inline-flex items-center justify-center"
            >
              Get Your Free Quote
              <ArrowRight className="ml-3 h-6 w-6" />
            </a>
            <a
              href="tel:+441618338661"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary-600 transition-all inline-flex items-center justify-center"
            >
              <Phone className="mr-3 h-6 w-6" />
              Call Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage