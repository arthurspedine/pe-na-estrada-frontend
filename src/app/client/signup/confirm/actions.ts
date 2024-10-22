import {
  informationFormSchema,
  vehicleFormSchema,
  type ConfirmSignUpType,
} from '@/schemas'
import { SignUpRoutes } from '@/types'

export type SubmitSignUpActionReturnType = {
  redirect: SignUpRoutes | string
  errorMsg?: string
  success?: boolean
}

export const submitSignUpDataAction = async (
  signup: ConfirmSignUpType
): Promise<SubmitSignUpActionReturnType> => {
  const informationValidated = informationFormSchema.safeParse(signup)
  if (!informationValidated.success) {
    return {
      redirect: SignUpRoutes.INFORMATION,
      errorMsg: 'Por favor, informe seus dados.',
    }
  }

  const vehicleValidated = vehicleFormSchema.safeParse(signup)
  if (!vehicleValidated.success) {
    return {
      redirect: SignUpRoutes.VEHICLE,
      errorMsg: 'Por favor, informe seu veículo.',
    }
  }

  return {
    success: true,
    redirect: '/client/login',
  }
}
