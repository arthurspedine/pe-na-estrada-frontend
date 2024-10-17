import Link from 'next/link'
import Image from 'next/image'
export default function AboutPage() {
  return (
    <main className='w-full flex-grow flex flex-col'>
      <div className='h-[515px] max-h[515] flex items-center w-full bg-#eaeaea'>
        {/* container */}
        <div className='mx-auto max-w-7xl w-full flex '>
          {/* banner sobre nos */}
          <div className='w-2/5 flex flex-col justify-center gap-6 p-5 -scroll-mt-24'>
            <h2 className='text-5xl font-bold'>Sobre Nós</h2>
            <h3 className='text-3xl font-semibold mt-6'>
              Conheça mais por trás sobre essa solução inovadora{' '}
            </h3>
            <Link
              href={'/dashboard'}
              className='w-full bg-blue-500 h-12 max-w-72 rounded-2xl pt-2  text-2xl font-bold text-center no-underline text-background hover:text-primary hover:scale-98'
            >
              Experimente agora
            </Link>
          </div>
          {/* banner img */}
          <div className='w-3/5 flex items-center justify-center'>
            <p className='w-3/4 max-w-[500px] min-w-[400px]'>imagem</p>
          </div>
        </div>
      </div>
      {/* conteudo dev */}
      <div className='flex flex-col w-full mt-[140px] mb-[60px] mx-auto text-center gap-3'>
        <h2 className='text-4xl font-bold'>Nosso Time!</h2>
        {/* container dev */}
        <div className='my-[60px] flex justify-evenly flex-wrap'>
          {/* card dev */}
          <div className='flex flex-col items-center mt-8 min-w-[230px] max-w-[230px]'>
            <p className='rounded-full w-[150px] shadow-blue-600'>imagem</p>
            <div className='mt-7 flex flex-col items-center justify-between text-center'>
              <p className='font-normal text-[1.3rem] mb-[5px]'>
                Arthur Chacon Garcia Spedine
              </p>
              <p className='font-normal text-[1.3rem] mb-[5px]'>RM: 554489</p>
              <p className='font-normal text-[1.3rem] mb-[5px]'>
                arthurspedine
              </p>
            </div>
          </div>
          <div className='flex flex-col items-center mt-8 min-w-[230px] max-w-[230px]'>
            <p className='rounded-full w-[150px] shadow-blue-600'>imagem</p>
            <div className='mt-7 flex flex-col items-center justify-between text-center'>
              <p className='font-normal text-[1.3rem] mb-[5px]'>
                Guilherme Damasio Roselli
              </p>
              <p className='font-normal text-[1.3rem] mb-[5px]'>RM: 555873</p>
              <p className='font-normal text-[1.3rem] mb-[5px]'>Guiroselli</p>
            </div>
          </div>
          <div className='flex flex-col items-center mt-8 min-w-[230px] max-w-[230px]'>
            <p className='rounded-full w-[150px] shadow-blue-600'>imagem</p>
            <div className='mt-7 flex flex-col items-center justify-between text-center'>
              <p className='font-normal text-[1.3rem] mb-[5px]'>
                Vinicius de Oliveira Coutinho
              </p>
              <p className='font-normal text-[1.3rem] mb-[5px]'>RM: 556182</p>
              <p className='font-normal text-[1.3rem] mb-[5px]'>vinioc</p>
            </div>
          </div>
        </div>
        {/* repositorio */}
        <div className='text-center'>
          <div className='flex items-center justify-center p-1 gap-1 text-lg no-underline transition-transform transition-color duration-300 ease-in-out transform-origin-center'>
            <a
              className='flex items-center justify-center p-1 gap-1.5 mt-4 text-[1.2rem] no-underline text-[var(--cor-fonte)] transition-[color,transform] duration-300 ease transform-origin-center hover:scale-110'
              href='https://github.com/arthurspedine/pe-na-estrada-frontend'
              target='blank'
            >
              Link repositório
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
