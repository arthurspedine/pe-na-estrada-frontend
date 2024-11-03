'use server'
import { cookies } from 'next/headers'
import type { CreateServiceType } from './page'
import { clientEnv } from '@/env'

export async function handleCreateService(data: CreateServiceType, id: number) {
  try {
    const req = await fetch(`${clientEnv.BACKEND_URL}/estimate/${id}/service`, {
      method: 'POST',
      cache: 'no-cache',
      credentials: 'include',
      headers: {
        Cookie: cookies().toString(),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!req.ok) {
      const errorResponse = await req.text()
      return Promise.reject(new Error(JSON.parse(errorResponse).error))
    }
  } catch (e) {
    return Promise.reject(new Error('Houve um erro ao criar o serviço'))
  }
}
