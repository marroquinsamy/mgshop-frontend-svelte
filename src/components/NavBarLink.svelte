<script lang="ts">
  import { Link } from 'svelte-navigator'
  import 'boxicons'
  /**
   * Icon name from boxicons.com
   */
  export let iconName: string
  /**
   * Fills or not the icon to indicate the person is at the page represented by the icon
   */
  export let isAtIconComponent: boolean = false
  export let to: string
  export let title: string
</script>

<Link {to} {title}>
  <!-- <i class="navbar--link--inside bx bxs-shopping-bag" /> -->
  <box-icon
    name={iconName}
    type={isAtIconComponent ? 'solid' : 'regular'}
    color="var(--gray-color-always)"
    size="40px"
    class="button secondary"
  />
</Link>

<style>
  box-icon {
    margin: 0;
    padding: 5px;
  }

  .button {
    display: inline-block;
  }
</style>
