import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import type { Address, User } from './interfaces'
import { Pencil, Plus } from 'lucide-react'
import { LogoutButton } from '@/components/logout-button'
import { DeleteVehicle } from './_components/delete-vehicle'
import { cookies } from 'next/headers'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default async function DashboardPage() {
  const req = await fetch(`${process.env.BACKEND_URL}/client/dashboard`, {
    method: 'GET',
    cache: 'no-cache',
    credentials: 'include',
    headers: {
      Cookie: cookies().toString(),
      'Content-Type': 'application/json',
    },
  })

  const addressesReq = await fetch(`${process.env.BACKEND_URL}/address`, {
    method: 'GET',
    cache: 'no-cache',
    credentials: 'include',
    headers: {
      Cookie: cookies().toString(),
      'Content-Type': 'application/json',
    },
  })

  const data: User = await req.json()

  const addressesData: Address[] = await addressesReq.json()

  return (
    <section className='w-full flex flex-col flex-grow'>
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
          <Tabs defaultValue='vehicles' className='w-full flex-grow'>
            <TabsList className='w-full flex justify-around shadow-md'>
              <TabsTrigger value='vehicles'>Veículos</TabsTrigger>
              <TabsTrigger value='contacts'>Contatos</TabsTrigger>
              <TabsTrigger value='addresses'>Endereços</TabsTrigger>
            </TabsList>
            <TabsContent value='vehicles'>
              <h3 className='py-2 text-center text-xl shadow-md bg-muted'>
                Veículos cadastrados
              </h3>
              <Link
                href={'/dashboard/vehicle'}
                className='absolute right-4 top-1 bg-green-300 rounded-full p-1'
              >
                <Plus style={{ width: '22px', height: '22px' }} />
              </Link>
              <ul className='w-full flex flex-wrap flex-grow justify-evenly gap-2 items-start p-4'>
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
            </TabsContent>
            <TabsContent value='contacts'>
              <h3 className='py-2 text-center text-xl shadow-md bg-muted'>
                Contatos cadastrados
              </h3>
              <Link
                href={'/dashboard/contact'}
                className='absolute right-4 top-1 bg-green-300 rounded-full p-1'
              >
                <Plus style={{ width: '22px', height: '22px' }} />
              </Link>
              <ul className='w-full flex flex-wrap flex-grow justify-evenly gap-2 items-start p-4'>
                {data.contacts.length === 0 ? (
                  <p className='text-muted-foreground px-4 text-center'>
                    Parece que você cadastrou nenhum contato até o o momento...
                  </p>
                ) : (
                  ''
                )}
                {data.contacts.map((c, i) => {
                  return (
                    <li
                      className='w-60 bg-white rounded-lg shadow-md pb-4 pt-2 px-4 hover:shadow-xl transition-shadow duration-300'
                      key={c.id}
                      aria-label={`Contato ${i + 1}: ${c.number}`}
                    >
                      <div className='flex justify-between items-center'>
                        <h4 className='font-semibold mb-2'>Contato {i + 1}</h4>
                        <Link href={`/dashboard/contact/${c.id}`}>
                          <Pencil className='size-5' />
                        </Link>
                      </div>
                      <p className='text'>{c.number}</p>
                    </li>
                  )
                })}
              </ul>
            </TabsContent>
            <TabsContent value='addresses'>
              <h3 className='py-2 text-center text-xl shadow-md bg-muted'>
                Endereços cadastrados
              </h3>
              <Link
                href={'/dashboard/address'}
                className='absolute right-4 top-1 bg-green-300 rounded-full p-1'
              >
                <Plus style={{ width: '22px', height: '22px' }} />
              </Link>
              <ul className='w-full flex flex-wrap flex-grow justify-evenly gap-2 items-start p-4'>
                {addressesData.length === 0 ? (
                  <p className='text-muted-foreground px-4 text-center'>
                    Parece que você cadastrou nenhum endereço até o o momento...
                  </p>
                ) : (
                  ''
                )}
                {addressesData.map((a, i) => {
                  const fullAddress = `${a.streetName}, ${a.number}${a.referencePoint ? ` (${a.referencePoint})` : ''} - ${a.neighborhood} | Zona ${a.neighborhoodZone}, ${a.city} - ${a.state}, ${a.zipCode}`
                  return (
                    <li
                      className='w-9/10 bg-white rounded-lg shadow-md pb-4 pt-2 px-4 hover:shadow-xl transition-shadow duration-300'
                      key={a.id}
                      aria-label={`Endereço ${i + 1}: ${fullAddress}`}
                    >
                      <h4 className='font-semibold mb-2'>Endereço {i + 1}</h4>
                      <p className='text'>{fullAddress}</p>
                    </li>
                  )
                })}
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </section>
  )
}
