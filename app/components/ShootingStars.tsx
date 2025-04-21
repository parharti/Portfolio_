'use client'

import React from 'react'
import './shootingStars.css'

const ShootingStars = () => {
  return (
    <div className="stars-container">
      {Array.from({ length: 10 }).map((_, i) => {
        const randomTop = Math.random() * 100; // Random top position between 0 and 100%
        const randomLeft = Math.random() * 100; // Random left position between 0 and 100%
        const randomDelay = Math.random() * 5;  // Random delay for each star's animation

        return (
          <div
            key={i}
            className="shooting-star"
            style={{
              top: `${randomTop}%`,
              left: `${randomLeft}%`,
              animationDelay: `${randomDelay}s`,
            }}
          />
        );
      })}
    </div>
  )
}

export default ShootingStars
