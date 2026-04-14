'use client'

import { useRef, useState, useEffect, useCallback } from 'react'

export default function useMagnetic(intensity = 0.35) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current) return

    const { clientX, clientY } = e
    const { width, height, left, top } = ref.current.getBoundingClientRect()
    
    // Calculate the distance from the center of the element
    const centerX = left + width / 2
    const centerY = top + height / 2

    const dX = clientX - centerX
    const dY = clientY - centerY

    // Apply magnetic pull
    setPosition({ 
      x: dX * intensity, 
      y: dY * intensity 
    })
  }, [intensity])

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 })
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    window.addEventListener('mousemove', handleMouseMove)
    el.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      el.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [handleMouseMove, handleMouseLeave])

  return { ref, x: position.x, y: position.y }
}
