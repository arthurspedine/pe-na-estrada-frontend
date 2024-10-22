'use client'
import logo from '/public/image/logo_porto.png'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import MenuNavBar from './menu-navbar-header'
import type { PathProps } from '@/types'
import { useState } from 'react'

export function DesktopHeader() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const links: PathProps[] = [
    { id: 1, path: '/', label: 'Home' },
    { id: 2, path: '/about', label: 'Sobre Nós' },
    { id: 3, path: '/dashboard', label: 'Area do Usuário' },
  ]

  function handleMenuOpen() {
    setMenuOpen(!menuOpen)
  }

  const lastLink = links[links.length - 1]

  return (
    <header className='max-w-[1440px] w-full mx-auto p-5'>
      <nav className='flex justify-between w-full'>
        <div className='flex items-center'>
          <a
            className='mr-auto text-3xl font-bold leading-none'
            href='https://www.portoseguro.com.br/'
            target='_blank'
            rel='noreferrer'
          >
            <Image
              src={logo}
              alt='Logo Porto Seguro'
              className='w-32 md:w-36 z-50 drop-shadow-sm mb-1.5'
            />
          </a>
          <ul className='relative items-center hidden md:flex'>
            {links.slice(0, links.length - 1).map(link => (
              <li key={link.id} className='ml-6'>
                <Link href={link.path} className='desktop-link-style'>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link
          href={lastLink.path}
          className='desktop-user-link-style hidden md:flex'
        >
          {lastLink.label}
        </Link>
        <Menu
          className='flex md:hidden cursor-pointer size-9'
          onClick={handleMenuOpen}
        />
      </nav>
      <MenuNavBar links={links} open={menuOpen} disableMenu={handleMenuOpen} />
    </header>
  )
}
