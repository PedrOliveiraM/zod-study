import { z } from 'zod';

export const schema = z.object({
  // Validação das tags deve:
  // - Ser um array de strings
  // - Ter no mínimo 1 tag
  // - Ter no máximo 3 tags
});
