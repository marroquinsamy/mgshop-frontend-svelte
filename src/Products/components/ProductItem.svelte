<script lang="ts">
  // Components
  import AddToCartButton from './AddToCartButton.svelte'
  import ImageLoader from '../../components/ImageLoader.svelte'
  import ImageError from '../../components/ImageError.svelte'

  // External libraries
  import { Link, useNavigate } from 'svelte-navigator'

  // Scripts
  import { API, getImage } from '../services/productsService'
  import type { IProduct } from '../models/Product'

  const navigate = useNavigate()

  export let product: IProduct

  const loadImage = async (): Promise<string> => {
    const response: string = await getImage(product.imagePath)
    return response
  }

  const image: Promise<string> = loadImage()
</script>

<article>
  <Link to={product._id} class="product-card">
    <header>
      <h3 class="title">{product.title}</h3>
      <p class="description">{product.description}</p>
      <span class="tag price"><small>Q</small>{product.price}</span>
    </header>
  </Link>

  <div class="image-container" on:click={() => navigate(product._id)}>
    {#await image}
      <ImageLoader />
    {:then image}
      <img src={image} alt={product.title} />
    {:catch}
      <ImageError />
    {/await}
  </div>

  <footer>
    <AddToCartButton productID={product._id} />
  </footer>
</article>

<style>
  article :global(.product-card) {
    color: unset;
    text-decoration: none;
  }

  article {
    height: 370px;
    border-radius: var(--border-radius);
    padding: 15px;
    padding-top: 18px;

    /* Esto es para que la sección del cetro (imagen) utilice el espacio restante que dejan la sección superior (detalles) y la inferior (footer) */
    display: grid;
    grid-template-rows: auto 1fr auto;
    background: var(--surface-color);

    box-shadow: var(--shadow-2);
    transition: all ease 0.25s;
  }

  article:hover {
    cursor: pointer;
    box-shadow: var(--shadow-3);
  }

  article:hover .title {
    text-decoration: underline;
  }

  .title {
    margin: 0 0 5px;
  }

  .description {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin: 5px 0px 15px;

    line-height: 1.5;
  }

  .tag.price {
    font-size: 1.2em;
  }

  .image-container {
    /* Esto es para que la imagen dentro no se sobrepase de la altura de su contenedor y para que no pierda su radio de aspecto */
    height: 100%;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    max-height: 100%;
  }

  footer {
    margin-top: 5px;
    padding-top: 7px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
