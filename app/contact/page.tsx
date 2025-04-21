'use client'

import React from 'react'
import ShootingStars from '../components/ShootingStars'

export default function Contact() {
  return (
    <section style={{
      padding: '4rem 2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: 'radial-gradient(circle at top left, #1f2833, #0b0c10)',
      color: '#c5c6c7',
      minHeight: '80vh',
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
        Let &apos;s Connect ☄️
      </h1>

      <p style={{
        maxWidth: '600px',
        textAlign: 'center',
        fontSize: '1.2rem',
        marginBottom: '2rem',
        zIndex: 1
      }}>
        Whether you want to collaborate on a stellar project, chat about cosmic ideas,
        or just say hi — my inbox is always open. Don&apos;t hesitate to reach out!

      </p>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        backgroundColor: '#1f2833',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 0 20px rgba(102, 252, 241, 0.2)',
        zIndex: 1
      }}>
        <p><strong>Email:</strong> <a href="mailto:prishasharma4553@gmail.com" style={{ color: '#66fcf1' }}>prishasharma4553@gmail.com</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/Parharti" target="_blank" style={{ color: '#66fcf1' }}>@PrishaSharma</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/prisha-sharma-788269258/" target="_blank" style={{ color: '#66fcf1' }}>Prisha-sharma</a></p>
      </div>

      <p style={{ marginTop: '3rem', fontStyle: 'italic', opacity: 0.6, zIndex: 1 }}>
        Engineered with love 💫 from Earth
      </p>
    </section>
  )
}
