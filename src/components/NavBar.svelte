<script lang="ts">
  // Components
  import NavBarDropdown from './NavBarDropdown.svelte'
  import NavBarLink from './NavBarLink.svelte'

  // External libraries
  import { useLocation, Link } from 'svelte-navigator'
  import 'boxicons'

  const location = useLocation()

  let pathname: string
  let isAtCartComponent: boolean
  let isAtProductsComponent: boolean
  $: {
    pathname = $location.pathname
    isAtCartComponent = pathname.split('/')[2] === 'cart' ? true : false
    isAtProductsComponent = pathname.split('/')[2] !== 'cart' ? true : false
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
    <NavBarLink
      iconName="shopping-bag"
      isAtIconComponent={isAtProductsComponent}
      to="./"
      title="Productos"
    />
    <NavBarLink
      iconName="cart-alt"
      isAtIconComponent={isAtCartComponent}
      to="cart"
      title="Carrito de compras"
    />
  </div>
  <div>
    <button
      title="Más opciones"
      on:click={toggleShowDropdown}
      class="show-dropdown-button"
    >
      <box-icon
        name="chevron-down"
        class="show-dropdown-button"
        rotate={showDropdown ? '180' : '0'}
        role="button"
        size="40px"
        color="var(--gray-color-always)"
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
    box-shadow: var(--shadow-1), var(--shadow-inset-1);
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    background: var(--surface-color);
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
    padding: 0;
  }

  .show-dropdown-button {
    box-shadow: none;
  }
</style>
