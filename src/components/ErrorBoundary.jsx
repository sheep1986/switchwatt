import React from 'react'
import { AlertTriangle, RefreshCw, Terminal } from 'lucide-react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
          <div className="max-w-md w-full">
            <div className="card-tech text-center">
              {/* Error Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-red-900 border border-red-500 flex items-center justify-center mx-auto">
                  <AlertTriangle className="h-8 w-8 text-red-400" />
                </div>
              </div>

              {/* Error Message */}
              <div className="mb-6">
                <h2 className="text-xl font-mono font-bold text-red-400 mb-2 tracking-wider">
                  [SYSTEM.ERROR]
                </h2>
                <p className="text-sm font-mono text-gray-400 mb-4">
                  CRITICAL_SYSTEM_FAILURE_DETECTED
                </p>
                <div className="bg-gray-900 border border-gray-700 p-4 text-left">
                  <div className="font-mono text-xs text-gray-300">
                    <div className="text-red-400 mb-2">[ERROR_LOG]</div>
                    <div className="text-gray-500">
                      {this.state.error?.message || 'UNKNOWN_SYSTEM_ERROR'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <button
                  onClick={() => window.location.reload()}
                  className="btn-industrial w-full justify-center"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  RESTART.SYSTEM
                </button>
                <button
                  onClick={() => window.location.href = '/'}
                  className="btn-secondary w-full justify-center"
                >
                  <Terminal className="mr-2 h-4 w-4" />
                  RETURN.TO.MAIN
                </button>
              </div>

              {/* Status */}
              <div className="mt-6 pt-4 border-t border-gray-700">
                <div className="flex justify-center space-x-4 text-xs font-mono text-gray-500">
                  <span>STATUS: <span className="text-red-400">ERROR</span></span>
                  <span>CODE: <span className="text-yellow-400">0x2F4A</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary