'use client';

/**
 * Three.js + R3F 製の Hero ビジュアル（MMC と共通）。
 *
 * 浮遊する 4 つのジオメトリックシェイプ（角丸ボックス・球・トーラス・
 * カプセル）+ 小粒子を Forest Deep のマテリアルでレンダ。
 * テキストと被らないよう右半分に配置し、CSS の linear-gradient で左側を
 * 白へフェードさせて可読性を確保する。
 */
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, RoundedBox } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import type * as THREE from 'three';

const GREEN = '#059669';
const GREEN_LIGHT = '#10B981';

interface HeroCanvasProps {
  className?: string;
}

export default function HeroCanvas({ className }: HeroCanvasProps) {
  return (
    <div className={className}>
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0.5, 6.5], fov: 38 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#ffffff']} />
        <ambientLight intensity={0.7} />
        <directionalLight
          position={[5, 6, 4]}
          intensity={1.1}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <Suspense fallback={null}>
          <Environment preset="studio" environmentIntensity={0.4} />
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Scene() {
  return (
    <group position={[0, 0, 0]}>
      <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
        <RoundedBoxShape position={[2.6, 0.7, -0.4]} color={GREEN} />
      </Float>

      <Float speed={1.7} rotationIntensity={0.8} floatIntensity={1.4}>
        <SphereShape position={[1.4, -1.0, 0.5]} color={GREEN_LIGHT} />
      </Float>

      <Float speed={1.1} rotationIntensity={0.5} floatIntensity={0.8}>
        <TorusShape position={[3.6, 1.6, -1.4]} color={GREEN} />
      </Float>

      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.9}>
        <CapsuleShape position={[3.2, -1.4, 0.2]} color={GREEN} />
      </Float>

      <Float speed={2.4} rotationIntensity={0.2} floatIntensity={2}>
        <SmallSphere position={[1.2, 1.8, -0.4]} />
      </Float>
      <Float speed={2.0} rotationIntensity={0.2} floatIntensity={2}>
        <SmallSphere position={[3.4, -0.4, -0.2]} />
      </Float>
      <Float speed={2.6} rotationIntensity={0.2} floatIntensity={2}>
        <SmallSphere position={[-2.8, 1.6, 0.2]} />
      </Float>
      <Float speed={2.2} rotationIntensity={0.2} floatIntensity={2}>
        <SmallSphere position={[2.2, 2.2, 0.5]} />
      </Float>
    </group>
  );
}

function RoundedBoxShape({
  position,
  color,
}: {
  position: [number, number, number];
  color: string;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.18;
    ref.current.rotation.x += delta * 0.06;
  });
  return (
    <RoundedBox
      ref={ref}
      args={[1.5, 1.5, 1.5]}
      radius={0.22}
      smoothness={6}
      position={position}
      castShadow
      receiveShadow
    >
      <meshStandardMaterial
        color={color}
        metalness={0.18}
        roughness={0.32}
      />
    </RoundedBox>
  );
}

function SphereShape({
  position,
  color,
}: {
  position: [number, number, number];
  color: string;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.22;
  });
  return (
    <mesh ref={ref} position={position} castShadow receiveShadow>
      <sphereGeometry args={[0.78, 48, 48]} />
      <meshStandardMaterial color={color} metalness={0.05} roughness={0.18} />
    </mesh>
  );
}

function TorusShape({
  position,
  color,
}: {
  position: [number, number, number];
  color: string;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.4;
    ref.current.rotation.y += delta * 0.18;
  });
  return (
    <mesh
      ref={ref}
      position={position}
      rotation={[Math.PI / 4, 0, Math.PI / 6]}
      castShadow
      receiveShadow
    >
      <torusGeometry args={[0.55, 0.18, 24, 64]} />
      <meshStandardMaterial color={color} metalness={0.2} roughness={0.3} />
    </mesh>
  );
}

function CapsuleShape({
  position,
  color,
}: {
  position: [number, number, number];
  color: string;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.z += delta * 0.14;
  });
  return (
    <mesh
      ref={ref}
      position={position}
      rotation={[0, 0, Math.PI / 6]}
      castShadow
      receiveShadow
    >
      <capsuleGeometry args={[0.32, 0.7, 12, 24]} />
      <meshStandardMaterial color={color} metalness={0.1} roughness={0.4} />
    </mesh>
  );
}

function SmallSphere({
  position,
}: {
  position: [number, number, number];
}) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.06, 16, 16]} />
      <meshStandardMaterial
        color={GREEN}
        emissive={GREEN}
        emissiveIntensity={0.6}
      />
    </mesh>
  );
}
