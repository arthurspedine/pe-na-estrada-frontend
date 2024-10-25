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

export enum SignUpRoutes {
  INFORMATION = '/client/signup/information',
  VEHICLE = '/client/signup/vehicle',
  CONFIRM = '/client/signup/confirm',
}
