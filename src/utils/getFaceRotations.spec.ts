import { describe, it, expect } from 'vitest';
import { getFaceRotations } from './getFaceRotations';

describe('getFaceRotations', () => {
  it('returns correct rotations for d4', () => {
    const rotations = getFaceRotations(4);
    expect(rotations).toEqual({
      1: [Math.PI / 2, 0, 0],
      2: [0, Math.PI / 2, 0],
      3: [-Math.PI / 2, 0, 0],
      4: [0, -Math.PI / 2, 0]
    });
  });

  it('returns correct rotations for d6', () => {
    const rotations = getFaceRotations(6);
    expect(rotations).toEqual({
      1: [0, 0, 0],
      2: [Math.PI / 2, 0, 0],
      3: [Math.PI, 0, 0],
      4: [-Math.PI / 2, 0, 0],
      5: [0, Math.PI / 2, 0],
      6: [0, -Math.PI / 2, 0]
    });
  });

  it('returns correct rotations for d8', () => {
    const rotations = getFaceRotations(8);
    expect(rotations).toEqual({
      1: [0, 0, 0],
      2: [Math.PI / 2, 0, 0],
      3: [Math.PI, 0, 0],
      4: [-Math.PI / 2, 0, 0],
      5: [0, Math.PI / 2, Math.PI / 4],
      6: [0, -Math.PI / 2, Math.PI / 4],
      7: [Math.PI / 4, 0, Math.PI / 2],
      8: [-Math.PI / 4, 0, Math.PI / 2]
    });
  });

  it('returns correct rotations for d10', () => {
    const rotations = getFaceRotations(10);
    expect(rotations).toEqual({
      1: [0, 0, 0],
      2: [Math.PI / 5, 0, 0],
      3: [(Math.PI * 2) / 5, 0, 0],
      4: [(Math.PI * 3) / 5, 0, 0],
      5: [(Math.PI * 4) / 5, 0, 0],
      6: [Math.PI, 0, 0],
      7: [Math.PI + Math.PI / 5, 0, 0],
      8: [Math.PI + (Math.PI * 2) / 5, 0, 0],
      9: [Math.PI + (Math.PI * 3) / 5, 0, 0],
      10: [Math.PI + (Math.PI * 4) / 5, 0, 0]
    });
  });

  it('returns correct rotations for d12', () => {
    const rotations = getFaceRotations(12);
    expect(rotations).toEqual({
      1: [0, 0, 0],
      2: [Math.PI / 6, 0, 0],
      3: [(Math.PI * 2) / 6, 0, 0],
      4: [(Math.PI * 3) / 6, 0, 0],
      5: [(Math.PI * 4) / 6, 0, 0],
      6: [(Math.PI * 5) / 6, 0, 0],
      7: [Math.PI, 0, 0],
      8: [Math.PI + Math.PI / 6, 0, 0],
      9: [Math.PI + (Math.PI * 2) / 6, 0, 0],
      10: [Math.PI + (Math.PI * 3) / 6, 0, 0],
      11: [Math.PI + (Math.PI * 4) / 6, 0, 0],
      12: [Math.PI + (Math.PI * 5) / 6, 0, 0]
    });
  });

  it('returns correct rotations for d20', () => {
    const rotations = getFaceRotations(20);
    expect(rotations).toEqual({
      1: [0, 0, 0],
      2: [Math.PI / 10, 0, 0],
      3: [(Math.PI * 2) / 10, 0, 0],
      4: [(Math.PI * 3) / 10, 0, 0],
      5: [(Math.PI * 4) / 10, 0, 0],
      6: [(Math.PI * 5) / 10, 0, 0],
      7: [(Math.PI * 6) / 10, 0, 0],
      8: [(Math.PI * 7) / 10, 0, 0],
      9: [(Math.PI * 8) / 10, 0, 0],
      10: [(Math.PI * 9) / 10, 0, 0],
      11: [Math.PI, 0, 0],
      12: [Math.PI + Math.PI / 10, 0, 0],
      13: [Math.PI + (Math.PI * 2) / 10, 0, 0],
      14: [Math.PI + (Math.PI * 3) / 10, 0, 0],
      15: [Math.PI + (Math.PI * 4) / 10, 0, 0],
      16: [Math.PI + (Math.PI * 5) / 10, 0, 0],
      17: [Math.PI + (Math.PI * 6) / 10, 0, 0],
      18: [Math.PI + (Math.PI * 7) / 10, 0, 0],
      19: [Math.PI + (Math.PI * 8) / 10, 0, 0],
      20: [Math.PI + (Math.PI * 9) / 10, 0, 0]
    });
  });

  it('throws an error for unsupported die types', () => {
    expect(() => getFaceRotations(7)).toThrow('Unsupported number of sides: 7');
  });
});
