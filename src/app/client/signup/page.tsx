import { SignUpRoutes } from '@/types'
import { redirect } from 'next/navigation'

export default function SignUpPage() {
  redirect(SignUpRoutes.INFORMATION)
}
