import { z } from 'zod';

export const schema = z.object({
  // Validação do telefone deve:
  // - Ser uma string
  // - Ter exatamente 10 dígitos
});
