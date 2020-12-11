<script lang="ts">
  import ProductItem from './ProductItem.svelte'
  import { getProducts } from '../helpers/ProductsService'
  import type { IProduct } from '../models/Product'
  import { onMount } from 'svelte'

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

<h2 class="products-page--page-title">Productos</h2>
<div>
  {#await sortedProducts}
    <p>Cargando...</p>
  {:then products}
    {#each products as product}
      <ProductItem {product} />
    {/each}
  {:catch}
    <p>¡Ups! Hubo un error obteniendo los productos</p>
  {/await}
</div>
