<script lang="ts">
  import { Route } from 'svelte-navigator'
  import ErrorPage from './ErrorPage.svelte'
  import { errorSeparator } from '../Products/services/ProductsService'

  const message: string = `001${errorSeparator}¡Estamos perdidos!${errorSeparator}Parece que nos has solicitado una página que no existe. Haz click en el botón  para darte una vuelta por nuestro catálogo y hacer tu primera compra con nosotros.`
</script>

<Route meta={{ viewName: 'página no encontrada' }}>
  <ErrorPage {message} />
</Route>
