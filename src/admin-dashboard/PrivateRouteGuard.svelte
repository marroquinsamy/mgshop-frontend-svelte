<script lang="ts">
  import { useNavigate, useLocation } from 'svelte-navigator'
  import { token } from '../stores/auth'

  const navigate = useNavigate()
  const location = useLocation()

  $: if (!$token) {
    navigate('/login', {
      state: { from: $location.pathname },
      replace: true,
    })
  }
</script>

{#if $token}
  <slot />
{/if}
