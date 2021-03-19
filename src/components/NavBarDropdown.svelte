<script lang="ts">
  // Components
  import NavBarDropdownItem from './NavBarDropdownItem.svelte'

  // Scripts
  import { darkMode } from '../stores/darkMode'

  // External libraries
  import { slide } from 'svelte/transition'

  $: isDarkModeEnabled = $darkMode
</script>

<div
  on:click|stopPropagation
  id="navbar-dropdown"
  transition:slide={{ duration: 200 }}
>
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
    top: calc(60px - 5px);

    background: var(--surface-color);

    box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px,
      rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px;
    box-shadow: var(--shadow-outset-3), var(--shadow-inset-1);

    padding: 7px;
    border-radius: var(--border-radius);

    width: 85%;
    max-width: 350px;
    z-index: 1;
  }

  h2 {
    margin: 5px 0px 10px 10px;
  }
</style>
