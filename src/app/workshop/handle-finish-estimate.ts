'use server'
import { clientEnv } from '@/env'
import { cookies } from 'next/headers'

export default async function handleFinishEstimate(id: number) {
  try {
    const req = await fetch(
      `${clientEnv.BACKEND_URL}/estimate/finish?id=${id}`,
      {
        method: 'PUT',
        cache: 'no-cache',
        credentials: 'include',
        headers: {
          Cookie: cookies().toString(),
        },
      }
    )

    if (!req.ok) {
      const errorResponse = await req.text()
      return Promise.reject(new Error(JSON.parse(errorResponse).error))
    }
  } catch (e) {
    return Promise.reject(new Error('Houve um erro ao finalizar o orçamento'))
  }
}
