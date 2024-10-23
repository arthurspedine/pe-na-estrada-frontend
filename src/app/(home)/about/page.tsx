import Link from 'next/link'
import Image from 'next/image'
import type { DevCardDetail } from '@/types'
import { DevCard } from './_components/dev-card'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import phone_img from '/public/image/about/phone.png'
import { Footer } from '@/components/footer'

export default function AboutPage() {
  const devs: DevCardDetail[] = [
    {
      id: 1,
      github_user: 'arthurspedine',
      alt: 'Foto perfil GitHub Arthur',
      developer: 'Arthur Chacon Garcia Spedine',
      rm: '554489',
    },
    {
      id: 2,
      github_user: 'Guiroselli',
      alt: 'Foto perfil GitHub Guilherme',
      developer: 'Guilherme Damasio Roselli',
      rm: '555873',
    },
    {
      id: 3,
      github_user: 'vinioc',
      alt: 'Foto perfil GitHub Vinicius',
      developer: 'Vinicius de Oliveira Coutinho',
      rm: '556182',
    },
  ]

  return (
    <>
      <section className='h-[550px] flex w-full bg-[#eaeaea]'>
        {/* container */}
        <div className='max-w-[1440px] py-4 mx-auto w-full flex flex-col items-center lg:flex-row'>
          {/* banner sobre nos */}
          <div className='flex flex-col items-center gap-4 py-4 px-5 w-full lg:w-3/5 lg:items-start lg:py-12'>
            <h2 className='text-4xl font-extrabold md:text-5xl'>Sobre Nós</h2>
            <h3 className='font-semibold text-muted-foreground text-center text-lg pb-6 md:text-left md:text-2xl lg:pb-12'>
              Conheça mais por trás sobre essa solução inovadora{' '}
            </h3>
            <Link
              href={'/dashboard'}
              className='bg-blue-500 w-full max-w-72 rounded-2xl py-2 text-lg sm:text-xl font-semibold text-center no-underline text-background transition-all duration-300 ease-in-out hover:scale-105'
            >
              Experimente agora
            </Link>
          </div>
          {/* banner img */}
          <Image
            src={phone_img}
            alt='Imagem de um celular no Pé na Estrada'
            className='max-w-[250px] md:max-w-[280px] lg:max-w-[550px] lg:p-8 lg:mx-auto '
          />
        </div>
      </section>
      <div className='flex flex-col flex-grow mt-32 mb-14 items-center gap-3'>
        <h2 className='text-4xl font-bold uppercase'>Nosso Time!</h2>
        {/* container dev */}
        <div className='py-14 px-8 gap-8 flex justify-around items-stretch flex-wrap flex-col w-full lg:max-w-[1440px] lg:flex-row'>
          {devs.map(dev => (
            <DevCard key={dev.id} {...dev} />
          ))}
        </div>
        {/* repositorio */}
        <div className='text-center'>
          <div className='flex items-center justify-center p-1 gap-1 text-lg no-underline transition-transform transition-color duration-300 ease-in-out transform-origin-center'>
            <a
              className='flex items-center space-x-1.5 mt-4 text-foreground transform-origin-center transition-all duration-300 ease-in-out hover:scale-105'
              href='https://github.com/arthurspedine/pe-na-estrada-frontend'
              target='blank'
            >
              <GitHubLogoIcon className='size-7' />
              <span>Link repositório</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
