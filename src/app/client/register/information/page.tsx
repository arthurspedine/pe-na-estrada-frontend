'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { FormErrors } from '@/types'
import { useFormState } from 'react-dom'
import { informationFormAction } from './actions'

const initialState: FormErrors = {}
export default function InformationFormPage() {
  const [serverErrors, formAction] = useFormState(
    informationFormAction,
    initialState
  )

  return (
    <form action={formAction} className='flex flex-col gap-3 text-left pb-4'>
      <div>
        <Label htmlFor='name' className='font-bold md:text-lg'>
          Nome
        </Label>
        <Input
          autoFocus
          id='name'
          name='name'
          type='text'
          placeholder='Nome Exemplo'
        />
        {serverErrors?.name ? (
          <p className='text-destructive text-sm pt-0.5'>{serverErrors.name}</p>
        ) : (
          ''
        )}
      </div>
      <div>
        <Label htmlFor='cpf' className='font-bold md:text-lg'>
          CPF
        </Label>
        <Input id='cpf' name='cpf' type='text' placeholder='123.456.789-09' />
        {serverErrors?.cpf ? (
          <p className='text-destructive text-sm pt-0.5'>{serverErrors.cpf}</p>
        ) : (
          ''
        )}
      </div>
      <div>
        <Label htmlFor='birthDate' className='font-bold md:text-lg'>
          Data de Nascimento
        </Label>
        <Input
          id='birthDate'
          name='birthDate'
          type='date'
          placeholder='exemplo@exemplo.com'
        />
        {serverErrors?.birthDate ? (
          <p className='text-destructive text-sm pt-0.5'>
            {serverErrors.birthDate}
          </p>
        ) : (
          ''
        )}
      </div>
      <div>
        <Label htmlFor='email' className='font-bold md:text-lg'>
          Email
        </Label>
        <Input
          id='email'
          name='email'
          type='email'
          placeholder='exemplo@exemplo.com'
        />
        {serverErrors?.email ? (
          <p className='text-destructive text-sm pt-0.5'>
            {serverErrors.email}
          </p>
        ) : (
          ''
        )}
      </div>
      <div>
        <Label htmlFor='password' className='font-bold md:text-lg'>
          Password
        </Label>
        <Input
          id='password'
          name='password'
          type='password'
          placeholder='exemplo@exemplo.com'
        />
        {serverErrors?.password ? (
          <p className='text-destructive text-sm pt-0.5'>
            {serverErrors.password}
          </p>
        ) : (
          ''
        )}
      </div>
      <div className='flex gap-4'>
        <Button
          size={'lg'}
          type='submit'
          disabled
          className='bg-primary hover:bg-primary/95 flex-grow'
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
