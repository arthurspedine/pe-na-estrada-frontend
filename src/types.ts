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
