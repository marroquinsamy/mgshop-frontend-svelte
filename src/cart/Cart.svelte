<script lang="ts">
  // Components
  import ErrorPage from '../components/ErrorPage.svelte'
  import CartProductItem from './components/CartProductItem.svelte'
  import ProductsLoader from '../products/components/ProductsLoader.svelte'

  // Scripts
  import { cart } from '../stores/cart'
  import {
    errorSeparator,
    getProducts,
  } from '../products/services/productsService'
  import type { IProduct } from '../products/models/Product'
  import { useFocus } from 'svelte-navigator'
  import { title } from '../stores/title'

  // External libraries
  import swal from 'sweetalert'

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

  const deleteAllProducts = async () => {
    const userConfirmation = await swal({
      icon: 'warning',
      title: '¿Deseas vaciar tu carrito?',
      text:
        'Esta acción no se puede deshacer y tendrás que agregarlos de nuevo manualmente.',
      buttons: ['Cancelar', 'Vaciar'],
      dangerMode: true,
    })

    if (userConfirmation) {
      cart.deleteAllProducts()
      thereAreProductsInCart = false
    }
  }

  let thereAreProductsInCart: boolean = $cart.length !== 0 ? true : false
  const promise = thereAreProductsInCart ? loadProducts() : []
</script>

<svelte:head>
  <title>Carrito | {$title}</title>
</svelte:head>

{#await promise}
  <ProductsLoader text="Cargando carrito" />
{:then products}
  {#if thereAreProductsInCart}
    <h2 class="products-page--page-title" use:registerFocus>
      Carrito de compras
    </h2>

    <main>
      <section class="products-container">
        <header>
          <h3>Productos</h3>
          <span>{products.length}</span>
        </header>
        <div>
          {#each products as product}
            <CartProductItem {product} />
          {/each}
        </div>
      </section>

      <section>
        <header>
          <h3>Total</h3>
        </header>
      </section>
    </main>

    <div class="delete-cart-container">
      <span class="delete-cart" role="link" on:click={deleteAllProducts}>
        <i class="bx bxs-trash" />
        Borrar carrito
      </span>
    </div>
  {:else}
    <ErrorPage
      message={`002${errorSeparator}Hay mucha tranquilidad aquí, ¿no crees?${errorSeparator}Tu carrito de compras está vacío. Haz click en el botón para hacer tu primera compra con nosotros.`}
    />
  {/if}
{/await}

<style>
  .delete-cart-container {
    display: flex;
    justify-content: flex-end;

    width: 90%;
    max-width: 1200px;
    margin: auto;
    margin-bottom: 10px;
    padding-right: 10px;
  }

  .delete-cart {
    color: var(--main-color-500);
    cursor: pointer;
    font-size: 1.1em;
  }

  .delete-cart:hover {
    opacity: 0.8;
  }

  main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 10px;

    width: 90%;
    max-width: 1200px;

    border-radius: var(--border-radius);
    margin: auto;
    padding: 10px;
  }

  section {
    background: rgba(var(--surface-color));
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: var(--border-radius);
  }

  :global(body.dark) section {
    background: rgba(var(--surface-color-dark));
  }

  header,
  section > div {
    padding: 10px 12px;
  }

  @media only screen and (min-width: 600px) {
    header,
    section > div {
      padding: 10px 17px;
    }
  }

  header {
    width: 100%;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  header > span {
    font-weight: 700;
    font-size: 1.2em;
    opacity: 0.6;
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
    margin: 0px;
  }
</style>
