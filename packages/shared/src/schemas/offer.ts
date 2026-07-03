import { z } from 'zod';
import { offerStatusSchema } from './enums.js';

export const offerSchema = z.object({
  id: z.uuid(),
  slotId: z.uuid(),
  waitlistEntryId: z.uuid(),
  status: offerStatusSchema,
  sentAt: z.iso.datetime(),
  expiresAt: z.iso.datetime(),
  respondedAt: z.iso.datetime().optional(),
});

export type Offer = z.infer<typeof offerSchema>;
