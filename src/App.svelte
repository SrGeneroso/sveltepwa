<script>
  import svelteLogo from './assets/svelte.svg'
  import Logo from '/logo.svg'
</script>

<main>
  <div>
    <a href="http://localhost:5173" target="_blank" rel="noreferrer">
      <img src={Logo} class="logo" alt="Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte PWA</h1>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #fdc04e);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
</style>
