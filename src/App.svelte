<script lang="ts">
  import { Router, Route } from 'svelte-navigator'

  import Home from './Landing/components/Home.svelte'
  import Products from './Products/Products.svelte'
  import NotFoundPage from 'PageNotFound.svelte'
  let namu: string = 'Samuel'
</script>

<Router>
  <Route path="/" component={Home} />
  <Route path="products/*" component={Products} />
  <Route component={NotFoundPage} />
</Router>
