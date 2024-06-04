import { z } from 'zod'

const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);

export const FormDataSchema = z.object({
  name: z.string(),
  phone: z.string().regex(phoneRegex, 'Invalid Number!'),
  services: z.string(),
  comments: z.string().optional(),
  contact: z.string().optional(),
})