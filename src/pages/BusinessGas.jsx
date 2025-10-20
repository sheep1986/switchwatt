import React, { useState } from 'react'
import { 
  Flame, 
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
  Award,
  FileText,
  Calculator,
  Thermometer,
  BarChart3
} from 'lucide-react'
import SupplierLogos from '../components/SupplierLogos'

const BusinessGas = () => {
  const [activeTab, setActiveTab] = useState(0)

  const stats = [
    { value: '40%', label: 'Average Savings' },
    { value: '30+', label: 'Gas Suppliers' },
    { value: '99.9%', label: 'Switch Success Rate' },
    { value: '£2,800', label: 'Average Annual Savings' }
  ]

  const contractTypes = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Fixed Rate Gas Contracts',
      description: 'Lock in your gas rates for 1-5 years for budget certainty',
      features: ['Price protection from market volatility', 'Budget certainty for planning', 'No surprise bill increases'],
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: <TrendingDown className="h-8 w-8" />,
      title: 'Variable Rate Plans',
      description: 'Flexible pricing that moves with wholesale gas market rates',
      features: ['Benefit from falling market prices', 'No long-term commitment', 'Market price transparency'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: 'Green Gas Plans',
      description: 'Carbon neutral gas with renewable gas certificates',
      features: ['Carbon neutral emissions', 'Renewable gas certificates', 'Enhance your green credentials'],
      color: 'from-green-400 to-emerald-600'
    }
  ]

  const businessTypes = [
    {
      type: 'Small Business',
      usage: 'Up to 73,200 kWh/year',
      savings: 'Save £300-1,500',
      features: ['Simple online switching', 'Competitive rates', 'No exit fees']
    },
    {
      type: 'Medium Business',
      usage: '73,200-732,000 kWh/year',
      savings: 'Save £1,500-6,000',
      features: ['Dedicated account manager', 'Bespoke pricing', 'Contract negotiation']
    },
    {
      type: 'Large Enterprise',
      usage: '732,000+ kWh/year',
      savings: 'Save £6,000+',
      features: ['Portfolio management', 'Risk management', 'Procurement support']
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
      title: 'Quick & Easy',
      description: 'Switch in minutes with our streamlined process'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'No Interruption',
      description: 'Your gas supply continues seamlessly'
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Expert Support',
      description: 'Dedicated energy consultants guide you through'
    }
  ]

  const process = [
    {
      step: '1',
      title: 'Share Your Details',
      description: 'Tell us about your business and current gas usage'
    },
    {
      step: '2',
      title: 'Compare Quotes',
      description: 'We search 30+ suppliers to find the best gas rates'
    },
    {
      step: '3',
      title: 'Choose Your Deal',
      description: 'Select the perfect contract for your business needs'
    },
    {
      step: '4',
      title: 'We Handle Everything',
      description: 'Sit back while we manage the entire switching process'
    }
  ]

  const gasUsageGuide = [
    {
      business: 'Small Office',
      employees: '5-20',
      usage: '5,000-15,000 kWh',
      cost: '£500-1,500'
    },
    {
      business: 'Restaurant',
      employees: '10-50',
      usage: '15,000-50,000 kWh',
      cost: '£1,500-5,000'
    },
    {
      business: 'Small Factory',
      employees: '20-100',
      usage: '50,000-200,000 kWh',
      cost: '£5,000-20,000'
    },
    {
      business: 'Large Factory',
      employees: '100+',
      usage: '200,000+ kWh',
      cost: '£20,000+'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-blue-50"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-4000"></div>
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-secondary-100 to-primary-100 px-4 py-2 rounded-full mb-6">
                <Flame className="h-5 w-5 text-secondary-500 mr-2" />
                <span className="text-sm font-semibold text-gray-800">Business Gas Specialists</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Compare Business
                <span className="gradient-text"> Gas Prices</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Switch to cheaper business gas rates and save up to 40% on your bills. 
                Compare quotes from 30+ UK gas suppliers in minutes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="https://app.watt.co.uk/company"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient"
                >
                  Get Instant Gas Quotes
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
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md p-4 text-center">
                    <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Quote Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Get Your Free Gas Quote</h2>
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
                  <label className="form-label">Annual Gas Usage (kWh)</label>
                  <select className="form-input">
                    <option>Up to 25,000 kWh</option>
                    <option>25,000 - 75,000 kWh</option>
                    <option>75,000 - 250,000 kWh</option>
                    <option>250,000+ kWh</option>
                  </select>
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
                  Compare Gas Prices
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <p className="text-xs text-gray-500 text-center">
                  By submitting, you agree to our Terms & Conditions and Privacy Policy
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Supplier Logos */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="container">
          <div className="text-center mb-6">
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
              We compare business gas prices from all major UK suppliers
            </p>
          </div>
          <SupplierLogos />
        </div>
      </section>

      {/* Contract Types */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Choose Your <span className="gradient-text">Gas Contract</span>
            </h2>
            <p className="text-xl text-gray-600">
              Find the perfect gas plan for your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {contractTypes.map((contract, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${contract.color} opacity-90`}></div>
                <div className="relative z-10 p-8 text-white">
                  <div className="mb-4">{contract.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{contract.title}</h3>
                  <p className="text-white/90 mb-6">{contract.description}</p>
                  <ul className="space-y-2">
                    {contract.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gas Usage Guide */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Business Gas <span className="gradient-text">Usage Guide</span>
            </h2>
            <p className="text-xl text-gray-600">
              Typical gas consumption by business type
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {gasUsageGuide.map((guide, index) => (
              <div key={index} className="feature-card text-center">
                <Thermometer className="h-12 w-12 text-secondary-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 gradient-text">{guide.business}</h3>
                <div className="space-y-2 text-gray-600">
                  <div><strong>Employees:</strong> {guide.employees}</div>
                  <div><strong>Usage:</strong> {guide.usage}</div>
                  <div><strong>Annual Cost:</strong> {guide.cost}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Types */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Gas Plans for <span className="gradient-text">Every Business</span>
            </h2>
            <p className="text-xl text-gray-600">
              Tailored solutions for businesses of all sizes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {businessTypes.map((business, index) => (
              <div key={index} className="feature-card text-center">
                <h3 className="text-2xl font-bold mb-3 gradient-text">{business.type}</h3>
                <div className="text-lg text-gray-600 mb-2">{business.usage}</div>
                <div className="text-xl font-bold text-secondary-600 mb-6">{business.savings}</div>
                <ul className="space-y-3 text-left">
                  {business.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Why Switch Your <span className="gradient-text">Business Gas</span>?
            </h2>
            <p className="text-xl text-gray-600">
              The benefits of switching with Switch Watt
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="feature-card text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-100 to-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-secondary-600">{benefit.icon}</span>
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
              How to Switch <span className="gradient-text">Business Gas</span>
            </h2>
            <p className="text-xl text-gray-600">
              Four simple steps to cheaper business gas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent"></div>
                )}
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-secondary-500 to-primary-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4 shadow-lg">
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

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Business Gas <span className="gradient-text">FAQs</span>
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="feature-card">
              <h3 className="text-lg font-bold mb-3">How much can I save on business gas?</h3>
              <p className="text-gray-600">Most businesses save between 15-40% on their gas bills. The exact amount depends on your current rates, usage, and the deals available when you switch.</p>
            </div>
            <div className="feature-card">
              <h3 className="text-lg font-bold mb-3">Will switching affect my gas supply?</h3>
              <p className="text-gray-600">No, your gas supply will not be interrupted when you switch. The same pipes and infrastructure deliver your gas - only your supplier and bill change.</p>
            </div>
            <div className="feature-card">
              <h3 className="text-lg font-bold mb-3">How long does it take to switch business gas?</h3>
              <p className="text-gray-600">The switching process typically takes 2-3 weeks from contract signing. We handle all the paperwork and coordination with your old and new suppliers.</p>
            </div>
            <div className="feature-card">
              <h3 className="text-lg font-bold mb-3">What is the difference between gas units and kWh?</h3>
              <p className="text-gray-600">Gas is measured in cubic meters or feet, then converted to kilowatt hours (kWh) for billing. 1 cubic meter equals approximately 11.1 kWh.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary-500 to-primary-500">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Switch Your Business Gas?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Compare gas prices from 30+ suppliers and start saving on your business energy bills today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://app.watt.co.uk/company"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-secondary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl inline-flex items-center justify-center"
            >
              Get Free Gas Quotes
              <ArrowRight className="ml-3 h-6 w-6" />
            </a>
            <a
              href="tel:+441618338661"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-secondary-600 transition-all inline-flex items-center justify-center"
            >
              <Phone className="mr-3 h-6 w-6" />
              Call Our Experts
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BusinessGas
