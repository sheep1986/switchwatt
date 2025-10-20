import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Zap, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Energy Services',
      links: [
        { name: 'Business Electricity', path: '/business-electricity' },
        { name: 'Business Gas', path: '/business-gas' },
        { name: 'Water Services', path: '/water-services' },
        { name: 'Renewable Energy', path: '/renewable-energy' },
        { name: 'Multi-Site Energy', path: '/multi-site-energy' },
        { name: 'Energy Auditing', path: '/energy-auditing' },
      ]
    },
    {
      title: 'Additional Services',
      links: [
        { name: 'Telecoms & Broadband', path: '/telecoms-services' },
        { name: 'Bill Validation', path: '/bill-validation' },
        { name: 'Contract Negotiation', path: '/contract-negotiation' },
        { name: 'Letter of Authority', path: '/loa' },
        { name: 'Get Quote', path: '/get-quote' },
      ]
    },
    {
      title: 'About Switch Watt',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'How It Works', path: '/services' },
        { name: 'Why Choose Us', path: '/about#why-us' },
        { name: 'Customer Reviews', path: '/#reviews' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Contact Us', path: '/contact' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Terms & Conditions', path: '/terms' },
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Cookie Policy', path: '/privacy#cookies' },
        { name: 'Complaints Procedure', path: '/complaints' },
      ]
    }
  ]

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                  <Zap className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <div className="text-xl font-bold">
                  <span className="text-secondary-500">Switch</span>
                  <span className="text-primary-500"> Watt</span>
                </div>
                <div className="text-xs text-gray-600">Find Cheaper Business Utilities</div>
              </div>
            </Link>
            
            <p className="text-sm text-gray-600 mb-6">
              Helping UK businesses save money on their energy bills since 2015. 
              Compare prices from 30+ suppliers and switch in minutes.
            </p>

            {/* Trust Badges */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Ofgem Accredited</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>FCA Regulated</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>900,000+ Customers</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-gray-800 mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info & Social */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="h-5 w-5 text-primary-500" />
                <div>
                  <p className="font-semibold">Call Us Free</p>
                  <a href="tel:+441618338661" className="text-primary-600 font-bold">
                    0161 833 8661
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="h-5 w-5 text-primary-500" />
                <div>
                  <p className="font-semibold">Email Us</p>
                  <a href="mailto:hello@switchwatt.co.uk" className="text-primary-600">
                    hello@switchwatt.co.uk
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="h-5 w-5 text-primary-500" />
                <div>
                  <p className="font-semibold">Visit Us</p>
                  <p className="text-sm">Manchester, UK</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Follow Us:</span>
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-100 transition-colors">
                <Facebook className="h-5 w-5 text-gray-600" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-100 transition-colors">
                <Twitter className="h-5 w-5 text-gray-600" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-100 transition-colors">
                <Linkedin className="h-5 w-5 text-gray-600" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-100 transition-colors">
                <Instagram className="h-5 w-5 text-gray-600" />
              </a>
            </div>

            {/* Quick CTA */}
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

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">
              © {currentYear} Switch Watt UK Ltd. All rights reserved. Company No. 12345678
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <Link to="/terms" className="hover:text-primary-600">Terms</Link>
              <span>|</span>
              <Link to="/privacy" className="hover:text-primary-600">Privacy</Link>
              <span>|</span>
              <Link to="/complaints" className="hover:text-primary-600">Complaints</Link>
              <span>|</span>
              <Link to="/loa" className="hover:text-primary-600">LOA</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer