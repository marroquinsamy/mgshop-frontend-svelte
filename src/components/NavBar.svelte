<script lang="ts">
  // Components
  import NavBarDropdown from './NavBarDropdown.svelte'

  // External libraries
  import { useLocation, Link } from 'svelte-navigator'

  const location = useLocation()

  let pathname: string
  let atCart: boolean
  let atProducts: boolean
  $: {
    pathname = $location.pathname
    atCart = pathname.split('/')[2] === 'cart' ? true : false
    atProducts = pathname.split('/')[2] !== 'cart' ? true : false
  }

  let showDropdown: boolean = false
  const toggleShowDropdown = () => (showDropdown = !showDropdown)

  window.onclick = (e) => {
    if (!e.target.matches('.show-dropdown-button')) showDropdown = false
  }
</script>

<nav>
  <div>
    <Link to="/" title="MGShop">
      <img src="/images/logowb.png" alt="MGShop" class="navbar--logo" />
    </Link>
  </div>
  <div>
    <Link class="navbar--link" to="./" title="Productos">
      {#if atProducts}
        <i class="navbar--link--inside bx bxs-shopping-bag" />
      {:else}<i class="navbar--link--inside bx bx-shopping-bag" />{/if}
    </Link>
    <Link class="navbar--link" to="cart" title="Carrito de compras">
      {#if atCart}
        <i class="navbar--link--inside bx bxs-cart-alt" />
      {:else}<i class="navbar--link--inside bx bx-cart-alt" />{/if}
    </Link>
  </div>
  <div>
    <button
      title="Más opciones"
      on:click={toggleShowDropdown}
      class="show-dropdown-button navbar--link"
    >
      <i
        class="bx bx{showDropdown
          ? 's'
          : ''}-chevron-down-square show-dropdown-button"
        role="button"
      />
    </button>
    {#if showDropdown}
      <NavBarDropdown />
    {/if}
  </div>
</nav>

<style>
  nav {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 25px;
    box-shadow: var(--shadow-1), inset 0 0 0 1px rgba(255, 255, 255, 0.5);
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    background: var(--surface-color);
  }

  nav :global(.navbar--link) {
    color: var(--main-color);
    max-width: 40%;
    text-decoration: none;
    text-align: center;
    padding: 7px 3px;
    font-weight: 700;
    margin: auto 5px;
  }

  .navbar--link--inside {
    padding: 4px;
    border-radius: var(--border-radius);
  }

  .navbar--link--inside:hover {
    background: rgba(var(--pink), 0.1);
  }

  :global(body.dark) nav {
    background: rgba(var(--surface-color-dark));
    box-shadow: var(--surface-shadow), inset 0 0 0 1px rgba(255, 255, 255, 0.05);
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
    color: var(--secondary-color-500);
    background: none;
  }

  i {
    margin: 10px auto;
    font-size: 40px;
  }

  .show-dropdown-button {
    /* color: var(--secondary-color-500); */
    box-shadow: none;
  }
</style>
