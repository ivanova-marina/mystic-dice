import { useState } from 'react';

export function useDieRoll() {
  const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0]);

  const rollDie = () => {
    const randomRotation: [number, number, number] = [
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2
    ];

    setRotation(randomRotation);
  };

  return {
    rotation,
    rollDie
  };
}
