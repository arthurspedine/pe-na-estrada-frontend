'use server'
import { cookies } from 'next/headers'
import { clientEnv } from '@/env'
import type { CreateAddressSchema } from '@/app/dashboard/address/page'

export async function handleCreateAddress(data: CreateAddressSchema) {
  try {
    const req = await fetch(`${clientEnv.BACKEND_URL}/address`, {
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
    return Promise.reject(new Error('Houve um erro ao criar o endereço'))
  }
}
