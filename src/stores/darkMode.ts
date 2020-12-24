import { writable } from 'svelte/store'

/**
 * Contains all functions to manipulate the dark mode status
 */
const darkModeStore = () => {
  const { subscribe, update } = writable<boolean>(getDarkModeStorage())

  return {
    subscribe,
    toggleDarkModeStatus: () => {
      update((darkModeStatus) => {
        setStorageDarkMode(!darkModeStatus)
        return !darkModeStatus
      })
    },
  }
}

/**
 * Saves the dark mode status in LocalStorage
 * @param {boolean} darkModeStatus Dark mode status sent by app
 * @returns {void}
 */
const setStorageDarkMode = (darkModeStatus: boolean): void => {
  localStorage.setItem('darkMode', JSON.stringify(darkModeStatus))
}

/**
 * Gets the latest dark mode status from LocalStorage
 * @returns { boolean } Whether the dark mode was enable or not
 */
const getDarkModeStorage = (): boolean => {
  const latestDarkModeStatus = localStorage.getItem('darkMode')
  const darkModeStatus: boolean = latestDarkModeStatus
    ? JSON.parse(latestDarkModeStatus)
    : false

  return darkModeStatus
}

export const darkMode = darkModeStore()
