'use client';

import dynamic from 'next/dynamic';

const SolarSystem3D = dynamic(() => import('@/app/components/SolarSystem3d'), { ssr: false });

export default function SolarSystemWrapper() {
  return <SolarSystem3D />;
}
