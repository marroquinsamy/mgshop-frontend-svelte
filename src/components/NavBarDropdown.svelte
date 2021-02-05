<script lang="ts">
  // Components
  import NavBarDropdownItem from './NavBarDropdownItem.svelte'

  // Scripts
  import { darkMode } from '../stores/darkMode'

  $: isDarkModeEnabled = $darkMode
</script>

<div on:click|stopPropagation id="navbar-dropdown">
  <h2>Más opciones</h2>
  <NavBarDropdownItem
    text="{isDarkModeEnabled ? 'Apagar' : 'Encender'} modo oscuro"
    iconClasses="bx bxs-moon"
    on:click={() => darkMode.toggleDarkModeStatus()}
  />
  <NavBarDropdownItem text="Ayuda" iconClasses="bx bxs-help-circle" />
</div>

<style>
  div {
    position: absolute;
    right: 5px;
    top: calc(var(--navbar-height) - 7px);

    background: rgba(var(--surface-color));

    box-shadow: var(--shadow-2), inset 0 0 0 1px rgba(255, 255, 255, 0.5);

    padding: 7px;
    border-radius: var(--border-radius);

    width: 85%;
    max-width: 350px;
  }

  :global(body.dark) div {
    background: rgba(var(--surface-color-dark));

    box-shadow: var(--surface-shadow-deep-dark);
  }

  h2 {
    margin: 5px 0px 10px 10px;
  }
</style>
