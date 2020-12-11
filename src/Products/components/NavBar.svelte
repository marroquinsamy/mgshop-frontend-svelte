<script lang="ts">
  import { useLocation, Link } from 'svelte-navigator'

  const location = useLocation()

  let pathname: string
  $: pathname = $location.pathname
</script>

<style>
  nav {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 25px;
    border-bottom: 3px dashed var(--green);
    border-left: 3px dashed var(--green);
    border-right: 3px dashed var(--green);
    box-shadow: var(--facebook-shadow);
    border-radius: 0 0 12px 12px;
    margin: 0 10px;
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    background: var(--surface-color);
  }

  nav :global(.navbar--link) {
    color: var(--pink);
    max-width: 40%;
    text-decoration: none;
    text-align: center;
    padding: 7px 3px;
    font-weight: 700;
    margin: auto 5px;
    line-height: 40px;
  }

  .navbar--logo {
    height: 40px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    cursor: pointer;
    background: none;
    color: var(--green);
  }

  i {
    font-size: 40px;
    margin: 10px auto;
  }
</style>

<nav>
  <div>
    <Link to="/" title="MGShop">
      <img src="/logowb.png" alt="MGShop" class="navbar--logo" />
    </Link>
  </div>
  <div>
    <Link class="navbar--link" to="./" title="Productos">
      {#if pathname === '/products'}
        <i class="bx bxs-shopping-bag" />
      {:else}<i class="bx bx-shopping-bag" />{/if}
    </Link>
    <Link class="navbar--link" to="about" title="Acerca de nosotros">
      {#if pathname === '/products/about'}
        <i class="bx bxs-info-circle" />
      {:else}<i class="bx bx-info-circle" />{/if}
    </Link>
  </div>
  <div>
    <button title="Más opciones">
      <i class="bx bxs-chevron-down-circle" />
    </button>
  </div>
</nav>
