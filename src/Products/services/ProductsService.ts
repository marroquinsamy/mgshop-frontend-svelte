import type { IProduct } from '../models/Product'

export const API = 'http://192.168.0.106:4000'

export const getProducts = async () => {
  const res: Response = await fetch(`${API}/products`)
  const products: IProduct[] = await res.json()

  if (res.ok) {
    return products
  } else {
    throw new Error('There was an error getting the products')
  }
}

export const getProduct = async (id: string) => {
  const res: Response = await fetch(`${API}/products/${id}`)
  const product: IProduct = await res.json()

  if (res.ok) {
    return product
  } else {
    throw new Error(`There was an error getting the product ${id}`)
  }
}
