'use client'
import { handleDeleteVehicle } from "@/http/handle-delete-vehicle";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function DeleteVehicle({id}: {id: number}) {
  const router = useRouter()

  async function handleClickEvent(id: number) {
    const deleteVehicleRequest = handleDeleteVehicle(id)
    
    toast.promise(deleteVehicleRequest, {
      loading: 'Deletando veículo...',
      success: () => {
        router.refresh()
        return 'Veículo deletado com sucesso!'
      },
      error: 'Algo deu errado para deletar o veículo.',
      position: 'top-center',
      style: { filter: 'none', zIndex: 10 },
    })
  }

  return (
    <button type='button' onClick={() => handleClickEvent(id)}><Trash className='size-5' /></button>
  )
}