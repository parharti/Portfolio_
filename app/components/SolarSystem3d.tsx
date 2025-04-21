'use client'

import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars, Html } from '@react-three/drei'
import { useRouter } from 'next/navigation'
import * as THREE from 'three'

type PlanetProps = {
  orbitRadius: number
  label?: string
  color: string
  speed: number
  size: number
  hasRing?: boolean
  onClick?: () => void
}

const Planet = ({
  orbitRadius,
  label,
  color,
  speed,
  size,
  hasRing = false,
  onClick,
}: PlanetProps) => {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += speed
    }
  })

  return (
    <group ref={groupRef}>
      <mesh position={[orbitRadius, 0, 0]} onClick={onClick}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} />
        {label && (
          <Html distanceFactor={10}>
            <div
              style={{
                color: 'white',
                fontSize: '1.5rem',
                textAlign: 'center',
                transform: 'translateY(-20px)',
                pointerEvents: 'none',
              }}
            >
              {label}
            </div>
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

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
      }}
    >
      <Canvas camera={{ position: [0, 30, 0], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[0, 0, 0]} intensity={2} />

        <SunAndStars />

        {/* Planets */}
        <Planet orbitRadius={2.5} color="#a9a9a9" speed={0.02} size={0.4} label="Mercury" />
        <Planet orbitRadius={3.5} color="#d4af37" speed={0.015} size={0.8} label="Venus" />
        <Planet orbitRadius={4.5} color="#1f78d1" speed={0.012} size={1} label="Earth" />
        <Planet orbitRadius={5.5} color="#b22222" speed={0.01} size={0.7} label="Mars" />
        <Planet orbitRadius={7} color="#d2b48c" speed={0.008} size={2} label="Jupiter" />
        <Planet orbitRadius={9} color="#f4e2d8" speed={0.006} size={1.8} hasRing label="Saturn" />
        <Planet orbitRadius={11} color="#add8e6" speed={0.005} size={1.5} label="Uranus" />
        <Planet orbitRadius={13} color="#4169e1" speed={0.004} size={1.5} label="Neptune" />
        <Planet orbitRadius={15} color="#aaa9ad" speed={0.003} size={0.3} label="Pluto" />

        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  )
}

const SunAndStars = () => {
  const sunRef = useRef<THREE.Group>(null!)
  const starsRef = useRef<THREE.Group>(null!)

  useFrame(() => {
    if (sunRef.current) sunRef.current.rotation.y += 0.005
    if (starsRef.current) starsRef.current.rotation.y += 0.0009
  })

  return (
    <>
      <group ref={sunRef}>
        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial emissive="orange" />
        </mesh>
      </group>
      <group ref={starsRef}>
        <Stars />
      </group>
    </>
  )
}
