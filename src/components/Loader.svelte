<script lang="ts">
  export let text: string = 'Cargando...'
</script>

<div class="container">
  <div class="spinner" />
  <h2 class="text">{text}</h2>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
    width: 100%;
    height: 100%;
  }

  .spinner {
    border: 8px solid rgba(0, 0, 0, 0.1);
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border-left-color: var(--secondary-color-500);

    animation: spin 1s ease infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>
