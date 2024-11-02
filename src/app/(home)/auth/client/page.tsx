'use client'
import { ClientSignUpRoutes } from '@/types'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function ClientRedirectPage() {
  const router = useRouter()

  useEffect(() => {
    router.replace(ClientSignUpRoutes.INFORMATION)
  }, [router])
}
