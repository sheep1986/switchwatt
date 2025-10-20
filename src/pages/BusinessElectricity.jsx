import React, { useState } from 'react'
import { Zap, Activity, BarChart3, Shield, Database, Terminal, ChevronRight, Power, TrendingDown } from 'lucide-react'

const BusinessElectricity = () => {
  const [selectedProtocol, setSelectedProtocol] = useState(0)

  const powerProtocols = [
    {
      code: 'FIXED.001',
      name: 'FIXED.RATE.PROTOCOL',
      description: 'Lock energy prices for 1-5 years with quantum-encrypted rate protection',
      features: ['Price.Stabilization', 'Budget.Certainty', 'Market.Protection'],
      efficiency: '99.8%',
      status: 'SECURE'
    },
    {
      code: 'FLEX.002',
      name: 'FLEXIBLE.RATE.SYSTEM',
      description: 'Dynamic pricing algorithms that adapt to real-time market fluctuations',
      features: ['Market.Adaptation', 'Cost.Optimization', 'Real.Time.Pricing'],
      efficiency: '97.3%',
      status: 'ACTIVE'
    },
    {
      code: 'GREEN.003',
      name: 'RENEWABLE.GRID.ACCESS',
      description: '100% renewable energy sourced from advanced solar/wind infrastructure',
      features: ['Zero.Carbon', 'REGO.Certified', 'Sustainable.Grid'],
      efficiency: '100%',
      status: 'OPTIMAL'
    }
  ]

  const systemMetrics = [
    { metric: 'GRID.EFFICIENCY', value: '99.7%', trend: '+2.3%' },
    { metric: 'COST.REDUCTION', value: '45%', trend: '+8.1%' },
    { metric: 'RESPONSE.TIME', value: '0.2ms', trend: '-15%' },
    { metric: 'UPTIME.RATIO', value: '99.99%', trend: '+0.1%' }
  ]

  const industryNodes = [
    { sector: 'MANUFACTURING.GRID', connections: '15,420', load: '2.3GW' },
    { sector: 'OFFICE.NETWORKS', connections: '8,750', load: '456MW' },
    { sector: 'RETAIL.SYSTEMS', connections: '12,680', load: '1.1GW' },
    { sector: 'HOSPITALITY.HUB', connections: '5,340', load: '780MW' }
  ]

  return (
    <div className="bg-black text-gray-100 pt-20">
      {/* Hero Section - Power Grid Interface */}
      <section className="hero-industrial py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-industrial opacity-30"></div>
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* System Status */}
              <div className="inline-flex items-center space-x-3 bg-gray-900/80 border border-gray-700 px-4 py-2 mb-8">
                <Zap className="h-4 w-4 text-accent-electric animate-pulse" />
                <span className="font-mono text-xs text-gray-300 tracking-wider">
                  MODULE: <span className="text-accent-electric">POWER.GRID.ANALYSIS</span>
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-mono font-bold mb-6 leading-tight">
                <span className="block text-white">BUSINESS</span>
                <span className="block text-accent-electric text-shadow-neon">ELECTRICITY</span>
                <span className="block text-xl text-gray-400 mt-2">
                  GRID.OPTIMIZATION.PROTOCOL
                </span>
              </h1>

              <p className="text-lg font-mono text-gray-300 mb-8 leading-relaxed">
                Advanced electricity price comparison algorithms with real-time grid analysis. 
                Switch suppliers with zero downtime using our industrial-grade switching protocols.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://app.watt.co.uk/company"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon"
                >
                  <Terminal className="mr-2 h-5 w-5" />
                  INITIATE.GRID.SCAN
                </a>
                <button className="btn-secondary">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  VIEW.ANALYTICS
                </button>
              </div>
            </div>

            {/* Live Grid Monitoring */}
            <div className="card-tech">
              <div className="flex items-center justify-between border-b border-gray-700 pb-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Activity className="h-5 w-5 text-accent-electric animate-pulse" />
                  <span className="font-mono text-sm text-gray-300">GRID.MONITOR.LIVE</span>
                </div>
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-mono text-xs text-green-400">ONLINE</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {systemMetrics.map((metric, index) => (
                  <div key={index} className="border border-gray-700 p-3">
                    <div className="font-mono text-xs text-gray-400 mb-1">
                      {metric.metric}
                    </div>
                    <div className="font-mono text-lg font-bold text-white">
                      {metric.value}
                    </div>
                    <div className="font-mono text-xs text-green-400">
                      {metric.trend}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Power Protocols Section */}
      <section className="py-20 bg-gray-900">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-mono font-bold text-white mb-4 tracking-wider">
              [POWER.SUPPLY.PROTOCOLS]
            </h2>
            <p className="text-gray-400 font-mono text-lg">
              ADVANCED.ENERGY.DISTRIBUTION.ALGORITHMS
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {powerProtocols.map((protocol, index) => (
              <div
                key={index}
                className={`card-tech cursor-pointer transition-all duration-300 ${
                  selectedProtocol === index ? 'border-accent-electric' : 'hover:border-gray-600'
                }`}
                onClick={() => setSelectedProtocol(index)}
              >
                {/* Protocol Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="font-mono text-xs text-accent-electric">
                    {protocol.code}
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="font-mono text-xs text-green-400">{protocol.status}</span>
                  </div>
                </div>

                <h3 className="font-mono text-lg font-bold text-white mb-3">
                  {protocol.name}
                </h3>
                
                <p className="font-mono text-sm text-gray-400 mb-4">
                  {protocol.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {protocol.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <ChevronRight className="h-3 w-3 text-accent-electric" />
                      <span className="font-mono text-xs text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Efficiency Meter */}
                <div className="border-t border-gray-700 pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-xs text-gray-400">EFFICIENCY</span>
                    <span className="font-mono text-sm text-white font-bold">{protocol.efficiency}</span>
                  </div>
                  <div className="w-full bg-gray-800 h-2">
                    <div 
                      className="bg-gradient-to-r from-accent-electric to-green-400 h-2 transition-all duration-1000"
                      style={{ width: protocol.efficiency }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Grid Connections */}
      <section className="py-20 bg-black">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-mono font-bold text-white mb-6 tracking-wider">
                [INDUSTRY.GRID.NETWORK]
              </h2>
              <p className="font-mono text-gray-400 text-lg mb-8">
                Our industrial power grid serves major UK business sectors with dedicated 
                high-capacity connections and redundant failover systems.
              </p>

              <div className="space-y-4">
                {industryNodes.map((node, index) => (
                  <div key={index} className="border border-gray-700 p-4 hover:border-accent-electric transition-colors duration-300">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-mono text-white font-bold">{node.sector}</h3>
                        <div className="font-mono text-xs text-gray-400 mt-1">
                          {node.connections} ACTIVE.CONNECTIONS
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-mono text-accent-electric font-bold">
                          {node.load}
                        </div>
                        <div className="font-mono text-xs text-gray-400">
                          CURRENT.LOAD
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="card-tech">
                <div className="text-center mb-6">
                  <Power className="h-12 w-12 text-accent-electric mx-auto mb-4 animate-pulse" />
                  <h3 className="font-mono text-xl font-bold text-white tracking-wider">
                    GRID.CONTROL.CENTER
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="border border-gray-700 p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-mono text-sm text-gray-400">TOTAL.GRID.CAPACITY</span>
                      <span className="font-mono text-lg text-white font-bold">4.8GW</span>
                    </div>
                    <div className="w-full bg-gray-800 h-3">
                      <div className="bg-gradient-to-r from-green-400 to-accent-electric h-3 w-3/4 animate-pulse"></div>
                    </div>
                  </div>

                  <div className="border border-gray-700 p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-mono text-sm text-gray-400">SWITCH.SUCCESS.RATE</span>
                      <span className="font-mono text-lg text-green-400 font-bold">99.97%</span>
                    </div>
                    <div className="w-full bg-gray-800 h-3">
                      <div className="bg-gradient-to-r from-green-400 to-green-500 h-3 w-full"></div>
                    </div>
                  </div>

                  <div className="border border-gray-700 p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-mono text-sm text-gray-400">AVG.COST.REDUCTION</span>
                      <span className="font-mono text-lg text-accent-electric font-bold">45%</span>
                    </div>
                    <div className="w-full bg-gray-800 h-3">
                      <div className="bg-gradient-to-r from-accent-electric to-blue-500 h-3 w-5/6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terminal Access */}
      <section className="py-20 bg-gradient-to-t from-black to-gray-900">
        <div className="container text-center">
          <h2 className="text-4xl font-mono font-bold text-white mb-6 tracking-wider">
            [READY.TO.OPTIMIZE.POWER.GRID]
          </h2>
          <p className="text-xl font-mono text-gray-300 mb-8">
            INITIATE.GRID.CONNECTION // ANALYZE.POWER.CONSUMPTION // REDUCE.ENERGY.COSTS
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://app.watt.co.uk/company"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon text-lg px-8 py-4"
            >
              <Terminal className="mr-3 h-6 w-6" />
              START.GRID.ANALYSIS
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BusinessElectricity