<script lang="ts">
  // Components
  import ProductItem from './ProductItem.svelte'
  import ErrorPage from '../../components/ErrorPage.svelte'
  import ProductsLoader from './ProductsLoader.svelte'

  // External libraries
  import { useFocus } from 'svelte-navigator'

  // Scripts
  import { getProducts } from '../services/productsService'
  import type { IProduct } from '../models/Product'
  import { title } from '../../stores/title'

  const registerFocus = useFocus()

  const loadProducts = async (): Promise<IProduct[]> => {
    const productsResponse: IProduct[] = await getProducts()
    return sortProducts(productsResponse)
  }

  const sortProducts = (products: IProduct[]): IProduct[] => {
    const formatedProducts: IProduct[] = products
      .map((product) => {
        return {
          ...product,
          createdAt: product.createdAt
            ? new Date(product.createdAt)
            : new Date(),
          updatetAt: product.updatedAt
            ? new Date(product.updatedAt)
            : new Date(),
        }
      })
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())

    return formatedProducts
  }

  const sortedProducts: Promise<IProduct[]> = loadProducts()
</script>

<svelte:head>
  <title>Productos | {$title}</title>
</svelte:head>

{#await sortedProducts}
  <ProductsLoader text="Cargando productos" />
{:then products}
  <h2 class="products-page--page-title" use:registerFocus>Productos</h2>
  <div class="products-container">
    {#each products as product}
      <ProductItem {product} />
    {/each}
  </div>
{:catch error}
  <ErrorPage message={error.message} />
{/await}

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
