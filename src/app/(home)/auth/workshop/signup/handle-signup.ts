import type { WorkshopSignUpDataInput } from '@/schemas'
import axios from 'axios'
import { workshopSignUp } from '../../auth'

export async function handleWorkshopSignUp(data: WorkshopSignUpDataInput) {
  try {
    await workshopSignUp(data)
  } catch (e) {
    if (axios.isAxiosError(e)) {
      console.error('Erro na requisição:', e.response?.data)
    } else {
      console.error(e)
    }
    throw new Error('Houve um erro no cadastro')
  }
}
