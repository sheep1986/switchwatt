import React from 'react'
import { Terminal, Radio, MapPin, Clock, Send, Phone } from 'lucide-react'

const ContactPage = () => {
  return (
    <div className="bg-black text-gray-100 pt-20">
      <section className="hero-industrial py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-industrial opacity-30"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-3 bg-gray-900/80 border border-gray-700 px-4 py-2 mb-8">
              <Terminal className="h-4 w-4 text-accent-electric animate-pulse" />
              <span className="font-mono text-xs text-gray-300 tracking-wider">
                MODULE: <span className="text-accent-electric">COMMUNICATION.TERMINAL</span>
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-mono font-bold mb-6 leading-tight">
              <span className="block text-white">SYSTEM</span>
              <span className="block text-accent-electric text-shadow-neon">CONTACT</span>
              <span className="block text-xl text-gray-400 mt-2">
                COMMUNICATION.INTERFACE.v2.1.0
              </span>
            </h1>

            <p className="text-lg font-mono text-gray-300 mb-8 leading-relaxed">
              Establish connection with our industrial energy systems team for 
              technical support and grid optimization consultations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-mono font-bold text-white mb-8 tracking-wider">
                [COMMUNICATION.CHANNELS]
              </h2>
              
              <div className="space-y-6">
                <div className="card-tech">
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-accent-electric" />
                    <div>
                      <h3 className="font-mono font-bold text-white mb-1">VOICE.COMMUNICATION</h3>
                      <a href="tel:+441618338661" className="font-mono text-accent-electric hover:text-white transition-colors">
                        +44.161.833.8661
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card-tech">
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-accent-electric" />
                    <div>
                      <h3 className="font-mono font-bold text-white mb-1">PHYSICAL.LOCATION</h3>
                      <p className="font-mono text-sm text-gray-300">
                        GRID.CONTROL.CENTER<br/>
                        MANCHESTER.M2.7LP<br/>
                        UNITED.KINGDOM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-tech">
                  <div className="flex items-center space-x-4">
                    <Clock className="h-6 w-6 text-accent-electric" />
                    <div>
                      <h3 className="font-mono font-bold text-white mb-1">OPERATIONAL.HOURS</h3>
                      <p className="font-mono text-sm text-gray-300">
                        MON-FRI: 09:00-17:30<br/>
                        SAT-SUN: MAINTENANCE.MODE
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-tech">
              <h3 className="font-mono text-xl font-bold text-white mb-6 tracking-wider">
                [MESSAGE.TRANSMISSION]
              </h3>
              
              <form className="space-y-4">
                <div>
                  <label className="form-label">IDENTIFICATION.CODE</label>
                  <input type="text" className="form-input" placeholder="ENTER.YOUR.NAME" required />
                </div>

                <div>
                  <label className="form-label">CONTACT.FREQUENCY</label>
                  <input type="email" className="form-input" placeholder="EMAIL.ADDRESS" required />
                </div>

                <div>
                  <label className="form-label">COMMUNICATION.TYPE</label>
                  <select className="form-input">
                    <option>TECHNICAL.SUPPORT</option>
                    <option>GRID.CONSULTATION</option>
                    <option>SYSTEM.INTEGRATION</option>
                    <option>GENERAL.INQUIRY</option>
                  </select>
                </div>

                <div>
                  <label className="form-label">MESSAGE.CONTENT</label>
                  <textarea rows="4" className="form-input" placeholder="ENTER.MESSAGE.DATA"></textarea>
                </div>

                <button type="submit" className="btn-neon w-full">
                  <Send className="mr-2 h-4 w-4" />
                  TRANSMIT.MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container text-center">
          <h2 className="text-4xl font-mono font-bold text-white mb-6 tracking-wider">
            [DIRECT.TERMINAL.ACCESS]
          </h2>
          <p className="text-xl font-mono text-gray-300 mb-8">
            BYPASS.COMMUNICATION.PROTOCOLS // ACCESS.GRID.DIRECTLY
          </p>
          <a
            href="https://app.watt.co.uk/company"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon text-lg px-8 py-4"
          >
            <Terminal className="mr-3 h-6 w-6" />
            DIRECT.GRID.ACCESS
          </a>
        </div>
      </section>
    </div>
  )
}

export default ContactPage