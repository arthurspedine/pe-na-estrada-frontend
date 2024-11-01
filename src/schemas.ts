import { z } from 'zod'

const currentYear = new Date().getFullYear()

export const informationFormSchema = z.object({
  name: z
    .string()
    .min(2, 'O nome deve ter pelo menos 2 caracteres.')
    .max(100, 'O nome deve ter no máximo 100 caracteres.'),
  cpf: z
    .string()
    .length(11, 'O CPF deve ter exatamente 11 caracteres.')
    .regex(/^[0-9]+$/, 'O CPF deve conter apenas números.'),
  birthDate: z
    .string()
    .regex(
      /^\d{4}-\d{2}-\d{2}$/,
      'A data de nascimento deve estar no formato YYYY-MM-DD.'
    )
    .refine(date => {
      const today = new Date()
      const birthDate = new Date(date)
      return birthDate <= today
    }, 'A data de nascimento não pode ser uma data futura.'),
  email: z
    .string()
    .email('Formato de email inválido.')
    .max(100, 'O email deve ter no máximo 100 caracteres.'),
  password: z
    .string()
    .min(8, 'A senha deve ter pelo menos 8 caracteres.')
    .max(128, 'A senha deve ter no máximo 128 caracteres.')
    .regex(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula.')
    .regex(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula.')
    .regex(/[0-9]/, 'A senha deve conter pelo menos um número.')
    .regex(
      /[^A-Za-z0-9]/,
      'A senha deve conter pelo menos um caractere especial.'
    ),
})

export const vehicleFormSchema = z.object({
  brand: z.string().min(1, 'A marca é obrigatória.'),
  model: z.string().min(1, 'O modelo é obrigatório.'),
  year: z
    .string()
    .min(4, 'O ano é obrigatório.')
    .max(4, 'O ano deve ter 4 dígitos.')
    .refine(
      year => {
        if (year.length === 4) {
          const yearNumber = Number.parseInt(year, 10)
          return yearNumber <= currentYear + 1
        }
        return true
      },
      `O ano deve ser no máximo ${currentYear + 1}.`
    ),
  licensePlate: z
    .string()
    .min(7, 'A placa deve ter ao menos 7 caracteres.')
    .max(8, 'A placa deve ter no máximo 8 caracteres.'),
})

export const signUpInitialValueSchema = z.object({
  name: z.string().optional(),
  cpf: z.string().optional(),
  birthDate: z.string().optional(),
  email: z.string().optional(),
  password: z.string().optional(),
  brand: z.string().optional(),
  model: z.string().optional(),
  year: z.string().optional(),
  licensePlate: z.string().optional(),
})

export const confirmSignUpSchema = z.object({
  ...informationFormSchema.shape,
  ...vehicleFormSchema.shape,
})

export type ConfirmSignUpType = z.infer<typeof confirmSignUpSchema>
export type SignUpInitialValueType = z.infer<typeof signUpInitialValueSchema>

export const loginDataSchema = z.object({
  email: z
    .string()
    .email('Formato de email inválido.')
    .max(100, 'O email deve ter no máximo 100 caracteres.'),
  password: z.string().min(8, 'A senha deve ter pelo menos 8 caracteres.'),
})

export type LoginDataInput = z.infer<typeof loginDataSchema>

const signUpDataSchema = z.object({
  name: informationFormSchema.shape.name,
  cpf: informationFormSchema.shape.cpf,
  birthDate: informationFormSchema.shape.birthDate,
  login: loginDataSchema, // Incorporando o esquema de login
  vehicle: vehicleFormSchema, // Incorporando o esquema de veículo
})

export type SignUpDataInput = z.infer<typeof signUpDataSchema>

export const contactFormSchema = z.object({
  ddi: z
    .string()
    .min(1, { message: 'DDI deve ter pelo menos 1 dígito' })
    .max(999, { message: 'DDI deve ter no máximo 3 dígitos' }),
  ddd: z
    .string()
    .min(2, { message: 'DDD deve ter pelo menos 2 dígitos' })
    .max(99, { message: 'DDD deve ter no máximo 2 dígitos' }),
  number: z
    .string()
    .regex(/^\d{4,5}-?\d{4}$/, {
      message: 'O número deve estar no formato válido, ex: 1234-5678',
    })
    .min(8, { message: 'O número deve ter no mínimo 8 dígitos' })
    .max(10, { message: 'O número deve ter no máximo 10 dígitos' }),
})

export const createAddressSchema = z.object({
  streetName: z.string().min(1, 'O nome da rua é obrigatório'),
  number: z.string().min(1, 'O número é obrigatório'),
  referencePoint: z.string().optional(),
  zipCode: z.string().regex(/^\d{5}-?\d{3}$/, 'Formato de CEP inválido'),
  neighborhood: z.string().min(1, 'O bairro é obrigatório'),
  neighborhoodZone: z.string().min(1, 'A zona do bairro é obrigatória'),
  city: z.string().min(1, 'A cidade é obrigatória'),
  state: z.string().length(2, 'O estado deve ter 2 caracteres').toUpperCase(),
})
