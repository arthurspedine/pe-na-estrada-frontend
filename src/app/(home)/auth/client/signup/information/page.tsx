'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { FormErrors } from '@/types'
import { useFormState } from 'react-dom'
import { informationFormAction } from './actions'
import { useClientSignUpContext } from '@/context/client-signup-context'

const initialState: FormErrors = {}
export default function InformationFormPage() {
  const [serverErrors, formAction] = useFormState(
    informationFormAction,
    initialState
  )

  const { updateSignUpDetails, signUpData } = useClientSignUpContext()

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    updateSignUpDetails({ [e.target.name]: e.target.value })
  }

  return (
    <form action={formAction} className='flex flex-col gap-3 text-left pb-4'>
      <div>
        <Label htmlFor='name' className='font-bold'>
          Nome
        </Label>
        <Input
          autoFocus
          id='name'
          name='name'
          type='text'
          onChange={handleInputChange}
          defaultValue={signUpData.name}
          placeholder='Nome Exemplo'
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
        <Label htmlFor='cpf' className='font-bold'>
          CPF
        </Label>
        <Input
          id='cpf'
          name='cpf'
          type='text'
          onChange={handleInputChange}
          defaultValue={signUpData.cpf}
          placeholder='123.456.789-09'
        />
        {serverErrors?.cpf ? (
          <p className='text-destructive text-xs md:text-sm pt-0.5'>
            {serverErrors.cpf}
          </p>
        ) : (
          ''
        )}
      </div>
      <div>
        <Label htmlFor='birthDate' className='font-bold'>
          Data de Nascimento
        </Label>
        <Input
          id='birthDate'
          name='birthDate'
          type='date'
          onChange={handleInputChange}
          defaultValue={signUpData.birthDate}
          placeholder='exemplo@exemplo.com'
        />
        {serverErrors?.birthDate ? (
          <p className='text-destructive text-xs md:text-sm pt-0.5'>
            {serverErrors.birthDate}
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
