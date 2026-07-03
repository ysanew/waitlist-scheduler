import { describe, it, expect } from 'vitest';
import { slotSchema } from './slot.js';

describe('slotSchema', () => {
  const validSlot = {
    id: '550e8400-e29b-41d4-a716-446655440000',
    providerId: '550e8400-e29b-41d4-a716-446655440001',
    serviceId: '550e8400-e29b-41d4-a716-446655440002',
    startTime: '2026-07-03T14:00:00Z',
    endTime: '2026-07-03T14:30:00Z',
    status: 'open',
  };

  it('accepts a valid slot', () => {
    expect(slotSchema.safeParse(validSlot).success).toBe(true);
  });

  it('rejects an unknown status', () => {
    expect(slotSchema.safeParse({ ...validSlot, status: 'active' }).success).toBe(false);
  });

  it('rejects a non-ISO startTime', () => {
    expect(slotSchema.safeParse({ ...validSlot, startTime: '3 July 2026' }).success).toBe(false);
  });

  // the links between entities -
  // document the contract and catch accidental changes
  it('rejects a malformed providerId', () => {
    expect(slotSchema.safeParse({ ...validSlot, providerId: 'nope' }).success).toBe(false);
  });

  it('rejects a malformed serviceId', () => {
    expect(slotSchema.safeParse({ ...validSlot, serviceId: 'nope' }).success).toBe(false);
  });
});
