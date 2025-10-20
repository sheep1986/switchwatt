import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Zap, ChevronDown, Phone, ArrowRight } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setServicesOpen(false)
  }, [location])

  const services = [
    { name: 'Business Electricity', path: '/business-electricity' },
    { name: 'Business Gas', path: '/business-gas' },
    { name: 'Water Services', path: '/water-services' },
    { name: 'Telecoms & Broadband', path: '/telecoms-services' },
    { name: 'Renewable Energy', path: '/renewable-energy' },
    { name: 'Multi-Site Energy', path: '/multi-site-energy' },
  ]

  const additionalServices = [
    { name: 'Energy Auditing', path: '/energy-auditing' },
    { name: 'Bill Validation', path: '/bill-validation' },
    { name: 'Contract Negotiation', path: '/contract-negotiation' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg' 
        : 'bg-white/95 backdrop-blur-md'
    }`}>
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <div className="text-2xl font-bold">
                <span className="text-secondary-500">Switch</span>
                <span className="text-primary-500"> Watt</span>
              </div>
              <div className="text-xs text-gray-600">Find Cheaper Business Utilities</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors duration-200 ${
                location.pathname === '/'
                  ? 'text-primary-600'
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Home
            </Link>
            
            <div className="relative group">
              <button
                className="flex items-center space-x-1 font-medium text-gray-700 hover:text-primary-600 transition-colors duration-200"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {servicesOpen && (
                <div 
                  className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-2xl py-2 mt-2"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-xs font-semibold text-gray-500 uppercase">Main Services</p>
                  </div>
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-primary-50 hover:to-secondary-50 hover:text-primary-600 transition-all duration-200"
                    >
                      {service.name}
                    </Link>
                  ))}
                  <div className="px-4 py-2 border-t border-gray-100">
                    <p className="text-xs font-semibold text-gray-500 uppercase">Additional Services</p>
                  </div>
                  {additionalServices.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-primary-50 hover:to-secondary-50 hover:text-primary-600 transition-all duration-200"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`font-medium transition-colors duration-200 ${
                location.pathname === '/about'
                  ? 'text-primary-600'
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              About
            </Link>

            <Link
              to="/faq"
              className={`font-medium transition-colors duration-200 ${
                location.pathname === '/faq'
                  ? 'text-primary-600'
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              FAQ
            </Link>

            <Link
              to="/contact"
              className={`font-medium transition-colors duration-200 ${
                location.pathname === '/contact'
                  ? 'text-primary-600'
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+441618338661"
              className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span className="font-semibold">0161 833 8661</span>
            </a>
            <a
              href="https://app.watt.co.uk/company"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient"
            >
              Get Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="py-4 space-y-2">
              <Link
                to="/"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Home
              </Link>
              
              <div className="px-4 py-2">
                <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Services</p>
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block py-2 pl-4 text-gray-700 hover:text-primary-600 transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <Link
                to="/about"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                About
              </Link>
              
              <Link
                to="/faq"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                FAQ
              </Link>
              
              <Link
                to="/contact"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Contact
              </Link>

              <div className="px-4 pt-4 space-y-3 border-t border-gray-200">
                <a
                  href="tel:+441618338661"
                  className="flex items-center justify-center space-x-2 py-3 bg-gray-100 rounded-lg text-gray-700"
                >
                  <Phone className="h-5 w-5" />
                  <span className="font-semibold">0161 833 8661</span>
                </a>
                <a
                  href="https://app.watt.co.uk/company"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient w-full justify-center"
                >
                  Get Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation