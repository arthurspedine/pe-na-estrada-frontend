'use client'
import { handleDeleteContact } from '@/http/handle-delete-contact'
import { Trash } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export function DeleteContact({ id }: { id: number }) {
  const router = useRouter()

  async function handleClickEvent(id: number) {
    const deleteContactRequest = handleDeleteContact(id)

    toast.promise(deleteContactRequest, {
      loading: 'Deletando contato...',
      success: () => {
        router.refresh()
        return 'Contato deletado com sucesso!'
      },
      error: err => {
        return err.message || 'Algo deu errado ao cadastrar o contato.'
      },
      position: 'top-center',
      style: { filter: 'none', zIndex: 10 },
    })
  }

  return (
    <button type='button' onClick={() => handleClickEvent(id)}>
      <Trash className='size-5' />
    </button>
  )
}
