<script lang="ts">
  // External libraries
  import { Router, Route } from 'svelte-navigator'

  // Components
  import Dashboard from './Dashboard.svelte'
</script>

<Router basepath="/dashboard">
  <Route path="/" component={Dashboard} />
</Router>
