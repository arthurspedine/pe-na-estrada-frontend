import type { StaticImageData } from 'next/image'
import type { ReactElement } from 'react'

export type jwtToken = {
  iss: string
  sub: string
  exp: number
}

export type PathProps = {
  id: number
  path: string
  label: string
  icon?: ReactElement
}

export type HomeCardDetail = {
  id: number
  image: StaticImageData
  alt: string
  title: string
  description: string
}

export type DevCardDetail = {
  id: number
  github_user: string
  alt: string
  developer: string
  rm: string
}

export type FormErrors = {
  [key: string]: string | undefined
}

export enum ClientSignUpRoutes {
  INFORMATION = '/auth/client/signup/information',
  VEHICLE = '/auth/client/signup/vehicle',
  CONFIRM = '/auth/client/signup/confirm',
}

export enum WorkshopSignUpRoutes {
  INFORMATION = '/auth/workshop/signup/information',
  CONTACT = '/auth/workshop/signup/contact',
  ADDRESS = '/auth/workshop/signup/address',
  CONFIRM = '/auth/workshop/signup/confirm',
}
