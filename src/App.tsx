import { Canvas } from '@react-three/fiber';
import { Die } from './components/Dice/Die';
import { OrbitControls } from '@react-three/drei';

function App() {
  return (
    <div id="canvas-container" className="h-dvh">
      <div className="h-full mx-auto mt-24">
        <Canvas>
          <ambientLight intensity={3} />
          <Die url="models/D20.glb" />
          <OrbitControls enableZoom={true} />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
