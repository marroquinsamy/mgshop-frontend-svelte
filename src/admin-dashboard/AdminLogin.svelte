<script lang="ts">
  // Stores
  import { title } from '../stores/title'
  import { token, checkAuthStatus } from '../stores/auth'

  // Scripts
  import adminDashboardService from './adminDashboardService'

  // Components
  import Loader from '../components/Loader.svelte'

  // External libraries
  import { onMount } from 'svelte'
  import { useNavigate, useLocation } from 'svelte-navigator'

  const navigate = useNavigate()
  const location = useLocation()

  onMount(() => {
    if ($token) {
      navigate('/dashboard', {
        state: { from: $location.pathname },
        replace: true,
      })
    }
  })

  let username: string = ''
  let password: string = ''

  let adminAuthorization
  const handleSubmit = () => {
    const res = adminDashboardService.login({ username, password })
    adminAuthorization = res
    res.then(() => navigate('/dashboard', { state: { from: 'admin-login' } }))
    username = ''
    password = ''
  }
</script>

<svelte:head>
  <title>
    Admin Login | {$title}
  </title>
</svelte:head>

<div class="form-container">
  <form class="admin-login-form" on:submit|preventDefault={handleSubmit}>
    <h1 class="form-title">Inicio de sesión</h1>
    <div class="form-group">
      <label for="username">Nombre de usuario</label>
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Nombre de usuario"
        bind:value={username}
      />
    </div>
    <div class="form-group">
      <label for="password">Contraseña</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Contraseña"
        bind:value={password}
      />
    </div>
    {#await adminAuthorization then login}
      <div class="form-group error-message" />
    {:catch error}
      <div class="form-group error-message full">{error.message}</div>
    {/await}
    <button type="submit" class="primary">
      {#await adminAuthorization}
        <Loader showText={false} size="25px" />
      {:then login}
        Iniciar sesión
      {:catch error}
        Iniciar sesión
      {/await}
    </button>
  </form>
</div>

<style>
  .form-container {
    padding-top: 10em;
    padding-bottom: 10em;
    display: grid;
    place-items: center;
  }

  .admin-login-form {
    background: var(--surface-color);
    width: 90%;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;

    border-radius: var(--border-radius);
    box-shadow: var(--shadow-outset-1), var(--shadow-inset-1);
    padding: 25px calc(5% + 15px);

    display: grid;
    place-items: center;
  }

  .form-title {
    margin-top: 0.5em;
  }

  .form-group {
    width: 100%;
    margin-bottom: 25px;
  }

  label {
    font-weight: 500;
  }

  input {
    width: 100%;
    margin: 0;
    margin-top: 5px;
  }

  .error-message {
    background: rgba(var(--main-color-rgb), 0.2);
    border-radius: var(--border-radius);
    margin: 0;
  }

  .full {
    margin-bottom: 15px;
    padding: 15px;
  }

  button {
    width: 100%;
  }
</style>
