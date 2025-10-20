import React from 'react'

const SupplierLogos = () => {
  const suppliers = [
    { name: 'British Gas', logo: '/supplier-logos/british-gas.png' },
    { name: 'EDF Energy', logo: '/supplier-logos/edf.png' },
    { name: 'E.ON', logo: '/supplier-logos/eon-next.png' },
    { name: 'Scottish Power', logo: '/supplier-logos/scottish-power.png' },
    { name: 'Opus Energy', logo: '/supplier-logos/opus.png' },
    { name: 'Total Energies', logo: '/supplier-logos/total.png' },
    { name: 'Crown Gas', logo: '/supplier-logos/crown.png' },
    { name: 'Pozitive Energy', logo: '/supplier-logos/pozitive.png' },
    { name: 'Drax', logo: '/supplier-logos/drax.webp' },
    { name: 'Smartest Energy', logo: '/supplier-logos/smartest.png' },
    { name: 'Yu Energy', logo: '/supplier-logos/yu.png' },
    { name: 'Valda Energy', logo: '/supplier-logos/valda.png' },
  ]

  return (
    <div className="overflow-hidden">
      <div className="relative">
        <div className="flex animate-scroll">
          {/* First set of logos */}
          <div className="flex items-center space-x-12 px-6">
            {suppliers.map((supplier, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={supplier.logo}
                  alt={`${supplier.name} - UK Business Energy Supplier`}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center space-x-12 px-6" aria-hidden="true">
            {suppliers.map((supplier, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={supplier.logo}
                  alt={supplier.name}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          display: flex;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

export default SupplierLogos