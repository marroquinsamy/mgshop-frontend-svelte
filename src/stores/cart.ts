import { writable } from 'svelte/store'
import Toastify from 'toastify-js'

const cartStore = () => {
  const { subscribe, set, update } = writable<string[]>(getStorageCart())

  return {
    subscribe,
    addProduct: (product: string) =>
      update((products) => {
        if (!products.includes(product)) {
          products.push(product)
          setStorageCart(products)

          Toastify({
            text: 'Producto agregado exitosamente',
            duration: 5000,
            close: true,
            gravity: 'bottom',
            position: 'right',
            backgroundColor: ' var(--secondary-color-500)',
            stopOnFocus: true,
            className: 'toastify-success',
          }).showToast()
        } else {
          Toastify({
            text: 'Este producto ya fue agregado antes',
            duration: 5000,
            close: true,
            gravity: 'bottom',
            position: 'right',
            backgroundColor: '#3498db',
            stopOnFocus: true,
            className: 'toastify-information',
          }).showToast()
        }
        return products
      }),
    deleteAllProducts: () => {
      set([])
      localStorage.removeItem('cart')
      Toastify({
        text: 'Se borraron todos los productos del carrito',
        duration: 5000,
        close: true,
        gravity: 'bottom',
        position: 'right',
        className: 'toastify-success',
        stopOnFocus: true,
      }).showToast()
    },
  }
}

const setStorageCart = (products: string[]) => {
  localStorage.setItem('cart', JSON.stringify(products))
}

const getStorageCart = () => {
  const productsFromLocalStorage = localStorage.getItem('cart')
  const cartProducts: string[] = productsFromLocalStorage
    ? JSON.parse(productsFromLocalStorage)
    : []

  return cartProducts
}

export const cart = cartStore()
