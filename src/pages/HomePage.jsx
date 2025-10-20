import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  Zap, 
  TrendingDown, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  Phone, 
  Building,
  PiggyBank,
  Users,
  Award
} from 'lucide-react'
import SupplierLogos from '../components/SupplierLogos'
import TrustPilot from '../components/TrustPilot'

const HomePage = () => {
  const [currentStat, setCurrentStat] = useState(0)

  const stats = [
    { value: '£8.5M+', label: 'Saved for Businesses' },
    { value: '900K+', label: 'Happy Customers' },
    { value: '30+', label: 'Energy Suppliers' },
    { value: '45%', label: 'Average Savings' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const services = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Business Electricity',
      description: 'Compare electricity prices from 30+ suppliers and switch in minutes',
      link: '/business-electricity',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: 'Business Gas',
      description: 'Find cheaper gas rates and save up to 40% on your bills',
      link: '/business-gas',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Renewable Energy',
      description: '100% green energy options for eco-conscious businesses',
      link: '/renewable-energy',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Multi-Site Energy',
      description: 'Manage multiple business locations with one simple solution',
      link: '/multi-site-energy',
      color: 'from-purple-500 to-pink-600'
    }
  ]

  const benefits = [
    {
      icon: <PiggyBank className="h-6 w-6" />,
      title: 'Save Up to 45%',
      description: 'Our customers save an average of £3,500 per year on energy bills'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Switch in Minutes',
      description: 'Simple online process - we handle everything for you'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'No Interruption',
      description: 'Your supply continues seamlessly during the switch'
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Expert Support',
      description: 'Dedicated account managers guide you through the process'
    }
  ]

  const process = [
    {
      step: '1',
      title: 'Tell Us About Your Business',
      description: 'Share your current energy usage and business details'
    },
    {
      step: '2',
      title: 'We Compare The Market',
      description: 'We search 30+ suppliers to find you the best deals'
    },
    {
      step: '3',
      title: 'Choose Your New Supplier',
      description: 'Review quotes and select the perfect plan for your needs'
    },
    {
      step: '4',
      title: 'We Handle The Switch',
      description: 'Sit back while we manage the entire switching process'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-4000"></div>
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-primary-100 to-secondary-100 px-4 py-2 rounded-full mb-6">
                <Star className="h-5 w-5 text-yellow-500 mr-2" />
                <span className="text-sm font-semibold text-gray-800">Trusted by 900,000+ UK Businesses</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Switch & Save on
                <span className="gradient-text"> Business Energy</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Compare business electricity and gas prices from 30+ suppliers. 
                Save up to 45% on your energy bills with zero hassle.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="https://app.watt.co.uk/company"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient"
                >
                  Get Instant Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="tel:+441618338661"
                  className="btn-outline"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call 0161 833 8661
                </a>
              </div>
              
              {/* Stats Carousel */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold gradient-text">{stats[currentStat].value}</div>
                    <div className="text-sm text-gray-600">{stats[currentStat].label}</div>
                  </div>
                  <div className="flex space-x-1">
                    {stats.map((_, index) => (
                      <div
                        key={index}
                        className={`h-2 transition-all duration-300 rounded-full ${
                          index === currentStat ? 'w-8 bg-gradient-to-r from-primary-500 to-secondary-500' : 'w-2 bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Hero Image & Quote Form */}
            <div className="space-y-8">
              {/* Professional Hero Image */}
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop" 
                  alt="Modern business office representing energy efficiency"
                  className="rounded-2xl shadow-2xl w-full h-64 object-cover"
                />
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">£8.5M+</p>
                      <p className="text-sm text-gray-600">Saved for Businesses</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quote Form */}
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">Get Your Free Quote</h2>
              <form className="space-y-4">
                <div>
                  <label className="form-label">Business Name</label>
                  <input type="text" className="form-input" placeholder="Your Company Ltd" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-input" placeholder="John" />
                  </div>
                  <div>
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-input" placeholder="Smith" />
                  </div>
                </div>
                <div>
                  <label className="form-label">Business Postcode</label>
                  <input type="text" className="form-input" placeholder="M1 1AA" />
                </div>
                <div>
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-input" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-input" placeholder="0161 123 4567" />
                </div>
                <button type="submit" className="btn-gradient w-full">
                  Compare Prices Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <p className="text-xs text-gray-500 text-center">
                  By submitting, you agree to our Terms & Conditions and Privacy Policy
                </p>
              </form>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supplier Logos */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="container">
          <div className="text-center mb-6">
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
              We compare prices from all major UK energy suppliers
            </p>
          </div>
          <SupplierLogos />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="gradient-text">Energy Services</span>
            </h2>
            <p className="text-xl text-gray-600">
              Complete business energy solutions under one roof
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-90`}></div>
                <div className="relative z-10 p-8 text-white">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white/90 mb-4">{service.description}</p>
                  <span className="inline-flex items-center text-white font-semibold">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose <span className="gradient-text">Switch Watt</span>?
            </h2>
            <p className="text-xl text-gray-600">
              We make switching business energy simple, fast, and profitable
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

      {/* How It Works */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xl text-gray-600">
              Four simple steps to cheaper business energy
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent"></div>
                )}
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4 shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Pilot Reviews */}
      <TrustPilot />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Saving on Your Energy Bills?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of UK businesses already saving with Switch Watt. 
            Get your free quote in under 60 seconds!
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
              Call Us Free
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage