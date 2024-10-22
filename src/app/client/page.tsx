'use client'
import { SignUpRoutes } from '@/types'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function ClientRedirectPage() {
  const router = useRouter()

  useEffect(() => {
    router.replace(SignUpRoutes.INFORMATION)
  }, [router])
}
