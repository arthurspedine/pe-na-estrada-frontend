'use server'
import Link from 'next/link'
import { handleGetDashboard } from '@/http/handle-get-dashboard'
import { Separator } from '@/components/ui/separator'
import type { User } from './interfaces'
import { Plus } from 'lucide-react'
import { LogoutButton } from './_components/logout-button'
import { DeleteVehicle } from './_components/delete-vehicle'

export default async function dashboardPage() {
  const data: User = await handleGetDashboard()

  return (
    <section className='w-full flex flex-col'>
      <div className='py-8 px-6 bg-popover border text-center '>
        <h1 className='text-3xl font-semibold'>
          Experimente agora a nossa IA!
        </h1>
        <p className='text-lg my-4 mb-10'>Comece seu orçamento em instantes!</p>
        <Link
          href={'/dashboard/assistant'}
          className='border-none rounded-lg bg-blue-600 text-white text-lg px-5 py-3 border border-blue-600 cursor-pointer min-w-48 hover:rounded-xl transition-all duration-300 ease-in-out'
        >
          Iniciar orçamento
        </Link>
      </div>
      <section className='flex flex-col flex-grow items-center max-w-[1440px] w-full mx-auto shadow-md'>
        <div className='w-full flex flex-col py-6 px-4 relative'>
          <h2 className='text-2xl mb-4 text-center'>Olá, {data.name}!</h2>
          <LogoutButton />
          <div className='flex flex-wrap'>
            <div className='w-full flex flex-col gap-2'>
              <h3>Seus dados:</h3>
              <div className='space-y-1 text-sm'>
                <p>Email: {data.email}</p>
                <p>Cpf: {data.cpf}</p>
                <p>Data de nascimento: {data.birthDate}</p>
              </div>
            </div>
          </div>
        </div>
        <Separator />
        <div className='w-full flex flex-col flex-grow bg-popover shadow-sm relative'>
          <h3 className='py-4 text-center text-xl shadow-sm'>
            Veículos cadastrados
          </h3>
          <Link
            href={'/dashboard/vehicle'}
            className='absolute right-4 top-4 bg-green-500 rounded-full p-1'
          >
            <Plus style={{ width: '22px', height: '22px' }} />
          </Link>
          <ul className='w-full flex flex-wrap justify-evenly gap-2 items-center p-4'>
            {data.vehicles.map((v, i) => {
              const completedName = `${v.brand} ${v.model} ${v.year}`
              return (
                <li
                  className='w-60 bg-white rounded-lg shadow-md pb-4 pt-2 px-4 hover:shadow-xl transition-shadow duration-300'
                  key={v.id}
                  aria-label={`Veículo ${i + 1}: ${completedName}, Placa: ${v.licensePlate}`}
                >
                  <div className='flex justify-between items-center'>
                    <h4 className='font-semibold mb-2'>Veículo {i + 1}</h4>
                    <DeleteVehicle id={v.id} />
                  </div>
                  <p className='text'>{completedName}</p>
                  <p className='text-muted-foreground text-sm'>
                    Placa:{' '}
                    <span className='font-semibold'>{v.licensePlate}</span>
                  </p>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </section>
  )
}
