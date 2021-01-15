<script lang="ts">
  export let id: string

  // Components
  import ErrorPage from '../../components/ErrorPage.svelte'
  import Loader from '../../components/Loader.svelte'
  import AddToCartButton from './AddToCartButton.svelte'
  import ImageLoader from '../../components/ImageLoader.svelte'
  import ImageError from '../../components/ImageError.svelte'

  // External libraries
  import Toastify from 'toastify-js'
  import { useFocus } from 'svelte-navigator'

  // Scripts
  import { API, getProduct, getImage } from '../services/productsService'
  import type { IProduct } from '../models/Product'
  import { title } from '../../stores/title'

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

  const loadImage = async (): Promise<string> => {
    const response: string = await getImage(id, true)
    return response
  }

  const image: Promise<string> = loadImage()
</script>

<svelte:head>
  <title>Productos | {$title}</title>
</svelte:head>

{#await promise}
  <Loader text="Cargando tu producto" />
{:then product}
  <h2 class="products-page--page-title" use:registerFocus>{product.title}</h2>
  <div class="container">
    <section class="image-container">
      {#await image}
        <ImageLoader />
      {:then image}
        <img src={image} alt={product.title} />
      {:catch}
        <ImageError />
      {/await}
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

        <AddToCartButton text="Agregar al carrito" productID={product._id} />
      </div>
    </section>
  </div>
{:catch error}
  <ErrorPage message={error.message} />
{/await}

<style>
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 10px;

    border-radius: var(--border-radius);
    margin: auto;
    padding: 20px;
    width: 90%;
    max-width: 1200px;
    background: rgba(var(--surface-color));
    box-shadow: var(--surface-shadow);
  }

  .image-container {
    display: grid;
    place-items: center;
  }

  :global(body.dark) .container {
    background: rgba(var(--surface-color-dark));
    box-shadow: var(--surface-shadow-dark);
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
    border: 2px dashed rgba(var(--surface-color));
    padding: 7px;
    border-radius: 12px;
    color: #fff;
    background: rgba(var(--green));
    width: fit-content;
    font-weight: 700;
    font-size: 1.5em;
    display: flex;
    align-items: center;
  }

  :global(body.dark) .price {
    border: 2px dashed rgba(var(--surface-color-dark));
    color: var(--text);
  }

  p {
    margin: 5px 0;
  }

  .title {
    color: rgba(var(--pink));
    font-weight: 500;
  }

  .description {
    font-family: var(--paragraph-font);
    font-weight: 400;
    line-height: 1.5;
  }

  img {
    max-width: 100%;
  }
</style>
