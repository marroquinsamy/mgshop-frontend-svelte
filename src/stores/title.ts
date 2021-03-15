import { readable } from 'svelte/store'

export const title = readable('MG Shop', function start(set) {
  return function stop() {}
})
