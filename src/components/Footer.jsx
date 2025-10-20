import React from 'react'
import { Link } from 'react-router-dom'
import { Zap, Terminal, Shield, Database, Monitor, Settings } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'CORE.SYSTEMS',
      icon: <Settings className="h-4 w-4" />,
      links: [
        { name: 'Power.Grid.Analysis', path: '/business-electricity' },
        { name: 'Gas.Flow.Systems', path: '/business-gas' },
        { name: 'Fluid.Management', path: '/water-services' },
        { name: 'Network.Infrastructure', path: '/telecoms-services' }
      ]
    },
    {
      title: 'ANALYTICS.MODULE',
      icon: <Monitor className="h-4 w-4" />,
      links: [
        { name: 'Energy.Auditing', path: '/energy-auditing' },
        { name: 'Multi.Site.Control', path: '/multi-site-energy' },
        { name: 'Bill.Validation', path: '/bill-validation' },
        { name: 'Contract.Negotiation', path: '/contract-negotiation' }
      ]
    },
    {
      title: 'INFORMATION',
      icon: <Database className="h-4 w-4" />,
      links: [
        { name: 'System.Status', path: '/about' },
        { name: 'FAQ.Database', path: '/faq' },
        { name: 'Terminal.Access', path: '/contact' },
        { name: 'Quote.Generator', path: '/get-quote' }
      ]
    },
    {
      title: 'SECURITY.PROTOCOLS',
      icon: <Shield className="h-4 w-4" />,
      links: [
        { name: 'Terms.Of.Service', path: '/terms' },
        { name: 'Privacy.Shield', path: '/privacy' },
        { name: 'Complaint.Handler', path: '/complaints' },
        { name: 'Authorization.Form', path: '/loa' }
      ]
    }
  ]

  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 border-t border-gray-700">
      <div className="container py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-black border border-gray-600 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-accent-electric animate-pulse" />
                </div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent-electric rounded-full animate-pulse"></div>
              </div>
              <div>
                <div className="text-lg font-mono font-bold text-white tracking-wider">
                  SWITCH<span className="text-accent-electric">WATT</span>
                </div>
                <div className="text-xs font-mono text-gray-400 tracking-widest">
                  v2.1.0
                </div>
              </div>
            </div>
            <p className="text-sm font-mono text-gray-400 leading-relaxed mb-6">
              Industrial energy management systems for advanced power optimization and grid analytics.
            </p>
            <div className="flex space-x-2">
              <div className="px-3 py-1 bg-gray-800 border border-gray-600 text-xs font-mono text-accent-electric">
                ONLINE
              </div>
              <div className="px-3 py-1 bg-gray-800 border border-gray-600 text-xs font-mono text-green-400">
                SECURE
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-accent-electric">{section.icon}</span>
                <h3 className="text-sm font-mono font-bold text-white tracking-wider">
                  {section.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-xs font-mono text-gray-400 hover:text-accent-electric transition-colors duration-300 block py-1 border-l border-transparent hover:border-accent-electric pl-2 hover:pl-3 transition-all duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Terminal Access Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-4">
              <Terminal className="h-5 w-5 text-accent-electric" />
              <span className="text-sm font-mono text-gray-300">
                TERMINAL.ACCESS.REQUIRED
              </span>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://app.watt.co.uk/company"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon text-xs font-mono tracking-widest"
              >
                <Monitor className="mr-2 h-4 w-4" />
                ACCESS.SYSTEM
              </a>
            </div>
          </div>
        </div>

        {/* System Info */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="text-xs font-mono text-gray-500">
              © {currentYear} SWITCHWATT.SYSTEMS.LTD // ALL.RIGHTS.RESERVED // UK.INDUSTRIAL.ENERGY.GRID
            </div>
            <div className="flex items-center space-x-4 text-xs font-mono text-gray-500">
              <span>SYS.STATUS: <span className="text-green-400">OPERATIONAL</span></span>
              <span>UPTIME: <span className="text-accent-electric">99.9%</span></span>
              <span>LOAD: <span className="text-yellow-400">OPTIMAL</span></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer