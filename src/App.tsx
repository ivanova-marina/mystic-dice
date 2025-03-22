import { Canvas } from '@react-three/fiber';
import { DfourDie } from './components/Dice/DfourDie';
import { OrbitControls } from '@react-three/drei';

function App() {
  return (
    <div id="canvas-container" className="h-dvh">
      <div className="h-96">
        <Canvas>
          <directionalLight position={[0, 0, 2]} />
          <DfourDie />
          <OrbitControls enableZoom={true} />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
