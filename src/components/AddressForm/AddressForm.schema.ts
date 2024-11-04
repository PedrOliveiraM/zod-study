import { z } from 'zod';

export const schema = z.object({
  // Validação do endereço deve:
  // - Ter um CEP válido de acordo com o formato 12345-678 ou 12345678
  // - Ter uma rua
  // - Ter um bairro
  // - Ter uma cidade
  // - Ter um estado
  address: z.object({
    cep: z.string().max(9).regex(/^\d{5}-?\d{3}$/),
    street: z.string(),
    neighborhood: z.string(),
    city: z.string(),
    state: z.string()
  })
});
