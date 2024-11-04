import { z } from 'zod';

export const schema = z.object({
  // Validação da senha deve:
  // - Ser uma string
  // - Ter no mínimo 6 caracteres
  // - Ser igual à confirmação de senha
  password: z.string().min(6),
  confirmPassword: z.string(), 
}).refine((data)=> data.password === data.confirmPassword,
  {
    message: 'Invalid Passwords',
    path: ['confirmPassword']
  }
)
