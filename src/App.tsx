import { Canvas } from '@react-three/fiber';
import { DfourDie } from './components/Dice/DfourDie';
import { OrbitControls } from '@react-three/drei';

function App() {
  return (
    <div id="canvas-container" className="h-dvh">
      <div className="w-96 h-96 mx-auto mt-24">
        <Canvas>
          <ambientLight color="0x404040" intensity={0.7} />
          <directionalLight position={[1, 0, -1]} intensity={0.7} />
          <DfourDie />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
