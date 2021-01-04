<script lang="ts">
  // Components
  import ProductItem from './ProductItem.svelte'
  import Loader from '../../components/Loader.svelte'
  import ErrorPage from '../../components/ErrorPage.svelte'

  // External libraries
  import { useFocus } from 'svelte-navigator'

  // Scripts
  import { getProducts } from '../services/productsService'
  import type { IProduct } from '../models/Product'

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

{#await sortedProducts}
  <Loader text="Cargando productos" />
{:then products}
  <h2 class="products-page--page-title" use:registerFocus>Productos</h2>
  <div>
    {#each products as product}
      <ProductItem {product} />
    {/each}
  </div>
{:catch error}
  <ErrorPage message={error.message} />
{/await}

<style>
  div {
    display: grid;
    grid-gap: 25px;
    width: 95%;
    margin: auto;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }

  @media only screen and (max-width: 600px) {
    div {
      width: 90%;
    }
  }
</style>
