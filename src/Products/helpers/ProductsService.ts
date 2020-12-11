import type { IProduct } from '../models/Product'

// export const API = 'http://192.168.0.109:4000'
export const API = 'http://192.168.0.109:4000'

export const getProducts = async () => {
  const response: Response = await fetch(`${API}/products`)

  if (response.status === 200) {
    const result: IProduct[] = await response.json()
    return result
  } else {
    throw new Error('There was an error getting the products')
  }
}

export const getProduct = async (id: string) => {
  const response: Response = await fetch(`${API}/products/${id}`)

  if (response.status === 200) {
    const result: IProduct = await response.json()
    return result
  } else {
    throw new Error(`There was an error getting the product ${id}`)
  }
}
