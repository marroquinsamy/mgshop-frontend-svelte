<script lang="ts">
  // Routes
  import Home from './Landing/components/Home.svelte'
  import Products from './Products/Products.svelte'
  import PageNotFound from './components/PageNotFound.svelte'
  import Footer from './components/Footer.svelte'

  // External libraries
  import { Router, Route } from 'svelte-navigator'
  import { onMount } from 'svelte'
  import mousetrap from 'mousetrap'

  mousetrap.bind('D', () => darkMode.toggleDarkModeStatus())

  // Scripts
  import createAnnouncement from './helpers/createAnnouncement'
  import { darkMode } from './stores/darkMode'

  $: $darkMode
    ? document.body.classList.add('dark')
    : document.body.classList.remove('dark')
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
