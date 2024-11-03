'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createAddressSchema } from '@/schemas'
import type { z } from 'zod'
import { toast } from 'sonner'
import { handleCreateAddress } from '@/http/handle-create-address'

export type CreateAddressSchema = z.infer<typeof createAddressSchema>
export default function ContactPage() {
  const router = useRouter()

  const { register, handleSubmit, formState } = useForm<CreateAddressSchema>({
    resolver: zodResolver(createAddressSchema),
  })

  async function handleClickEvent(data: CreateAddressSchema) {
    const createAddressRequest = handleCreateAddress(data)

    toast.promise(createAddressRequest, {
      loading: 'Cadastrando endereço...',
      success: () => {
        setTimeout(() => {
          router.back()
          router.refresh()
        }, 1000)
        return 'Cadastrado realizado com sucesso.'
      },
      error: err => {
        return err.message || 'Algo deu errado ao cadastrar o endereço.'
      },
      position: 'top-center',
      style: { filter: 'none', zIndex: 10 },
    })
  }

  return (
    <section className='flex flex-col flex-grow px-8'>
      <h1 className='text-2xl font-semibold text-center'>
        Adicionar um novo endereço
      </h1>
      <form
        onSubmit={handleSubmit(handleClickEvent)}
        className='flex flex-col gap-3 text-left pb-4 mx-auto max-w-[431px] w-full'
      >
        <div>
          <Label htmlFor='streetName' className='font-bold'>
            Nome da Rua
          </Label>
          <Input
            id='streetName'
            type='text'
            placeholder='Ex: Av. Paulista'
            {...register('streetName')}
          />
          {formState.errors.streetName && (
            <p className='text-destructive text-sm pt-0.5'>
              {formState.errors.streetName.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor='number' className='font-bold'>
            Número
          </Label>
          <Input
            id='number'
            type='text'
            placeholder='Ex: 13013'
            min={1}
            {...register('number')}
          />
          {formState.errors.number && (
            <p className='text-destructive text-sm pt-0.5'>
              {formState.errors.number.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor='referencePoint' className='font-bold'>
            Ponto de Referência
          </Label>
          <Input
            id='referencePoint'
            type='text'
            placeholder='Ex: Ao lado do shopping'
            {...register('referencePoint')}
          />
        </div>

        <div>
          <Label htmlFor='zipCode' className='font-bold'>
            CEP
          </Label>
          <Input
            id='zipCode'
            type='text'
            placeholder='Ex: 00101-100'
            {...register('zipCode')}
          />
          {formState.errors.zipCode && (
            <p className='text-destructive text-sm pt-0.5'>
              {formState.errors.zipCode.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor='neighborhood' className='font-bold'>
            Bairro
          </Label>
          <Input
            id='neighborhood'
            type='text'
            placeholder='Ex: Bela Vista'
            {...register('neighborhood')}
          />
          {formState.errors.neighborhood && (
            <p className='text-destructive text-sm pt-0.5'>
              {formState.errors.neighborhood.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor='neighborhoodZone' className='font-bold'>
            Zona do Bairro
          </Label>
          <Input
            id='neighborhoodZone'
            type='text'
            placeholder='Ex: Centro'
            {...register('neighborhoodZone')}
          />
          {formState.errors.neighborhoodZone && (
            <p className='text-destructive text-sm pt-0.5'>
              {formState.errors.neighborhoodZone.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor='city' className='font-bold'>
            Cidade
          </Label>
          <Input
            id='city'
            type='text'
            placeholder='Ex: São Paulo'
            {...register('city')}
          />
          {formState.errors.city && (
            <p className='text-destructive text-sm pt-0.5'>
              {formState.errors.city.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor='state' className='font-bold'>
            Estado
          </Label>
          <Input
            id='state'
            type='text'
            placeholder='Ex: SP'
            {...register('state')}
          />
          {formState.errors.state && (
            <p className='text-destructive text-sm pt-0.5'>
              {formState.errors.state.message}
            </p>
          )}
        </div>
        <div className='flex gap-4'>
          <Button
            size={'sm'}
            type='button'
            className='bg-destructive hover:bg-destructive/95 flex-grow'
            onClick={() => router.back()}
          >
            Cancelar
          </Button>
          <Button
            size={'sm'}
            type='submit'
            className='bg-primary hover:bg-primary/95 flex-grow'
          >
            Cadastrar
          </Button>
        </div>
      </form>
    </section>
  )
}
