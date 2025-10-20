import React, { useState } from 'react'
import { 
  FileText, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  Phone, 
  Building,
  PiggyBank,
  Users,
  Award,
  Lock,
  AlertCircle,
  Info,
  Download,
  Upload
} from 'lucide-react'

const LOAPage = () => {
  const [formData, setFormData] = useState({
    // Business Details
    businessName: '',
    businessAddress: '',
    businessPostcode: '',
    businessType: '',
    contactName: '',
    contactPosition: '',
    contactEmail: '',
    contactPhone: '',
    
    // Current Supplier Details
    currentElectricitySupplier: '',
    currentGasSupplier: '',
    electricityAccountNumber: '',
    gasAccountNumber: '',
    electricityMpan: '',
    gasMprn: '',
    
    // Authority
    authorizedSignatory: '',
    position: '',
    signatureDate: '',
    termsAccepted: false
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('LOA Form submitted:', formData)
  }

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

  const requiredDocuments = [
    'Recent energy bill (electricity or gas)',
    'Business registration documents',
    'Proof of business address',
    'Contact authorization (if not the business owner)'
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
              <FileText className="h-5 w-5 text-primary-500 mr-2" />
              <span className="text-sm font-semibold text-gray-800">Letter of Authority</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Letter of
              <span className="gradient-text"> Authority</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Complete your Letter of Authority to authorize Switch Watt to manage your 
              energy switching process and negotiate the best deals on your behalf.
            </p>
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
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Complete Your <span className="gradient-text">Letter of Authority</span>
              </h2>
              <p className="text-xl text-gray-600">
                Please provide accurate information to ensure smooth processing
              </p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Business Details Section */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <Building className="h-6 w-6 mr-2 text-primary-500" />
                    Business Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">Business Name *</label>
                      <input 
                        type="text" 
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        className="form-input" 
                        placeholder="Your Company Ltd" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="form-label">Business Type *</label>
                      <select 
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleInputChange}
                        className="form-input" 
                        required
                      >
                        <option value="">Select Business Type</option>
                        <option value="limited-company">Limited Company</option>
                        <option value="partnership">Partnership</option>
                        <option value="sole-trader">Sole Trader</option>
                        <option value="charity">Charity</option>
                        <option value="public-sector">Public Sector</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="form-label">Business Address *</label>
                      <input 
                        type="text" 
                        name="businessAddress"
                        value={formData.businessAddress}
                        onChange={handleInputChange}
                        className="form-input" 
                        placeholder="123 Business Street, City" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="form-label">Business Postcode *</label>
                      <input 
                        type="text" 
                        name="businessPostcode"
                        value={formData.businessPostcode}
                        onChange={handleInputChange}
                        className="form-input" 
                        placeholder="M1 1AA" 
                        required 
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Details Section */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <Users className="h-6 w-6 mr-2 text-primary-500" />
                    Contact Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">Contact Name *</label>
                      <input 
                        type="text" 
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleInputChange}
                        className="form-input" 
                        placeholder="John Smith" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="form-label">Position/Title *</label>
                      <input 
                        type="text" 
                        name="contactPosition"
                        value={formData.contactPosition}
                        onChange={handleInputChange}
                        className="form-input" 
                        placeholder="Managing Director" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="form-label">Email Address *</label>
                      <input 
                        type="email" 
                        name="contactEmail"
                        value={formData.contactEmail}
                        onChange={handleInputChange}
                        className="form-input" 
                        placeholder="john@company.com" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="form-label">Phone Number *</label>
                      <input 
                        type="tel" 
                        name="contactPhone"
                        value={formData.contactPhone}
                        onChange={handleInputChange}
                        className="form-input" 
                        placeholder="0161 123 4567" 
                        required 
                      />
                    </div>
                  </div>
                </div>

                {/* Current Supplier Details */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <Lock className="h-6 w-6 mr-2 text-primary-500" />
                    Current Supplier Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">Current Electricity Supplier</label>
                      <input 
                        type="text" 
                        name="currentElectricitySupplier"
                        value={formData.currentElectricitySupplier}
                        onChange={handleInputChange}
                        className="form-input" 
                        placeholder="e.g., British Gas" 
                      />
                    </div>
                    <div>
                      <label className="form-label">Current Gas Supplier</label>
                      <input 
                        type="text" 
                        name="currentGasSupplier"
                        value={formData.currentGasSupplier}
                        onChange={handleInputChange}
                        className="form-input" 
                        placeholder="e.g., E.ON" 
                      />
                    </div>
                    <div>
                      <label className="form-label">Electricity Account Number</label>
                      <input 
                        type="text" 
                        name="electricityAccountNumber"
                        value={formData.electricityAccountNumber}
                        onChange={handleInputChange}
                        className="form-input" 
                        placeholder="Found on your electricity bill" 
                      />
                    </div>
                    <div>
                      <label className="form-label">Gas Account Number</label>
                      <input 
                        type="text" 
                        name="gasAccountNumber"
                        value={formData.gasAccountNumber}
                        onChange={handleInputChange}
                        className="form-input" 
                        placeholder="Found on your gas bill" 
                      />
                    </div>
                    <div>
                      <label className="form-label">Electricity MPAN (if known)</label>
                      <input 
                        type="text" 
                        name="electricityMpan"
                        value={formData.electricityMpan}
                        onChange={handleInputChange}
                        className="form-input" 
                        placeholder="13-digit meter reference" 
                      />
                    </div>
                    <div>
                      <label className="form-label">Gas MPRN (if known)</label>
                      <input 
                        type="text" 
                        name="gasMprn"
                        value={formData.gasMprn}
                        onChange={handleInputChange}
                        className="form-input" 
                        placeholder="10-digit meter reference" 
                      />
                    </div>
                  </div>
                </div>

                {/* Authorization Section */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <FileText className="h-6 w-6 mr-2 text-primary-500" />
                    Authorization
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">Authorized Signatory Name *</label>
                      <input 
                        type="text" 
                        name="authorizedSignatory"
                        value={formData.authorizedSignatory}
                        onChange={handleInputChange}
                        className="form-input" 
                        placeholder="Person authorized to sign" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="form-label">Position *</label>
                      <input 
                        type="text" 
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        className="form-input" 
                        placeholder="Director, Manager, etc." 
                        required 
                      />
                    </div>
                    <div>
                      <label className="form-label">Date *</label>
                      <input 
                        type="date" 
                        name="signatureDate"
                        value={formData.signatureDate}
                        onChange={handleInputChange}
                        className="form-input" 
                        required 
                      />
                    </div>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-start space-x-3">
                    <input 
                      type="checkbox" 
                      name="termsAccepted"
                      checked={formData.termsAccepted}
                      onChange={handleInputChange}
                      className="mt-1" 
                      required 
                    />
                    <div className="text-sm text-gray-700">
                      <p className="font-semibold mb-2">I hereby authorize Switch Watt to:</p>
                      <ul className="space-y-1 ml-4 list-disc">
                        <li>Act as my agent in all matters relating to my energy supply</li>
                        <li>Negotiate with energy suppliers on my behalf</li>
                        <li>Switch my energy suppliers when beneficial</li>
                        <li>Receive and review my energy bills and contracts</li>
                        <li>Handle all correspondence with energy suppliers</li>
                      </ul>
                      <p className="mt-3 text-xs">
                        By checking this box, I confirm that I have read and agree to the 
                        <a href="/terms" className="text-primary-600 hover:underline ml-1">Terms & Conditions</a> and 
                        <a href="/privacy" className="text-primary-600 hover:underline ml-1">Privacy Policy</a>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button type="submit" className="btn-gradient text-lg px-12 py-4">
                    Submit Letter of Authority
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </button>
                  <p className="text-sm text-gray-500 mt-4">
                    Your information is secure and will only be used for energy switching purposes
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Required <span className="gradient-text">Documents</span>
              </h2>
              <p className="text-xl text-gray-600">
                Please have these documents ready to complete your LOA
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <Upload className="h-12 w-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">Documents You'll Need</h3>
                <ul className="space-y-3">
                  {requiredDocuments.map((doc, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <Download className="h-12 w-12 text-secondary-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">Download LOA Template</h3>
                <p className="text-gray-600 mb-6">
                  Prefer to complete the form offline? Download our PDF template 
                  and email it back to us.
                </p>
                <button className="btn-outline">
                  <Download className="mr-2 h-5 w-5" />
                  Download PDF Template
                </button>
              </div>
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
