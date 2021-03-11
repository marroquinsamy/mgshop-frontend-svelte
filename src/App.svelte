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
  import NavBar from './components/NavBar.svelte'

  $: $darkMode
    ? document.body.classList.add('dark')
    : document.body.classList.remove('dark')
</script>

<div id="app">
  <Router a11y={{ createAnnouncement }}>
    <NavBar />
    <div class="middle-section">
      <main>
        <Route
          path="/"
          component={Home}
          meta={{ viewName: 'página de inicio' }}
        />
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
    </div>
  </Router>
</div>

<style>
  #app {
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      'header'
      'middle-section';
    gap: 20px;
  }

  .middle-section {
    grid-area: middle-section;
    overflow: auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    grid-template-areas:
      'main'
      'footer';
  }

  main {
    grid-area: main;
  }
</style>
