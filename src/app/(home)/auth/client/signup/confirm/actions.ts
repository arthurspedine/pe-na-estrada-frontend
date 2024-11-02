import {
  clientInformationFormSchema,
  vehicleFormSchema,
  type ClientSignUpConfirmType,
} from '@/schemas'
import { ClientSignUpRoutes } from '@/types'

export type SubmitSignUpActionReturnType = {
  redirect: ClientSignUpRoutes | string
  errorMsg?: string
  success?: boolean
}

export const submitSignUpDataAction = async (
  signup: ClientSignUpConfirmType
): Promise<SubmitSignUpActionReturnType> => {
  const informationValidated = clientInformationFormSchema.safeParse(signup)
  if (!informationValidated.success) {
    return {
      redirect: ClientSignUpRoutes.INFORMATION,
      errorMsg: 'Por favor, informe seus dados.',
    }
  }

  const vehicleValidated = vehicleFormSchema.safeParse(signup)
  if (!vehicleValidated.success) {
    return {
      redirect: ClientSignUpRoutes.VEHICLE,
      errorMsg: 'Por favor, informe seu veículo.',
    }
  }

  return {
    success: true,
    redirect: '/auth/login',
  }
}
