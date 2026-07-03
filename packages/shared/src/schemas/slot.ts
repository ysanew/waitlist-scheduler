import { z } from 'zod';
import { slotStatusSchema } from './enums.js';

export const slotSchema = z.object({
  id: z.uuid(),
  providerId: z.uuid(),
  serviceId: z.uuid(),
  startTime: z.iso.datetime(),
  endTime: z.iso.datetime(),
  status: slotStatusSchema,
});

export type Slot = z.infer<typeof slotSchema>;
