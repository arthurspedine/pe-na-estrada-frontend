import Image from 'next/image'
import { DialogClose, DialogContent, DialogHeader } from './ui/dialog'
import logo from '@/image/logo_porto.png'
import { Button } from './ui/button'
import type { PathProps } from '@/types'
import Link from 'next/link'
import { X } from 'lucide-react'

export default function MenuNavBar({
  links,
  open,
  disableMenu,
}: { links: PathProps[]; open: boolean; disableMenu: () => void }) {
  return (
    <>
      <div
        className={`navbar-backdrop fixed inset-0 z-10 bg-gray-900 opacity-25 ${open ? '' : 'hidden'}`}
        onClick={disableMenu}
        onKeyDown={e => {
          if (e.key === 'Escape') {
            disableMenu()
          }
        }}
        role='presentation'
        tabIndex={-1}
        aria-hidden='true'
        onKeyUp={() => {}}
      />
      <div
        className={`navbar-menu fixed top-0 left-0 z-50 h-full w-3/4 min-w-72 transition-transform transform ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className='fixed top-0 left-0 bottom-0 flex flex-col w-full max-w-sm py-5 px-5 bg-white border-r overflow-y-auto'>
          <div className='flex items-center mb-8'>
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
            <X
              className='size-7 cursor-pointer hover:text-gray-700'
              onClick={disableMenu}
            />
          </div>
          <div>
            <ul className='flex flex-col gap-2'>
              {links.slice(0, links.length).map(link => (
                <li key={link.id}>
                  <Link
                    href={link.path}
                    className='block font-semibold text-sm bg-secondary border border-border p-4 rounded-lg hover:text-primary sm:text-base'
                    onClick={disableMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='mt-auto'>
            <div className='pt-6'>
              <Button
                variant={'secondary'}
                className='block px-4 py-3 mb-2 text-xs text-center font-semibold rounded-xl hover:bg-gray-200 w-full border border-border'
                onClick={disableMenu}
              >
                <Link href='/client/login'>Entrar</Link>
              </Button>
              <Button
                className='block px-4 py-3 mb-2 text-xs text-center text-background font-semibold bg-primary hover:bg-blue-700 rounded-xl w-full'
                onClick={disableMenu}
              >
                <Link href='/client/register'>Cadastrar</Link>
              </Button>
            </div>
            <p className='my-4 text-xs text-center text-muted-foreground'>
              <span>Pé na Estrada 2024</span>
            </p>
          </div>
        </nav>
      </div>
    </>
  )
}
