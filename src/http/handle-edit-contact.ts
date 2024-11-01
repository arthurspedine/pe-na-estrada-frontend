'use server'
import type { CreateContactSchema } from '@/app/dashboard/contact/page'
import { clientEnv } from '@/env'
import { cookies } from 'next/headers'

export async function handleEditContact(data: CreateContactSchema, id: number) {
  console.log(data)

  try {
    const req = await fetch(`${clientEnv.BACKEND_URL}/contact?id=${id}`, {
      method: 'PUT',
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
      console.log(errorResponse)

      return Promise.reject(new Error(JSON.parse(errorResponse).error))
    }
  } catch (e) {
    return Promise.reject(new Error('Houve um erro ao editar o contato.'))
  }
}
