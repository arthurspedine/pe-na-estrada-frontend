import {
  workshopInformationFormSchema,
  contactFormSchema,
  createAddressSchema,
  type WorkshopSignUpConfirmType,
} from '@/schemas'
import { WorkshopSignUpRoutes } from '@/types'

export type SubmitSignUpActionReturnType = {
  redirect: WorkshopSignUpRoutes | string
  errorMsg?: string
  success?: boolean
}

export const submitSignUpDataAction = async (
  signup: WorkshopSignUpConfirmType
): Promise<SubmitSignUpActionReturnType> => {
  const informationValidated = workshopInformationFormSchema.safeParse(signup)
  if (!informationValidated.success) {
    return {
      redirect: WorkshopSignUpRoutes.INFORMATION,
      errorMsg: 'Por favor, informe seus dados.',
    }
  }

  const contactValidated = contactFormSchema.safeParse(signup)
  if (!contactValidated.success) {
    return {
      redirect: WorkshopSignUpRoutes.CONTACT,
      errorMsg: 'Por favor, informe seu contato.',
    }
  }

  const addressValidated = createAddressSchema.safeParse(signup)
  if (!addressValidated.success) {
    return {
      redirect: WorkshopSignUpRoutes.ADDRESS,
      errorMsg: 'Por favor, informe seu endereço.',
    }
  }

  return {
    success: true,
    redirect: '/auth/login',
  }
}
