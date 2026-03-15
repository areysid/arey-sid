"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const mesh = useRef<THREE.Points>(null);

  const { positions, speeds } = useMemo(() => {
    const count = 180;
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
      speeds[i] = Math.random() * 0.003 + 0.001;
    }

    return { positions, speeds };
  }, []);

  useFrame(() => {
    if (!mesh.current) return;
    const pos = mesh.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < pos.length / 3; i++) {
      pos[i * 3 + 1] += speeds[i];
      if (pos[i * 3 + 1] > 6) pos[i * 3 + 1] = -6;
    }

    mesh.current.geometry.attributes.position.needsUpdate = true;
    mesh.current.rotation.y += 0.0008;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#ffffff"
        transparent
        opacity={0.35}
        sizeAttenuation
      />
    </points>
  );
}

function ConnectionLines() {
  const mesh = useRef<THREE.LineSegments>(null);

  const geometry = useMemo(() => {
    const points: THREE.Vector3[] = [];
    const count = 18;

    for (let i = 0; i < count; i++) {
      const a = new THREE.Vector3(
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 4
      );
      const b = new THREE.Vector3(
        a.x + (Math.random() - 0.5) * 4,
        a.y + (Math.random() - 0.5) * 4,
        a.z + (Math.random() - 0.5) * 2
      );
      points.push(a, b);
    }

    return new THREE.BufferGeometry().setFromPoints(points);
  }, []);

  useFrame(() => {
    if (!mesh.current) return;
    mesh.current.rotation.y += 0.0005;
    mesh.current.rotation.x += 0.0002;
  });

  return (
    <lineSegments ref={mesh} geometry={geometry}>
      <lineBasicMaterial color="#ffffff" transparent opacity={0.06} />
    </lineSegments>
  );
}

export default function ParticleField() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Particles />
        <ConnectionLines />
      </Canvas>
    </div>
  );
}
