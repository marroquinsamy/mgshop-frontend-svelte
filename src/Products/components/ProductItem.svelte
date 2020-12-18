<script lang="ts">
  // Components
  import AddToCartButton from './AddToCartButton.svelte'

  // External libraries
  import { Link, useNavigate } from 'svelte-navigator'

  // Scripts
  import { API } from '../services/productsService'
  import type { IProduct } from '../models/Product'

  const navigate = useNavigate()

  export let product: IProduct
</script>

<article>
  <Link to={product._id} class="product-card">
    <header>
      <h3>{product.title}</h3>
      <p class="product-description">{product.description}</p>
    </header>
  </Link>
  <div class="image-container">
    <img
      src={`${API}/${product.imagePath}`}
      alt={product.title}
      on:click={() => navigate(product._id)} />
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

  article {
    height: 370px;
    border-radius: 12px;
    border: 3px dashed var(--pink);
    padding: 10px;

    transform: scale(1);
    transition: all 0.2s ease;

    /* Esto es para que la sección del cetro (imagen) utilice el espacio restante que dejan la sección superior (detalles) y la inferior (footer) */
    display: grid;
    grid-template-rows: auto 1fr auto;
    background: var(--surface-color);
  }

  article:hover {
    transform: scale(1.01);
    cursor: pointer;
    box-shadow: var(--surface-shadow-deep);
  }

  :global(body.dark) article {
    background: var(--surface-color-dark);
  }

  h3 {
    margin: 2px;
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;

    margin: 7px 2px;
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
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    margin-top: 5px;
    padding: 7px 7px 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  :global(body.dark) footer {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }

  .price {
    border: 2px dashed var(--surface-color);
    padding: 7px;
    border-radius: 12px;
    color: var(--text-dark);
    background: var(--green);
    width: fit-content;
    font-weight: 700;
    margin: 0;
    font-size: 1.1em;
    display: flex;
    align-items: center;
  }

  :global(body.dark) .price {
    border: 2px dashed var(--surface-color-dark);
    color: var(--text);
  }

  .bxs-coin {
    font-size: 24px;
    margin: 0 5px;
  }
</style>
