import { describe, it, expect } from 'vitest';
import { useDieRoll } from './useDieRoll';
import { renderHook, act } from '@testing-library/react';
import { getFaceRotations } from '../utils/getFaceRotations';

const sides = 6;

describe('useDieRoll', () => {
  it('should initialize with deafault rotation', () => {
    const { result } = renderHook(() => useDieRoll(sides));

    expect(result.current.rotation).toEqual([0, 0, 0]);
  });

  it('should update rotation to a new random value when rollDie is called', () => {
    const { result } = renderHook(() => useDieRoll(sides));

    const initialRotation = result.current.rotation;
    const faceRotations = getFaceRotations(sides);

    act(() => {
      result.current.rollDie();
    });

    expect(result.current.result).toBeGreaterThanOrEqual(1);
    expect(result.current.result).toBeLessThanOrEqual(sides);
    expect(result.current.rotation).toEqual(faceRotations[result.current.result!]);
    expect(result.current.rotation).not.toEqual(initialRotation);
  });
});
