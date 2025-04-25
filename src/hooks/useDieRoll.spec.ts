import { describe, it, expect } from 'vitest';
import { useDieRoll } from './useDieRoll';
import { renderHook, act } from '@testing-library/react';

describe('useDieRoll', () => {
  it('should initialize with deafault rotation', () => {
    const { result } = renderHook(() => useDieRoll());

    expect(result.current.rotation).toEqual([0, 0, 0]);
  });

  it('should update rotation to a new random value when rollDie is called', () => {
    const { result } = renderHook(() => useDieRoll());

    const initialRotation = result.current.rotation;

    act(() => {
      result.current.rollDie();
    });

    expect(result.current.rotation).not.toEqual(initialRotation);
    expect(result.current.rotation).toHaveLength(3);
    result.current.rotation.forEach((value) => {
      expect(typeof value).toBe('number');
      expect(value).toBeGreaterThanOrEqual(0);
      expect(value).toBeLessThanOrEqual(Math.PI * 2);
    });
  });
});
