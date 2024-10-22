'use client'
import type { PathProps } from '@/types'
import { BotMessageSquare, CircleDollarSign, House, Wrench } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export function DashboardNavBar() {
  const links: PathProps[] = [
    {
      id: 1,
      path: '/',
      label: 'Perfil',
      icon: <House />,
    },
    {
      id: 2,
      path: 'assistant',
      label: 'Assistente',
      icon: <BotMessageSquare />,
    },
    {
      id: 3,
      path: 'estimate',
      label: 'Orçamentos',
      icon: <CircleDollarSign />,
    },
    {
      id: 4,
      path: 'workshops',
      label: 'Oficinas',
      icon: <Wrench />,
    },
  ]

  const pathname = usePathname()
  const currentPath = pathname.split('/').pop()

  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    if (currentPath === 'dashboard') return setCurrentPage(0)
    const link = links.findIndex(link => link.path === currentPath)
    setCurrentPage(link)
  }, [currentPath])

  return (
    <nav className='flex max-h-fit justify-around bg-popover border-t py-2.5 fixed bottom-0 w-full'>
      {links.map(link => (
        <Link
          key={link.id}
          href={`/dashboard/${link.path}`}
          className={`flex flex-col items-center justify-center ${link.id - 1 === currentPage ? 'text-primary' : 'text-foreground'}`}
        >
          {link.icon} {link.label}
        </Link>
      ))}
    </nav>
  )
}
