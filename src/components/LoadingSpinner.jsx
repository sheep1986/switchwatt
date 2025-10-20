import React from 'react'
import { Terminal, Zap } from 'lucide-react'

const LoadingSpinner = ({ fullPage = false, message = "PROCESSING..." }) => {
  if (fullPage) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center">
          {/* Terminal Animation */}
          <div className="relative mb-8">
            <div className="w-24 h-24 border-2 border-gray-600 bg-gray-900 flex items-center justify-center">
              <Zap className="h-12 w-12 text-accent-electric animate-pulse" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 border-2 border-accent-electric animate-spin"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-accent-electric animate-pulse"></div>
          </div>

          {/* Loading Text */}
          <div className="font-mono text-sm text-gray-300 mb-4">
            <span className="text-accent-electric">[SYSTEM]</span> {message}
          </div>

          {/* Progress Bar */}
          <div className="w-64 h-2 bg-gray-800 border border-gray-600 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-accent-electric to-blue-500 animate-pulse"></div>
          </div>

          {/* Status Indicators */}
          <div className="mt-6 flex justify-center space-x-4 text-xs font-mono">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-400">SECURE.CONNECTION</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent-electric rounded-full animate-pulse"></div>
              <span className="text-gray-400">GRID.STATUS.OK</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center p-8">
      <div className="text-center">
        <div className="loading-circuit mb-4"></div>
        <div className="font-mono text-xs text-gray-400">{message}</div>
      </div>
    </div>
  )
}

export default LoadingSpinner