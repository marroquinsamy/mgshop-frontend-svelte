<script lang="ts">
  import { title } from '../stores/title'

  let username: string
  let password: string

  const handleSubmit = () => {
    console.log('username')
    console.log(username)
    console.log('password')
    console.log(password)

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
    <button type="submit" class="primary">Iniciar sesión</button>
  </form>
</div>

<style>
  .form-container {
    height: calc(100vh - 170px);
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
    box-shadow: var(--shadow-1), var(--shadow-inset-1);
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

  button {
    width: 100%;
  }
</style>
