<script lang="ts">
  export let title: string = 'Error'
  export let description: string = 'Error'
  export let code: string
  let imageName: string = 'warning'

  if (code === '404') imageName = 'page-not-found'
  else if (code === '204') imageName = 'no-data'

  import { useNavigate } from 'svelte-navigator'
  const navigate = useNavigate()
</script>

<div><img src="/images/{imageName}.svg" alt="Portapapeles sin datos" /></div>
<h2 class="products-page--page-title">{title}</h2>
<p>{description}</p>
{#if code === '404'}
  <div class="button-container">
    <button on:click={() => navigate('/products')}>¡Ir de compras!</button>
  </div>
{/if}

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
    width: 250px;
    margin: auto;
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: var(--border-radius);
    padding: 15px;
    background: var(--main-color-500);
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
