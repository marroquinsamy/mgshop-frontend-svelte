<script lang="ts">
  // Routes
  import Home from './landing/components/Home.svelte'
  import Products from './products/Products.svelte'
  import PageNotFound from './components/PageNotFound.svelte'
  import Footer from './components/Footer.svelte'

  // External libraries
  import { Router, Route } from 'svelte-navigator'
  import mousetrap from 'mousetrap'
  import 'boxicons'

  mousetrap.bind('shift+d', () => darkMode.toggleDarkModeStatus())

  // Scripts
  import createAnnouncement from './helpers/createAnnouncement'
  import { darkMode } from './stores/darkMode'

  $: $darkMode
    ? document.body.classList.add('dark')
    : document.body.classList.remove('dark')
</script>

<Router a11y={{ createAnnouncement }}>
  <main>
    <Route path="/" component={Home} meta={{ viewName: 'página de inicio' }} />
    <Route path="products/*" component={Products} />
    <PageNotFound />
  </main>
  <Footer />
</Router>

<style>
  main {
    padding-bottom: 170px;
  }
</style>
