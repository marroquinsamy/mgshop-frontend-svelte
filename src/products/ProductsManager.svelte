<script lang="ts">
  // Scripts
  import ProductsLoader from './components/ProductsLoader.svelte'
  import ErrorPage from '../components/ErrorPage.svelte'
  import type { IProduct } from './models/Product'
  import { getProducts } from './services/productsService'

  // External libraries
  import { useParams } from 'svelte-navigator'
  const params = useParams()

  const loadProducts = async (): Promise<IProduct[]> => {
    if ($params.id) {
      const product: IProduct[] = await getProducts($params.id)
      return product
    } else {
      const productsResponse: IProduct[] = await getProducts()
      return sortProducts(productsResponse)
    }
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
