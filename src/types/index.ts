export interface Lead {
  nombre: string
  email: string
  telefono?: string
  empresa?: string
  servicio?: string
  mensaje?: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  color: string
  items: string[]
  href: string
}

export interface Project {
  title: string
  location: string
  category: string
  description: string
  image?: string
}
