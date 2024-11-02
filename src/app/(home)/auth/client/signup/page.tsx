import { ClientSignUpRoutes } from '@/types'
import { redirect } from 'next/navigation'

export default function SignUpPage() {
  redirect(ClientSignUpRoutes.INFORMATION)
}
