'use server'
import { contactFormSchema } from '@/schemas'
import { WorkshopSignUpRoutes, type FormErrors } from '@/types'
import { redirect } from 'next/navigation'

export const contactFormAction = (
  prevState: FormErrors | undefined,
  formData: FormData
) => {
  const data = Object.fromEntries(formData.entries())
  const validated = contactFormSchema.safeParse(data)

  if (!validated.success) {
    const errors = validated.error.issues.reduce((acc: FormErrors, issue) => {
      acc[issue.path[0]] = issue.message
      return acc
    }, {})
    return errors
  }

  redirect(WorkshopSignUpRoutes.ADDRESS)
}
