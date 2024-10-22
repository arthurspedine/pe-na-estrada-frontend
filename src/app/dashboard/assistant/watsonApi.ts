'use server'
import { clientEnv } from '@/env'
import axios from 'axios'

const API_URL = clientEnv.AI_URL
const API_KEY = clientEnv.AI_KEY

export const createSession = async () => {
  const response = await axios.post(
    `${API_URL}/?version=2021-06-14`,
    {
      input: {
        text: 'ola',
      },
    },
    {
      auth: {
        username: 'apikey',
        password: API_KEY,
      },
    }
  )
  const id = response.data.session_id
  return { id, message: await sendMessage(id, 'ola') }
}

export const sendMessage = async (sessionId: string, message: string) => {
  const response = await axios.post(
    `${API_URL}/${sessionId}/message?version=2021-06-14`,
    {
      input: {
        text: message,
      },
    },
    {
      auth: {
        username: 'apikey',
        password: API_KEY,
      },
    }
  )

  return response.data.output.generic
}
