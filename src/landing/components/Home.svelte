<script>
  // External libraries
  import { useNavigate } from 'svelte-navigator'
  import { onMount } from 'svelte'

  // Scripts
  import { title } from '../../stores/title'

  const navigate = useNavigate()

  onMount(() => navigate('products'))
</script>

<svelte:head>
  <title>{$title}</title>
</svelte:head>
