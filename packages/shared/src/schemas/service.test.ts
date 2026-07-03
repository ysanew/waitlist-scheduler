import { describe, it, expect } from 'vitest';
import { serviceSchema } from './service.js';

describe('serviceSchema', () => {
  const validService = {
    id: '550e8400-e29b-41d4-a716-446655440000',
    name: 'Haircut',
    durationMinutes: 30,
  };

  it('accepts a valid service', () => {
    const result = serviceSchema.safeParse(validService);
    expect(result.success).toBe(true);
  });

  it('rejects an empty name', () => {
    const result = serviceSchema.safeParse({ ...validService, name: '' });
    expect(result.success).toBe(false);
  });

  it('rejects a non-integer duration', () => {
    const result = serviceSchema.safeParse({ ...validService, durationMinutes: 30.5 });
    expect(result.success).toBe(false);
  });

  it('rejects an invalid uuid', () => {
    const result = serviceSchema.safeParse({ ...validService, id: 'not-a-uuid' });
    expect(result.success).toBe(false);
  });
});
