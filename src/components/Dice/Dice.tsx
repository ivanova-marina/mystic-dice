import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

interface DiceProps {
  url: string;
  rotation?: [number, number, number];
  animationSpeed?: number;
  isRolling: boolean;
}
export function Dice({ url, rotation = [0, 0, 0], animationSpeed = 0.5, isRolling }: DiceProps) {
  const dieRef = useRef<THREE.Mesh>(null);
  const currentRotation = useRef<[number, number, number]>([0, 0, 0]);

  useFrame(() => {
    if (dieRef.current) {
      if (isRolling) {
        dieRef.current.rotation.x += Math.random() * 0.1;
        dieRef.current.rotation.y += Math.random() * 0.1;
        dieRef.current.rotation.z += Math.random() * 0.1;
      } else {
        currentRotation.current = currentRotation.current.map((current, index) =>
          THREE.MathUtils.damp(current, rotation[index], animationSpeed, 0.3)
        ) as [number, number, number];

        dieRef.current.rotation.set(...currentRotation.current);
      }
    }
  });

  const { scene } = useGLTF(url);

  return (
    <mesh ref={dieRef}>
      <primitive object={scene} />;
    </mesh>
  );
}
