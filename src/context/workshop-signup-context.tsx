'use client'
import {
  type WorkshopSignUpConfirmType,
  workshopSignUpInitialValueSchema,
  type WorkshopSignUpInitialValueType,
} from '@/schemas'
import { createContext, useCallback, useEffect, useState } from 'react'
import React from 'react'

const defaultSignUp: WorkshopSignUpInitialValueType = {
  name: '',
  legalName: '',
  streetName: '',
  ddi: '',
  ddd: '',
  contactNumber: '',
  number: '',
  referencePoint: '',
  zipCode: '',
  neighborhood: '',
  neighborhoodZone: '',
  city: '',
  state: '',
  rating: '',
  mapsUrl: '',
  email: '',
  password: '',
}

type SignUpContextType = {
  signUpData: WorkshopSignUpInitialValueType
  updateSignUpDetails: (
    signUpDetails: Partial<WorkshopSignUpConfirmType>
  ) => void
  dataLoaded: boolean
  resetData: () => void
}

const LOCAL_STORAGE_KEY = 'multi-page-form-workshopSignUpData'
export const SignUpContext = createContext<SignUpContextType | null>(null)

export const WorkshopSignUpContextProvider = ({
  children,
}: { children: React.ReactNode }) => {
  const [signUpData, setSignUpData] =
    useState<WorkshopSignUpInitialValueType>(defaultSignUp)

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

    const validated = workshopSignUpInitialValueSchema.safeParse(
      JSON.parse(dataString)
    )

    if (validated.success) {
      setSignUpData(validated.data)
    } else {
      setSignUpData(defaultSignUp)
    }
  }

  const updateSignUpDetails = (
    signUpDetails: Partial<WorkshopSignUpConfirmType>
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

export function useWorkshopSignUpContext() {
  const context = React.useContext(SignUpContext)
  if (!context) {
    throw new Error(
      'useWorkshopSignUpContext must be used within an SignUpContext'
    )
  }
  return context
}
