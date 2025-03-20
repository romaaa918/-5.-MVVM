export interface Product {
  id: number
  name: string
  price: number
  category: string
  image: string
  description?: string
}

export interface Category {
  id: number
  name: string
  image: string
}

