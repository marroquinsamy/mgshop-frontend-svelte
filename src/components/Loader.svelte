<script lang="ts">
  export let text: string = 'Cargando'
  export let showText: boolean = true
  export let size: string = '90px'
</script>

<div class="spinner" style="width: {size}; height: {size};" />
{#if showText}
  <h2 class="text">
    {text}
  </h2>
{/if}

<style>
  .spinner {
    border: 8px solid rgba(var(--black-and-white-color), 0.2);
    border-radius: 50%;
    border-left-color: var(--main-color-500);

    animation: spin 0.6s linear infinite;
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
