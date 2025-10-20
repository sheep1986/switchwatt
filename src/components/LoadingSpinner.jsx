import React from 'react'
import { Zap } from 'lucide-react'

const LoadingSpinner = ({ fullPage = false, message = "Loading..." }) => {
  if (fullPage) {
    return (
      <div className="fixed inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center animate-pulse">
              <Zap className="h-10 w-10 text-white" />
            </div>
            <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full animate-ping opacity-20"></div>
          </div>
          <p className="text-gray-700 font-medium">{message}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center p-8">
      <div className="text-center">
        <div className="loading-spinner mx-auto mb-2"></div>
        <p className="text-gray-600 text-sm">{message}</p>
      </div>
    </div>
  )
}

export default LoadingSpinner