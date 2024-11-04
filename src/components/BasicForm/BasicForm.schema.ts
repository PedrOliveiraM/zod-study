import { z } from 'zod';

export const schema = z.object({
  // Validação do nome deve:
  // - Ser uma string
  // - Ter no mínimo 2 caracteres

  name: z.string({message: 'Invalid Type'}).min(2, `name must have at least 2 characters`),

});
