<script>
  /** @type {string} */
  export let siteName = 'Site Name';
</script>

<footer class="site-foot">
  <div class="wrapper">
    <p class="site-foot__credit">
      &copy; {new Date().getFullYear()} {siteName}
    </p>
    <slot />
  </div>
</footer>

<style>
  .site-foot {
    padding-block: var(--space-l);
    background: var(--color-ink);
    color: var(--color-paper);
    margin-block-start: auto;
  }

  .site-foot__credit {
    font-size: var(--size-step-00);
    max-width: unset;
  }
</style>
