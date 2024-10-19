'use client'
import {
  registerInitialValueSchema,
  type ConfirmType,
  type RegisterInitialValueType,
} from '@/schemas'
import { createContext, useCallback, useEffect, useState } from 'react'
import React from 'react'

const defaultRegister: RegisterInitialValueType = {
  name: '',
  cpf: '',
  birthDate: '',
  email: '',
  password: '',
  brand: '',
  model: '',
  year: '',
  licensePlate: '',
}

type RegisterContextType = {
  registerData: RegisterInitialValueType
  updateRegisterDetails: (registerDetails: Partial<ConfirmType>) => void
  dataLoaded: boolean
  resetData: () => void
}

const LOCAL_STORAGE_KEY = 'multi-page-form-registerData'
export const RegisterContext = createContext<RegisterContextType | null>(null)

export const RegisterContextProvider = ({
  children,
}: { children: React.ReactNode }) => {
  const [registerData, setRegisterData] =
    useState<RegisterInitialValueType>(defaultRegister)

  const [dataLoaded, setDataLoaded] = useState<boolean>(false)

  useEffect(() => {
    readFromLocalStorage()
    setDataLoaded(true)
  }, [])

  const writeToLocalStorage = useCallback(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(registerData))
  }, [registerData])

  useEffect(() => {
    if (dataLoaded) {
      writeToLocalStorage()
    }
  }, [dataLoaded, writeToLocalStorage])

  const readFromLocalStorage = () => {
    const dataString = localStorage.getItem(LOCAL_STORAGE_KEY)

    if (!dataString) {
      return setRegisterData(defaultRegister)
    }

    const validated = registerInitialValueSchema.safeParse(
      JSON.parse(dataString)
    )

    if (validated.success) {
      setRegisterData(validated.data)
    } else {
      setRegisterData(defaultRegister)
    }
  }

  const updateRegisterDetails = (registerDetails: Partial<ConfirmType>) => {
    setRegisterData(prev => ({ ...prev, ...registerDetails }))
  }

  const resetData = () => {
    setRegisterData(defaultRegister)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(defaultRegister))
  }

  return (
    <RegisterContext.Provider
      value={{ registerData, updateRegisterDetails, dataLoaded, resetData }}
    >
      {children}
    </RegisterContext.Provider>
  )
}

export function useRegisterContext() {
  const context = React.useContext(RegisterContext)
  if (!context) {
    throw new Error('useRegisterContext must be used within an RegisterContext')
  }
  return context
}
