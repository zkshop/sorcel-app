import { z } from 'zod';

export const UpdateSchema = z.object({
  image: z.string().optional(),
  name: z.string().optional(),
  price: z.number().optional(),
  description: z.string().optional(),
  type: z.string().optional()
});