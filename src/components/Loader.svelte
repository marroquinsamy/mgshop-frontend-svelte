<script lang="ts">
  export let text: string = 'Cargando...'
</script>

<div>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    data-darkreader-inline-fill="">
    <path
      d="M12,22c5.421,0,10-4.579,10-10h-2c0,4.337-3.663,8-8,8s-8-3.663-8-8c0-4.336,3.663-8,8-8V2C6.579,2,2,6.58,2,12 C2,17.421,6.579,22,12,22z" />
  </svg>
  <h2 class="products-page--page-title">{text}</h2>
</div>

<style>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
    width: 100%;
    height: 100%;
  }

  svg {
    width: 150px;
    height: 150px;
    animation: spin 0.7s ease infinite;
    fill: rgba(var(--green));
    margin: auto;
  }
</style>
