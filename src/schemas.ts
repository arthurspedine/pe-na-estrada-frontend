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
    .max(7, 'A placa deve ter no máximo 7 caracteres.')
    .refine(plate => /^[A-Z]{3}-\d{4}$/.test(plate), {
      message: 'A placa deve estar no formato ABC-1234.',
    }),
})

export const confirmSchema = z.object({
  ...informationFormSchema.shape,
  ...vehicleFormSchema.shape,
})

export type ConfirmSchema = z.infer<typeof confirmSchema>