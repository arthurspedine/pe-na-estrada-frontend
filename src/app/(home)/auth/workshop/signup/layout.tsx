import Link from 'next/link'
import { WorkshopStepNavigation } from './_components/workshop-step-navigation'
import { WorkshopSignUpContextProvider } from '@/context/workshop-signup-context'
import { ClientSignUpRoutes } from '@/types'

export default function SignUpLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='px-6 my-auto text-center min-h-[550px] max-w-[431px] w-full'>
      <h1 className='text-3xl md:text-4xl font-extrabold'>Cadastro</h1>
      <p className='text-sm md:text-base mx-auto text-muted-foreground mt-2'>
        Cadastre agora sua conta para continuar
      </p>
      <Link
        href={ClientSignUpRoutes.INFORMATION}
        className='text-sm md:text-base mx-auto text-foreground font-semibold mt-2'
      >
        Cadastrar como cliente
      </Link>
      <WorkshopStepNavigation />
      <WorkshopSignUpContextProvider>{children}</WorkshopSignUpContextProvider>
      <p className='text-xs md:text-sm lg:text-base mx-auto flex justify-center text-left text-muted-foreground pb-4'>
        Já tem uma conta?{' '}
        <Link
          href='/auth/login'
          className='ml-1 font-semibold bg-transparent border-none text-foreground'
        >
          Login na conta aqui
        </Link>
      </p>
    </div>
  )
}
