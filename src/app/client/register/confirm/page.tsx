'use client'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useRegisterContext } from '@/context/register-context'
import { useRouter } from 'next/navigation'
import { submitRegisterAction } from './actions'
import type { ConfirmType } from '@/schemas'
import { toast } from 'sonner'

export default function ConfirmPage() {
  const router = useRouter()

  const { registerData, resetData } = useRegisterContext()
  const {
    name,
    cpf,
    birthDate,
    email,
    password,
    brand,
    model,
    year,
    licensePlate,
  } = registerData

  async function handleFormSubmit(formData: FormData) {
    // submit to action
    const { success, errorMsg, redirect } = await submitRegisterAction(
      registerData as ConfirmType
    )

    if (success) {
      toast.success('Cadastro realizado com sucesso!', {
        position: 'top-center',
      })
      resetData()
    } else if (errorMsg) {
      toast.error(errorMsg, {
        position: 'top-center',
      })
    }

    if (redirect) {
      router.replace(redirect)
    }
  }
  return (
    <form
      action={handleFormSubmit}
      className='flex flex-col gap-3 text-left pb-4'
    >
      <h2 className='font-semibold text-center'>Confirme seus dados</h2>

      <div className='space-y-1'>
        <p className='text-sm'>Nome: {name}</p>
        <p className='text-sm'>CPF: {cpf}</p>
        <p className='text-sm'>Data de nascimento: {birthDate}</p>
      </div>
      <Separator />
      <div className='space-y-1'>
        <p className='text-sm'>Email: {email}</p>
        <p className='text-sm'>Senha: {password}</p>
      </div>
      <Separator />
      <h3 className='font-semibold text-center'>Veículo</h3>
      <div className='space-y-1'>
        <p className='text-sm'>Marca: {brand}</p>
        <p className='text-sm'>Modelo: {model}</p>
        <p className='text-sm'>Ano: {year}</p>
        <p className='text-sm'>Placa: {licensePlate}</p>
      </div>
      <Separator />
      <div className='flex gap-4'>
        <Button
          size={'sm'}
          type='button'
          className='bg-primary hover:bg-primary/95 flex-grow'
          onClick={() => router.replace('/client/register/vehicle')}
        >
          Voltar
        </Button>
        <Button
          size={'sm'}
          type='submit'
          className='bg-primary hover:bg-primary/95 flex-grow'
        >
          Cadrastar
        </Button>
      </div>
    </form>
  )
}
