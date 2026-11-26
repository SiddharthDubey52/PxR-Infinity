'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useMemo, useRef } from 'react'
import { AdditiveBlending, BufferAttribute, Color, Curve, TubeGeometry, Vector3, type Group } from 'three'

/**
 * 3D version of the ∞ mark (decorative only — no text in here).
 * A lemniscate tube shaped like the logo's infinity, with the brand
 * purple → blue → gold gradient baked into vertex colours, plus a soft additive glow shell.
 */
class InfinityCurve extends Curve<Vector3> {
  constructor() {
    super()
  }
  getPoint(t: number, target = new Vector3()) {
    const a = t * Math.PI * 2
    const s = Math.sin(a)
    const c = Math.cos(a)
    const d = 1 + s * s
    // Lemniscate of Bernoulli; the z offset separates the two strands where they cross
    return target.set((1.65 * c) / d, (1.65 * 1.2 * s * c) / d, 0.34 * s)
  }
}

const PURPLE = new Color('#8B5CF6')
const BLUE = new Color('#3B82F6')
const GOLD = new Color('#F5C451')

function gradientTube(radius: number, tubular: number, radial: number) {
  const geo = new TubeGeometry(new InfinityCurve(), tubular, radius, radial, true)
  const pos = geo.attributes.position
  const colors = new Float32Array(pos.count * 3)
  const c = new Color()
  for (let i = 0; i < pos.count; i++) {
    const t = Math.min(1, Math.max(0, (pos.getX(i) + 1.8) / 3.6))
    if (t < 0.5) c.lerpColors(PURPLE, BLUE, t / 0.5)
    else c.lerpColors(BLUE, GOLD, (t - 0.5) / 0.5)
    c.toArray(colors, i * 3)
  }
  geo.setAttribute('color', new BufferAttribute(colors, 3))
  return geo
}

function InfinityMesh({ pointer }: { pointer: React.RefObject<{ x: number; y: number }> }) {
  const group = useRef<Group>(null)
  const core = useMemo(() => gradientTube(0.17, 420, 36), [])
  const glow = useMemo(() => gradientTube(0.36, 200, 16), [])
  const tilt = useRef({ x: 0, y: 0 })

  useEffect(() => () => {
    core.dispose()
    glow.dispose()
  }, [core, glow])

  useFrame((state, delta) => {
    const g = group.current
    if (!g) return
    const t = state.clock.elapsedTime
    const p = pointer.current ?? { x: 0, y: 0 }
    // ease towards the mouse (gentle tilt), on top of a slow idle rotation
    tilt.current.x += (p.y * 0.22 - tilt.current.x) * Math.min(1, delta * 3)
    tilt.current.y += (p.x * 0.35 - tilt.current.y) * Math.min(1, delta * 3)
    g.rotation.y = Math.sin(t * 0.22) * 0.55 + tilt.current.y
    g.rotation.x = Math.sin(t * 0.17) * 0.12 + tilt.current.x
    g.rotation.z = Math.sin(t * 0.13) * 0.06
    g.position.y = Math.sin(t * 0.6) * 0.06
  })

  return (
    <group ref={group}>
      <mesh geometry={core}>
        <meshPhysicalMaterial vertexColors roughness={0.2} metalness={0.3} clearcoat={1} clearcoatRoughness={0.12} emissive="#24124f" emissiveIntensity={0.45} />
      </mesh>
      <mesh geometry={glow}>
        <meshBasicMaterial vertexColors transparent opacity={0.13} blending={AdditiveBlending} depthWrite={false} />
      </mesh>
    </group>
  )
}

export default function InfinityScene({ active, onReady }: { active: boolean; onReady: () => void }) {
  const pointer = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <Canvas
      className="hero-3d-canvas"
      frameloop={active ? 'always' : 'never'}
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 6.4], fov: 38 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      onCreated={() => requestAnimationFrame(onReady)}
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[0, 2, 5]} intensity={1.6} color="#fff1c1" />
      <pointLight position={[3, 3, 3]} intensity={30} color="#b197fc" />
      <pointLight position={[-3, -2, 3]} intensity={24} color="#7fb0ff" />
      <InfinityMesh pointer={pointer} />
    </Canvas>
  )
}
