<script lang="ts">
  export let message: string
  import Button from './Button.svelte'

  const errorSeparator: string = '$$$'
  let code: string = message.split(errorSeparator)[0]
  let title: string = message.split(errorSeparator)[1] || 'Error'
  let description: string = message.split(errorSeparator)[2] || 'Error'
  let imageName: string = 'warning'

  if (code === '404') imageName = 'not-found'
  else if (code === '204') imageName = 'no-data'
  else if (code === '001') imageName = 'taken'

  const showButton: boolean = code === '404' || code === '001' ? true : false

  import { useNavigate } from 'svelte-navigator'
  const navigate = useNavigate()
</script>

<div>
  <img src="/images/{imageName}.svg" alt="Ilustración de error" />
  <h2 class="products-page--page-title">{title}</h2>
  <p>{description}</p>
  {#if showButton}
    <div class="button-container">
      <Button
        on:click={() => navigate('/products')}
        text="¡Ir de compras!"
        fontSize="1.1em" />
    </div>
  {/if}
</div>

<style>
  div {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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

  .button-container {
    width: 250px;
  }
</style>
