'use client'

import React, { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { MeshWobbleMaterial } from '@react-three/drei'
import * as THREE from 'three'

const FlowRibbon = ({ index }: { index: number }) => {
  const mesh = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    mesh.current.rotation.z = Math.sin(time * 0.5 + index) * 0.1
    mesh.current.position.y = Math.cos(time * 0.3 + index) * 0.5
  })

  return (
    <mesh ref={mesh} position={[0, (index - 2) * 1.8, -2]} rotation={[Math.PI / 2.5, 0, 0]}>
      {/* 32x128分割に削減し、パフォーマンスを劇的に改善 (旧: 64x1024) */}
      <torusGeometry args={[4, 0.003, 32, 128]} />
      <MeshWobbleMaterial 
        color="#000000" 
        emissive="#222222" 
        emissiveIntensity={0.2} 
        speed={1} 
        factor={1.5} 
        roughness={0.5} 
        opacity={1} 
      />
    </mesh>
  )
}

export default function AbstractObject() {
  const { viewport } = useThree()
  const isMobile = viewport.width < 5
  
  const responsiveScale = isMobile ? 0.45 : 0.7
  const responsivePositionZ = isMobile ? -1 : 0

  return (
    <group scale={responsiveScale} position={[0, 0, responsivePositionZ]}>
      {[0, 1, 2, 3, 4].map((i) => (
        <FlowRibbon key={i} index={i} />
      ))}
    </group>
  )
}
