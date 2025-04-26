import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Dice } from '../Dice';
import { DieButton } from '../DieButton';
import { RollButton } from '../RollButton';
import { useDieRoll } from '../../hooks/useDieRoll';

const diceOptions = [
  { label: 'D4', url: 'models/D4.glb', sides: 4 },
  { label: 'D6', url: 'models/D6.glb', sides: 6 },
  { label: 'D8', url: 'models/D8.glb', sides: 8 },
  { label: 'D10', url: 'models/D10.glb', sides: 10 },
  { label: 'D100', url: 'models/D100.glb', sides: 10 },
  { label: 'D12', url: 'models/D12.glb', sides: 12 },
  { label: 'D20', url: 'models/D20.glb', sides: 20 }
];

export function RollArea() {
  const [selectedDie, setSelectedDie] = useState(diceOptions[0]);
  const { rotation, result, rollDie } = useDieRoll(selectedDie.sides);
  const [isRolling, setIsRolling] = useState<boolean>(false);

  const handleRoll = () => {
    setIsRolling(true);
    setTimeout(() => {
      rollDie();
      setIsRolling(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center space-y-4 mt-6">
      <div className="flex flex-wrap gap-2">
        {diceOptions.map((die) => (
          <DieButton key={die.label} label={die.label} onClick={() => setSelectedDie(die)} />
        ))}
      </div>
      <div className="w-full h-[400px] flex flex-col items-center">
        <Canvas>
          <ambientLight intensity={3} />
          <Dice url={selectedDie.url} rotation={rotation} isRolling={isRolling} />
          <OrbitControls enableZoom />
        </Canvas>
        <RollButton onRoll={handleRoll} />
        <p className="mt-4 text-lg">
          {result !== null ? `You rolled a ${result}` : `Roll the die!`}
        </p>
      </div>
    </div>
  );
}
