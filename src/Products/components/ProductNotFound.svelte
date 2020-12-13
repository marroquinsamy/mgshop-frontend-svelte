<script lang="ts">
  import { useNavigate } from 'svelte-navigator'
  const navigate = useNavigate()
</script>

<div><img src="/images/no-data.svg" alt="Portapapeles sin datos" /></div>
<h2 class="products-page--page-title">
  Parece que alguien no vino a trabajar hoy...
</h2>
<p>
  No hemos encontrado el item que estás buscando. Haz click en el botón para
  explorar nuestro catálogo de productos.
</p>
<div class="button-container">
  <button on:click={() => navigate('/products')}>¡Ir de compras!</button>
</div>

<style>
  div {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }

  img {
    width: 80%;
    max-height: 250px;
  }

  h2 {
    width: 95%;
    max-width: 600px;
    margin: 23px auto 15px;
  }

  p {
    width: 90%;
    max-width: 500px;
    text-align: center;
    margin: auto;
  }

  button {
    margin: auto;

    outline: none;
    border: none;
    cursor: pointer;
    border-radius: var(--border-radius);
    padding: 15px;
    background: var(--pink);
    color: #fff;
    font-weight: 500;
    font-size: 1.1em;
    transform: scale(1);
    transition: var(--preferred-transition);
  }

  button:hover {
    transform: scale(1.03);
    box-shadow: var(--surface-shadow-deep);
  }
</style>
