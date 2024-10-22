import Link from 'next/link'
import { LoginForm } from './_components/login-form'

export default function LoginPage() {
  return (
    <div className='px-6 my-auto text-center min-h-[550px] max-w-[431px] w-full'>
      <h1 className='text-3xl md:text-4xl font-extrabold'>Login</h1>
      <p className='text-sm md:text-base mx-auto text-muted-foreground mt-2'>
        Entre com seu email e senha para continuar
      </p>
      <LoginForm />

      <p className='text-xs md:text-sm lg:text-base mx-auto flex justify-center text-left text-muted-foreground'>
        Não tem uma conta?{' '}
        <Link
          href='/client/signup'
          className='ml-1 font-semibold bg-transparent border-none text-foreground'
        >
          Criar uma conta aqui
        </Link>
      </p>
    </div>
  )
}
