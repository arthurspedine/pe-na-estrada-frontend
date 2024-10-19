import type { ConfirmSchema } from '@/schemas'
import { createContext } from 'react'

type RegisterContextType = {
  registerData: ConfirmSchema
  updateRegisterDetails: (registerDetails: Partial<ConfirmSchema>) => void
  dataLoaded: boolean
  resetLocalStorage: () => void
}

export const RegisterContext = createContext<RegisterContextType | null>(null)
