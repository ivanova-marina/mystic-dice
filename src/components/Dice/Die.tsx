import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

interface DieProps {
  url: string;
  rotation?: [number, number, number];
}
export function Die({ url, rotation = [0, 0, 0] }: DieProps) {
  const dieRef = useRef<THREE.Mesh>(null);
  const currentRotation = useRef<[number, number, number]>([0, 0, 0]);

  useFrame(() => {
    if (dieRef.current) {
      currentRotation.current = currentRotation.current.map((current, i) =>
        THREE.MathUtils.lerp(current, rotation[i], 0.1)
      ) as [number, number, number];

      dieRef.current.rotation.set(...currentRotation.current);
    }
  });

  const { scene } = useGLTF(url);

  return (
    <mesh ref={dieRef}>
      <primitive object={scene} />;
    </mesh>
  );
}
