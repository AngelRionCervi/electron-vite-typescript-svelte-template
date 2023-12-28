<script lang="ts">
  import SvelteLogo from './assets/svelte.svg?component'
  import Counter from '@/components/Counter.svelte'
</script>

<main>
  <div>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <SvelteLogo />
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
  <h1>Electron + Vite + TS + Svelte</h1>
  <div class="card">
    <Counter />
  </div>
</main>

<style lang="scss">
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
