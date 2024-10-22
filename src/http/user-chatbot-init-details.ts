'use server'
import { cookies } from 'next/headers'

export async function userChatBotInitDetails() {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/client/chatbot/init`, {
      method: 'GET',
      cache: 'no-cache',
      credentials: 'include',
      headers: {
        Cookie: cookies().toString(),
        'Content-Type': 'application/json',
      },
    })

    const data = await res.json()
    return data
  } catch (e) {
    console.log(e)
    throw new Error('Houve um erro ao preparar seus dados.')
  }
}
