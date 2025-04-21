'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SolarSystem3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create sun
    const sunGeometry = new THREE.SphereGeometry(5, 32, 32);
    const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    // Create earth
    const earthGeometry = new THREE.SphereGeometry(2, 32, 32);
    const earthMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    earth.position.x = 15;
    scene.add(earth);

    // Position camera
    camera.position.z = 30;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      sun.rotation.y += 0.01;
      earth.rotation.y += 0.01;
      earth.position.x = Math.cos(Date.now() * 0.001) * 15;
      earth.position.z = Math.sin(Date.now() * 0.001) * 15;
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      scene.remove(sun);
      scene.remove(earth);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
};

export default SolarSystem3D; 