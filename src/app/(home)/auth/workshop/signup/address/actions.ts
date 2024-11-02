'use server'
import { createAddressSchema } from '@/schemas'
import { WorkshopSignUpRoutes, type FormErrors } from '@/types'
import { redirect } from 'next/navigation'

export const addressFormAction = (
  prevState: FormErrors | undefined,
  formData: FormData
) => {
  const data = Object.fromEntries(formData.entries())
  const validated = createAddressSchema.safeParse(data)

  if (!validated.success) {
    const errors = validated.error.issues.reduce((acc: FormErrors, issue) => {
      acc[issue.path[0]] = issue.message
      return acc
    }, {})
    return errors
  }

  redirect(WorkshopSignUpRoutes.CONFIRM)
}
