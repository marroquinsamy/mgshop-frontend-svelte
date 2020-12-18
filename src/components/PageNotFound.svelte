<script lang="ts">
  // Components
  import ErrorPage from './ErrorPage.svelte'

  // External libraries
  import { Route } from 'svelte-navigator'

  // Scripts
  import { errorSeparator } from '../Products/services/productsService'

  const message: string = `001${errorSeparator}¡Estamos perdidos!${errorSeparator}Parece que nos has solicitado una página que no existe. Haz click en el botón  para darte una vuelta por nuestro catálogo y hacer tu primera compra con nosotros.`
</script>

<Route meta={{ viewName: 'página no encontrada' }}>
  <ErrorPage {message} />
</Route>
