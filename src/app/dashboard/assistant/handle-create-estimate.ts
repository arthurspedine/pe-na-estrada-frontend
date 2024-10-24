'use server'
import { clientEnv } from '@/env'
import type { CreateEstimate } from './_components/chat-component'
import { cookies } from 'next/headers'

export async function handleCreateEstimate(data: CreateEstimate) {
  try {
    const req = await fetch(`${clientEnv.BACKEND_URL}/estimate`, {
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
    throw new Error('Houve um erro ao cadastrar uo orçamento.')
  }
}
