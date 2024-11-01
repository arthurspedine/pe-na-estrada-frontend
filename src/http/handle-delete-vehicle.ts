'use server'
import { clientEnv } from '@/env'
import { cookies } from 'next/headers'

export async function handleDeleteVehicle(id: number) {
  try {
    const req = await fetch(
      `${clientEnv.BACKEND_URL}/client/vehicle?id=${id}`,
      {
        method: 'DELETE',
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
    return Promise.reject(new Error('Houve um erro ao deletar o veículo.'))
  }
}
