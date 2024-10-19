import Link from 'next/link'
import { StepNavigation } from './_components/step-navigation'

export default function RegisterPage({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className='w-full flex-grow flex flex-col'>
      <div className='flex justify-around w-full min-h-[80vh] max-w-[1440px] mx-auto'>
        <div className='px-6 my-auto text-center min-h-[550px] max-w-[431px] w-full'>
          <h1 className='text-4xl font-extrabold'>Cadastro</h1>
          <p className='mx-auto text-muted-foreground text-base mt-2'>
            Cadastre agora sua conta para continuar
          </p>
          <StepNavigation />
          {children}
          <p className='mx-auto flex justify-center text-left text-muted-foreground pb-4'>
            Já tem uma conta?{' '}
            <Link
              href='/client/login'
              className='ml-1 font-semibold text-[0.95rem] bg-transparent border-none text-foreground'
            >
              Login na conta aqui
            </Link>
          </p>
        </div>
        <div className='hidden lg:block'>
          <img src='image/imagem_celular_login.png' alt='Imagem com celular' />
        </div>
      </div>
    </main>
  )
}
