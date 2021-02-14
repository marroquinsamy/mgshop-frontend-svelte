import { writable } from 'svelte/store'

const tokenStore = () => {
  const { subscribe, set } = writable<string>(getStorageToken())

  return {
    subscribe,
    login: (token: string) => {
      set(token)
      setStorageToken(token)
    },
    logout: () => {
      set(null)
      deleteStorageToken()
    },
  }
}

const setStorageToken = (token: string) => {
  localStorage.setItem('admin-token', JSON.stringify(token))
}

const getStorageToken = (): string => {
  const tokenFromLocalStorage: string = localStorage.getItem('admin-token')
  const token: string =
    tokenFromLocalStorage && JSON.parse(tokenFromLocalStorage)

  return token
}

const deleteStorageToken = () => {
  localStorage.deleteItem('admin-token')
}

const token = tokenStore()
export default token
