import { HomeCard } from '@/components/home-card'
import icone_agilidade from '@/image/home/icone_agilidade.png'
import icone_confianca from '@/image/home/icone_confianca.png'
import icone_tecnologia from '@/image/home/icone_tecnologia.png'
import bg from '@/image/bg.png'
import type { HomeCardDetail } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  const cards: HomeCardDetail[] = [
    {
      id: 1,
      image: icone_tecnologia,
      alt: 'Icone tecnologia',
      title: 'Tecnologia',
      description:
        'Utilizamos o que há de mais avançado em inteligência artificial para oferecer soluções rápidas e eficazes para você.',
    },
    {
      id: 2,
      image: icone_agilidade,
      alt: 'Icone agilidade',
      title: 'Agilidade',
      description:
        'Esqueça as longas esperas! Com nossa plataforma, você tem resultados em poucos minutos, sem complicação.',
    },
    {
      id: 3,
      image: icone_confianca,
      alt: 'Icone confianca',
      title: 'Confiança',
      description:
        'Transparência é a nossa base. Você pode confiar em um diagnóstico preciso e preços justos, sempre.',
    },
  ]

  return (
    <main className='flex-grow'>
      <section className='relative w-full h-[80vh] max-h-[80vh] flex items-center justify-center text-center'>
        <Image
          src={bg}
          alt='Background'
          layout='fill'
          objectFit='cover'
          className='absolute inset-0'
        />
        <div className='absolute inset-0 bg-black opacity-40' />

        {/* CONTENT */}
        <div className='max-w-[1440px] mx-auto w-full flex flex-col justify-center'>
          <h1
            className='text-[96px] text-background font-extrabold leading-[76px] drop-shadow-2xl'
            style={{
              filter: 'drop-shadow(0 2px 5px rgba(0, 0, 0, 0.2))',
            }}
          >
            Pé na
            <br />
            <span
              className='bg-clip-text text-transparent bg-gradient-to-bl from-[#0a4fbc] via-[#00a0fd] to-[#00a0fd] shadow-sm'
              style={{
                filter: 'drop-shadow(0 3px 4px rgba(0, 0, 0, 0.2))',
              }}
            >
              Estrada
            </span>
          </h1>
          <h2 className='text-background mt-3 drop-shadow-xl text-2xl'>
            Conectando você à solução ideal para o seu veículo
          </h2>
          <div className='flex flex-col items-center justify-center mt-6'>
            <p className='text-center text-xl text-background mt-2 drop-shadow-lg'>
              Experimente agora o <br />
              Assistente Pé na Estrada!
            </p>
            <Link
              className='mt-2 z-[1] bg-gradient-to-bl from-[#06368e] to-[#00a0fd] shadow-md rounded-md px-10 py-4 text-background text-xl max-w-[350px]'
              href='/dashboard'
            >
              Saiba mais!
            </Link>
          </div>
        </div>
      </section>
      <div className='flex flex-col mt-32 items-center  '>
        <h2 className='text-4xl font-semibold uppercase'>Nosso Diferencial</h2>
        {/* div cartoes */}
        <div className='max-w[1440] w-full my-14 mx-auto flex flex-wrap items-center justify-center gap-14'>
          {/* cartao */}
          {cards.map(card => (
            <HomeCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </main>
  )
}
