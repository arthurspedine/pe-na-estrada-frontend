import Image from 'next/image'
import phone_img from '/public/image/client_phone.png'

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <section className='flex flex-grow flex-col'>
      <div className='flex justify-around w-full min-h-[80vh] max-w-[1440px] mx-auto'>
        {/* FORMS */}
        {children}
        {/* IMAGEM CELULAR */}
        <div className='hidden flex-col items-center lg:flex pt-8'>
          <Image src={phone_img} alt='Imagem com celular' className='w-4/5' />
        </div>
      </div>
    </section>
  )
}
