<script lang="ts">
  // Components
  import AddToCartButton from './AddToCartButton.svelte'
  import Loader from '../../components/Loader.svelte'

  // External libraries
  import { Link, useNavigate } from 'svelte-navigator'

  // Scripts
  import { getImage } from '../services/productsService'
  import type { IProduct } from '../models/Product'

  const navigate = useNavigate()

  export let product: IProduct

  const loadImage = async (): Promise<string> => {
    const response: string = await getImage(product)
    return response
  }

  const image: Promise<string> = loadImage()
</script>

<article>
  <Link to={product._id} class="product-article-link header">
    <header>
      <h3 class="title">{product.title}</h3>
      <p class="description">{product.description}</p>
      <span class="tag price"><small>Q</small>{product.price}</span>
    </header>
  </Link>

  <Link to={product._id} class="product-article-link image-container">
    <!-- <div class="image-container" on:click={() => navigate(product._id)}> -->
    {#await image}
      <Loader showText={false} size="70px" />
    {:then image}
      <img
        src={image}
        alt={product.title}
        class="product-image"
        loading="lazy"
      />
    {:catch}
      <img
        src="/images/015-laptop.svg"
        alt={product.title}
        class="product-image error-image"
      />
    {/await}
    <!-- </div> -->
  </Link>

  <footer class="action">
    <AddToCartButton productID={product._id} />
  </footer>
</article>

<style>
  article {
    height: 400px;
    border-radius: var(--border-radius);
    padding: 15px;
    padding-top: 18px;

    /* Esto es para que la sección del cetro (imagen) utilice el espacio restante que dejan la sección superior (detalles) y la inferior (footer) */
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      'information'
      'picture'
      'action';
    gap: 10px;
    background: var(--surface-color);

    box-shadow: var(--shadow-outset-2);
    transition: all ease 0.25s;
  }

  article:hover {
    cursor: pointer;
    box-shadow: var(--shadow-outset-2), var(--shadow-inset-1);
  }
  article :global(a.product-article-link) {
    color: var(--text-color);
    text-decoration: none;
    display: block;
  }

  article :global(a.product-article-link.header) {
    grid-area: information;
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
    margin: 0;
    margin-bottom: 10px;

    line-height: 1.5;
    color: var(--text-color);
    text-decoration: none;
  }

  .tag.price {
    font-size: 1.2em;
    display: inline-block;
  }

  article :global(.product-article-link.image-container) {
    /* Esto es para que la imagen dentro no se sobrepase de la altura de su contenedor y para que no pierda su radio de aspecto */
    height: 100%;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;

    grid-area: picture;
  }

  .product-image {
    max-height: 100%;
    display: inline-block;
  }

  .error-image {
    max-height: 70%;
  }

  .action {
    grid-area: action;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
