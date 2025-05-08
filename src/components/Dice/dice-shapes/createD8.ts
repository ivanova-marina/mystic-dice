import * as THREE from 'three';

export function createD8() {
  const geometry = new THREE.OctahedronGeometry(1, 0);
  const materials = [];

  for (let i = 1; i <= 8; i++) {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const context = canvas.getContext('2d');
    if (context) {
      context.fillStyle = 'white';
      context?.fillRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = 'black';
      context.font = 'bold 128px Arial';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(i.toString(), canvas.width / 2, canvas.height / 2);
    }
    const texture = new THREE.CanvasTexture(canvas);
    materials.push(new THREE.MeshBasicMaterial({ map: texture }));
  }

  const die = new THREE.Mesh(geometry, materials);
  return die;
}
