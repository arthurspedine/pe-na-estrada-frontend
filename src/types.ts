import type { StaticImageData } from 'next/image'

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

export type OrcamentoDetail = {
  id: number
  veiculo: string
  data_inicio: string
  data_termino?: string
  descricao: string
  status: boolean
  valor: number
}

export type OficinaDetail = {
  id: number
  imagem: string
  titulo: string
  endereco: string
  avaliacao: number
  maps: string
}

export type FormErrors = {
  [key: string]: string | undefined
}

export enum RegisterRoutes {
  INFORMATION = '/client/register/information',
  VEHICLE = '/client/register/vehicle',
  CONFIRM = '/client/register/confirm',
}
