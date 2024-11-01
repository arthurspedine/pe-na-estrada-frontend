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
  addresses: {
    id: number
    streetName: string
    number: string
    referencePoint: string
    zipCode: string
    neighborhood: string
    neighborhoodZone: string
    city: string
    state: string
  }[]
  rating: number
  mapsUrl: string
  contacts: Contact[]
}

export interface Estimate {
  id: number
  client: {
    id: number
    name: string
    email: string
    contacts: Contact[]
  }
  vehicle: Vehicle
  workshop: Workshop
  initialDescription: string
  scheduledAt: string
  createdAt: string
  value: number | null
  finishedAt: string | null
  services: Service[]
}

export interface Service {
  id: number
  description: string
  price: number
  createdAt: string
}
