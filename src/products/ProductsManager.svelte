<script lang="ts">
  // Scripts
  import ProductsLoader from './components/ProductsLoader.svelte'
  import ErrorPage from '../components/ErrorPage.svelte'
  import type { IProduct } from './models/Product'
  import { getProducts } from './services/productsService'

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
  <ProductsLoader text="Cargando productos" />
{:then products}
  <slot {products} />
{:catch error}
  <ErrorPage message={error.message} />
{/await}

<style>
  .products-page-container {
    width: 100%;
    max-width: 1300px;

    margin-left: auto;
    margin-right: auto;
  }

  @media only screen and (min-width: 700px) {
    .products-page-container {
      width: 95%;
    }
  }
</style>
