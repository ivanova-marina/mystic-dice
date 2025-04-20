import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Die } from '../Dice/Die';

const diceOptions = [
  { label: 'D4', url: 'models/D4.glb' },
  { label: 'D6', url: 'models/D6.glb' },
  { label: 'D8', url: 'models/D8.glb' },
  { label: 'D10', url: 'models/D10.glb' },
  { label: 'D100', url: 'models/D100.glb' },
  { label: 'D12', url: 'models/D12.glb' },
  { label: 'D20', url: 'models/D20.glb' }
];

export function DieSwitcher() {
  const [selectedDie, setSelectedDie] = useState(diceOptions[0].url);

  return (
    <div className="flex flex-col items-center space-y-4 mt-6">
      <div className="flex flex-wrap gap-2">
        {diceOptions.map((die) => (
          <button
            key={die.label}
            onClick={() => setSelectedDie(die.url)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition cursor-pointer">
            {die.label}
          </button>
        ))}
      </div>
      <div className="w-full h-[400px]">
        <Canvas>
          <ambientLight intensity={3} />
          <Die url={selectedDie} />
          <OrbitControls enableZoom />
        </Canvas>
      </div>
    </div>
  );
}
