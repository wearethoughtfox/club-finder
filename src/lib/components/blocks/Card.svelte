<script>
  /** @type {string|undefined} Link destination, wraps the card */
  export let href = undefined;
  /** @type {string} Card background colour */
  export let tint = 'var(--color-air)';
</script>

<article class="card" style:--card-tint={tint}>
  <div class="card__body stack" style:--stack-space="var(--space-xs)">
    {#if href}
      <a {href} class="card__link">
        <slot name="heading"><slot /></slot>
      </a>
    {:else}
      <slot name="heading"><slot /></slot>
    {/if}
    <slot name="body" />
    <slot name="footer" />
  </div>
</article>

<style>
  .card {
    position: relative;
    background: var(--card-tint);
    border: var(--stroke);
    border-radius: var(--radius-m);
    box-shadow: var(--shadow-pop);
    display: flex;
    flex-direction: column;
  }

  .card__body {
    padding: var(--space-m);
    flex: 1;
  }

  .card__link {
    color: inherit;
    text-decoration: none;
    font-weight: var(--font-black);
    font-size: var(--size-step-2);
    line-height: var(--leading-fine);
  }

  .card__link::after {
    content: '';
    position: absolute;
    inset: 0;
  }

  @media (prefers-reduced-motion: no-preference) {
    .card {
      transition: transform var(--transition-movement), box-shadow var(--transition-movement);
    }

    .card:has(.card__link:hover) {
      transform: translate(-2px, -2px);
      box-shadow: 7px 7px 0 var(--color-ink);
    }
  }
</style>
