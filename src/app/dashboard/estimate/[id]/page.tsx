import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import type { Estimate } from '../../interfaces'
import { clientEnv } from '@/env'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { toast } from 'sonner'
import Link from 'next/link'

export default async function EstimateIdPage({
  params,
}: { params: { id: number } }) {
  const id = params.id
  const cookie = cookies().toString()

  const res = await fetch(`${clientEnv.BACKEND_URL}/estimate/${id}`, {
    method: 'GET',
    cache: 'no-cache',
    credentials: 'include',
    headers: {
      Cookie: cookie,
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) {
    redirect('/dashboard/estimate')
  }
  const estimate: Estimate = await res.json()
  const vehicle = `${estimate.vehicle.brand} ${estimate.vehicle.model} ${estimate.vehicle.year}`
  const address = estimate.workshop.address
  const fullAddress = `${address.address}, ${address.number} - ${address.neighborhood}, ${address.city} - ${address.state}, ${address.zipCode}`

  return (
    <div className='flex-grow flex flex-col items-center '>
      <h1 className='text-2xl font-semibold text-center'>Orçamento</h1>
      <div
        key={estimate.id}
        className='border bg-popover py-2 px-4 flex flex-col flex-grow space-y-1 w-full max-w-[1440px]'
      >
        <div className='flex justify-end items-center'>
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
          <p className='text-xs'>Placa: {estimate.vehicle.licensePlate}</p>
        </div>

        <Separator />
        {/* WORKSHOP */}
        <div>
          <h3 className='font-semibold'>Oficina responsável</h3>
          <p className='text-sm'>{estimate.workshop.name}</p>
          <p className='text-sm'>Endereço: {fullAddress}</p>
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
        <div className='flex flex-col md:justify-between md:items-center text-sm'>
          {estimate.finishedAt ? (
            <p className='font-semibold'>
              Finalizado na data {estimate.finishedAt.replace('T', ' às ')}
            </p>
          ) : (
            <p className='font-semibold'>Status: ATIVO</p>
          )}

          {estimate.value ? <p>Valor total: R${estimate.value}</p> : ''}
        </div>

        <Separator />
        <div className='flex flex-col flex-grow'>
          <h3 className='font-semibold text-center'>Serviços</h3>
          <p className='text-sm text-muted-foreground text-center'>
            {estimate.services.length === 0
              ? 'A oficina responsável ainda não cadastrou nenhum serviço.'
              : ''}
          </p>
          <div className='flex flex-col gap-2'>
            {estimate.services.map(service => (
              <div key={service.id} className='border text-sm py-2 px-4'>
                <p className='text-muted-foreground text-right text-xs'>
                  {service.createdAt.replace('T', ' às ')}
                </p>
                <p>Descrição: {service.description}</p>
                <p className='text-right'>R${service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Button asChild>
        <Link
          href={'/dashboard/estimate'}
          className='w-4/5 max-w-[1440px] mx-auto my-1'
        >
          Voltar
        </Link>
      </Button>
    </div>
  )
}
