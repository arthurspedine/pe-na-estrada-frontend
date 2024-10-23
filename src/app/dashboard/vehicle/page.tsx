'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import { useRouter } from 'next/navigation'
import router from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { vehicleFormSchema } from '@/schemas'
import type { z } from 'zod'
import { createNewVehicle } from './create-new-vehicle'
import { toast } from 'sonner'

export type CreateVehicleSchema = z.infer<typeof vehicleFormSchema>
export default function VehiclePage() {
  const router = useRouter()

  const { register, handleSubmit, formState } = useForm<CreateVehicleSchema>({
    resolver: zodResolver(vehicleFormSchema),
  })

  async function handleCreateVehicle(data: CreateVehicleSchema) {
    const createVehicleRequest = createNewVehicle(data)

    toast.promise(createVehicleRequest, {
      loading: 'Cadastrando veículo...',
      success: () => {
        router.push('/dashboard') // GOT TO REVISE TODO
        return 'Cadastrado realizado com sucesso.'
      },
      error: err => {
        return err.message || 'Algo deu errado ao cadastrar o veículo.'
      },
      position: 'top-center',
      style: { filter: 'none', zIndex: 10 },
    })
  }

  return (
    <main className='flex flex-col flex-grow px-8'>
      <h1 className='text-2xl font-semibold text-center'>
        Adicionar um novo veículo
      </h1>
      <form
        onSubmit={handleSubmit(handleCreateVehicle)}
        className='flex flex-col gap-3 text-left pb-4 mx-auto max-w-[431px] w-full'
      >
        <div>
          <Label htmlFor='brand' className='font-bold'>
            Marca
          </Label>
          <Input
            autoFocus
            id='brand'
            type='text'
            placeholder='Marca'
            {...register('brand')}
          />
          {formState.errors.brand ? (
            <p className='text-destructive text-sm pt-0.5'>
              {formState.errors.brand.message}
            </p>
          ) : (
            ''
          )}
        </div>
        <div>
          <Label htmlFor='model' className='font-bold'>
            Modelo
          </Label>
          <Input
            id='model'
            type='text'
            placeholder='Modelo'
            {...register('model')}
          />
          {formState.errors.model ? (
            <p className='text-destructive text-sm pt-0.5'>
              {formState.errors.model.message}
            </p>
          ) : (
            ''
          )}
        </div>
        <div>
          <Label htmlFor='year' className='font-bold'>
            Ano
          </Label>
          <Input
            id='year'
            type='text'
            placeholder='0000'
            {...register('year')}
          />
          {formState.errors.year ? (
            <p className='text-destructive text-sm pt-0.5'>
              {formState.errors.year.message}
            </p>
          ) : (
            ''
          )}
        </div>
        <div>
          <Label htmlFor='licensePlate' className='font-bold'>
            Placa
          </Label>
          <Input
            id='licensePlate'
            type='text'
            placeholder='ABC-1234'
            {...register('licensePlate')}
          />
          {formState.errors.licensePlate ? (
            <p className='text-destructive text-sm pt-0.5'>
              {formState.errors.licensePlate.message}
            </p>
          ) : (
            ''
          )}
        </div>
        <div className='flex gap-4'>
          <Button
            size={'sm'}
            type='button'
            className='bg-destructive hover:bg-destructive/95 flex-grow'
            onClick={() => router.replace('/dashboard')}
          >
            Cancelar
          </Button>
          <Button
            size={'sm'}
            type='submit'
            className='bg-primary hover:bg-primary/95 flex-grow'
          >
            Cadastrar
          </Button>
        </div>
      </form>
    </main>
  )
}
