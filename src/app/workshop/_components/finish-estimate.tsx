'use client'
import { Button } from '@/components/ui/button'
import handleFinishEstimate from '../handle-finish-estimate'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

export function FinishEstimate({
  id,
  disabled,
}: { id: number; disabled: boolean }) {
  const router = useRouter()
  function handleButtonClick() {
    const finishEstimateRequest = handleFinishEstimate(id)

    toast.promise(finishEstimateRequest, {
      loading: 'Finalizando orçamento...',
      success: () => {
        setTimeout(() => {
          router.refresh()
        }, 500)
        return 'Orçamento finalizado com sucesso.'
      },
      error: err => {
        return err.message || 'Algo deu errado ao finalizar o orçamento.'
      },
      position: 'top-center',
      style: { filter: 'none', zIndex: 10 },
    })
  }

  return (
    <Button
      className='w-full disabled:cursor-not-allowed'
      variant={'destructive'}
      disabled={disabled}
      onClick={handleButtonClick}
    >
      Finalizar orçamento
    </Button>
  )
}
