import { useState } from 'react';
import { getFaceRotations } from '../utils/getFaceRotations';

export function useDieRoll(sides: number) {
  const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0]);
  const [result, setResult] = useState<number | null>(null);

  const rollDie = () => {
    const rolledValue = Math.floor(Math.random() * sides) + 1;
    const faceRotations = getFaceRotations(sides);
    const finalRotation = faceRotations[rolledValue];

    console.log('rolledValue: ', rolledValue);
    console.log('Sides: ', getFaceRotations(sides));

    setRotation(finalRotation);
    setResult(rolledValue);
  };

  return {
    rotation,
    result,
    rollDie
  };
}
