'use client'

import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars, Html } from '@react-three/drei'
import { useRouter } from 'next/navigation'
import * as THREE from 'three'

type PlanetProps = {
  orbitRadius: number
  name: string
  label?: string
  color: string
  speed: number
  size: number
  hasRing?: boolean
  onClick?: () => void
}

const Planet = ({ orbitRadius, name, label, color, speed, size, hasRing = false, onClick }: PlanetProps) => {
  const groupRef = useRef<THREE.Group>(null!)
  const planetRef = useRef<THREE.Mesh>(null!)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += speed
    }
  })

  return (
    <group ref={groupRef}>
      <mesh ref={planetRef} position={[orbitRadius, 0, 0]} onClick={onClick}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} />
        {label && (
          <Html distanceFactor={10}>
            <div style={{
              color: 'white',
              fontSize: '2rem',
              textAlign: 'center',
              transform: 'translateY(-20px)',
              pointerEvents: 'none'
            }}>{label}</div>
          </Html>
        )}
      </mesh>

      {hasRing && (
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[orbitRadius, 0, 0]}>
          <ringGeometry args={[size + 0.5, size + 1.2, 64]} />
          <meshBasicMaterial color="#aaaaaa" side={THREE.DoubleSide} />
        </mesh>
      )}
    </group>
  )
}

export default function SolarSystem3D() {
  const [isClient, setIsClient] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handlePlanetClick = (page: string) => {
    if (isClient) {
      router.push(`/${page.toLowerCase()}`)
    }
  }

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
      <Canvas camera={{ position: [0, 30, 0], fov: 50 }}>
        {/* Light sources */}
        <ambientLight intensity={0.4} />
        <pointLight position={[0, 0, 0]} intensity={2} />

        {/* Slowly rotating Sun and Stars (use useFrame directly in Canvas) */}
        <SunAndStars />

        {/* Planets */}
        <Planet orbitRadius={2.5} name="Mercury" color="#a9a9a9" speed={0.02} size={0.4} />
        <Planet orbitRadius={3.5} name="Venus" color="#d4af37" speed={0.015} size={0.8} />
        <Planet orbitRadius={4.5} name="Earth" color="#1f78d1" speed={0.012} size={1}  />
        <Planet orbitRadius={5.5} name="Mars" color="#b22222" speed={0.01} size={0.7} />
        <Planet orbitRadius={7} name="Jupiter" color="#d2b48c" speed={0.008} size={2}  />
        <Planet orbitRadius={9} name="Saturn" color="#f4e2d8" speed={0.006} size={1.8} hasRing  />
        <Planet orbitRadius={11} name="Uranus" color="#add8e6" speed={0.005} size={1.5} />
        <Planet orbitRadius={13} name="Neptune" color="#4169e1" speed={0.004} size={1.5} />
        <Planet orbitRadius={15} name="Pluto" color="#aaa9ad" speed={0.003} size={0.3} />

        {/* Enable orbit controls for zoom */}
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  )
}

// A new component for rotating Sun and Stars using useFrame inside Canvas
const SunAndStars = () => {
  const sunRef = useRef<THREE.Group>(null!)
  const starsRef = useRef<THREE.Group>(null!)

  // Apply rotation to Sun and Stars
  useFrame(() => {
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.005 // Slow rotation for Sun
    }
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0009 // Slow rotation for Stars
    }
  })

  return (
    <>
      {/* Slowly rotating Sun */}
      <group ref={sunRef}>
        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial emissive="orange" />
        </mesh>
      </group>

      {/* Slowly rotating Stars */}
      <group ref={starsRef}>
        <Stars />
      </group>
    </>
  )
}
