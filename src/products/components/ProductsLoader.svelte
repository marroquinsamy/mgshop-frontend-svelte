<script lang="ts">
  import Loader from '../../components/Loader.svelte'

  export let text: string
</script>

<div class="loader-container">
  <Loader {text} />
</div>

<style>
  .loader-container {
    display: grid;
    place-items: center;
  }
</style>
