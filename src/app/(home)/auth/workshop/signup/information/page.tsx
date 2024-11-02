'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { FormErrors } from '@/types'
import { useFormState } from 'react-dom'
import { informationFormAction } from './actions'
import { useWorkshopSignUpContext } from '@/context/workshop-signup-context'

const initialState: FormErrors = {}
export default function InformationFormPage() {
  const [serverErrors, formAction] = useFormState(
    informationFormAction,
    initialState
  )

  const { updateSignUpDetails, signUpData } = useWorkshopSignUpContext()

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    updateSignUpDetails({ [e.target.name]: e.target.value })
  }

  return (
    <form action={formAction} className='flex flex-col gap-3 text-left pb-4'>
      <div>
        <Label htmlFor='name' className='font-bold'>
          Nome Unidade Oficina
        </Label>
        <Input
          autoFocus
          id='name'
          name='name'
          type='text'
          onChange={handleInputChange}
          defaultValue={signUpData.name}
          placeholder='Nome da unidade da oficina'
        />
        {serverErrors?.name ? (
          <p className='text-destructive text-xs md:text-sm pt-0.5'>
            {serverErrors.name}
          </p>
        ) : (
          ''
        )}
      </div>
      <div>
        <Label htmlFor='legalName' className='font-bold'>
          Nome Legal
        </Label>
        <Input
          id='legalName'
          name='legalName'
          type='text'
          onChange={handleInputChange}
          defaultValue={signUpData.legalName}
          placeholder='Nome legal da oficina'
        />
        {serverErrors?.legalName ? (
          <p className='text-destructive text-xs md:text-sm pt-0.5'>
            {serverErrors.legalName}
          </p>
        ) : (
          ''
        )}
      </div>
      <div>
        <Label htmlFor='rating' className='font-bold'>
          Avaliação
        </Label>
        <Input
          id='rating'
          name='rating'
          type='number'
          min={1}
          max={5}
          step={0.1}
          onChange={handleInputChange}
          defaultValue={signUpData.rating}
          placeholder='Avaliação de 1 à 5'
        />
        {serverErrors?.rating ? (
          <p className='text-destructive text-xs md:text-sm pt-0.5'>
            {serverErrors.rating}
          </p>
        ) : (
          ''
        )}
      </div>
      <div>
        <Label htmlFor='mapsUrl' className='font-bold'>
          URL do Google Maps
        </Label>
        <Input
          id='mapsUrl'
          name='mapsUrl'
          type='text'
          onChange={handleInputChange}
          defaultValue={signUpData.mapsUrl}
          placeholder='https://maps.app.goo.gl/exemplooficina'
        />
        {serverErrors?.mapsUrl ? (
          <p className='text-destructive text-xs md:text-sm pt-0.5'>
            {serverErrors.mapsUrl}
          </p>
        ) : (
          ''
        )}
      </div>
      <div>
        <Label htmlFor='email' className='font-bold'>
          Email
        </Label>
        <Input
          id='email'
          name='email'
          type='email'
          onChange={handleInputChange}
          defaultValue={signUpData.email}
          placeholder='exemplo@exemplo.com'
        />
        {serverErrors?.email ? (
          <p className='text-destructive text-xs md:text-sm pt-0.5'>
            {serverErrors.email}
          </p>
        ) : (
          ''
        )}
      </div>
      <div>
        <Label htmlFor='password' className='font-bold'>
          Senha
        </Label>
        <Input
          id='password'
          name='password'
          type='password'
          onChange={handleInputChange}
          defaultValue={signUpData.password}
          placeholder='*********'
        />
        {serverErrors?.password ? (
          <p className='text-destructive text-xs md:text-sm pt-0.5'>
            {serverErrors.password}
          </p>
        ) : (
          ''
        )}
      </div>
      <div className='flex gap-4'>
        <Button
          size={'sm'}
          type='submit'
          disabled
          className='bg-primary hover:bg-primary/95 flex-grow'
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
