'use client'
import { Button } from '@/components/ui/button'
import type { FormErrors } from '@/types'
import { redirect, useRouter } from 'next/navigation'
import { useFormState } from 'react-dom'
import { vehicleFormAction } from './actions'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const initialState: FormErrors = {}
export default function VehicleFormPage() {
  const router = useRouter()

  const [serverErrors, formAction] = useFormState(
    vehicleFormAction,
    initialState
  )

  return (
    <form action={formAction} className='flex flex-col gap-3 text-left pb-4'>
      <div>
        <Label htmlFor='brand' className='font-bold md:text-lg'>
          Marca
        </Label>
        <Input
          autoFocus
          id='brand'
          name='brand'
          type='text'
          placeholder='Marca'
        />
        {serverErrors?.brand ? (
          <p className='text-destructive text-sm pt-0.5'>
            {serverErrors.brand}
          </p>
        ) : (
          ''
        )}
      </div>
      <div>
        <Label htmlFor='model' className='font-bold md:text-lg'>
          Modelo
        </Label>
        <Input id='model' name='model' type='text' placeholder='Modelo' />
        {serverErrors?.model ? (
          <p className='text-destructive text-sm pt-0.5'>
            {serverErrors.model}
          </p>
        ) : (
          ''
        )}
      </div>
      <div>
        <Label htmlFor='year' className='font-bold md:text-lg'>
          Ano
        </Label>
        <Input id='year' name='year' type='text' placeholder='0000' />
        {serverErrors?.year ? (
          <p className='text-destructive text-sm pt-0.5'>{serverErrors.year}</p>
        ) : (
          ''
        )}
      </div>
      <div>
        <Label htmlFor='licensePlate' className='font-bold md:text-lg'>
          Placa
        </Label>
        <Input
          id='licensePlate'
          name='licensePlate'
          type='text'
          placeholder='ABC-1234'
        />
        {serverErrors?.licensePlate ? (
          <p className='text-destructive text-sm pt-0.5'>
            {serverErrors.licensePlate}
          </p>
        ) : (
          ''
        )}
      </div>
      <div className='flex gap-4'>
        <Button
          size={'lg'}
          type='button'
          className='bg-primary hover:bg-primary/95 flex-grow'
          onClick={() => router.replace('/client/register/information')}
        >
          Voltar
        </Button>
        <Button
          size={'lg'}
          type='submit'
          className='bg-primary hover:bg-primary/95 flex-grow'
        >
          Próximo
        </Button>
      </div>
    </form>
  )
}
