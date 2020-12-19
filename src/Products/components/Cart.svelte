<script lang="ts">
  // Components
  import ErrorPage from '../../components/ErrorPage.svelte'
  import Button from '../../components/Button.svelte'
  import CartItem from './CartItem.svelte'
  import Loader from '../../components/Loader.svelte'

  // Scripts
  import { cart } from '../../stores/cart'
  import { errorSeparator, getProducts } from '../services/productsService'
  import type { IProduct } from '../models/Product'
  import { useFocus } from 'svelte-navigator'

  const registerFocus = useFocus()

  const loadProducts = async (): Promise<IProduct[]> => {
    const productsResponse = await getProducts()
    return filterProducts(productsResponse)
  }

  const filterProducts = (products: IProduct[]): IProduct[] => {
    const formatedProducts: IProduct[] = products.filter((product) =>
      $cart.includes(product._id)
    )

    return formatedProducts
  }

  const deleteAllProducts = () => {
    cart.deleteAllProducts()
    thereAreProductsInCart = false
  }

  let thereAreProductsInCart: boolean = $cart.length !== 0 ? true : false
  const promise = thereAreProductsInCart ? loadProducts() : []
</script>

{#await promise}
  <Loader text="Cargando carrito" />
{:then products}
  {#if thereAreProductsInCart}
    <h2 class="products-page--page-title" use:registerFocus>
      Carrito de compras
    </h2>
    <!-- <p>Suma: {$cart.reduce((a, b) => a + b)}</p> -->
    <div class="products-container">
      {#each products as product}
        <CartItem {product} klass="cart-item" />
      {/each}
    </div>
    <div id="button-container">
      <Button
        text="Borrar carrito"
        title="Borrar todos los productos del carrito"
        iconClasses="bx bxs-trash"
        on:click={deleteAllProducts} />
    </div>
  {:else}
    <ErrorPage
      message={`002${errorSeparator}Hay mucha tranquilidad aquí, ¿no crees?${errorSeparator}Tu carrito de compras está vacío. Haz click en el botón para hacer tu primera compra con nosotros.`} />
  {/if}
{/await}

<style>
  #button-container {
    margin: auto;
    width: 250px;
  }

  .products-container :global(.cart-item):nth-child(even) {
    background: rgba(0, 0, 0, 0.1);
  }
</style>
