'use client'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useRouter } from 'next/navigation'
import { submitSignUpDataAction } from './actions'
import type {
  WorkshopSignUpConfirmType,
  WorkshopSignUpDataInput,
} from '@/schemas'
import { toast } from 'sonner'
import { WorkshopSignUpRoutes } from '@/types'
import { handleWorkshopSignUp } from '../handle-signup'
import { useWorkshopSignUpContext } from '@/context/workshop-signup-context'

export default function ConfirmPage() {
  const router = useRouter()

  const { signUpData, resetData } = useWorkshopSignUpContext()
  const {
    name,
    legalName,
    streetName,
    ddi,
    ddd,
    contactNumber,
    number,
    referencePoint,
    zipCode,
    neighborhood,
    neighborhoodZone,
    city,
    state,
    rating,
    mapsUrl,
    email,
    password,
  } = signUpData

  async function handleFormSubmit(formData: FormData) {
    // submit to action
    const { success, errorMsg, redirect } = await submitSignUpDataAction(
      signUpData as WorkshopSignUpConfirmType
    )

    if (success) {
      const data: WorkshopSignUpDataInput = {
        name: name as string,
        legalName: legalName as string,
        address: {
          streetName: streetName as string,
          number: number as string,
          referencePoint: referencePoint as string,
          zipCode: zipCode as string,
          neighborhood: neighborhood as string,
          neighborhoodZone: neighborhoodZone as string,
          city: city as string,
          state: state as string,
        },
        rating: Number.parseFloat(rating as string),
        mapsUrl: mapsUrl as string,
        login: {
          email: email as string,
          password: password as string,
        },
        contact: {
          ddi: ddi as string,
          ddd: ddd as string,
          number: contactNumber as string,
        },
      }

      const signUpRequest = handleWorkshopSignUp(data)

      toast.promise(signUpRequest, {
        loading: 'Cadastrando cliente...',
        success: () => {
          resetData()
          router.replace(redirect)
          return 'Cadastrado realizado com sucesso.'
        },
        error: err => {
          return err.message || 'Algo deu errado ao cadastrar a oficina.'
        },
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
        <p className='text-sm'>Nome Legal: {legalName}</p>
      </div>
      <Separator />
      <h3 className='font-semibold text-center'>Endereço</h3>
      <div className='space-y-1'>
        <p className='text-sm'>Rua: {streetName}</p>
        <p className='text-sm'>Número: {number}</p>
        <p className='text-sm'>Ponto de Referência: {referencePoint}</p>
        <p className='text-sm'>CEP: {zipCode}</p>
        <p className='text-sm'>Bairro: {neighborhood}</p>
        <p className='text-sm'>Zona do Bairro: {neighborhoodZone}</p>
        <p className='text-sm'>Cidade: {city}</p>
        <p className='text-sm'>Estado: {state}</p>
      </div>
      <Separator />
      <div className='space-y-1'>
        <p className='text-sm'>Avaliação: {rating}</p>
        <p className='text-sm'>
          URL do Mapa:{' '}
          <a
            href={mapsUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='text-primary'
          >
            {mapsUrl}
          </a>
        </p>
      </div>
      <Separator />
      <h3 className='font-semibold text-center'>Informações de Contato</h3>
      <div className='space-y-1'>
        <p className='text-sm'>DDI: {ddi}</p>
        <p className='text-sm'>DDD: {ddd}</p>
        <p className='text-sm'>Número de Contato: {contactNumber}</p>
      </div>
      <Separator />

      <div className='space-y-1'>
        <p className='text-sm'>Email: {email}</p>
        <p className='text-sm'>Senha: {password}</p>
      </div>

      <Separator />
      <div className='flex gap-4'>
        <Button
          size={'sm'}
          type='button'
          className='bg-primary hover:bg-primary/95 flex-grow'
          onClick={() => router.replace(WorkshopSignUpRoutes.ADDRESS)}
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
