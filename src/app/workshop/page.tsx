import { cookies } from 'next/headers'
import type { Estimate, Workshop } from '../dashboard/interfaces'
import { Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { FinishEstimate } from './_components/finish-estimate'
import { LogoutButton } from '@/components/logout-button'

export default async function DashboardPage() {
  const req = await fetch(`${process.env.BACKEND_URL}/workshop/details`, {
    method: 'GET',
    cache: 'no-cache',
    credentials: 'include',
    headers: {
      Cookie: cookies().toString(),
      'Content-Type': 'application/json',
    },
  })

  const reqEstimates = await fetch(`${process.env.BACKEND_URL}/estimate/all`, {
    method: 'GET',
    cache: 'no-cache',
    credentials: 'include',
    headers: {
      Cookie: cookies().toString(),
      'Content-Type': 'application/json',
    },
  })

  const data: Workshop = await req.json()
  const estimatesData: Estimate[] = await reqEstimates.json()

  return (
    <section className='w-full flex flex-col flex-grow items-center'>
      <div className='flex flex-col flex-grow max-w-[1440px] w-full px-4 gap-2 relative'>
        <div className='relative flex justify-center'>
          <h1 className='text-xl font-semibold text-center pr-10 sm:text-2xl sm:pr-0'>
            {data.name}
          </h1>
          <LogoutButton />
        </div>
        <div>
          <p className='font-semibold'>Endereços</p>
          {data.addresses.map(a => {
            const fullAddress = `${a.streetName}, ${a.number} - ${a.neighborhood}, ${a.city} - ${a.state}, ${a.zipCode}`
            return (
              <p key={a.id} className='text-sm'>
                Endereço: {fullAddress}
              </p>
            )
          })}
        </div>
        <div className='flex flex-col space-y-1'>
          {data.contacts.map(c => (
            <p className='text-sm' key={c.id}>
              {c.number}
            </p>
          ))}
        </div>
        <p className='flex gap-1 items-center'>
          Sua avaliação:
          {data.rating}/5 <Star className='size-5' />
        </p>
        <a
          href={data.mapsUrl}
          className='text-primary text-sm'
          target='_blank'
          rel='noreferrer'
        >
          Google Maps
        </a>
        <Separator />
        <div className='flex justify-between items-center w-full px-4'>
          <h2 className='text-xl font-semibold text-center'>Orçamentos</h2>
          <p className='text-muted-foreground text-sm'>
            {estimatesData.length}
          </p>
        </div>
        {estimatesData.length === 0 ? (
          <div className='flex-grow pt-8 flex flex-col items-center'>
            <p className='text-muted-foreground text-sm text-center'>
              Parece que sua oficina ainda não tem orçamentos agendados no
              momento...
            </p>
          </div>
        ) : (
          <div className='max-w-[1440px] w-full'>
            {estimatesData.map(estimate => {
              const vehicle = `${estimate.vehicle.brand} ${estimate.vehicle.model} ${estimate.vehicle.year}`
              return (
                <div
                  key={estimate.id}
                  className='border bg-popover py-2 px-4 flex flex-col space-y-1'
                >
                  <div className='flex justify-between items-center'>
                    <h2 className='font-semibold text-center text-lg'>{`Orçamento de ${estimate.client.name}`}</h2>
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
                    <h3 className='font-semibold text-sm'>
                      Veículo: {vehicle}
                    </h3>
                    <p className='text-xs'>
                      Placa: {estimate.vehicle.licensePlate}
                    </p>
                  </div>
                  <Separator />
                  <p className='text-sm'>
                    Serviços realizados: {estimate.services.length}
                  </p>
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
                  <div className='flex w-full gap-2'>
                    <FinishEstimate
                      id={estimate.id}
                      disabled={!!estimate.finishedAt}
                    />
                    <Button className='w-full' asChild>
                      <Link href={`/workshop/estimate/${estimate.id}`}>
                        Saiba mais
                      </Link>
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
