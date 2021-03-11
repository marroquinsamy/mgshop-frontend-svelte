<script lang="ts">
  // Components
  import ProductItem from './ProductItem.svelte'
  import ErrorPage from '../../components/ErrorPage.svelte'
  import ProductsLoader from './ProductsLoader.svelte'

  // External libraries
  import { useFocus } from 'svelte-navigator'

  // Scripts
  import { title } from '../../stores/title'
  import type { IProduct } from '../models/Product'

  export let products: IProduct[]

  const registerFocus = useFocus()
</script>

<svelte:head>
  <title>Productos | {$title}</title>
</svelte:head>

<h2 class="products-page--page-title" use:registerFocus>Productos</h2>
<div class="products-container">
  {#each products as product}
    <slot {product} />
  {/each}
</div>

<style>
  .products-container {
    display: grid;
    grid-gap: 25px;
    width: 90%;
    margin: auto;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  @media only screen and (min-width: 700px) {
    .products-container {
      width: 100%;
    }
  }
</style>
