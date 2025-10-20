import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  Zap, 
  Terminal, 
  Shield, 
  Database, 
  Monitor, 
  Settings, 
  ChevronRight, 
  Activity, 
  BarChart3, 
  Cpu,
  HardDrive,
  Network,
  Power
} from 'lucide-react'

const HomePage = () => {
  const [currentStat, setCurrentStat] = useState(0)
  const [terminalText, setTerminalText] = useState('')

  const systemStats = [
    { metric: 'POWER.GRID.EFFICIENCY', value: '99.7%', status: 'OPTIMAL' },
    { metric: 'ENERGY.COST.REDUCTION', value: '45%', status: 'MAXIMUM' },
    { metric: 'SYSTEM.UPTIME', value: '99.9%', status: 'STABLE' },
    { metric: 'CONNECTED.NODES', value: '900K+', status: 'ACTIVE' }
  ]

  const terminalCommands = [
    '> SYSTEM.BOOT.COMPLETE',
    '> LOADING.ENERGY.PROTOCOLS...',
    '> GRID.CONNECTION.ESTABLISHED',
    '> POWER.OPTIMIZATION.ACTIVE',
    '> READY.FOR.COMMAND.INPUT'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % systemStats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    let currentIndex = 0
    const typeText = () => {
      if (currentIndex < terminalCommands.length) {
        setTerminalText(terminalCommands[currentIndex])
        currentIndex++
        setTimeout(typeText, 1000)
      } else {
        setTimeout(() => {
          currentIndex = 0
          typeText()
        }, 2000)
      }
    }
    typeText()
  }, [])

  const coreModules = [
    {
      icon: <Zap className="h-8 w-8" />,
      code: 'ELEC.001',
      name: 'POWER.GRID.ANALYSIS',
      description: 'Advanced electricity price comparison and grid optimization protocols',
      path: '/business-electricity',
      status: 'ONLINE'
    },
    {
      icon: <Activity className="h-8 w-8" />,
      code: 'THER.002',
      name: 'THERMAL.MANAGEMENT',
      description: 'Gas flow analysis and thermal energy distribution systems',
      path: '/business-gas',
      status: 'ONLINE'
    },
    {
      icon: <HardDrive className="h-8 w-8" />,
      code: 'FLUD.003',
      name: 'FLUID.DYNAMICS',
      description: 'Water supply optimization and distribution network control',
      path: '/water-services',
      status: 'ACTIVE'
    },
    {
      icon: <Network className="h-8 w-8" />,
      code: 'COMM.004',
      name: 'COMMUNICATION.GRID',
      description: 'Telecommunications infrastructure and data transmission networks',
      path: '/telecoms-services',
      status: 'SECURE'
    }
  ]

  const industrialFeatures = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'QUANTUM.ENCRYPTION',
      value: '256-BIT',
      description: 'Military-grade security protocols'
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: 'DATA.PROCESSING',
      value: '1.2TB/SEC',
      description: 'Real-time analytics engine'
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: 'NEURAL.NETWORK',
      value: 'AI.DRIVEN',
      description: 'Predictive optimization algorithms'
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: 'GRID.MONITORING',
      value: '24/7/365',
      description: 'Continuous system surveillance'
    }
  ]

  return (
    <div className="bg-black text-gray-100">
      {/* Hero Section - Industrial Command Center */}
      <section className="hero-industrial min-h-screen flex items-center relative overflow-hidden pt-20">
        {/* Grid Overlay */}
        <div className="absolute inset-0 grid-industrial opacity-30"></div>
        
        {/* Floating Circuit Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-accent-electric/30 animate-pulse hidden lg:block"></div>
        <div className="absolute bottom-40 left-10 w-24 h-24 border border-gray-600 rotate-45 hidden lg:block"></div>
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* System Status */}
              <div className="inline-flex items-center space-x-3 bg-gray-900/80 border border-gray-700 px-4 py-2 mb-8">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-mono text-xs text-gray-300 tracking-wider">
                  SYSTEM.STATUS: <span className="text-green-400">OPERATIONAL</span>
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-mono font-bold mb-6 leading-none">
                <span className="block text-white">SWITCH</span>
                <span className="block text-accent-electric text-shadow-neon">WATT</span>
                <span className="block text-2xl md:text-3xl text-gray-400 mt-2">
                  v2.1.0.INDUSTRIAL
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-gray-300 mb-8 font-mono leading-relaxed">
                ADVANCED.INDUSTRIAL.ENERGY.MANAGEMENT.SYSTEMS<br/>
                GRID.OPTIMIZATION // POWER.ANALYTICS // COST.REDUCTION
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="https://app.watt.co.uk/company"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon justify-center lg:justify-start"
                >
                  <Terminal className="mr-2 h-5 w-5" />
                  ACCESS.TERMINAL
                </a>
                <Link to="/contact" className="btn-secondary justify-center lg:justify-start">
                  <Monitor className="mr-2 h-5 w-5" />
                  SYSTEM.INFO
                </Link>
              </div>

              {/* Live System Stats */}
              <div className="card-tech">
                <div className="flex items-center justify-between mb-4">
                  <div className="font-mono text-sm text-accent-electric tracking-wider">
                    [REAL.TIME.METRICS]
                  </div>
                  <div className="flex space-x-1">
                    {systemStats.map((_, index) => (
                      <div
                        key={index}
                        className={`h-2 transition-all duration-300 ${
                          index === currentStat ? 'w-8 bg-accent-electric' : 'w-2 bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="font-mono text-2xl font-bold text-white">
                      {systemStats[currentStat].value}
                    </div>
                    <div className="font-mono text-xs text-gray-400">
                      {systemStats[currentStat].metric}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-sm text-green-400">
                      {systemStats[currentStat].status}
                    </div>
                    <div className="font-mono text-xs text-gray-500">
                      STATUS.CODE
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Terminal Interface */}
            <div className="relative">
              <div className="card-tech">
                {/* Terminal Header */}
                <div className="flex items-center justify-between border-b border-gray-700 pb-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Terminal className="h-5 w-5 text-accent-electric" />
                    <span className="font-mono text-sm text-gray-300">COMMAND.INTERFACE</span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>

                {/* Terminal Content */}
                <div className="space-y-2 mb-6">
                  <div className="font-mono text-sm text-gray-300">
                    <span className="text-accent-electric">root@switchwatt:~$ </span>
                    {terminalText}
                    <span className="animate-pulse">_</span>
                  </div>
                </div>

                {/* System Features */}
                <div className="grid grid-cols-2 gap-4">
                  {industrialFeatures.map((feature, index) => (
                    <div key={index} className="border border-gray-700 p-3">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-accent-electric">{feature.icon}</span>
                        <span className="font-mono text-xs text-gray-300">{feature.title}</span>
                      </div>
                      <div className="font-mono text-sm text-white font-bold">
                        {feature.value}
                      </div>
                      <div className="font-mono text-xs text-gray-500">
                        {feature.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Modules Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-mono font-bold text-white mb-4 tracking-wider">
              [CORE.SYSTEM.MODULES]
            </h2>
            <p className="text-gray-400 font-mono text-lg">
              INDUSTRIAL.ENERGY.MANAGEMENT.PROTOCOLS
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreModules.map((module, index) => (
              <Link
                key={index}
                to={module.path}
                className="card-tech group hover:border-accent-electric transition-all duration-300 transform hover:scale-105"
              >
                {/* Module Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-accent-electric group-hover:animate-pulse">
                    {module.icon}
                  </div>
                  <div className="font-mono text-xs text-gray-500">
                    {module.code}
                  </div>
                </div>

                {/* Module Info */}
                <h3 className="font-mono text-lg font-bold text-white mb-3 group-hover:text-accent-electric transition-colors duration-300">
                  {module.name}
                </h3>
                <p className="font-mono text-sm text-gray-400 mb-4 leading-relaxed">
                  {module.description}
                </p>

                {/* Module Status */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="font-mono text-xs text-green-400">{module.status}</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-600 group-hover:text-accent-electric group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* System Capabilities */}
      <section className="py-20 bg-gray-900">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-mono font-bold text-white mb-6 tracking-wider">
                [ADVANCED.CAPABILITIES]
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-800 border border-gray-600 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="h-4 w-4 text-accent-electric" />
                  </div>
                  <div>
                    <h3 className="font-mono text-lg text-white font-bold mb-2">
                      PREDICTIVE.ANALYTICS
                    </h3>
                    <p className="font-mono text-sm text-gray-400">
                      AI-powered forecasting algorithms analyze energy consumption patterns 
                      and market fluctuations to optimize cost efficiency.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-800 border border-gray-600 flex items-center justify-center flex-shrink-0">
                    <Network className="h-4 w-4 text-accent-electric" />
                  </div>
                  <div>
                    <h3 className="font-mono text-lg text-white font-bold mb-2">
                      GRID.INTEGRATION
                    </h3>
                    <p className="font-mono text-sm text-gray-400">
                      Seamless integration with national grid systems for real-time 
                      monitoring and automated switching protocols.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-800 border border-gray-600 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-4 w-4 text-accent-electric" />
                  </div>
                  <div>
                    <h3 className="font-mono text-lg text-white font-bold mb-2">
                      SECURITY.PROTOCOLS
                    </h3>
                    <p className="font-mono text-sm text-gray-400">
                      Military-grade encryption and multi-layer security systems 
                      protect sensitive energy infrastructure data.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="card-tech">
                <div className="text-center mb-6">
                  <Power className="h-16 w-16 text-accent-electric mx-auto mb-4 animate-pulse" />
                  <h3 className="font-mono text-xl font-bold text-white tracking-wider">
                    SYSTEM.PERFORMANCE
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-sm text-gray-400">CPU.UTILIZATION</span>
                    <span className="font-mono text-sm text-green-400">23%</span>
                  </div>
                  <div className="w-full bg-gray-800 h-2">
                    <div className="bg-gradient-to-r from-green-400 to-accent-electric h-2 w-1/4"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-sm text-gray-400">MEMORY.USAGE</span>
                    <span className="font-mono text-sm text-yellow-400">67%</span>
                  </div>
                  <div className="w-full bg-gray-800 h-2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 h-2 w-2/3"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-sm text-gray-400">NETWORK.THROUGHPUT</span>
                    <span className="font-mono text-sm text-accent-electric">1.2GB/s</span>
                  </div>
                  <div className="w-full bg-gray-800 h-2">
                    <div className="bg-gradient-to-r from-accent-electric to-blue-500 h-2 w-5/6 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terminal Access CTA */}
      <section className="py-20 bg-gradient-to-t from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 grid-industrial opacity-20"></div>
        <div className="container relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-mono font-bold text-white mb-6 tracking-wider">
              [READY.FOR.DEPLOYMENT]
            </h2>
            <p className="text-xl font-mono text-gray-300 mb-12">
              INITIALIZE.SYSTEM.CONNECTION // OPTIMIZE.ENERGY.GRID // REDUCE.OPERATIONAL.COSTS
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://app.watt.co.uk/company"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon text-lg px-8 py-4"
              >
                <Terminal className="mr-3 h-6 w-6" />
                ACCESS.MAIN.TERMINAL
              </a>
              <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
                <Monitor className="mr-3 h-6 w-6" />
                REQUEST.SYSTEM.INFO
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage