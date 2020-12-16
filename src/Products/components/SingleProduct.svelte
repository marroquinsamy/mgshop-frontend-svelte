<script lang="ts">
  export let id: string
  const errorSeparator: string = '$$$'

  import ProductNotFound from './ProductNotFound.svelte'
  import Loader from '../../components/Loader.svelte'
  import { getProduct } from '../services/ProductsService'
  import type { IProduct } from '../models/Product'

  import { useFocus } from 'svelte-navigator'
  const registerFocus = useFocus()

  let promise: Promise<IProduct> = getProduct(id)
</script>

{#await promise}
  <Loader text="Cargando tu producto" />
{:then product}
  <h2 use:registerFocus>{product.title}</h2>
{:catch error}
  <ProductNotFound
    code={error.message.split(errorSeparator)[0]}
    title={error.message.split(errorSeparator)[1]}
    description={error.message.split(errorSeparator)[2]} />
{/await}
