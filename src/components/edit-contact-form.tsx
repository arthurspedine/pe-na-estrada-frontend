'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
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

  const { register, handleSubmit, formState } = useForm<CreateContactSchema>({
    resolver: zodResolver(contactFormSchema),
  })

  async function handleClickEvent(data: CreateContactSchema) {
    const editContactRequest = handleEditContact(data, id)

    toast.promise(editContactRequest, {
      loading: 'Editando contato...',
      success: () => {
        setTimeout(() => {
          router.back()
          router.refresh()
        }, 500)
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
          {...register('number')}
        />
        {formState.errors.number ? (
          <p className='text-destructive text-sm pt-0.5'>
            {formState.errors.number.message}
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
