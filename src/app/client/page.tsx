'use client'
import { RegisterRoutes } from '@/types'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function ClienteRedirectPage() {
  const router = useRouter()

  useEffect(() => {
    router.replace(RegisterRoutes.INFORMATION)
  }, [router])
}
