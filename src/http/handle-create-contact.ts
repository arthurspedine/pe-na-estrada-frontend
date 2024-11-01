'use server'
import { cookies } from 'next/headers'
import { clientEnv } from '@/env'
import type { CreateContactSchema } from '@/app/dashboard/contact/page'

export async function handleCreateContact(data: CreateContactSchema) {
  try {
    const req = await fetch(`${clientEnv.BACKEND_URL}/contact`, {
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
    return Promise.reject(new Error('Houve um erro ao criar o contato'))
  }
}
