'use client'

import React from 'react'
import ShootingStars from '../components/ShootingStars'

export default function Projects() {
  return (
    <section style={{
      padding: '4rem 2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: 'radial-gradient(circle at top left, #1f2833, #0b0c10)',
      color: '#c5c6c7',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <ShootingStars />

      <h1 style={{
        fontSize: '2.5rem',
        color: '#66fcf1',
        marginBottom: '1rem',
        zIndex: 1
      }}>
        My Projects 🌟
      </h1>

      <p style={{
        maxWidth: '600px',
        textAlign: 'center',
        fontSize: '1.2rem',
        marginBottom: '2rem',
        zIndex: 1
      }}>
        Explore my work in open-source contributions, research, AI, and more. Feel free to dive into the details of each project!
      </p>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem',
        backgroundColor: '#1f2833',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 0 20px rgba(102, 252, 241, 0.2)',
        zIndex: 1
      }}>
        <section style={{ width: '100%' }}>
          <h2 style={{ color: '#66fcf1' }}>SunPy (Open-Source Contribution)</h2>
          <p><strong>Contributor</strong> - Solar Chromosphere Modeling</p>
          <ul>
            <li>Added 1D chromospheric models (VAL-C, A&L 2008) to <code>sunpy.sun.models</code></li>
            <li>Built reusable code for querying/interpolating T/P/density profiles</li>
          </ul>
          <p><a href="https://github.com/parharti" target="_blank" style={{ color: '#66fcf1' }}>[GitHub]</a></p>
        </section>
        <section style={{ width: '100%' }}>
        <h2 style={{ color: '#66fcf1' }}>BrainGlobe (Open-Source Contribution)</h2>
<p><strong>Contributor</strong> – Actively contributed to resolving critical bugs and enhancing functionality.</p>
<ul>
  <li>Identified and fixed multiple issues, improving overall software stability and user experience.</li>
  <li>Raised 6 pull requests, out of which 4 were successfully merged into the main branch.</li>
  <li>Recognized as an official contributor to the BrainGlobe ecosystem.</li>
</ul>

          <p><a href="https://github.com/parhrti" target="_blank" style={{ color: '#66fcf1' }}>[GitHub]</a></p>
        </section>
        
        <section style={{ width: '100%' }}>
          <h2 style={{ color: '#66fcf1' }}>ISRO - RRSC North</h2>
          <p><strong>Project Intern</strong> - Under Dr. Vinod Kumar Sharma</p>
          <p>January 2025 - Present</p>
          <ul>
            <li><strong>Real-Time Cyclone Tracking and Visualization System</strong></li>
            <li>Built a PostgreSQL-based cyclone tracking system reducing retrieval latency by 50%</li>
            <li><strong>High-Precision Lightning Forecasting via ML</strong></li>
            <li>Fused NASA MERRA-2 and LDS datasets (10+ TB); trained Random Forest (RF) classifier (89.3% accuracy)</li>
          </ul>
          <p><a href="https://drive.google.com/file/d/18e9nUkHn9IL-RRSO2Odsaef-AOiy89_h/view?usp=sharing" target="_blank" style={{ color: '#66fcf1' }}>[Certificate]</a></p>
        </section>

        <section style={{ width: '100%' }}>
          <h2 style={{ color: '#66fcf1' }}>NOTATMRP Innovation Pvt. Ltd.</h2>
          <p><strong>AI Specialist</strong></p>
          <ul>
            <li>Built a chatbot with Rasa + spaCy; handled 5k+ queries/month (85% satisfaction)</li>
            <li>Improved campaign engagement by 18% using NLP-based sentiment analysis</li>
          </ul>
        </section>

        <section style={{ width: '100%' }}>
          <h2 style={{ color: '#66fcf1' }}>Thapar Institute - Experiential Learning</h2>
          <p><strong>Intern</strong></p>
          <ul>
            <li><strong>Smart Safety Device</strong></li>
            <li>Developed alcohol-detection IoT using MQ3 + GSM; tested across 5+ cases</li>
          </ul>
        </section>
      </div>

      <p style={{
        marginTop: '3rem',
        fontStyle: 'italic',
        opacity: 0.6,
        zIndex: 1
      }}>
        Created with passion and purpose 💫
      </p>
    </section>
  )
}
