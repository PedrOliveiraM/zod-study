import { z } from 'zod';

export const schema = z.object({
  // Validação do endereço deve:
  // - Ter um CEP válido de acordo com o formato 12345-678 ou 12345678
  // - Ter uma rua
  // - Ter um bairro
  // - Ter uma cidade
  // - Ter um estado
});
