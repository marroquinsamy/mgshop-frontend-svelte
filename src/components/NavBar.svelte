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
  <div class="logo-container end">
    <Link to="/" title="MGShop">
      <img
        src="/images/MG Shop logo color.svg"
        alt="MGShop"
        class="navbar--logo"
      />
    </Link>
  </div>
  <div class="menu-container">
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
  <div class="more-options-button-container end">
    <button
      title="Más opciones"
      on:click={toggleShowDropdown}
      class="show-dropdown-button button secondary"
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
    --navbar-height: 60px;
    height: var(--navbar-height);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 25px;
    box-shadow: var(--shadow-outset-1);
    border-bottom: 1px solid rgba(var(--black-and-white-color), 0.1);
    background: var(--surface-color);
  }

  .end {
    flex: 0 0 90px;
  }

  .more-options-button-container {
    display: flex;
    justify-content: flex-end;
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

  .show-dropdown-button.button:focus {
    outline: 2px solid;
  }
</style>
