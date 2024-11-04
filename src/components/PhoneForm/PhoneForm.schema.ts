import { z } from 'zod'

export const schema = z.object({

  phone: z.string().regex(/^\(\d{2}\)\d{5}-?\d{4}$/,{message: 'The phone field is poorly formatted, (xx) xxxxx-xxxx'})

})