export function DfourDie() {
  return (
    <mesh position={[0, 0, 0]}>
      <tetrahedronGeometry args={[2]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}
