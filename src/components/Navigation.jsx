import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Zap, Settings, Monitor, Database, Shield } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
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
  }, [location])

  const navItems = [
    { name: 'SYSTEMS', path: '/services', icon: <Settings className="h-4 w-4" /> },
    { name: 'ELECTRICITY', path: '/business-electricity', icon: <Zap className="h-4 w-4" /> },
    { name: 'ANALYTICS', path: '/energy-auditing', icon: <Monitor className="h-4 w-4" /> },
    { name: 'DATABASE', path: '/multi-site-energy', icon: <Database className="h-4 w-4" /> },
    { name: 'SECURITY', path: '/bill-validation', icon: <Shield className="h-4 w-4" /> },
    { name: 'TERMINAL', path: '/contact', icon: <Monitor className="h-4 w-4" /> }
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-md border-b border-gray-700' 
        : 'bg-transparent'
    }`}>
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-black border border-gray-600 flex items-center justify-center group-hover:border-accent-electric transition-all duration-300">
                <Zap className="h-6 w-6 text-accent-electric group-hover:animate-pulse" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent-electric rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-mono font-bold text-white tracking-wider">
                SWITCH<span className="text-accent-electric">WATT</span>
              </span>
              <span className="text-xs font-mono text-gray-400 tracking-widest">
                INDUSTRIAL.ENERGY.SYSTEMS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 font-mono text-sm tracking-wider border border-transparent hover:border-gray-600 transition-all duration-300 flex items-center space-x-2 group ${
                  location.pathname === item.path
                    ? 'bg-gray-800 border-gray-600 text-accent-electric'
                    : 'text-gray-300 hover:text-white hover:bg-gray-900'
                }`}
              >
                <span className="group-hover:text-accent-electric transition-colors duration-300">
                  {item.icon}
                </span>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://app.watt.co.uk/company"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon font-mono text-xs tracking-widest"
            >
              <Monitor className="mr-2 h-4 w-4" />
              ACCESS.TERMINAL
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 border border-gray-600 flex items-center justify-center hover:border-accent-electric transition-colors duration-300"
          >
            {isOpen ? (
              <X className="h-5 w-5 text-accent-electric" />
            ) : (
              <Menu className="h-5 w-5 text-gray-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-700 bg-black/95 backdrop-blur-md">
            <div className="py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-4 py-3 font-mono text-sm tracking-wider border-l-2 transition-all duration-300 flex items-center space-x-3 ${
                    location.pathname === item.path
                      ? 'border-accent-electric bg-gray-900 text-accent-electric'
                      : 'border-transparent text-gray-300 hover:text-white hover:border-gray-600 hover:bg-gray-900'
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
              <div className="px-4 py-3">
                <a
                  href="https://app.watt.co.uk/company"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon w-full justify-center font-mono text-xs tracking-widest"
                >
                  <Monitor className="mr-2 h-4 w-4" />
                  ACCESS.TERMINAL
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