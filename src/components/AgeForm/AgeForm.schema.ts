import { z } from 'zod';

export const schema = z.object({
  // Validação da idade deve:
  // - Ser um número
  // - Ser maior ou igual a 18
  // - Ser menor ou igual a 99
  age: z.number()
  .min(18,{message: 'Must be greater than or equal to 18'})
  .max(99,{message: 'Must be less than or equal to 99'})
});
