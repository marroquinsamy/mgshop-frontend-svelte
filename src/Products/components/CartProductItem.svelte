<script lang="ts">
  export let product: IProduct

  // Components
  import ImageLoader from '../../components/ImageLoader.svelte'
  import ImageError from '../../components/ImageError.svelte'

  // Scripts
  import type { IProduct } from '../models/Product'
  import { API, getImage } from '../services/productsService'

  // External libraries
  import Toastify from 'toastify-js'
  import { write } from 'clipboardy'

  const copyID = async () => {
    // navigator.clipboard.writeText(product._id)
    try {
      await write(product._id)

      Toastify({
        text: 'ID copiado exitosamente',
        duration: 5000,
        close: true,
        gravity: 'bottom',
        position: 'right',
        avatar: '/images/check.png',
        backgroundColor: ' var(--secondary-color-500)',
        stopOnFocus: true,
      }).showToast()
    } catch (error) {
      console.log(error)
    }
  }

  const loadImage = async (): Promise<string> => {
    const response: string = await getImage(product.imagePath)
    return response
  }

  const image: Promise<string> = loadImage()
</script>

<article>
  <div class="details-container ">
    <p
      class="id"
      title="Haz click para copiar el ID del producto"
      role="button"
      on:click={copyID}
    >
      ID:
      {product._id}
    </p>
    <h4>{product.title}</h4>
    <p class="description-paragraph text-small">{product.description}</p>
    <p class="price">Q{product.price}</p>
  </div>

  {#await image}
    <ImageLoader />
  {:then image}
    <div class="image-container"><img src={image} alt={product.title} /></div>
  {:catch}
    <ImageError />
  {/await}
</article>

<style>
  article {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 7px 0;

    display: grid;
    grid-template-columns: 1fr 70px;
  }

  :global(body.dark) article {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  h4 {
    margin: 7px 0;
  }

  p {
    margin: 5px 0;
  }

  .price {
    text-align: right;
    color: var(--secondary-color-500);
    font-weight: 500;
    width: fit-content;
    padding: 8px 12px;
    border-radius: 10px;
  }

  .id {
    opacity: 0.7;
    cursor: pointer;
    font-size: 0.875em;
  }

  .image-container {
    margin-left: 5px;
    margin-top: 10px;
  }

  img {
    width: 100%;
  }
</style>
