import { z } from 'zod';

export const schema = z.object({
  // Validação da URL deve:
  // - Ser uma string
  // - Ser uma URL válida
  website: z.string().url({message: 'Invalid URL'})
});
