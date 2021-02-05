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
      <p class="product-description">{product.description}</p>
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
    <div class="price">
      <i class="bx bxs-coin" />
      <span><small>Q</small>{product.price}</span>
    </div>
    <div class="button-container">
      <AddToCartButton productID={product._id} />
    </div>
  </footer>
</article>

<style>
  :global(.product-card) {
    color: unset;
    text-decoration: none;
  }

  :global(.product-card):hover {
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

  :global(body.dark) article {
    background: rgba(var(--surface-color-dark));
  }

  :global(body.dark) article:hover {
    box-shadow: var(--surface-shadow-deep-dark);
  }

  .title {
    margin: 0 0 5px;
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin: 5px 0px 10px;

    line-height: 1.5;
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
    border-top: 2px solid var(--body-color);

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .price {
    border: 2px dashed rgba(var(--surface-color));
    padding: 7px;
    border-radius: 12px;
    color: var(--text-dark);
    background: var(--secondary-color-500);
    width: fit-content;
    font-weight: 700;
    margin: 0;
    font-size: 1.1em;
    display: flex;
    align-items: center;
  }

  :global(body.dark) .price {
    border: 2px dashed rgba(var(--surface-color-dark));
    color: var(--text);
  }

  .bxs-coin {
    font-size: 24px;
    margin: 0 5px;
  }
</style>
