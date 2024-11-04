'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from './ui/label'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema } from '@/schemas'
import type { z } from 'zod'
import { toast } from 'sonner'
import { handleEditContact } from '@/http/handle-edit-contact'

export type CreateContactSchema = Omit<
  z.infer<typeof contactFormSchema>,
  'contactNumber'
> & {
  number: string
}

export type CreateContactFormSchema = z.infer<typeof contactFormSchema>

export function EditContactForm({
  id,
  ddi,
  ddd,
  number,
}: {
  id: number
  ddi: number
  ddd: number
  number: string
}) {
  const router = useRouter()

  const { register, handleSubmit, formState } =
    useForm<CreateContactFormSchema>({
      resolver: zodResolver(contactFormSchema),
    })

  async function handleClickEvent(data: CreateContactFormSchema) {
    const dataReq: CreateContactSchema = {
      ddi: data.ddi,
      ddd: data.ddd,
      number: data.contactNumber,
    }

    const editContactRequest = handleEditContact(dataReq, id)

    toast.promise(editContactRequest, {
      loading: 'Editando contato...',
      success: () => {
        setTimeout(() => {
          router.replace('/dashboard')
          router.refresh()
        }, 1000)
        return 'Edição realizada com sucesso.'
      },
      error: err => {
        return err.message || 'Algo deu errado ao editar o contato.'
      },
      position: 'top-center',
      style: { filter: 'none', zIndex: 10 },
    })
  }

  return (
    <form
      onSubmit={handleSubmit(handleClickEvent)}
      className='flex flex-col gap-3 text-left pb-4 mx-auto max-w-[431px] w-full'
    >
      <div>
        <Label htmlFor='ddi' className='font-bold'>
          DDI
        </Label>
        <Input
          autoFocus
          id='ddi'
          type='number'
          defaultValue={ddi}
          min={1}
          placeholder='DDI (ex: 55)'
          {...register('ddi')}
        />
        {formState.errors.ddi ? (
          <p className='text-destructive text-sm pt-0.5'>
            {formState.errors.ddi.message}
          </p>
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
          type='number'
          defaultValue={ddd}
          min={1}
          placeholder='DDD (ex: 11)'
          {...register('ddd')}
        />
        {formState.errors.ddd ? (
          <p className='text-destructive text-sm pt-0.5'>
            {formState.errors.ddd.message}
          </p>
        ) : (
          ''
        )}
      </div>
      <div>
        <Label htmlFor='number' className='font-bold'>
          Número
        </Label>
        <Input
          id='number'
          type='text'
          defaultValue={number}
          placeholder='1234-5678'
          {...register('contactNumber')}
        />
        {formState.errors.contactNumber ? (
          <p className='text-destructive text-sm pt-0.5'>
            {formState.errors.contactNumber.message}
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
          onClick={() => router.back()}
        >
          Cancelar
        </Button>
        <Button
          size={'sm'}
          type='submit'
          className='bg-primary hover:bg-primary/95 flex-grow'
        >
          Editar
        </Button>
      </div>
    </form>
  )
}
