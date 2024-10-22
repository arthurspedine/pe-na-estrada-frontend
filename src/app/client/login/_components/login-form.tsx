'use client'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { type LoginDataInput, loginDataSchema } from '@/schemas'
import { handleLogin } from '../handle-login'
import { toast } from 'sonner'

export function LoginForm() {
  const router = useRouter()

  const { register, handleSubmit, formState } = useForm<LoginDataInput>({
    resolver: zodResolver(loginDataSchema),
  })

  function handleUserLogin(data: LoginDataInput) {
    const loginRequest = handleLogin(data)

    toast.promise(loginRequest, {
      loading: 'Verificando credenciais...',
      success: () => {
        router.refresh()
        return 'Logado com sucesso.'
      },
      error: 'Algo deu errado. Por favor, verifique suas credenciais.',
      position: 'top-center',
      style: { filter: 'none', zIndex: 10 },
    })
  }

  return (
    <form
      onSubmit={handleSubmit(handleUserLogin)}
      className='flex flex-col gap-3 text-left my-2'
    >
      <div>
        <Label htmlFor='email' className='font-bold'>
          Email
        </Label>
        <Input
          autoFocus
          id='email'
          type='email'
          placeholder='exemplo@exemplo.com'
          {...register('email')}
        />
        {formState.errors.email && (
          <p className='text-destructive text-sm'>
            {formState.errors.email.message}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor='senha' className='font-bold'>
          Senha
        </Label>
        <Input
          id='email'
          type='password'
          placeholder='********'
          {...register('password')}
        />
        {formState.errors.password && (
          <p className='text-destructive text-sm'>
            {formState.errors.password.message}
          </p>
        )}
      </div>

      <Button
        size={'sm'}
        type='submit'
        className='bg-primary hover:bg-primary/95'
      >
        Entrar
      </Button>
    </form>
  )
}
