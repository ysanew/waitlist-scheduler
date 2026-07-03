import { z } from 'zod';

export const slotStatusSchema = z.enum(['open', 'held', 'booked', 'cancelled']);
export type SlotStatus = z.infer<typeof slotStatusSchema>;

export const offerStatusSchema = z.enum(['pending', 'accepted', 'declined', 'expired']);
export type OfferStatus = z.infer<typeof offerStatusSchema>;

export const urgencySchema = z.enum(['low', 'normal', 'high']);
export type Urgency = z.infer<typeof urgencySchema>;
