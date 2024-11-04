import { z } from 'zod';

export const schema = z.object({
  // Validação do termo deve:
  // - Ser um booleano
  // - Ser true
  agreeToTerms: z.boolean().refine((value) => value === true, {message: 'Ow this field is necessary'})
})
