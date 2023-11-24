<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from './assets/vite.svg'
  import pwaLogo from './assets/pwa.svg'
</script>

<main>
  <div>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
    <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo vite" alt="Logo" />
    </a>
    <a
      href="https://vite-pwa-org.netlify.app/"
      target="_blank"
      rel="noreferrer"
    >
      <img src={pwaLogo} class="logo pwa" alt="Logo" />
    </a>
  </div>
  <h1>Svelte + Vite + PWA</h1>
  <p>
    Made with <a
      class="svelte"
      href="https://svelte.dev/"
      target="_blank"
      rel="noopener noreferrer">Svelte</a
    >
    ,
    <a
      class="vite"
      href="https://vitejs.dev/"
      target="_blank"
      rel="noopener noreferrer">Vite</a
    >
    &
    <a
      class="pwa"
      href="https://vite-pwa-org.netlify.app/"
      target="_blank"
      rel="noopener noreferrer">PWA Vite Plugin</a
    >
  </p>

  <p>
    Augmented with <a
      href="https://vite-pwa-org.netlify.app/assets-generator/"
      target="_blank"
      rel="noopener noreferrer">assets generator</a
    >
    and custom screenshot generator using
    <a href="https://pptr.dev/" target="_blank" rel="noopener noreferrer"
      >Puppeteer</a
    > with dark mode 😎
  </p>

  <p>
    Customizable by PWA config file & autodeploy to <a
      href="https://github.com/SrGeneroso/sveltepwa"
      target="_blank"
      rel="noopener noreferrer">github</a
    > pages by ghActions.
  </p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }

  .logo.vite:hover {
    filter: drop-shadow(0 0 2em #fdc04e);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .logo.pwa:hover {
    filter: drop-shadow(0 0 2em #7b1fa2);
  }

  @media (prefers-color-scheme: dark) {
    a.svelte {
      color: #ff9470;
    }
    a.svelte:hover {
      color: #ffaf94;
    }
    a.vite {
      color: #ffd028;
    }
    a.vite:hover {
      color: #ffe175;
    }
    a.pwa {
      color: #dc96e9;
    }
    a.pwa:hover {
      color: #e9baf2;
    }
  }
</style>
