import { LoginForm } from './login/_components/login-form'

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className='w-full flex-grow flex flex-col'>
      <div className='flex justify-around w-full min-h-[80vh] max-w-[1440px] mx-auto'>
        {/* DIV FORM */}
        {children}
        {/* IMAGEM CELULAR */}
        <div className='hidden lg:block'>
          <img src='image/imagem_celular_login.png' alt='Imagem com celular' />
        </div>
      </div>
    </main>
  )
}
