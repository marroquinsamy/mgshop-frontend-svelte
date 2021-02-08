<script lang="ts">
  export let message: string

  const errorSeparator: string = '$$$'
  let code: string = message.split(errorSeparator)[0]
  let title: string = message.split(errorSeparator)[1] || 'Error'
  let description: string = message.split(errorSeparator)[2] || 'Error'
  let imageName: string = 'warning'

  if (code === '404') imageName = 'page-not-found'
  else if (code === '204') imageName = 'no-data'
  else if (code === '001') imageName = 'taken'
  else if (code === '002') imageName = 'empty-cart'

  const showButton: boolean =
    code === '404' || code === '001' || code === '002' ? true : false

  import { useNavigate } from 'svelte-navigator'
  const navigate = useNavigate()
</script>

<div>
  <img src="/images/{imageName}.svg" alt="Ilustración de error" />
  <h2 class="products-page--page-title">{title}</h2>
  <p>{description}</p>
  {#if showButton}
    <div class="button-container">
      <button on:click={() => navigate('/products')} class="primary"
        >¡Ir de compras!</button
      >
    </div>
  {/if}
</div>

<style>
  div {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 100%;
    max-width: 1000px;
    margin-right: auto;
    margin-left: auto;
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
    margin-top: 1.3em;
    opacity: 0.9;
  }

  .button-container {
    width: 100%;
    max-width: 500px;
    padding: 0 20px;
    margin-top: 1em;
  }

  button {
    width: 100%;
  }
</style>
