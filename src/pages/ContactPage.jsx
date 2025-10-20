import React, { useState } from 'react'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  ArrowRight, 
  MessageCircle, 
  Headphones,
  Users,
  Star,
  CheckCircle
} from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Contact form submitted:', formData)
  }

  const contactMethods = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: 'Call Our Experts',
      description: 'Speak directly with our energy switching specialists',
      details: '0161 833 8661',
      action: 'tel:+441618338661',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: 'Live Chat',
      description: 'Get instant answers from our support team',
      details: 'Available 9AM-5PM',
      action: '#',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: 'Email Support',
      description: 'Send us a detailed message about your needs',
      details: 'info@switchwatt.co.uk',
      action: 'mailto:info@switchwatt.co.uk',
      color: 'from-orange-500 to-red-600'
    }
  ]

  const officeInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Office Address',
      details: ['Switch Watt Ltd', 'Energy House', 'Manchester M2 7LP', 'United Kingdom']
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 5:30 PM', 'Saturday: 10:00 AM - 2:00 PM', 'Sunday: Closed']
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: 'Support Hours',
      details: ['Phone Support: 9:00 AM - 5:30 PM', 'Email Support: 24/7', 'Live Chat: 9:00 AM - 5:00 PM']
    }
  ]

  const reasons = [
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Expert Team',
      description: 'Experienced energy consultants ready to help'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Quick Response',
      description: 'Average response time under 2 hours'
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: 'Excellent Service',
      description: 'Rated Excellent on Trustpilot by customers'
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: 'Guaranteed Results',
      description: 'We only recommend money-saving switches'
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
              <Phone className="h-5 w-5 text-primary-500 mr-2" />
              <span className="text-sm font-semibold text-gray-800">Contact Switch Watt</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Get in
              <span className="gradient-text"> Touch</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Ready to start saving on your business energy bills? Our expert team is here 
              to help you find the best deals and guide you through the switching process.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Choose How to <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-xl text-gray-600">
              Multiple ways to get in touch with our energy experts
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-90`}></div>
                <div className="relative z-10 p-8 text-white text-center">
                  <div className="mb-4 mx-auto">{method.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{method.title}</h3>
                  <p className="text-white/90 mb-4">{method.description}</p>
                  <div className="font-semibold">{method.details}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Send Us a <span className="gradient-text">Message</span>
              </h2>
              <p className="text-xl text-gray-600">
                Fill out the form below and we'll get back to you within 2 hours
              </p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">Full Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input" 
                      placeholder="John Smith" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="form-label">Email Address *</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input" 
                      placeholder="john@company.com" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input" 
                      placeholder="0161 123 4567" 
                    />
                  </div>
                  <div>
                    <label className="form-label">Company Name</label>
                    <input 
                      type="text" 
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="form-input" 
                      placeholder="Your Company Ltd" 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="form-label">Subject *</label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="form-input" 
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="quote">Get Energy Quote</option>
                    <option value="switching">Energy Switching Help</option>
                    <option value="existing">Existing Customer Support</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="general">General Question</option>
                  </select>
                </div>
                
                <div>
                  <label className="form-label">Message *</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5" 
                    className="form-input" 
                    placeholder="Tell us about your energy needs or how we can help..."
                    required
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <button type="submit" className="btn-gradient text-lg px-12 py-4">
                    Send Message
                    <Send className="ml-3 h-6 w-6" />
                  </button>
                  <p className="text-sm text-gray-500 mt-4">
                    We'll respond to your message within 2 business hours
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Visit Our <span className="gradient-text">Office</span>
            </h2>
            <p className="text-xl text-gray-600">
              Our office details and operating hours
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {officeInfo.map((info, index) => (
              <div key={index} className="feature-card text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-600">{info.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose <span className="gradient-text">Our Support</span>?
            </h2>
            <p className="text-xl text-gray-600">
              Experience the difference of working with energy switching experts
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="feature-card text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-600">{reason.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Need Urgent Help?</h3>
              <p className="text-xl mb-6 opacity-90">
                If you're experiencing issues with your energy supply or need immediate assistance, 
                call our emergency support line.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+441618338661"
                  className="bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl inline-flex items-center justify-center"
                >
                  <Phone className="mr-3 h-6 w-6" />
                  Emergency Support
                </a>
                <a
                  href="https://app.watt.co.uk/company"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary-600 transition-all inline-flex items-center justify-center"
                >
                  Get Instant Quote
                  <ArrowRight className="ml-3 h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage