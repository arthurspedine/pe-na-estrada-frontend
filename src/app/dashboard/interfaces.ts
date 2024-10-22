export interface Vehicle {
  id: number
  brand: string
  model: string
  year: string
  licensePlate: string
}

export interface Contact {
  id: number
  number: string
}

export interface User {
  id: number
  email: string
  name: string
  cpf: string
  birthDate: string
  vehicles: Vehicle[]
  contacts: Contact[]
}

export interface Workshop {
  id: number
  name: string
  address: {
    address: string
    number: string
    zipCode: string
    neighborhood: string
    city: string
    state: string
  }
  rating: number
  mapsUrl: string
  contacts: Contact[]
}
