<script lang="ts">
  // Routes
  import Home from './landing/components/Home.svelte'
  import ProductsManager from './products/ProductsManager.svelte'
  import PageNotFound from './components/PageNotFound.svelte'
  import AdminLogin from './admin-dashboard/AdminLogin.svelte'
  import Dashboard from './admin-dashboard/DashboardRouter.svelte'
  import Footer from './components/Footer.svelte'

  // External libraries
  import { Router, Route } from 'svelte-navigator'
  import mousetrap from 'mousetrap'
  import 'boxicons'

  // Scripts
  import createAnnouncement from './helpers/createAnnouncement'
  import { darkMode } from './stores/darkMode'
  import NavBar from './components/NavBar.svelte'
  import ProductsList from './products/components/ProductsList.svelte'
  import ProductItem from './products/components/ProductItem.svelte'
  import SingleProduct from './products/components/SingleProduct.svelte'
  import PrivateRoute from './admin-dashboard/PrivateRoute.svelte'

  mousetrap.bind('shift+d', () => darkMode.toggleDarkModeStatus())

  $: $darkMode
    ? document.body.classList.add('dark')
    : document.body.classList.remove('dark')
</script>

<div id="app">
  <Router a11y={{ createAnnouncement }}>
    <NavBar />
    <div class="middle-section">
      <main>
        <Route path="/" meta={{ viewName: 'página de inicio' }}>
          <Home />
        </Route>
        <Route path="products/*">
          <Route path="/" meta={{ viewName: 'lista de productos' }}>
            <ProductsManager let:products>
              <ProductsList {products} let:product>
                <ProductItem {product} />
              </ProductsList>
            </ProductsManager>
          </Route>
          <Route path=":id" meta={{ viewName: 'producto individual' }}>
            <ProductsManager let:products>
              <SingleProduct productInArray={products} />
            </ProductsManager>
          </Route>
        </Route>
        <Route
          path="login"
          meta={{ viewName: 'inicio de sesión de administrador' }}
        >
          <AdminLogin />
        </Route>
        <PrivateRoute path="dashboard">
          <Dashboard />
        </PrivateRoute>
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
    gap: 20px;
    padding-top: 20px;
  }

  main {
    grid-area: main;
  }
</style>
