import type { LoginDataInput } from '@/schemas'
import { login } from '../auth'
import axios from 'axios'

export async function handleLogin(data: LoginDataInput) {
  try {
    await login(data)
  } catch (e) {
    if (axios.isAxiosError(e)) {
      console.error('Erro na requisição:', e.response?.data)
    } else {
      console.error(e)
    }
    throw new Error('Houve um erro ao logar')
  }
}
