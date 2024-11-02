'use client'
import { Button } from '@/components/ui/button'
import { WorkshopSignUpRoutes, type FormErrors } from '@/types'
import { useRouter } from 'next/navigation'
import { useFormState } from 'react-dom'
import { contactFormAction } from './actions'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useWorkshopSignUpContext } from '@/context/workshop-signup-context'

const initialState: FormErrors = {}
export default function ContactFormPage() {
  const router = useRouter()

  const [serverErrors, formAction] = useFormState(
    contactFormAction,
    initialState
  )

  const { updateSignUpDetails, signUpData } = useWorkshopSignUpContext()

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    updateSignUpDetails({ [e.target.name]: e.target.value })
  }

  return (
    <form action={formAction} className='flex flex-col gap-3 text-left pb-4'>
      <div>
        <Label htmlFor='ddi' className='font-bold'>
          DDI
        </Label>
        <Input
          autoFocus
          id='ddi'
          name='ddi'
          min={1}
          placeholder='DDI (ex: 55)'
          type='number'
          onChange={handleInputChange}
          defaultValue={signUpData.ddi}
        />
        {serverErrors?.ddi ? (
          <p className='text-destructive text-sm pt-0.5'>{serverErrors.ddi}</p>
        ) : (
          ''
        )}
      </div>
      <div>
        <Label htmlFor='ddd' className='font-bold'>
          DDD
        </Label>
        <Input
          id='ddd'
          name='ddd'
          type='number'
          min={1}
          placeholder='DDD (ex: 11)'
          onChange={handleInputChange}
          defaultValue={signUpData.ddd}
        />
        {serverErrors?.ddd ? (
          <p className='text-destructive text-sm pt-0.5'>{serverErrors.ddd}</p>
        ) : (
          ''
        )}
      </div>
      <div>
        <Label htmlFor='contactNumber' className='font-bold'>
          N° Telefone
        </Label>
        <Input
          id='contactNumber'
          name='contactNumber'
          type='text'
          placeholder='1234-5678'
          onChange={handleInputChange}
          defaultValue={signUpData.contactNumber}
        />
        {serverErrors?.contactNumber ? (
          <p className='text-destructive text-sm pt-0.5'>
            {serverErrors.contactNumber}
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
          onClick={() => router.replace(WorkshopSignUpRoutes.INFORMATION)}
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
