import { cookies } from 'next/headers'
import type { Estimate } from '../interfaces'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default async function EstimatePage() {
  const res = await fetch(`${process.env.BACKEND_URL}/estimate`, {
    method: 'GET',
    cache: 'no-cache',
    credentials: 'include',
    headers: {
      Cookie: cookies().toString(),
      'Content-Type': 'application/json',
    },
  })
  const data: Estimate[] = await res.json()

  return (
    <section className='flex-grow flex flex-col items-center'>
      <h1 className='text-2xl font-semibold text-center'>Seus Orçamentos</h1>
      {data.length === 0 ? (
        <div className='flex-grow pt-8 flex flex-col items-center gap-2'>
          <p className='text-muted-foreground text-sm text-center'>
            Parece que você agendou nenhum orçamento até o o momento...
          </p>
          <Button asChild>
            <Link href={'/dashboard/assistant'}>Cadastre agora</Link>
          </Button>
        </div>
      ) : (
        <div className='max-w-[1440px] w-full'>
          {data.map((estimate, index) => {
            const vehicle = `${estimate.vehicle.brand} ${estimate.vehicle.model} ${estimate.vehicle.year}`
            return (
              <div
                key={estimate.id}
                className='border bg-popover py-2 px-4 flex flex-col space-y-1'
              >
                <div className='flex justify-between items-center'>
                  <h2 className='font-semibold text-center text-lg'>{`Orçamento ${(index - data.length) * -1}`}</h2>
                  <p className='text-xs text-muted-foreground'>
                    {estimate.createdAt.replace('T', ' ')}
                  </p>
                </div>

                {/* INITIAL ESTIMATE */}
                <div className='flex flex-col gap-2'>
                  <div>
                    <h3 className='font-semibold'>Descrição inicial</h3>
                    <p className='text-sm'>{estimate.initialDescription}</p>
                  </div>
                  <p className='text-sm'>
                    Agendado para {estimate.scheduledAt.replace('T', ' às ')}
                  </p>
                </div>

                {/* VEHICLE */}
                <div>
                  <h3 className='font-semibold text-sm'>Veículo: {vehicle}</h3>
                  <p className='text-xs'>
                    Placa: {estimate.vehicle.licensePlate}
                  </p>
                </div>
                <Separator />
                {/* WORKSHOP */}
                <div>
                  <h3 className='font-semibold'>Oficina responsável</h3>
                  <p className='text-sm'>{estimate.workshop.name}</p>
                  <div className='flex flex-col gap-2'>
                    <div className='flex flex-col'>
                      {estimate.workshop.contacts.map(c => (
                        <p key={c.id} className='text-xs mt-0.5'>
                          {c.number}
                        </p>
                      ))}
                    </div>
                    <div>
                      <a
                        href={estimate.workshop.mapsUrl}
                        className='text-primary text-sm'
                        target='_blank'
                        rel='noreferrer'
                      >
                        Google Maps
                      </a>
                    </div>
                  </div>
                </div>
                <Separator />
                <div>
                  <div className='flex flex-col md:justify-between md:items-center text-sm'>
                    {estimate.finishedAt ? (
                      <p className='font-semibold'>
                        Finalizado na data{' '}
                        {estimate.finishedAt.replace('T', ' às ')}
                      </p>
                    ) : (
                      <p className='font-semibold'>Status: ATIVO</p>
                    )}

                    {estimate.value ? (
                      <p>Valor total: R${estimate.value}</p>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
                <Button asChild>
                  <Link href={`/dashboard/estimate/${estimate.id}`}>
                    Saiba mais
                  </Link>
                </Button>
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}
