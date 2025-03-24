import { Canvas } from '@react-three/fiber';
import { DfourDie } from './components/Dice/DfourDie';
import { OrbitControls } from '@react-three/drei';

function App() {
  return (
    <div id="canvas-container" className="h-dvh">
      <div className="h-full mx-auto mt-24">
        <Canvas>
          <ambientLight intensity={3} />
          <DfourDie />
          <OrbitControls enableZoom={true} />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
