'use client'
import { WorkshopSignUpRoutes } from '@/types'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function ClientRedirectPage() {
  const router = useRouter()

  useEffect(() => {
    router.replace(WorkshopSignUpRoutes.INFORMATION)
  }, [router])
}
