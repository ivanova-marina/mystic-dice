import { useGLTF } from '@react-three/drei';

interface DieProps {
  url: string;
}
export function Die({ url }: DieProps) {
  const { scene } = useGLTF(url);

  return <primitive object={scene} />;
}
