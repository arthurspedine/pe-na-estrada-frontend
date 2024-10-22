'use server'
import type { CreateVehicleSchema } from './page'
import { cookies } from 'next/headers'
import { clientEnv } from '@/env'

export async function createNewVehicle(data: CreateVehicleSchema) {
  try {
    const req = await fetch(`${clientEnv.BACKEND_URL}/client/vehicle`, {
      method: 'POST',
      cache: 'no-cache',
      credentials: 'include',
      headers: {
        Cookie: cookies().toString(),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    // Verifica se a resposta foi bem-sucedida
    if (!req.ok) {
      const errorResponse = await req.text()
      return Promise.reject(new Error(JSON.parse(errorResponse).error))
    }

    const res = await req.json()
    return res
  } catch (e) {
    return Promise.reject(new Error('Houve um erro ao criar o veículo'))
  }
}
