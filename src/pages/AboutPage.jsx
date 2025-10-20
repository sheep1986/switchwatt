import React from 'react'
import { Cpu, Database, Shield, Network, Terminal, Activity, BarChart3, Zap } from 'lucide-react'

const AboutPage = () => {
  const systemModules = [
    {
      icon: <Cpu className="h-8 w-8" />,
      title: 'NEURAL.PROCESSING.CORE',
      description: 'Advanced AI algorithms for predictive energy analysis and cost optimization',
      specs: 'Quantum.Enhanced.Computing'
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'DATA.WAREHOUSE.SYSTEM',
      description: 'Massive parallel processing of energy market data and consumption patterns',
      specs: 'Exabyte.Scale.Storage'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'SECURITY.PROTOCOL.LAYER',
      description: 'Military-grade encryption protecting sensitive energy infrastructure data',
      specs: '256-Bit.Quantum.Encryption'
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: 'GRID.INTERFACE.MODULE',
      description: 'Real-time integration with national power grid and distribution networks',
      specs: 'Fiber.Optic.Backbone'
    }
  ]

  const performanceMetrics = [
    { metric: 'PROCESSING.SPEED', value: '1.2TB/sec', status: 'OPTIMAL' },
    { metric: 'UPTIME.RATIO', value: '99.99%', status: 'STABLE' },
    { metric: 'SECURITY.LEVEL', value: 'MAXIMUM', status: 'SECURE' },
    { metric: 'RESPONSE.TIME', value: '0.1ms', status: 'FAST' }
  ]

  const systemHistory = [
    { year: '2015', event: 'SYSTEM.INITIALIZATION', detail: 'First industrial energy management protocols deployed' },
    { year: '2018', event: 'GRID.INTEGRATION', detail: 'Connected to national power distribution networks' },
    { year: '2021', event: 'AI.ENHANCEMENT', detail: 'Neural network algorithms integrated for predictive analysis' },
    { year: '2025', event: 'QUANTUM.UPGRADE', detail: 'Advanced quantum computing cores installed for maximum efficiency' }
  ]

  return (
    <div className="bg-black text-gray-100 pt-20">
      {/* Hero Section */}
      <section className="hero-industrial py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-industrial opacity-30"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-3 bg-gray-900/80 border border-gray-700 px-4 py-2 mb-8">
              <Terminal className="h-4 w-4 text-accent-electric animate-pulse" />
              <span className="font-mono text-xs text-gray-300 tracking-wider">
                MODULE: <span className="text-accent-electric">SYSTEM.INFORMATION</span>
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-mono font-bold mb-6 leading-tight">
              <span className="block text-white">ABOUT</span>
              <span className="block text-accent-electric text-shadow-neon">SWITCH.WATT</span>
              <span className="block text-xl text-gray-400 mt-2">
                INDUSTRIAL.ENERGY.SYSTEMS.v2.1.0
              </span>
            </h1>

            <p className="text-lg font-mono text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Advanced industrial energy management platform utilizing quantum-enhanced computing 
              and AI-driven optimization protocols to revolutionize UK business energy infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="py-20 bg-gray-900">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-mono font-bold text-white mb-4 tracking-wider">
              [SYSTEM.ARCHITECTURE]
            </h2>
            <p className="text-gray-400 font-mono text-lg">
              CORE.PROCESSING.MODULES.AND.SUBSYSTEMS
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systemModules.map((module, index) => (
              <div key={index} className="card-tech group hover:border-accent-electric transition-all duration-300">
                <div className="text-accent-electric mb-4 group-hover:animate-pulse">
                  {module.icon}
                </div>
                <h3 className="font-mono text-lg font-bold text-white mb-3">
                  {module.title}
                </h3>
                <p className="font-mono text-sm text-gray-400 mb-4 leading-relaxed">
                  {module.description}
                </p>
                <div className="border-t border-gray-700 pt-4">
                  <span className="font-mono text-xs text-accent-electric">
                    {module.specs}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Performance */}
      <section className="py-20 bg-black">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-mono font-bold text-white mb-6 tracking-wider">
                [PERFORMANCE.ANALYTICS]
              </h2>
              <p className="font-mono text-gray-400 text-lg mb-8">
                Real-time system performance monitoring with quantum-enhanced processing 
                capabilities delivering unparalleled efficiency in energy management operations.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-800 border border-gray-600 flex items-center justify-center flex-shrink-0">
                    <Activity className="h-4 w-4 text-accent-electric" />
                  </div>
                  <div>
                    <h3 className="font-mono text-lg text-white font-bold mb-2">
                      REAL.TIME.PROCESSING
                    </h3>
                    <p className="font-mono text-sm text-gray-400">
                      Quantum processors analyze millions of data points per second for 
                      instant energy market optimization and grid management.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-800 border border-gray-600 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="h-4 w-4 text-accent-electric" />
                  </div>
                  <div>
                    <h3 className="font-mono text-lg text-white font-bold mb-2">
                      PREDICTIVE.ALGORITHMS
                    </h3>
                    <p className="font-mono text-sm text-gray-400">
                      Advanced neural networks forecast energy consumption patterns 
                      and market fluctuations with 99.7% accuracy.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-800 border border-gray-600 flex items-center justify-center flex-shrink-0">
                    <Zap className="h-4 w-4 text-accent-electric" />
                  </div>
                  <div>
                    <h3 className="font-mono text-lg text-white font-bold mb-2">
                      GRID.OPTIMIZATION
                    </h3>
                    <p className="font-mono text-sm text-gray-400">
                      Automated switching protocols ensure optimal energy distribution 
                      across industrial networks with zero downtime.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-tech">
              <div className="text-center mb-6">
                <Database className="h-12 w-12 text-accent-electric mx-auto mb-4 animate-pulse" />
                <h3 className="font-mono text-xl font-bold text-white tracking-wider">
                  LIVE.SYSTEM.STATUS
                </h3>
              </div>

              <div className="space-y-4">
                {performanceMetrics.map((metric, index) => (
                  <div key={index} className="border border-gray-700 p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-mono text-sm text-gray-400">{metric.metric}</span>
                      <span className="font-mono text-lg text-white font-bold">{metric.value}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="font-mono text-xs text-green-400">{metric.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Evolution Timeline */}
      <section className="py-20 bg-gray-900">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-mono font-bold text-white mb-4 tracking-wider">
              [SYSTEM.EVOLUTION.LOG]
            </h2>
            <p className="text-gray-400 font-mono text-lg">
              DEVELOPMENT.TIMELINE.AND.MAJOR.UPGRADES
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent-electric opacity-50"></div>
              
              {systemHistory.map((entry, index) => (
                <div key={index} className="relative flex items-center mb-12 last:mb-0">
                  <div className="absolute left-8 w-4 h-4 -translate-x-1/2 bg-accent-electric border-4 border-black rounded-full animate-pulse"></div>
                  <div className="ml-20 card-tech flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-mono text-lg font-bold text-white">{entry.event}</h3>
                      <span className="font-mono text-sm text-accent-electric">{entry.year}</span>
                    </div>
                    <p className="font-mono text-sm text-gray-400">{entry.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Terminal Access */}
      <section className="py-20 bg-gradient-to-t from-black to-gray-900">
        <div className="container text-center">
          <h2 className="text-4xl font-mono font-bold text-white mb-6 tracking-wider">
            [SYSTEM.ACCESS.AVAILABLE]
          </h2>
          <p className="text-xl font-mono text-gray-300 mb-8">
            CONNECT.TO.INDUSTRIAL.GRID // OPTIMIZE.ENERGY.SYSTEMS // REDUCE.OPERATIONAL.COSTS
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://app.watt.co.uk/company"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon text-lg px-8 py-4"
            >
              <Terminal className="mr-3 h-6 w-6" />
              ACCESS.MAIN.SYSTEM
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage