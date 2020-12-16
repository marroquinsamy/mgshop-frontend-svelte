<script lang="ts">
  import ProductItem from './ProductItem.svelte'
  import { getProducts } from '../services/ProductsService'
  import type { IProduct } from '../models/Product'
  import Loader from '../../components/Loader.svelte'
  import ProductNotFound from './ProductNotFound.svelte'
  import { useFocus } from 'svelte-navigator'

  const registerFocus = useFocus()

  const errorSeparator: string = '$$$'

  const loadProducts = async (): Promise<IProduct[]> => {
    const productsResponse = await getProducts()
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
  <ProductNotFound
    code={error.message.split(errorSeparator)[0]}
    title={error.message.split(errorSeparator)[1]}
    description={error.message.split(errorSeparator)[2]} />
{/await}

<style>
  div {
    display: flex;
    flex-wrap: wrap;
    margin: -15px auto;
    width: 95%;
  }

  :global(.products-page--page-title) {
    text-align: center;
    font-size: 1.7em;
  }
</style>
