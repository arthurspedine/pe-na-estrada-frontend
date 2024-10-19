import { RegisterRoutes } from '@/types'
import { redirect } from 'next/navigation'

export default function RegisterPage() {
  redirect(RegisterRoutes.INFORMATION)
}
