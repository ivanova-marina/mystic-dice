import { useGLTF } from '@react-three/drei';

export function DfourDie() {
  const { scene } = useGLTF('models/D4.glb');

  return <primitive object={scene} />;
}
