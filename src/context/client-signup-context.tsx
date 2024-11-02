'use client'
import {
  type ClientSignUpConfirmType,
  clientSignUpInitialValueSchema,
  type ClientSignUpInitialValueType,
} from '@/schemas'
import { createContext, useCallback, useEffect, useState } from 'react'
import React from 'react'

const defaultSignUp: ClientSignUpInitialValueType = {
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

type SignUpContextType = {
  signUpData: ClientSignUpInitialValueType
  updateSignUpDetails: (signUpDetails: Partial<ClientSignUpConfirmType>) => void
  dataLoaded: boolean
  resetData: () => void
}

const LOCAL_STORAGE_KEY = 'multi-page-form-clientSignUpData'
export const SignUpContext = createContext<SignUpContextType | null>(null)

export const ClientSignUpContextProvider = ({
  children,
}: { children: React.ReactNode }) => {
  const [signUpData, setSignUpData] =
    useState<ClientSignUpInitialValueType>(defaultSignUp)

  const [dataLoaded, setDataLoaded] = useState<boolean>(false)

  useEffect(() => {
    readFromLocalStorage()
    setDataLoaded(true)
  }, [])

  const writeToLocalStorage = useCallback(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(signUpData))
  }, [signUpData])

  useEffect(() => {
    if (dataLoaded) {
      writeToLocalStorage()
    }
  }, [dataLoaded, writeToLocalStorage])

  const readFromLocalStorage = () => {
    const dataString = localStorage.getItem(LOCAL_STORAGE_KEY)

    if (!dataString) {
      return setSignUpData(defaultSignUp)
    }

    const validated = clientSignUpInitialValueSchema.safeParse(
      JSON.parse(dataString)
    )

    if (validated.success) {
      setSignUpData(validated.data)
    } else {
      setSignUpData(defaultSignUp)
    }
  }

  const updateSignUpDetails = (
    signUpDetails: Partial<ClientSignUpConfirmType>
  ) => {
    setSignUpData(prev => ({ ...prev, ...signUpDetails }))
  }

  const resetData = () => {
    setSignUpData(defaultSignUp)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(defaultSignUp))
  }

  return (
    <SignUpContext.Provider
      value={{ signUpData, updateSignUpDetails, dataLoaded, resetData }}
    >
      {children}
    </SignUpContext.Provider>
  )
}

export function useClientSignUpContext() {
  const context = React.useContext(SignUpContext)
  if (!context) {
    throw new Error(
      'useClientSignUpContext must be used within an SignUpContext'
    )
  }
  return context
}
