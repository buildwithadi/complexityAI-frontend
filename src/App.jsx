import React from 'react'
import NavBar from './components/navBar'
import HeroSection from './components/heroSection'
import AnalyzerSection from './components/mainAnalyzer'

function App() {
  return (
    <div className="min-h-screen">
      <div className="relative min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50">
        {/* Common animated gradient background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-200/20 via-blue-200/20 to-indigo-200/20 animate-gradient"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <main className="container mx-auto px-4">
            <HeroSection />
            <AnalyzerSection />
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
