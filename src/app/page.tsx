export default function Home() {
  return (
    <main className='flex-grow'>
      <section className="w-full h-[80vh] max-h-[80vh] flex text-center bg-center bg-no-repeat bg-cover bg-[url('../image/bg.png')] from-black/50 via-black/30">
        <h1>
          Pé na
          <br />
          <span>Estrada</span>
        </h1>
      </section>
      <div className='flex flex-col mt-32 items-center  '>
        <h2 className='p-4 text-5xl font-semibold '>Nosso Diferencial</h2>
        {/* div cartoes */}
        <div className='max-w[1440] w-full my-14 mx-auto flex flex-wrap items-center justify-center gap-14'>
          {/* cartao */}
          <div className='max-w-80 w-full h-80 px-10 py-12 flex flex-col items-center gap-2 shadow-xl rounded-lg'>
            <div className='w-24 h-24 text-center'>IMAGEM</div>
            <h3 className='text-2xl font-bold'>Titulo</h3>
            <p className='leading-7 text-muted-foreground'>Paragrafo</p>
          </div>
          <div className='max-w-80 w-full h-80 px-10 py-12 flex flex-col items-center gap-2 shadow-xl rounded-lg'>
            <div className='w-24 h-24 text-center'>IMAGEM</div>
            <h3 className='text-2xl font-bold'>Titulo</h3>
            <p className='leading-7 text-muted-foreground'>Paragrafo</p>
          </div>
          <div className='max-w-80 w-full h-80 px-10 py-12 flex flex-col items-center gap-2 shadow-xl rounded-lg'>
            <div className='w-24 h-24 text-center'>IMAGEM</div>
            <h3 className='text-2xl font-bold'>Titulo</h3>
            <p className='leading-7 text-muted-foreground'>Paragrafo</p>
          </div>
        </div>
      </div>
    </main>
  )
}
