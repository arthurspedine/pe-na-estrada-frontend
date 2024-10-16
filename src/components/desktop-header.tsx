import logo from '@/image/logo_porto.png'
import Image from 'next/image'
import Link from 'next/link'

type PathProps = {
  id: number
  path: string
  label: string
}

export function DesktopHeader() {
  const links: PathProps[] = [
    { id: 1, path: '/', label: 'Home' },
    { id: 2, path: '/about', label: 'Sobre Nós' },
    { id: 3, path: '/dashboard', label: 'Area do Usuário' },
  ]

  const lastLink = links[links.length - 1]

  return (
    <header className='max-w-[1440px] w-full mx-auto flex items-center justify-between p-5'>
      <div className='flex items-center'>
        <Image
          src={logo}
          alt='Logo Porto Seguro'
          className='w-36 z-50 drop-shadow-sm mb-1.5'
        />
        <ul className='relative flex items-center'>
          {links.slice(0, links.length - 1).map(link => (
            <li key={link.id} className='ml-6'>
              <Link href={link.path} className='desktop-link-style'>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Link href={lastLink.path} className='desktop-user-link-style'>
        {lastLink.label}
      </Link>
    </header>
  )
}
