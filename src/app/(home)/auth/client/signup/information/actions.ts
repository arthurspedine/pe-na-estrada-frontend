'use server'
import { clientInformationFormSchema } from '@/schemas'
import { ClientSignUpRoutes, type FormErrors } from '@/types'
import { redirect } from 'next/navigation'

export const informationFormAction = (
  prevState: FormErrors | undefined,
  formData: FormData
) => {
  const data = Object.fromEntries(formData.entries())
  const validated = clientInformationFormSchema.safeParse(data)

  if (!validated.success) {
    const errors = validated.error.issues.reduce((acc: FormErrors, issue) => {
      acc[issue.path[0]] = issue.message
      return acc
    }, {})
    return errors
  }

  redirect(ClientSignUpRoutes.VEHICLE)
}
