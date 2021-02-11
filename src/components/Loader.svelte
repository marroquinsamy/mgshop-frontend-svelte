<script lang="ts">
  export let showText: boolean = true
  export let text: string = 'Cargando'
  export let size: string = '90px'
</script>

<div class="spinner-container">
  <div class="spinner" style="width: {size}; height: {size};" />
  {#if showText}
    <span class="text">
      {text}
    </span>
  {/if}
</div>

<style>
  .spinner-container {
    width: fit-content;
    background: skyblue;
    display: grid;
    place-items: center;
  }
  .spinner {
    border: 8px solid rgba(var(--black-and-white-color), 0.2);
    border-radius: 50%;
    border-left-color: var(--main-color-500);

    animation: spin 0.55s linear infinite;
  }

  .text {
    font-size: 1.3em;
    font-weight: 700;
    margin-top: 10px;
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
