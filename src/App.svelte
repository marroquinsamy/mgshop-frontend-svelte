<script lang="ts">
  // Routes
  import Home from './landing/components/Home.svelte'
  import Products from './products/Products.svelte'
  import PageNotFound from './components/PageNotFound.svelte'
  import AdminLogin from './admin-dashboard/AdminLogin.svelte'
  import Dashboard from './admin-dashboard/DashboardRouter.svelte'
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
    <Route
      path="login"
      component={AdminLogin}
      meta={{ viewName: 'inicio de sesión de administrador' }}
    />
    <Route path="dashboard" component={Dashboard} />
    <PageNotFound />
  </main>
  <Footer />
</Router>

<style>
  main {
    padding-bottom: 170px;
  }
</style>
