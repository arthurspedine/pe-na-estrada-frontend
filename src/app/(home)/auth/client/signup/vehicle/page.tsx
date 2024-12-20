'use client'
import { Button } from '@/components/ui/button'
import { ClientSignUpRoutes, type FormErrors } from '@/types'
import { useRouter } from 'next/navigation'
import { useFormState } from 'react-dom'
import { vehicleFormAction } from './actions'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useClientSignUpContext } from '@/context/client-signup-context'

const initialState: FormErrors = {}
export default function VehicleFormPage() {
  const router = useRouter()

  const [serverErrors, formAction] = useFormState(
    vehicleFormAction,
    initialState
  )

  const { updateSignUpDetails, signUpData } = useClientSignUpContext()

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    updateSignUpDetails({ [e.target.name]: e.target.value })
  }

  return (
    <form action={formAction} className='flex flex-col gap-3 text-left pb-4'>
      <div>
        <Label htmlFor='brand' className='font-bold'>
          Marca
        </Label>
        <Input
          autoFocus
          id='brand'
          name='brand'
          type='text'
          onChange={handleInputChange}
          defaultValue={signUpData.brand}
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
        <Label htmlFor='model' className='font-bold'>
          Modelo
        </Label>
        <Input
          id='model'
          name='model'
          type='text'
          onChange={handleInputChange}
          defaultValue={signUpData.model}
          placeholder='Modelo'
        />
        {serverErrors?.model ? (
          <p className='text-destructive text-sm pt-0.5'>
            {serverErrors.model}
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
          name='year'
          type='text'
          onChange={handleInputChange}
          defaultValue={signUpData.year}
          placeholder='0000'
        />
        {serverErrors?.year ? (
          <p className='text-destructive text-sm pt-0.5'>{serverErrors.year}</p>
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
          name='licensePlate'
          type='text'
          onChange={handleInputChange}
          defaultValue={signUpData.licensePlate}
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
          size={'sm'}
          type='button'
          className='bg-primary hover:bg-primary/95 flex-grow'
          onClick={() => router.replace(ClientSignUpRoutes.INFORMATION)}
        >
          Voltar
        </Button>
        <Button
          size={'sm'}
          type='submit'
          className='bg-primary hover:bg-primary/95 flex-grow'
        >
          Próximo
        </Button>
      </div>
    </form>
  )
}
