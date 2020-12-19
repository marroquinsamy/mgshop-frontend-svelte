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

    <div id="delete-cart-container">
      <span id="delete-cart" role="link" on:click={deleteAllProducts}>
        <i class="bx bxs-trash" />
        Borrar carrito
      </span>
    </div>

    <main>
      <section class="products-container">
        <header>
          <h3>Productos</h3>
        </header>
        <div>
          {#each products as product}
            <CartItem {product} klass="cart-item" />
          {/each}
        </div>
      </section>

      <section>
        <header>
          <h3>Total</h3>
        </header>
      </section>
    </main>
  {:else}
    <ErrorPage
      message={`002${errorSeparator}Hay mucha tranquilidad aquí, ¿no crees?${errorSeparator}Tu carrito de compras está vacío. Haz click en el botón para hacer tu primera compra con nosotros.`} />
  {/if}
{/await}

<style>
  #delete-cart-container {
    display: flex;
    justify-content: flex-end;

    width: 90%;
    max-width: 1200px;
    margin: auto;
    margin-bottom: 10px;
    padding-right: 10px;
  }

  #delete-cart {
    color: var(--pink);
    cursor: pointer;
    font-size: 1.1em;
  }

  #delete-cart:hover {
    text-decoration: underline;
  }

  .products-container :global(.cart-item):nth-child(even) {
    background: rgba(0, 0, 0, 0.1);
  }

  :global(body.dark) .products-container :global(.cart-item):nth-child(even) {
    background: rgba(255, 255, 255, 0.1);
  }

  main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 10px;

    width: 90%;
    max-width: 1200px;

    border: 3px dashed var(--pink);
    border-radius: var(--border-radius);
    margin: auto;
    padding: 20px;
  }

  /* main section:nth-child(1) {
    background: blue;
  }

  main section:nth-child(2) {
    background: green;
  } */

  section {
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: var(--border-radius);
  }

  header,
  section > div {
    padding: 10px;
  }

  header {
    width: 100%;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  }

  :global(body.dark) header {
    border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  }

  section > div {
    padding-top: 0;
  }

  :global(body.dark) section {
    border: 2px solid rgba(255, 255, 255, 0.2);
  }

  h3 {
    font-size: 1.3em;
    margin: 5px 0 0px;
  }
</style>
