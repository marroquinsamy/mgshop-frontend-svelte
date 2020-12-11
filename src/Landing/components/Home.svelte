<script>
  import { useNavigate } from 'svelte-navigator'
  import { onMount } from 'svelte'

  const navigate = useNavigate()

  onMount(() => navigate('products'))
</script>
