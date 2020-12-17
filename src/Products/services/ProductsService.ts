import type { IProduct } from '../models/Product'

export const API = 'http://192.168.0.106:4000'

export const errorSeparator: string = '$$$' // Use this constant to separate the res status code, the error title and the error description

export const getProducts = async () => {
  let res: Response
  try {
    res = await fetch(`${API}/products`)
  } catch (error) {
    console.log(error)
    throw new Error(
      `000${errorSeparator}Hubo un error obteniendo los productos${errorSeparator}Intenta de nuevo más tarde o ponte en contacto con nosotros mediante nuestras redes sociales.`
    )
  }

  if (res.status === 204)
    throw new Error(
      `204${errorSeparator}¡Ups! Parece que olvidamos algo${errorSeparator}Comunícate con nosotros para verificar la disponibilidad de nuestros productos.`
    )
  else if (res.ok) {
    const products: IProduct[] = await res.json()
    return products
  } else
    throw new Error(
      `000${errorSeparator}Hubo un error obteniendo los productos${errorSeparator}Intenta de nuevo más tarde o ponte en contacto con nosotros mediante nuestras redes sociales.`
    )
}

export const getProduct = async (id: string) => {
  let res: Response
  try {
    res = await fetch(`${API}/products/${id}`)
  } catch (error) {
    console.log(error)
    throw new Error(
      `000${errorSeparator}Hubo un error obteniendo el producto que nos solicitaste${errorSeparator}Intenta de nuevo más tarde o ponte en contacto con nosotros mediante nuestras redes sociales.`
    )
  }

  if (res.ok) {
    const product: IProduct = await res.json()
    return product
  } else if (res.status === 404)
    throw new Error(
      `404${errorSeparator}Parece que alguien no vino a trabajar hoy${errorSeparator}No hemos encontrado el item que estás buscando. Haz click en el botón para explorar nuestro catálogo de productos.`
    )
  else
    throw new Error(
      `000${errorSeparator}Hubo un error obteniendo el producto que nos solicitaste${errorSeparator}Intenta de nuevo más tarde o ponte en contacto con nosotros mediante nuestras redes sociales.`
    )
}
