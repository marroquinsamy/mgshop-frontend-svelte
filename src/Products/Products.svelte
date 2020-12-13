<script>
  import { Route, Router } from 'svelte-navigator'

  import NavBar from './components/NavBar.svelte'
  import ProductsList from './components/ProductsList.svelte'
  import SingleProduct from './components/SingleProduct.svelte'
  import About from './components/About.svelte'
  import PageNotFound from '../components/PageNotFound.svelte'
  import Footer from './components/Footer.svelte'
</script>

<Router>
  <NavBar />
  <div>
    <Route path="/" component={ProductsList} />
    <Route path=":id" component={SingleProduct} />
    <Route path="about" component={About} />
    <Route component={PageNotFound} />
  </div>
  <Footer />
</Router>

<style>
  div {
    padding: 60px 0px 170px;
  }
</style>
