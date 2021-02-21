<script lang="ts">
  import { useLocation } from 'svelte-navigator'
  const location = useLocation()

  $: console.log($location)
</script>

<h1>Dashboard</h1>
