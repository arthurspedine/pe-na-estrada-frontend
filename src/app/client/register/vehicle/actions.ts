'use server'
import { vehicleFormSchema } from '@/schemas'
import { type FormErrors, RegisterRoutes } from '@/types'
import { redirect } from 'next/navigation'

export const vehicleFormAction = (
  prevState: FormErrors | undefined,
  formData: FormData
) => {
  const data = Object.fromEntries(formData.entries())
  const validated = vehicleFormSchema.safeParse(data)

  if (!validated.success) {
    const errors = validated.error.issues.reduce((acc: FormErrors, issue) => {
      acc[issue.path[0]] = issue.message
      return acc
    }, {})
    console.log(errors)
    return errors
  }

  redirect(RegisterRoutes.CONFIRM)
}