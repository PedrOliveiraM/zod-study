import { z } from 'zod';

export const schema = z.object({
  // Validação do email deve:
  // - Ser uma string
  // - Ser um email válido
});
