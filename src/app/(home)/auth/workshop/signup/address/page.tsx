'use client'
import { Button } from '@/components/ui/button'
import { WorkshopSignUpRoutes, type FormErrors } from '@/types'
import { useRouter } from 'next/navigation'
import { useFormState } from 'react-dom'
import { addressFormAction } from './actions'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useWorkshopSignUpContext } from '@/context/workshop-signup-context'

const initialState: FormErrors = {}
export default function AddressFormPage() {
  const router = useRouter()

  const [serverErrors, formAction] = useFormState(
    addressFormAction,
    initialState
  )

  const { updateSignUpDetails, signUpData } = useWorkshopSignUpContext()

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    updateSignUpDetails({ [e.target.name]: e.target.value })
  }

  return (
    <form action={formAction} className='flex flex-col gap-3 text-left pb-4'>
      <div>
        <Label htmlFor='streetName' className='font-bold'>
          Nome da Rua
        </Label>
        <Input
          id='streetName'
          name='streetName'
          placeholder='Nome da Rua'
          type='text'
          onChange={handleInputChange}
          defaultValue={signUpData.streetName}
        />
        {serverErrors?.streetName && (
          <p className='text-destructive text-sm pt-0.5'>
            {serverErrors.streetName}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor='number' className='font-bold'>
          Número
        </Label>
        <Input
          id='number'
          name='number'
          placeholder='Número'
          type='text'
          min={1}
          onChange={handleInputChange}
          defaultValue={signUpData.number}
        />
        {serverErrors?.number && (
          <p className='text-destructive text-sm pt-0.5'>
            {serverErrors.number}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor='referencePoint' className='font-bold'>
          Ponto de Referência
        </Label>
        <Input
          id='referencePoint'
          name='referencePoint'
          placeholder='Ponto de Referência (opcional)'
          type='text'
          onChange={handleInputChange}
          defaultValue={signUpData.referencePoint}
        />
      </div>

      <div>
        <Label htmlFor='zipCode' className='font-bold'>
          CEP
        </Label>
        <Input
          id='zipCode'
          name='zipCode'
          placeholder='CEP (ex: 12345-678)'
          type='text'
          onChange={handleInputChange}
          defaultValue={signUpData.zipCode}
        />
        {serverErrors?.zipCode && (
          <p className='text-destructive text-sm pt-0.5'>
            {serverErrors.zipCode}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor='neighborhood' className='font-bold'>
          Bairro
        </Label>
        <Input
          id='neighborhood'
          name='neighborhood'
          placeholder='Bairro'
          type='text'
          onChange={handleInputChange}
          defaultValue={signUpData.neighborhood}
        />
        {serverErrors?.neighborhood && (
          <p className='text-destructive text-sm pt-0.5'>
            {serverErrors.neighborhood}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor='neighborhoodZone' className='font-bold'>
          Zona do Bairro
        </Label>
        <Input
          id='neighborhoodZone'
          name='neighborhoodZone'
          placeholder='Zona do Bairro'
          type='text'
          onChange={handleInputChange}
          defaultValue={signUpData.neighborhoodZone}
        />
        {serverErrors?.neighborhoodZone && (
          <p className='text-destructive text-sm pt-0.5'>
            {serverErrors.neighborhoodZone}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor='city' className='font-bold'>
          Cidade
        </Label>
        <Input
          id='city'
          name='city'
          placeholder='Cidade'
          type='text'
          onChange={handleInputChange}
          defaultValue={signUpData.city}
        />
        {serverErrors?.city && (
          <p className='text-destructive text-sm pt-0.5'>{serverErrors.city}</p>
        )}
      </div>

      <div>
        <Label htmlFor='state' className='font-bold'>
          Estado
        </Label>
        <Input
          id='state'
          name='state'
          placeholder='Estado (ex: SP)'
          type='text'
          maxLength={2}
          onChange={handleInputChange}
          defaultValue={signUpData.state}
        />
        {serverErrors?.state && (
          <p className='text-destructive text-sm pt-0.5'>
            {serverErrors.state}
          </p>
        )}
      </div>
      <div className='flex gap-4'>
        <Button
          size={'sm'}
          type='button'
          className='bg-primary hover:bg-primary/95 flex-grow'
          onClick={() => router.replace(WorkshopSignUpRoutes.CONTACT)}
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
