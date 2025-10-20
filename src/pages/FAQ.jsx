import React, { useState } from 'react'
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronRight, 
  ArrowRight, 
  Phone, 
  Search,
  Zap,
  Shield,
  Clock,
  PiggyBank
} from 'lucide-react'

const FAQ = () => {
  const [openItems, setOpenItems] = useState({})
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const categories = [
    { id: 'all', name: 'All Questions', icon: <HelpCircle className="h-5 w-5" /> },
    { id: 'switching', name: 'Switching Process', icon: <Zap className="h-5 w-5" /> },
    { id: 'savings', name: 'Savings & Costs', icon: <PiggyBank className="h-5 w-5" /> },
    { id: 'security', name: 'Security & Legal', icon: <Shield className="h-5 w-5" /> },
    { id: 'timing', name: 'Timing & Duration', icon: <Clock className="h-5 w-5" /> }
  ]

  const faqs = [
    {
      id: 1,
      category: 'switching',
      question: 'How does business energy switching work?',
      answer: 'Business energy switching involves comparing rates from different suppliers and moving your business to a better deal. We handle the entire process: from comparing prices across 30+ suppliers, to negotiating the best rates, to managing the switch with zero interruption to your supply.'
    },
    {
      id: 2,
      category: 'savings',
      question: 'How much money can my business save by switching?',
      answer: 'Most businesses save between 20-45% on their energy bills. The average saving is £3,500 per year for electricity and £2,800 for gas. Your exact savings depend on your current rates, usage, and the deals available when you switch.'
    },
    {
      id: 3,
      category: 'switching',
      question: 'Will my energy supply be interrupted when I switch?',
      answer: 'No, your energy supply will not be interrupted. The same wires and pipes deliver your energy - only your supplier and bill change. The switch happens seamlessly in the background while you continue to receive uninterrupted power and gas.'
    },
    {
      id: 4,
      category: 'timing',
      question: 'How long does it take to switch business energy suppliers?',
      answer: 'The switching process typically takes 2-3 weeks from contract signing. However, you can get quotes instantly and we can often fast-track urgent switches. We handle all paperwork and coordination with both your old and new suppliers.'
    },
    {
      id: 5,
      category: 'security',
      question: 'Is it safe to switch energy suppliers?',
      answer: 'Yes, switching energy suppliers is completely safe and regulated by Ofgem. All suppliers must meet strict financial and operational standards. Your supply is protected regardless of which supplier you choose, and we only work with accredited, reliable suppliers.'
    },
    {
      id: 6,
      category: 'savings',
      question: 'Are there any fees for using Switch Watt?',
      answer: 'No, our service is completely free for businesses. We are paid by the energy suppliers when you switch, so there are no costs or hidden fees for you. You only benefit from the savings we negotiate on your behalf.'
    },
    {
      id: 7,
      category: 'timing',
      question: 'When is the best time to switch energy suppliers?',
      answer: 'The best time to switch is 3-6 months before your current contract expires. This gives us time to negotiate the best deals and avoid expensive rollover rates. However, if you\'re out of contract, you can switch immediately to start saving right away.'
    },
    {
      id: 8,
      category: 'switching',
      question: 'What information do I need to get a quote?',
      answer: 'To get an accurate quote, we need your business postcode, annual energy usage (found on your bill), and contact details. If you have your account numbers and MPAN/MPRN meter references, this helps speed up the process.'
    },
    {
      id: 9,
      category: 'security',
      question: 'What is a Letter of Authority and why do I need one?',
      answer: 'A Letter of Authority (LOA) is a legal document that gives us permission to act on your behalf with energy suppliers. It allows us to compare prices, negotiate deals, and manage your switch. The LOA is limited in scope and can be revoked at any time.'
    },
    {
      id: 10,
      category: 'savings',
      question: 'Can I switch both electricity and gas together?',
      answer: 'Yes, you can switch both electricity and gas at the same time. This is often more convenient and can sometimes lead to better dual-fuel discounts. We can also switch them separately if you prefer different suppliers for each.'
    },
    {
      id: 11,
      category: 'switching',
      question: 'What happens if I\'m not happy with my new supplier?',
      answer: 'If you\'re not satisfied with your new supplier, we can help you switch again. Most business contracts have a 14-day cooling-off period. We maintain ongoing relationships to ensure you continue getting the best service and rates.'
    },
    {
      id: 12,
      category: 'timing',
      question: 'Can I switch if I\'m still in contract?',
      answer: 'If you\'re still in contract, you may face early termination fees. However, we can review your current contract and calculate whether the savings from switching outweigh any exit fees. Sometimes the long-term benefits make it worthwhile.'
    },
    {
      id: 13,
      category: 'security',
      question: 'How do I know the quotes are accurate?',
      answer: 'All our quotes are based on real-time market prices from verified suppliers. We use your actual usage data to ensure accuracy. Our quotes are guaranteed for the proposal period, and we\'ll honor the prices we present to you.'
    },
    {
      id: 14,
      category: 'savings',
      question: 'What types of business energy contracts are available?',
      answer: 'We offer various contract types including fixed-rate (price locked for 1-5 years), variable-rate (follows market prices), and green energy contracts (100% renewable). We\'ll recommend the best option based on your business needs and risk tolerance.'
    },
    {
      id: 15,
      category: 'switching',
      question: 'Do I need to change my meter when I switch?',
      answer: 'No, you don\'t need to change your meter when switching suppliers. Your existing meter will continue to work with your new supplier. If you need a new meter for other reasons, your new supplier can arrange this separately.'
    }
  ]

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

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
              <HelpCircle className="h-5 w-5 text-primary-500 mr-2" />
              <span className="text-sm font-semibold text-gray-800">Frequently Asked Questions</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Energy Switching
              <span className="gradient-text"> FAQs</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get answers to common questions about business energy switching, savings, 
              and how Switch Watt can help your business reduce energy costs.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 pl-12 rounded-full border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`inline-flex items-center px-6 py-3 rounded-full font-semibold transition-all ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-12">
                <HelpCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No questions found</h3>
                <p className="text-gray-500">Try adjusting your search or category filter.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFaqs.map((faq) => (
                  <div key={faq.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                      {openItems[faq.id] ? (
                        <ChevronDown className="h-6 w-6 text-primary-500 flex-shrink-0" />
                      ) : (
                        <ChevronRight className="h-6 w-6 text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                    {openItems[faq.id] && (
                      <div className="px-8 pb-6">
                        <div className="border-t border-gray-100 pt-6">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quick Help Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Still Have <span className="gradient-text">Questions</span>?
              </h2>
              <p className="text-xl text-gray-600">
                Our energy experts are here to help
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <Phone className="h-12 w-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Call Our Experts</h3>
                <p className="text-gray-600 mb-6">
                  Speak directly with our energy switching specialists for personalized advice.
                </p>
                <a
                  href="tel:+441618338661"
                  className="btn-gradient"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call 0161 833 8661
                </a>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <Zap className="h-12 w-12 text-secondary-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Get Instant Quote</h3>
                <p className="text-gray-600 mb-6">
                  Start comparing energy prices now and see how much you could save.
                </p>
                <a
                  href="https://app.watt.co.uk/company"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Popular <span className="gradient-text">Topics</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="feature-card text-center">
              <Zap className="h-12 w-12 text-primary-500 mx-auto mb-4" />
              <h3 className="font-bold mb-2">How Switching Works</h3>
              <p className="text-gray-600 text-sm">Learn about the simple process of changing energy suppliers</p>
            </div>
            <div className="feature-card text-center">
              <PiggyBank className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Potential Savings</h3>
              <p className="text-gray-600 text-sm">Discover how much your business could save on energy bills</p>
            </div>
            <div className="feature-card text-center">
              <Shield className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Safety & Security</h3>
              <p className="text-gray-600 text-sm">Understand the protections in place when switching</p>
            </div>
            <div className="feature-card text-center">
              <Clock className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Timing & Duration</h3>
              <p className="text-gray-600 text-sm">Find out when and how long the switching process takes</p>
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
            Don't let your questions hold you back. Start comparing energy prices 
            today and see how much your business could save.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://app.watt.co.uk/company"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl inline-flex items-center justify-center"
            >
              Compare Energy Prices
              <ArrowRight className="ml-3 h-6 w-6" />
            </a>
            <a
              href="tel:+441618338661"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary-600 transition-all inline-flex items-center justify-center"
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

export default FAQ
