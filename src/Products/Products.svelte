<script>
  // Components
  import NavBar from '../components/NavBar.svelte'
  import ProductsList from './components/ProductsList.svelte'
  import SingleProduct from './components/SingleProduct.svelte'
  import Cart from './components/Cart.svelte'
  import PageNotFound from '../components/PageNotFound.svelte'

  // External libraries
  import { Route, Router } from 'svelte-navigator'
</script>

<Router>
  <NavBar />
  <div>
    <Route
      path="/"
      component={ProductsList}
      meta={{ viewName: 'lista de productos' }}
    />
    <Route
      path=":id"
      component={SingleProduct}
      meta={{ viewName: 'producto individual' }}
    />
    <Route
      path="cart"
      component={Cart}
      meta={{ viewName: 'carrito de compras' }}
    />
    <PageNotFound />
  </div>
</Router>

<style>
  div {
    padding-top: 60px;
  }
</style>
