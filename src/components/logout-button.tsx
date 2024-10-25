'use client'
import { logout } from '@/app/(home)/client/auth'
import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function LogoutButton() {
  const router = useRouter()
  return (
    <Button
      variant={'ghost'}
      className='absolute right-0 hover:bg-white'
      onClick={async () => {
        await logout()
        router.refresh()
      }}
    >
      <LogOut style={{ width: '22px', height: '22px' }} />
    </Button>
  )
}
