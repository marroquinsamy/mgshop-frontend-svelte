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
        <i class="bx bxs-shopping-bag" />
      {:else}<i class="bx bx-shopping-bag" />{/if}
    </Link>
    <Link class="navbar--link" to="cart" title="Carrito de compras">
      {#if atCart}
        <i class="bx bxs-cart-alt" />
      {:else}<i class="bx bx-cart-alt" />{/if}
    </Link>
  </div>
  <div>
    <button
      title="Más opciones"
      on:click={toggleShowDropdown}
      class="show-dropdown-button">
      <i class="bx bx-menu show-dropdown-button" />
    </button>
    {#if showDropdown}
      <NavBarDropdown />
    {/if}
  </div>
</nav>

<style>
  nav {
    height: var(--navbar-height);
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

  :global(body.dark) nav {
    background: var(--surface-color-dark);
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
    color: var(--green);
    background: none;

    padding: 10px auto;
  }

  i {
    font-size: 40px;
  }
</style>
