<script lang="ts">
  import { Route } from 'svelte-navigator'
  import ErrorPage from './ErrorPage.svelte'
</script>

<Route meta={{ viewName: 'página no encontrada' }}>
  <ErrorPage
    title="¡Estamos perdidos!"
    description="Parece que nos has solicitado una página que no existe. Haz click en el botón
  para darte una vuelta por nuestro catálogo y hacer tu primera compra con
  nosotros."
    code="001" />
</Route>
