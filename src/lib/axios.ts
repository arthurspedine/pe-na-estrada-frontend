import { clientEnv } from '@/env'
import axios from 'axios'

export const api = axios.create({
  baseURL: clientEnv.BACKEND_URL,
  timeout: 90000,
  timeoutErrorMessage: 'Request timedout',
})
