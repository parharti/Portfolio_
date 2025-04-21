'use client'

import React from 'react'
import ShootingStars from '../components/ShootingStars'

export default function ResearchWithStars() {
  return (
    <section style={{
      position: 'relative',
      background: 'radial-gradient(circle at top left, #1f2833, #0b0c10)',
      padding: '4rem 2rem',
      color: '#c5c6c7',
      minHeight: '80vh',
      overflow: 'hidden',
      borderRadius: '16px',
      boxShadow: '0 0 25px rgba(102, 252, 241, 0.15)',
    }}>
      <ShootingStars />

      <h2 style={{ color: '#66fcf1', fontSize: '2.2rem', marginBottom: '1.5rem', zIndex: 1, position: 'relative' }}>
        📚 Research & Publication
      </h2>

      <div style={{ zIndex: 1, position: 'relative' }}>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
          <strong>Title:</strong> Integration of MERRA-2 and Lightning Detection Sensor (LDS) Data for Lightning Event Prediction
        </p>

        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
          <strong>Accepted In:</strong> Indian Society of Geomatics (ISG)
        </p>

        <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', fontSize: '1.1rem', lineHeight: '1.7' }}>
          <li>Developed a real-time lightning prediction system using NASA’s MERRA-2 and LDS datasets (~10+ TB).</li>
          <li>Trained a Random Forest model reaching 89.3% classification accuracy.</li>
          <li>Work executed during internship at ISRO under Dr. Vinod Kumar Sharma.</li>
          <li>Created India’s first lightning prediction portal using remote sensing data.</li>
        </ul>

        <p style={{ marginTop: '1.2rem', fontStyle: 'italic', fontSize: '1rem' }}>
          📄 <a href="https://drive.google.com/file/d/1BJMYdKUEd6ZqvKCCkEvmvGhVi4MxsweJ/view?usp=sharing" target="_blank" style={{ color: '#66fcf1' }}>
            View Publication / Certificate
          </a>
        </p>
      </div>

      <p style={{
        marginTop: '3rem',
        fontStyle: 'italic',
        fontSize: '0.95rem',
        opacity: 0.6,
        zIndex: 1,
        position: 'relative'
      }}>
        This research is dedicated to advancing geospatial science and protecting lives from natural disasters ⚡🛰️
      </p>
    </section>
  )
}
