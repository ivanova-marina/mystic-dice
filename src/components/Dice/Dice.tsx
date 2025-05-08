// import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { createD6 } from './dice-shapes/createD6';
import { createD4 } from './dice-shapes/createD4';
import { createD8 } from './dice-shapes/createD8';

interface DiceProps {
  dieSides: number;
  rotation?: [number, number, number];
  animationSpeed?: number;
  isRolling: boolean;
}
export function Dice({
  dieSides,
  rotation = [0, 0, 0],
  animationSpeed = 0.5,
  isRolling
}: DiceProps) {
  const dieRef = useRef<THREE.Mesh>(null);
  const currentRotation = useRef<[number, number, number]>([0, 0, 0]);

  const createDie = useCallback(() => {
    switch (dieSides) {
      case 4:
        return createD4();
      case 6:
        return createD6();
      case 8:
        return createD8();

      default:
        throw new Error('Unsupported die type');
    }
  }, [dieSides]);

  useEffect(() => {
    if (dieRef.current) {
      const newDie = createDie();
      console.log('New Die Geometry:', newDie.geometry);
      console.log('New Die Material:', newDie.material);
      console.log(
        'Number of Materials:',
        Array.isArray(newDie.material) ? newDie.material.length : 1
      );
      dieRef.current.geometry = newDie.geometry;
      dieRef.current.material = newDie.material;
      // const wireframeMaterial = new THREE.MeshBasicMaterial({ wireframe: true, color: 'red' });
      // dieRef.current.material = wireframeMaterial;
    }
  }, [createDie, dieSides]);

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

  // const { scene } = useGLTF(url);

  return <mesh ref={dieRef} castShadow receiveShadow></mesh>;
}
