import { z } from 'zod'

const currentYear = new Date().getFullYear()

export const clientInformationFormSchema = z.object({
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

export const clientSignUpInitialValueSchema = z.object({
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

export const clientSignUpConfirmSchema = z.object({
  ...clientInformationFormSchema.shape,
  ...vehicleFormSchema.shape,
})

export type ClientSignUpConfirmType = z.infer<typeof clientSignUpConfirmSchema>
export type ClientSignUpInitialValueType = z.infer<
  typeof clientSignUpInitialValueSchema
>

export const loginDataSchema = z.object({
  email: z
    .string()
    .email('Formato de email inválido.')
    .max(100, 'O email deve ter no máximo 100 caracteres.'),
  password: z.string().min(8, 'A senha deve ter pelo menos 8 caracteres.'),
})

export type LoginDataInput = z.infer<typeof loginDataSchema>

const clientSignUpDataSchema = z.object({
  name: clientInformationFormSchema.shape.name,
  cpf: clientInformationFormSchema.shape.cpf,
  birthDate: clientInformationFormSchema.shape.birthDate,
  login: loginDataSchema, // Incorporando o esquema de login
  vehicle: vehicleFormSchema, // Incorporando o esquema de veículo
})

export type ClientSignUpDataInput = z.infer<typeof clientSignUpDataSchema>

export const contactFormSchema = z.object({
  ddi: z
    .string()
    .min(1, { message: 'DDI deve ter pelo menos 1 dígito' })
    .max(999, { message: 'DDI deve ter no máximo 3 dígitos' }),
  ddd: z
    .string()
    .min(2, { message: 'DDD deve ter pelo menos 2 dígitos' })
    .max(99, { message: 'DDD deve ter no máximo 2 dígitos' }),
  contactNumber: z
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

export const workshopInformationFormSchema = z.object({
  name: z
    .string()
    .min(2, 'O nome deve ter pelo menos 2 caracteres.')
    .max(100, 'O nome deve ter no máximo 100 caracteres.'),
  legalName: z
    .string()
    .min(2, 'O nome legal deve ter pelo menos 2 caracteres.')
    .max(100, 'O nome legal deve ter no máximo 100 caracteres.'),
  rating: z
    .string()
    .min(1, 'A avaliação mínima é 1.')
    .max(5, 'A avaliação máxima é 5.'),
  mapsUrl: z.string().url('A URL do mapa deve ser válida.'),
  email: z
    .string()
    .email('Formato de email inválido.')
    .max(100, 'O email deve ter no máximo 100 caracteres.'),
  password: z
    .string()
    .min(8, 'A senha deve ter pelo menos 8 caracteres.')
    .max(128, 'A senha deve ter no máximo 128 caracteres.')
    .regex(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula.')
    .regex(/[0-9]/, 'A senha deve conter pelo menos um número.')
    .regex(
      /[^A-Za-z0-9]/,
      'A senha deve conter pelo menos um caractere especial.'
    ),
})

export const workshopSignUpInitialValueSchema = z.object({
  name: z.string().optional(),
  legalName: z.string().optional(),
  ddi: z.string().optional(),
  ddd: z.string().optional(),
  contactNumber: z.string().optional(),
  streetName: z.string().optional(),
  number: z.string().optional(),
  referencePoint: z.string().optional(),
  zipCode: z.string().optional(),
  neighborhood: z.string().optional(),
  neighborhoodZone: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  rating: z.string().optional(),
  mapsUrl: z.string().optional(),
  email: z.string().optional(),
  password: z.string().optional(),
})

export const workshopSignUpConfirmSchema = z.object({
  ...workshopInformationFormSchema.shape,
  ...contactFormSchema.shape,
  ...createAddressSchema.shape,
})

export type WorkshopSignUpConfirmType = z.infer<
  typeof workshopSignUpConfirmSchema
>
export type WorkshopSignUpInitialValueType = z.infer<
  typeof workshopSignUpInitialValueSchema
>

const workshopSignUpDataSchema = z.object({
  name: workshopInformationFormSchema.shape.name,
  legalName: workshopInformationFormSchema.shape.legalName,
  address: createAddressSchema,
  rating: workshopInformationFormSchema.shape.rating.transform(val =>
    Number(val)
  ),
  mapsUrl: workshopInformationFormSchema.shape.mapsUrl,
  login: loginDataSchema,
  contact: contactFormSchema
    .extend({
      number: contactFormSchema.shape.contactNumber,
    })
    .omit({ contactNumber: true }),
})

export type WorkshopSignUpDataInput = z.infer<typeof workshopSignUpDataSchema>
