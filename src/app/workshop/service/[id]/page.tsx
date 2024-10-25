'use client'
import { Button } from '@/components/ui/button'
import { useParams, useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { handleCreateService } from './create-new-service'

const serviceSchema = z.object({
  description: z
    .string()
    .min(30, 'A descrição deve ter ao menos 30 caracteres'),
  price: z
    .string()
    .min(1, 'O preço é obrigatório')
    .transform(value => {
      const parsedValue = Number.parseFloat(value)
      return Number.isNaN(parsedValue) ? 0 : parsedValue
    }),
})

export type CreateServiceType = z.infer<typeof serviceSchema>

export default function AddServicePage() {
  const params = useParams()
  const router = useRouter()

  const id: number = Array.isArray(params.id)
    ? Number.parseInt(params.id[0])
    : Number.parseInt(params.id)

  if (!id) {
    router.replace('/workshop')
    return
  }

  const { register, handleSubmit, formState } = useForm<CreateServiceType>({
    resolver: zodResolver(serviceSchema),
  })

  function handleSubmitService(data: CreateServiceType) {
    const createVehicleRequest = handleCreateService(data, id)

    toast.promise(createVehicleRequest, {
      loading: 'Cadastrando serviço...',
      success: () => {
        setTimeout(() => {
          router.replace(`/workshop/estimate/${id}`)
        }, 500)
        return 'Serviço cadastrado com sucesso.'
      },
      error: err => {
        return err.message || 'Algo deu errado ao cadastrar o serviço.'
      },
      position: 'top-center',
      style: { filter: 'none', zIndex: 10 },
    })
  }

  return (
    <section className='flex flex-col flex-grow px-8'>
      <h1 className='text-2xl font-semibold text-center'>
        Adicionar um novo serviço
      </h1>
      <form
        onSubmit={handleSubmit(handleSubmitService)}
        className='flex flex-col gap-3 text-left pb-4 mx-auto max-w-[431px] w-full'
      >
        <div>
          <Label htmlFor='description' className='font-bold'>
            Desrição
          </Label>
          <Input
            autoFocus
            id='description'
            type='text'
            placeholder='Descrição do serviço'
            {...register('description')}
          />
          {formState.errors.description ? (
            <p className='text-destructive text-sm pt-0.5'>
              {formState.errors.description.message}
            </p>
          ) : (
            ''
          )}
        </div>
        <div>
          <Label htmlFor='price' className='font-bold'>
            Preço
          </Label>
          <Input
            id='price'
            type='number'
            step='0.01'
            placeholder='Preço do serviço'
            {...register('price')}
          />
          {formState.errors.price ? (
            <p className='text-destructive text-sm pt-0.5'>
              {formState.errors.price.message}
            </p>
          ) : (
            ''
          )}
        </div>
        <div className='flex gap-4'>
          <Button
            size={'sm'}
            type='button'
            className='bg-destructive hover:bg-destructive/95 flex-grow'
            onClick={() => router.replace(`/workshop/estimate/${id}`)}
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
