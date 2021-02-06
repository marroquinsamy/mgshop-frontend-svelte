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

    box-shadow: var(--shadow-3), var(--shadow-inset-1);

    padding: 7px;
    border-radius: var(--border-radius);

    width: 85%;
    max-width: 350px;
  }

  h2 {
    margin: 5px 0px 10px 10px;
  }
</style>
