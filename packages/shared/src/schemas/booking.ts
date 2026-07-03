import { z } from 'zod';

export const bookingSchema = z.object({
  id: z.uuid(),
  slotId: z.uuid(),
  clientId: z.uuid(),
  offerId: z.uuid(),
  createdAt: z.iso.datetime(),
});

export type Booking = z.infer<typeof bookingSchema>;
