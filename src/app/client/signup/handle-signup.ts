'use server'
import { clientEnv } from '@/env'
import { api } from '@/lib/axios'
import type { SignUpDataInput } from '@/schemas'
import axios from 'axios'

export async function handleSignUp(data: SignUpDataInput) {
  try {
    await api.post(`${clientEnv.BACKEND_URL}/client/signup`, data)
  } catch (e) {
    if (axios.isAxiosError(e)) {
      console.error('Erro na requisição:', e.response?.data)
    } else {
      console.error(e)
    }
    throw new Error('Houve um erro no cadastro')
  }
}
