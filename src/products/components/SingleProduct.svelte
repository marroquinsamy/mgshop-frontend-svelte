<script lang="ts">
  export let productInArray: IProduct[]
  const [product]: IProduct[] = productInArray

  // Components
  import ErrorPage from '../../components/ErrorPage.svelte'
  import Loader from '../../components/Loader.svelte'
  import AddToCartButton from './AddToCartButton.svelte'

  // External libraries
  import { useFocus } from 'svelte-navigator'

  // Scripts
  import { getImage } from '../services/productsService'
  import type { IProduct } from '../models/Product'
  import { title } from '../../stores/title'
  import toastify from '../../utils/toastify'
  import clipboard from '../../utils/clipboard'

  const registerFocus = useFocus()

  const copyID = () => {
    try {
      clipboard.copy({ textToCopy: product._id })
    } catch (error) {
      console.log(error)
    }
    toastify({ text: 'ID copiado exitosamente', status: 'information' })
  }

  const loadImage = async (): Promise<string> => {
    const response: string = await getImage(product)
    return response
  }

  const openImageInNewTab = async () => {
    window.open(await image, '_blank', 'noreferrer')
  }

  const image: Promise<string> = loadImage()
</script>

<svelte:head>
  <title>Productos | {$title}</title>
</svelte:head>

<h2 class="products-page--page-title" use:registerFocus>{product.title}</h2>
<div class="container">
  <section class="image-container">
    {#await image}
      <Loader showText={false} />
    {:then image}
      <img
        src={image}
        alt={product.title}
        class="product-image"
        on:click={openImageInNewTab}
      />
    {:catch}
      <img
        src="/images/015-laptop.svg"
        alt={product.title}
        class="product-image error-image"
      />
    {/await}
  </section>

  <section class="details-container">
    <div class="group description">
      <h4 class="label">Descripción</h4>
      <p>{product.description}</p>
    </div>
    <div class="group id">
      <h4 class="label">ID del producto</h4>
      <p
        role="button"
        on:click={copyID}
        style="cursor: pointer;"
        title="Haz click para copiar el ID"
      >
        {product._id}
      </p>
    </div>
    <div class="group price">
      <span class="tag price"><small>Q</small>{product.price}</span>
    </div>
    <div class="group action">
      <AddToCartButton text="Agregar al carrito" productID={product._id} />
    </div>
  </section>
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    grid-template-areas:
      'picture'
      'details';
    gap: 20px;

    border-radius: var(--border-radius);
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    width: 90%;
    max-width: 1200px;
    background: var(--surface-color);
    box-shadow: var(--shadow-outset-1), var(--shadow-inset-1);
  }

  @media only screen and (min-width: 665px) {
    .container {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      grid-template-areas: 'picture details';
      align-items: flex-start;
    }
  }

  .image-container {
    display: grid;
    place-items: center;
    grid-area: picture;
  }

  .details-container {
    display: grid;
    grid-area: details;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, auto);
    grid-template-areas:
      'description'
      'id'
      'price'
      'action';
    gap: 20px;

    position: sticky;
    top: 0;
  }

  .group.description {
    grid-area: description;
  }

  .group.id {
    grid-area: id;
  }

  .group.price {
    grid-area: price;
  }

  .group.action {
    grid-area: action;
  }

  .label {
    margin: 0;
    margin-bottom: 0.5em;
  }

  p {
    margin: 0;
  }

  .tag.price {
    font-size: 1.5em;
  }

  .product-image {
    max-width: 100%;
  }

  .error-image {
    max-width: 40%;
  }
</style>
