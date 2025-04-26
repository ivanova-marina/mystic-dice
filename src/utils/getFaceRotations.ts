export const getFaceRotations = (sides: number): Record<number, [number, number, number]> => {
  switch (sides) {
    case 4:
      return {
        1: [Math.PI / 2, 0, 0],
        2: [0, Math.PI / 2, 0],
        3: [-Math.PI / 2, 0, 0],
        4: [0, -Math.PI / 2, 0]
      };
    case 6:
      return {
        1: [0, 0, 0],
        2: [Math.PI / 2, 0, 0],
        3: [Math.PI, 0, 0],
        4: [-Math.PI / 2, 0, 0],
        5: [0, Math.PI / 2, 0],
        6: [0, -Math.PI / 2, 0]
      };
    case 8:
      return {
        1: [0, 0, 0],
        2: [Math.PI / 2, 0, 0],
        3: [Math.PI, 0, 0],
        4: [-Math.PI / 2, 0, 0],
        5: [0, Math.PI / 2, Math.PI / 4],
        6: [0, -Math.PI / 2, Math.PI / 4],
        7: [Math.PI / 4, 0, Math.PI / 2],
        8: [-Math.PI / 4, 0, Math.PI / 2]
      };
    case 10:
      return {
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
      };
    case 12:
      return {
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
      };
    case 20:
      return {
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
      };
    default:
      throw new Error(`Unsupported number of sides: ${sides}`);
  }
};
