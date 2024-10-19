import {
  informationFormSchema,
  vehicleFormSchema,
  type ConfirmType,
} from '@/schemas'
import { RegisterRoutes } from '@/types'

export type SubmitRegisterActionReturnType = {
  redirect?: RegisterRoutes
  errorMsg?: string
  success?: boolean
}

export const submitRegisterAction = async (
  register: ConfirmType
): Promise<SubmitRegisterActionReturnType> => {
  const informationValidated = informationFormSchema.safeParse(register)
  if (!informationValidated.success) {
    return {
      redirect: RegisterRoutes.INFORMATION,
      errorMsg: 'Por favor, informe seus dados.',
    }
  }

  const vehicleValidated = vehicleFormSchema.safeParse(register)
  if (!vehicleValidated.success) {
    return {
      redirect: RegisterRoutes.VEHICLE,
      errorMsg: 'Por favor, informe seu veículo.',
    }
  }

  return {
    success: true,
    redirect: RegisterRoutes.INFORMATION,
  }
}
