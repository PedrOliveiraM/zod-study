import { z } from 'zod';

export const schema = z.object({
  // Validação do nome deve:
  // - Ser uma string
  // - Ter no mínimo 2 caracteres
});
