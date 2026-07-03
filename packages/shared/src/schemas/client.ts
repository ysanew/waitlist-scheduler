import { z } from 'zod';

export const clientSchema = z.object({
  id: z.uuid(),
  name: z.string().min(1).max(100),
  email: z.email(),
  phone: z.string().min(7).max(20),
});

export type Client = z.infer<typeof clientSchema>;
