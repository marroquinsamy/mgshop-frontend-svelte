<script lang="ts">
  import { Router, Route } from 'svelte-navigator'

  import Home from './Landing/components/Home.svelte'
  import Products from './Products/Products.svelte'
  import NotFoundPage from './components/PageNotFound.svelte'

  const createAnnouncement = (route, location) => {
    const viewName = route.meta.name
    const { pathname } = location
    console.log(`Navegado a la vista de ${viewName} en ${pathname}`)
    return `Navegado a la vista de ${viewName} en ${pathname}`
  }
</script>

<Router a11y={{ createAnnouncement }}>
  <Route path="/" component={Home} meta={{ name: 'hola' }} />
  <Route path="products/*" component={Products} meta={{ name: 'Productos' }} />
  <Route component={NotFoundPage} meta={{ name: 'Página no encontrada' }} />
</Router>
