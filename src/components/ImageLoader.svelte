<script lang="ts">
  import Loader from './Loader.svelte'
</script>

<div>
  <Loader showText={false} />
</div>

<style>
  div {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
  }
</style>
