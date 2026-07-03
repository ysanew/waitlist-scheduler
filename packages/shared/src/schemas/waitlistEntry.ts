import { z } from 'zod';
import { urgencySchema } from './enums.js';

export const waitlistEntrySchema = z.object({
  id: z.uuid(),
  clientId: z.uuid(),
  serviceId: z.uuid(),
  preferredProviderId: z.uuid().optional(),
  earliestTime: z.iso.datetime(),
  latestTime: z.iso.datetime(),
  urgency: urgencySchema,
  createdAt: z.iso.datetime(),
});

export type WaitlistEntry = z.infer<typeof waitlistEntrySchema>;
