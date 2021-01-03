<script lang="ts">
  // Components
  import NavBarDropdownItem from './NavBarDropdownItem.svelte'

  // Scripts
  import { darkMode } from '../stores/darkMode'

  $: isDarkModeEnabled = $darkMode

  const toggleDarkTheme = () => darkMode.toggleDarkModeStatus()
</script>

<div on:click|stopPropagation id="navbar-dropdown">
  <h3>Más opciones</h3>
  <NavBarDropdownItem
    text="{isDarkModeEnabled ? 'Apagar' : 'Encender'} modo oscuro"
    iconClasses="bx bxs-moon"
    on:click={toggleDarkTheme} />
  <NavBarDropdownItem text="Ayuda" iconClasses="bx bxs-help-circle" />
</div>

<style>
  div {
    position: absolute;
    right: 5px;
    top: calc(var(--navbar-height) - 7px);

    background: var(--surface-color);
    box-shadow: var(--surface-shadow-deep);
    padding: 7px;
    border-radius: var(--border-radius);
    border: 2px solid var(--green);

    width: 85%;
    max-width: 350px;
  }

  :global(body.dark) div {
    background: var(--surface-color-dark);
  }

  h3 {
    margin: 5px 0px 10px 10px;
  }
</style>
