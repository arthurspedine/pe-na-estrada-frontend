'use client'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const loginSchema = z.object({
  email: z
    .string()
    .email('Formato de email inválido.')
    .max(100, 'O email deve ter no máximo 100 caractéres.'),
  password: z.string().min(8, 'A senha deve conter ao menos 8 caractéres.'),
})

type LoginSchema = z.infer<typeof loginSchema>

export function LoginForm() {
  //   const router = useRouter()

  const { register, handleSubmit, formState } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  })

  function handleUserLogin(data: LoginSchema) {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(handleUserLogin)}
      className='flex flex-col gap-3 text-left my-2'
    >
      <div>
        <Label htmlFor='email' className='font-bold md:text-lg'>
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
          <p className='text-destructive'>{formState.errors.email.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor='senha' className='font-bold md:text-lg'>
          Senha
        </Label>
        <Input
          id='email'
          type='password'
          placeholder='********'
          {...register('password')}
        />
        {formState.errors.password && (
          <p className='text-destructive'>
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
