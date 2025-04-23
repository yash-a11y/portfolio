'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef();
  const particlesRef = useRef();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 100; i++) {
      const t = Math.random() * Math.PI * 2;
      const r = THREE.MathUtils.lerp(2, 3.5, Math.random());
      const position = [
        Math.cos(t) * r,
        Math.sin(t) * r,
        THREE.MathUtils.lerp(-1, 1, Math.random())
      ];
      temp.push(position);
    }
    return temp;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(time / 4) / 8;
    meshRef.current.rotation.y = Math.sin(time / 2) / 8;
    meshRef.current.position.z = Math.sin(time / 1.5) / 8;
  });

  return (
    <group>
      <Sphere ref={meshRef} args={[1, 64, 64]}>
        <meshStandardMaterial
          color="#4a90e2"
          metalness={0.5}
          roughness={0.2}
          wireframe
        />
      </Sphere>
      {particles.map((position, i) => (
        <mesh key={i} position={position}>
          <sphereGeometry args={[0.02, 16, 16]} />
          <meshStandardMaterial color="#4a90e2" />
        </mesh>
      ))}
    </group>
  );
}

export default function AnimatedBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <AnimatedSphere />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
} 