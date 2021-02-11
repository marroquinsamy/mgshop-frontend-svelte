<script>
  // Components
  import NavBar from '../components/NavBar.svelte'
  import ProductsList from './components/ProductsList.svelte'
  import SingleProduct from './components/SingleProduct.svelte'
  import Cart from './components/Cart.svelte'
  import ElementsTest from '../components/ElementsTest.svelte'
  import PageNotFound from '../components/PageNotFound.svelte'

  // External libraries
  import { Route, Router } from 'svelte-navigator'
  import Loader from '../components/Loader.svelte'
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
    <Route path="elements-test" component={ElementsTest} />
    <Route path="loader" component={Loader} />
    <PageNotFound />
  </div>
</Router>

<style>
  div {
    padding-top: 60px;
  }
</style>
