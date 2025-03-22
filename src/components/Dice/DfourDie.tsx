export function DfourDie() {
  return (
    <mesh position={[1, 1, 3]}>
      <coneGeometry args={[5, 10, 3]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}
