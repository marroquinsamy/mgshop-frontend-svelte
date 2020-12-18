<script lang="ts">
  // Routes
  import Home from './Landing/components/Home.svelte'
  import Products from './Products/Products.svelte'
  import PageNotFound from './components/PageNotFound.svelte'
  import Footer from './components/Footer.svelte'

  // External libraries
  import { Router, Route } from 'svelte-navigator'

  // Scripts
  import createAnnouncement from './helpers/createAnnouncement'
</script>

<Router a11y={{ createAnnouncement }}>
  <div>
    <Route path="/" component={Home} meta={{ viewName: 'página de inicio' }} />
    <Route path="products/*" component={Products} />
    <PageNotFound />
  </div>
  <Footer />
</Router>

<style>
  div {
    padding-bottom: 170px;
  }
</style>
