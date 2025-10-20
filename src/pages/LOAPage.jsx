import React from 'react'
import { 
  FileText, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Phone, 
  Award
} from 'lucide-react'

const LOAPage = () => {
  const benefits = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Secure Process',
      description: 'Your data is protected with bank-level security'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Quick Setup',
      description: 'Complete the form in under 5 minutes'
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: 'Legal Authority',
      description: 'Enables us to switch your energy supplier'
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Expert Support',
      description: 'Our team guides you through every step'
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-primary-100 to-secondary-100 px-4 py-2 rounded-full mb-6">
                <FileText className="h-5 w-5 text-primary-500 mr-2" />
                <span className="text-sm font-semibold text-gray-800">Letter of Authority</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Letter of
                <span className="gradient-text"> Authority</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Complete your Letter of Authority to authorize Switch Watt to manage your 
                energy switching process and negotiate the best deals on your behalf.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop" 
                alt="Business documents and energy contracts"
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Secure</p>
                    <p className="text-sm text-gray-600">Bank-level Security</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is LOA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                What is a <span className="gradient-text">Letter of Authority</span>?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <Info className="h-12 w-12 text-primary-500 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Legal Authorization</h3>
                  <p className="text-gray-600 mb-6">
                    A Letter of Authority (LOA) is a legal document that gives Switch Watt 
                    permission to act on your behalf when dealing with energy suppliers. 
                    This allows us to:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Compare prices from multiple suppliers</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Negotiate better rates on your behalf</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Handle the entire switching process</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Manage ongoing supplier relationships</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <Shield className="h-6 w-6 text-green-600 mr-2" />
                    <h4 className="font-bold text-green-800">Completely Secure</h4>
                  </div>
                  <p className="text-green-700">
                    Your LOA is limited in scope and can be revoked at any time. 
                    We only use it for energy-related activities.
                  </p>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <Clock className="h-6 w-6 text-blue-600 mr-2" />
                    <h4 className="font-bold text-blue-800">Quick Process</h4>
                  </div>
                  <p className="text-blue-700">
                    Once submitted, we can start working immediately to find you 
                    better energy deals and savings.
                  </p>
                </div>
                
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <PiggyBank className="h-6 w-6 text-orange-600 mr-2" />
                    <h4 className="font-bold text-orange-800">No Hidden Costs</h4>
                  </div>
                  <p className="text-orange-700">
                    Our service is completely free. We're paid by suppliers, 
                    so you get the benefits at no cost.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Why Complete Your <span className="gradient-text">LOA</span>?
            </h2>
            <p className="text-xl text-gray-600">
              The benefits of authorizing Switch Watt to manage your energy
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="feature-card text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-600">{benefit.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOA Form */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Complete Your <span className="gradient-text">Letter of Authority</span>
              </h2>
              <p className="text-xl text-gray-600">
                Fill out the form below to authorize Switch Watt to help you switch energy suppliers
              </p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-2xl p-4 md:p-8">
              <iframe 
                src="https://app.watt.co.uk/loa" 
                style={{width: '100%', height: '800px', border: 'none'}}
                title="Letter of Authority Form"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Security Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="h-16 w-16 text-primary-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              Your Data is <span className="gradient-text">Secure</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We use bank-level encryption and security measures to protect your information. 
              Your data is never shared with third parties except authorized energy suppliers.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://app.watt.co.uk/company"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient"
              >
                Start Your Switch Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="tel:+441618338661"
                className="btn-outline"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call for Help
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LOAPage
