<script lang="ts">
  export let id: string

  import ErrorPage from '../../components/ErrorPage.svelte'
  import Loader from '../../components/Loader.svelte'
  import Button from '../../components/Button.svelte'

  import Toastify from 'toastify-js'
  import { API, getProduct } from '../services/ProductsService'
  import type { IProduct } from '../models/Product'

  import { useFocus } from 'svelte-navigator'
  const registerFocus = useFocus()

  let promise: Promise<IProduct> = getProduct(id)

  const copyID = () => {
    try {
      navigator.clipboard.writeText('+502 4269 5893')

      Toastify({
        text: 'ID copiado exitosamente',
        duration: 5000,
        close: true,
        gravity: 'bottom',
        position: 'right',
        avatar: '/images/check.png',
        backgroundColor: 'var(--green)',
        stopOnFocus: true,
      }).showToast()
    } catch (error) {
      console.log(error)
    }
  }
</script>

{#await promise}
  <Loader text="Cargando tu producto" />
{:then product}
  <h2 class="products-page--page-title" use:registerFocus>{product.title}</h2>
  <div class="container">
    <section>
      <img src={`${API}/${product.imagePath}`} alt={product.title} />
    </section>

    <section class="details-container">
      <div class="details">
        <div class="group">
          <p class="title">Descripción</p>
          <p class="description">{product.description}</p>
        </div>

        <div class="group">
          <p class="title">ID</p>
          <p
            class="description id"
            role="button"
            on:click={copyID}
            title="Haz click para copiar el ID">
            {product._id}
          </p>
        </div>

        <div class="group price">
          <i class="bx bxs-coin" />
          <span><small>Q</small>{product.price}</span>
        </div>

        <Button classes="bx bxs-cart-alt" text="Agregar al carrito" />
      </div>
    </section>
  </div>
{:catch error}
  <ErrorPage message={error.message} />
{/await}

<style>
  .container {
    display: grid;
    /* grid-template-columns: minmax(350px, 40%) 1fr; */
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 10px;

    border: 3px dashed var(--green);
    border-radius: var(--border-radius);
    margin: auto;
    padding: 20px;
    width: 90%;
    max-width: 1200px;
  }

  .details-container {
    display: flex;
    justify-content: center;
  }

  .details {
    width: 90%;
  }

  @media only screen and (max-width: 743px) {
    .details {
      width: 100%;
    }
  }

  .group {
    margin-bottom: 15px;
  }

  .id {
    cursor: pointer;
  }

  .bxs-coin {
    margin-right: 5px;
  }

  .price {
    border: 2px dashed var(--green);
    padding: 7px;
    border-radius: 12px;
    color: var(--green);
    width: fit-content;
    font-weight: 700;
    font-size: 1.5em;
    display: flex;
    align-items: center;
  }

  p {
    margin: 5px 0;
  }

  .title {
    color: var(--pink);
  }

  .description {
    font-size: 1.1em;
  }

  img {
    max-width: 100%;
  }
</style>
