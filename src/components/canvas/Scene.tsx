'use client'

import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import AbstractObject from './AbstractObject'
import { Suspense } from 'react'

export default function Scene() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full">
      {/* DPRを1.5に制限してモバイルや高精細モニタでの負荷を軽減 */}
      <Canvas dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <Suspense fallback={null}>
          <AbstractObject />
          <Environment preset="studio" />
        </Suspense>
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          enableRotate={false}
          autoRotate 
          autoRotateSpeed={0.3} 
        />
      </Canvas>
    </div>
  )
}
