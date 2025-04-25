import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Dice } from '../Dice';
import { DieButton } from '../DieButton';
import { RollButton } from '../RollButton';
import { useDieRoll } from '../../hooks/useDieRoll';

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
  const { rotation, rollDie } = useDieRoll();

  return (
    <div className="flex flex-col items-center space-y-4 mt-6">
      <div className="flex flex-wrap gap-2">
        {diceOptions.map((die) => (
          <DieButton key={die.label} label={die.label} onClick={() => setSelectedDie(die.url)} />
        ))}
      </div>
      <div className="w-full h-[400px]">
        <Canvas>
          <ambientLight intensity={3} />
          <Dice url={selectedDie} rotation={rotation} />
          <OrbitControls enableZoom />
        </Canvas>
        <RollButton onRoll={rollDie} />
      </div>
    </div>
  );
}
