import { z } from 'zod';

export const schema = z.object({
  // Validação do gênero deve:
  // - Ser uma string
  // - Ser um dos valores válidos: 'male', 'female', 'other'
});
