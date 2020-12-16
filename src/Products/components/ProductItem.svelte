<script lang="ts">
  import type { IProduct } from '../models/Product'
  import { API } from '../services/ProductsService'
  import { Link, useNavigate } from 'svelte-navigator'

  export let product: IProduct

  const navigate = useNavigate()
</script>

<article on:click={() => navigate(product._id)}>
  <header>
    <h3>{product.title}</h3>
    <p class="product-description">{product.description}</p>
  </header>
  <div class="image-container">
    <img src={`${API}/${product.imagePath}`} alt={product.title} />
  </div>
  <footer>
    <div class="price">
      <i class="bx bxs-coin" />
      <span><small>Q</small>{product.price}</span>
    </div>
    <Link to={product._id} class="product-card--footer--more-details">
      <i class="bx bx-right-arrow-alt" />
      <span class="more-details-text">Más detalles</span>
    </Link>
  </footer>
</article>

<style>
  article {
    height: 370px;
    border-radius: 12px;
    border: 3px dashed var(--pink);
    padding: 10px;

    flex: 1 0 310px;
    margin: 15px;

    transform: scale(1);
    transition: all 0.2s ease;

    /* Esto es para que la sección del cetro (imagen) utilice el espacio restante que dejan la sección superior (detalles) y la inferior (footer) */
    display: grid;
    grid-template-rows: auto 1fr auto;
  }

  article:hover {
    transform: scale(1.01);
    cursor: pointer;
    box-shadow: var(--surface-shadow-deep);
  }

  article:active {
    transform: scale(1);
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
    border: 2px dashed var(--green);
    padding: 7px;
    border-radius: 12px;
    color: var(--green);
    width: fit-content;
    font-weight: 700;
    margin: 0;
    font-size: 1.1em;
    display: flex;
    align-items: center;
  }

  :global(body.dark) .price {
    background: var(--green-dark);
  }

  .bxs-coin {
    font-size: 24px;
    margin: 0 5px;
  }

  footer :global(.product-card--footer--more-details) {
    color: rgba(0, 0, 0, 0.5);
    font-weight: 500;
    text-decoration: none;
    display: flex;
    align-items: center;
  }

  :global(.product-card--footer--more-details:hover) .more-details-text {
    text-decoration: underline;
  }

  .bx-right-arrow-alt {
    margin-right: 5px;
    font-size: 1.3em;
  }
</style>
