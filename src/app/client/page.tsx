'use client'
import { useRouter } from 'next/navigation'

export default function ClienteRedirectPage() {
  const router = useRouter()
  router.replace('/client/register')
}
