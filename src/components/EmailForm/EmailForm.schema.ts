import { z } from 'zod';

export const schema = z.object({
  // Validação do email deve:
  // - Ser uma string
  // - Ser um email válido
  email: z.string({message: 'Invalid Type'}).email({message: 'Invalid Email'}),
});
 