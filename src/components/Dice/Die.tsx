import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface DieProps {
  url: string;
  rotation?: [number, number, number];
}
export function Die({ url, rotation = [0, 0, 0] }: DieProps) {
  const dieRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (dieRef.current) {
      dieRef.current.rotation.set(...rotation);
    }
  }, [rotation]);
  const { scene } = useGLTF(url);

  return (
    <mesh ref={dieRef}>
      <primitive object={scene} />;
    </mesh>
  );
}
