import { z } from 'zod';

export const providerSchema = z.object({
  id: z.uuid(),
  name: z.string().min(1).max(100),
});

export type Provider = z.infer<typeof providerSchema>;
