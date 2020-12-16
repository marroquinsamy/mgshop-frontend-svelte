const createAnnouncement = (route, location) => {
  const { viewName } = route.meta
  const { pathname } = location
  console.log(`Navegado a la vista de ${viewName} en ${pathname}`)
  return `Navegado a la vista de ${viewName} en ${pathname}`
}

export default createAnnouncement
