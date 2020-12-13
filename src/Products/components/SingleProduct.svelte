<script lang="ts">
  export let id: string

  import NotFoundProduct from './ProductNotFound.svelte'
  import { getProduct } from '../services/ProductsService'
  import type { IProduct } from '../models/Product'

  let productResponse: Promise<IProduct> = getProduct(id)
</script>

{#await productResponse}
  <p>Cargando producto...</p>
{:then product}
  <h1>{product.title}</h1>
{:catch}
  <NotFoundProduct />
{/await}
