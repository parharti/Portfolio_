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
        Explore my work in open-source contributions, research, AI, and innovation. Dive into the stories behind the code!
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

        {/* C4GT */}
        <section style={{ width: '100%' }}>
          <h2 style={{ color: '#66fcf1' }}>C4GT – MedPlat Project</h2>
          <p><strong>Developer (GovTech Fellowship)</strong></p>
          <p>June 2025 – Present</p>
          <ul>
            <li>Building a multilingual AI assistant for frontline health workers (ANMs/ASHAs)</li>
            <li>Integrated Indic-NLP (SarvamAI) with FastAPI and ticketing backend</li>
            <li>Developed dashboard for real-time issue tracking and admin control</li>
          </ul>
          <p><a href="https://github.com/parharti" target="_blank" style={{ color: '#66fcf1' }}>[GitHub]</a></p>
        </section>

        {/* BAH Lunar DEM */}
        <section style={{ width: '100%' }}>
          <h2 style={{ color: '#66fcf1' }}>Bharatiya Antariksh Hackathon</h2>
          <p><strong>Participant</strong> – Ongoing Challenge (Lunar DEM Mapping)</p>
          <ul>
            <li>Creating high-resolution Lunar Elevation Model using Chandrayaan DEM data</li>
            <li>Applied interpolation + 3D elevation techniques for lunar south pole</li>
            <li>Supports anomaly detection for future moon missions</li>
          </ul>
        </section>

        {/* SunPy */}
        <section style={{ width: '100%' }}>
          <h2 style={{ color: '#66fcf1' }}>SunPy (Open-Source Contribution)</h2>
          <p><strong>Contributor</strong> – Solar Chromosphere Modeling</p>
          <ul>
            <li>Integrated canonical 1D chromospheric models (VAL-C, A&L 2008)</li>
            <li>Wrote reusable model for temperature, density, pressure interpolation</li>
          </ul>
          <p><a href="https://github.com/parharti" target="_blank" style={{ color: '#66fcf1' }}>[GitHub]</a></p>
        </section>

        {/* BrainGlobe */}
        <section style={{ width: '100%' }}>
          <h2 style={{ color: '#66fcf1' }}>BrainGlobe (Open-Source Contribution)</h2>
          <p><strong>Contributor</strong> – Bugfixes + Feature Enhancements</p>
          <ul>
            <li>Resolved core bugs improving performance + UX</li>
            <li>4+ PRs merged into main Cellfinder repository</li>
            <li>Collaborated with core devs in async reviews and feature planning</li>
          </ul>
          <p><a href="https://github.com/parhrti" target="_blank" style={{ color: '#66fcf1' }}>[GitHub]</a></p>
        </section>

        {/* ISRO SAC */}
        <section style={{ width: '100%' }}>
          <h2 style={{ color: '#66fcf1' }}>ISRO – SAC Ahmedabad</h2>
          <p><strong>Intern</strong> – Under Sri Santosh Kumar Tripathi</p>
          <p>June 2025 – Present</p>
          <ul>
            <li><strong>INSAT Satellite Data Compression:</strong> Researching spectral and spatial correlation techniques for compressing multi-band satellite data (VIS, SWIR, TIR, WV)</li>
            <li>Developing custom deep learning model for 4-band input with variable spatial resolution</li>
            <li>Improving compression efficiency using autocorrelation and frequency-domain transforms (Fourier, DCT)</li>
          </ul>
        </section>

        {/* NOTATMRP */}
        <section style={{ width: '100%' }}>
          <h2 style={{ color: '#66fcf1' }}>NOTATMRP Innovation Pvt. Ltd.</h2>
          <p><strong>AI Specialist</strong></p>
          <ul>
            <li>Created Rasa-based chatbot to handle 5k+ queries/month</li>
            <li>Improved engagement by 18% using sentiment-aware campaigns</li>
          </ul>
        </section>

        {/* Thapar IoT */}
        <section style={{ width: '100%' }}>
          <h2 style={{ color: '#66fcf1' }}>Thapar Institute – IoT Internship</h2>
          <p><strong>Intern</strong> – Experiential Learning Program</p>
          <ul>
            <li>Designed alcohol-detection safety device using MQ3 + GSM</li>
            <li>Field tested across 5 live deployments</li>
          </ul>
        </section>

        {/* Portfolio Site */}
        <section style={{ width: '100%' }}>
          <h2 style={{ color: '#66fcf1' }}>Portfolio Website</h2>
          <p><strong>Full-Stack Developer</strong></p>
          <ul>
            <li>Built with React, Next.js, and styled with Tailwind + custom animations</li>
            <li>Features project showcase, contact form, and responsive design</li>
          </ul>
          <p><a href="https://portfolio-nx2u.vercel.app" target="_blank" style={{ color: '#66fcf1' }}>[Live Site]</a></p>
        </section>

        {/* Awards Section */}
        <section style={{ width: '100%' }}>
          <h2 style={{ color: '#66fcf1' }}>Awards & Recognitions 🏆</h2>
          <ul>
            <li>Top 30 – Bharatiya Antariksh Hackathon</li>
            <li>Selected Fellow – Code for GovTech 2025</li>
            <li>Research Intern – Space Applications Centre, ISRO</li>
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
