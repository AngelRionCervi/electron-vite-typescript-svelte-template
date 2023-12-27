<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
</script>

<main>
  <div>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
    <div class="versions">
      <div class="row">
        <p>Chrome version</p>
        <p id="chrome-version">no</p>
      </div>
      <div class="row">
        <p>Node version</p>
        <p id="node-version">preload</p>
      </div>
      <div class="row">
        <p>Electron version</p>
        <p id="electron-version">:(</p>
      </div>
    </div>
  </div>
  <h1>Vite + Svelte + TS</h1>
  <div class="card">
    <Counter />
  </div>
</main>

<style lang="scss">
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }

  .svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }

  .read-the-docs {
    color: #888;
  }

  .versions {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .row {
    display: flex;
    gap: 1rem;

    > p {
      color: #ff3e00aa;
    }
  }
</style>
