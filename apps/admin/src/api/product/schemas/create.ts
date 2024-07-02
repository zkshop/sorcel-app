import { z } from 'zod';

export const CreateSchema = z.object({
  image: z.string(),
  name: z.string(),
  isModal: z.boolean(),
  crypto_price: z.union([z.string(), z.null()]).optional(),
  price: z.number(),
  description: z.string(),
});
