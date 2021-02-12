<script lang="ts">
  export let product: IProduct

  // Components
  import Loader from '../../components/Loader.svelte'

  // Scripts
  import type { IProduct } from '../models/Product'
  import { getImage } from '../services/productsService'

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
  <h4 class="product-title">{product.title}</h4>
  <p
    class="product-id"
    title="Haz click para copiar el ID del producto"
    role="button"
    on:click={copyID}
  >
    ID:
    {product._id}
  </p>
  <div class="product-container">
    <div class="image-container">
      {#await image}
        <Loader showText={false} size="50px" />
      {:then image}
        <img src={image} alt={product.title} class="product-image" />
      {:catch}
        <img
          src="/images/015-laptop.svg"
          alt={product.title}
          class="product-image error-image"
        />
      {/await}
    </div>
    <div class="details-container">
      <p class="product-description">{product.description}</p>
      <span class="tag price">Q{product.price}</span>
    </div>
  </div>
</article>

<style>
  article {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 7px 0 14px;
  }

  .product-container {
    display: grid;
    grid-template-columns: 70px 1fr;
    gap: 10px;
  }

  .product-title {
    margin: 0;
    margin-bottom: 3px;
  }

  .product-description {
    margin: 0;
    margin-bottom: 15px;
    font-size: 0.9em;
  }

  .product-id {
    opacity: 0.7;
    cursor: pointer;
    font-size: 0.875em;
    margin: 0;
    margin-bottom: 7px;
  }

  .image-container {
    display: grid;
    place-items: center;
  }

  .product-image {
    width: 100%;
  }

  .error-image {
  }
</style>
