import { readable } from 'svelte/store'

export const title = readable('MGShop', function start(set) {
  return function stop() {}
})
