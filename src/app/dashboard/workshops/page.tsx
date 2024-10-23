'use server'
import { handleGetWorkshops } from '@/http/handle-get-workshops'
import type { Workshop } from '../interfaces'
import { Star } from 'lucide-react'

export default async function WorkshopsPage() {
  const data: Workshop[] = await handleGetWorkshops()
  return (
    <section className='flex-grow flex flex-col'>
      <h1 className='text-2xl font-semibold text-center'>Oficinas Parceiras</h1>
      <div>
        {data.map(workshop => {
          const address = workshop.address
          const fullAddress = `${address.address}, ${address.number} - ${address.neighborhood}, ${address.city} - ${address.state}, ${address.zipCode}`
          return (
            <div
              key={workshop.id}
              className='border bg-popover py-2 px-4 flex flex-col space-y-1'
            >
              <h3 className='font-semibold text-center'>{workshop.name}</h3>
              <div className='flex flex-col gap-6'>
                <p className='text-sm'>Endereço: {fullAddress}</p>

                <div>
                  <p className='flex gap-1 text-sm items-center'>
                    {workshop.rating}/5 <Star className='size-5' />
                  </p>
                  <a
                    href={workshop.mapsUrl}
                    className='text-primary text-sm'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Google Maps
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
