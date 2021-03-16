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

<div class="products-list">
  <h2 class="products-page--page-title" use:registerFocus>Productos</h2>
  <div class="products-grid">
    {#each products as product}
      <slot {product} />
    {/each}
  </div>
</div>

<style>
  .products-list {
    width: 90%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }

  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }

  /* @media only screen and (min-width: 700px) {
    .products-grid {
      width: 100%;
    }
  } */
</style>
