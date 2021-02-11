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
  import { getProduct, getImage } from '../services/productsService'
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
        stopOnFocus: true,
        className: 'toastify-success',
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
        <div class="details-group">
          <p class="title">Descripción</p>
          <p class="description">{product.description}</p>
        </div>

        <div class="details-group">
          <p class="title">ID del producto</p>
          <p
            class="description product-id"
            role="button"
            on:click={copyID}
            title="Haz click para copiar el ID"
          >
            {product._id}
          </p>
        </div>

        <div class="details-group price-tag">
          <span class="tag price"><small>Q</small>{product.price}</span>
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
    background: var(--surface-color);
    box-shadow: var(--shadow-1), var(--shadow-inset-1);
  }

  .image-container {
    display: grid;
    place-items: center;
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

  .details-group {
    margin-bottom: 15px;
  }

  p {
    margin: 5px 0;
  }

  .title {
    font-weight: 600;
  }

  .description {
    font-family: var(--paragraph-font);
    font-weight: 400;
    line-height: 1.5;
  }

  .product-id {
    cursor: pointer;
    letter-spacing: 0.02em;
  }

  .details-group.price-tag {
    margin-bottom: 50px;
  }

  .tag.price {
    font-size: 1.4em;
  }

  img {
    max-width: 100%;
  }
</style>
