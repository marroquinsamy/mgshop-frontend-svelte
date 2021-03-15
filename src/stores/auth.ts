import { writable } from 'svelte/store'
import config from '../config/config'

const tokenStore = () => {
  const { subscribe, set } = writable<string>(getStorageToken())

  return {
    subscribe,
    /**
     * Register the token in LocalStorage
     * @param token Token returned when logging in on API
     */
    login: (token: string) => {
      set(token)
      setStorageToken(token)
    },
    /**
     * Erase the token from LocalStorage
     */
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

export const checkAuthStatus = async (token: string) => {
  const checkAuthStatusOptions: RequestInit = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  }

  let res: Response
  try {
    console.log(checkAuthStatusOptions)
    res = await fetch(`${config.API}/check-auth`, checkAuthStatusOptions)
    console.log(res)
  } catch (error) {
    console.log(error)
    throw new Error(
      'Hubo un error al comprobar tu identidad. Inténtalo de nuevo en unos momentos.'
    )
  }

  if (res.ok) {
    return true
  } else {
    return false
  }
}

export const token = tokenStore()
