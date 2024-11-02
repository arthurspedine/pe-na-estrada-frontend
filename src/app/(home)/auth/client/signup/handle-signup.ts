import type { ClientSignUpDataInput } from '@/schemas'
import axios from 'axios'
import { clientSignUp } from '../../auth'

export async function handleClientSignUp(data: ClientSignUpDataInput) {
  try {
    await clientSignUp(data)
  } catch (e) {
    if (axios.isAxiosError(e)) {
      console.error('Erro na requisição:', e.response?.data)
    } else {
      console.error(e)
    }
    throw new Error('Houve um erro no cadastro')
  }
}
