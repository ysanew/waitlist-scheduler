import { z } from 'zod';

export const serviceSchema = z.object({
  id: z.uuid(),
  name: z.string().min(1).max(100),
  durationMinutes: z.number().int().positive(),
});

export type Service = z.infer<typeof serviceSchema>;
