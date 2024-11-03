'use client'
import { handleDeleteVehicle } from '@/http/handle-delete-vehicle'
import { Trash } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export function DeleteVehicle({ id }: { id: number }) {
  const router = useRouter()

  async function handleClickEvent(id: number) {
    const deleteVehicleRequest = handleDeleteVehicle(id)

    toast.promise(deleteVehicleRequest, {
      loading: 'Deletando veículo...',
      success: () => {
        setTimeout(() => {
          router.refresh()
        }, 1000)
        return 'Veículo deletado com sucesso!'
      },
      error: err => {
        return err.message || 'Algo deu errado ao cadastrar o veículo.'
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
