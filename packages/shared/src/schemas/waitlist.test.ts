import { describe, it, expect } from 'vitest';
import { waitlistEntrySchema } from './waitlistEntry.js';

describe('waitlistEntrySchema', () => {
  const validEntry = {
    id: '550e8400-e29b-41d4-a716-446655440000',
    clientId: '550e8400-e29b-41d4-a716-446655440001',
    serviceId: '550e8400-e29b-41d4-a716-446655440002',
    earliestTime: '2026-07-03T09:00:00Z',
    latestTime: '2026-07-03T18:00:00Z',
    urgency: 'normal',
    createdAt: '2026-07-01T10:00:00Z',
  };

  it('accepts an entry without preferredProviderId (optional field omitted)', () => {
    expect(waitlistEntrySchema.safeParse(validEntry).success).toBe(true);
  });

  it('accepts an entry with a valid preferredProviderId', () => {
    const withProvider = {
      ...validEntry,
      preferredProviderId: '550e8400-e29b-41d4-a716-446655440003',
    };
    expect(waitlistEntrySchema.safeParse(withProvider).success).toBe(true);
  });

  it('rejects an invalid urgency', () => {
    expect(waitlistEntrySchema.safeParse({ ...validEntry, urgency: 'urgent' }).success).toBe(false);
  });

  it('rejects a malformed preferredProviderId', () => {
    expect(
      waitlistEntrySchema.safeParse({ ...validEntry, preferredProviderId: 'nope' }).success,
    ).toBe(false);
  });
});
