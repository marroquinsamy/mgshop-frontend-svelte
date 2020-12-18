<script lang="ts">
  const toggleDarkTheme = () => {
    document.body.classList.toggle('dark')
  }
</script>

<div>
  <section on:click={toggleDarkTheme}>Toggle dark mode</section>
</div>

<style>
  div {
    background: blue;
    position: absolute;
    top: 5px;
    right: 5px;
  }
</style>
