import { useState } from 'react';

export function useDieRoll(sides: number) {
  const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0]);
  const [result, setResult] = useState<number | null>(null);

  const rollDie = () => {
    const rolledValue = Math.floor(Math.random() * sides) + 1;

    const faceRotations: Record<number, [number, number, number]> = {
      1: [0, 0, 0],
      2: [Math.PI / 2, 0, 0],
      3: [Math.PI, 0, 0],
      4: [(Math.PI * 3) / 2, 0, 0],
      5: [0, Math.PI / 2, 0],
      6: [0, Math.PI, 0]
    };
    const finalRotation = faceRotations[rolledValue];

    setRotation(finalRotation);
    setResult(rolledValue);
  };

  return {
    rotation,
    result,
    rollDie
  };
}
