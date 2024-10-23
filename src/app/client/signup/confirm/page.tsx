'use client'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useSignUpContext } from '@/context/signup-context'
import { useRouter } from 'next/navigation'
import { submitSignUpDataAction } from './actions'
import type { ConfirmSignUpType, SignUpDataInput } from '@/schemas'
import { toast } from 'sonner'
import { SignUpRoutes } from '@/types'
import { handleSignUp } from '../handle-signup'

export default function ConfirmPage() {
  const router = useRouter()

  const { signUpData, resetData } = useSignUpContext()
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
  } = signUpData

  async function handleFormSubmit(formData: FormData) {
    // submit to action
    const { success, errorMsg, redirect } = await submitSignUpDataAction(
      signUpData as ConfirmSignUpType
    )

    if (success) {
      const data: SignUpDataInput = {
        name: name as string,
        cpf: cpf as string,
        birthDate: birthDate as string,
        login: {
          email: email as string,
          password: password as string,
        },
        vehicle: {
          brand: brand as string,
          model: model as string,
          year: year as string,
          licensePlate: licensePlate as string,
        },
      }

      const signUpRequest = handleSignUp(data)

      toast.promise(signUpRequest, {
        loading: 'Cadastrando usuário...',
        success: () => {
          resetData()
          router.replace(redirect)
          return 'Cadastrado realizado com sucesso.'
        },
        error: 'Algo deu errado ao cadastrar o usuário.',
        position: 'top-center',
        style: { filter: 'none', zIndex: 10 },
      })

    }
    if (errorMsg) {
      toast.error(errorMsg, {
        position: 'top-center',
      })
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
          onClick={() => router.replace(SignUpRoutes.VEHICLE)}
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
