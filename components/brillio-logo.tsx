"use client"

import Image from "next/image"

interface BrillioLogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function BrillioLogo({ className = "", size = "md" }: BrillioLogoProps) {
  const sizes = {
    sm: { fontSize: 18, taglineSize: 5, oSize: 18 },
    md: { fontSize: 24, taglineSize: 6, oSize: 24 },
    lg: { fontSize: 34, taglineSize: 8, oSize: 34 },
  }

  const { fontSize, taglineSize, oSize } = sizes[size]

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-center">
        {/* Brilli text */}
        <span 
          style={{ 
            fontSize: `${fontSize}px`, 
            color: '#263f6a',
            fontWeight: 700,
            letterSpacing: '-0.01em',
            lineHeight: 1,
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          Brilli
        </span>
        
        {/* Actual O logo image */}
        <Image 
          src="/images/brillio-o.jpeg"
          alt="O"
          width={oSize}
          height={oSize}
          className="object-contain"
          style={{ 
            marginLeft: `${fontSize * 0.02}px`,
            marginTop: `${-fontSize * 0.35}px`,
          }}
        />
      </div>
      
      {/* Beyond Learning tagline */}
      <span 
        style={{ 
          fontSize: `${taglineSize}px`,
          fontWeight: 500,
          letterSpacing: '0.18em',
          color: '#263f6a',
          textTransform: 'uppercase',
          marginTop: `${-fontSize * 0.15}px`,
          marginLeft: '1px',
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        Beyond Learning
      </span>
    </div>
  )
}
