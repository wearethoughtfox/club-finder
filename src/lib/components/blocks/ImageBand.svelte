<script>
  /** @type {{ image: string, minHeight?: string, credit?: string, creditHref?: string, children?: import('svelte').Snippet }} */
  let { image, minHeight = '80vh', credit, creditHref, children } = $props();
</script>

<section class="band" style:--band-image={`url("${image}")`} style:--band-min-height={minHeight}>
  <div class="band__box">
    {@render children?.()}
  </div>

  {#if credit}
    <p class="band__credit">
      {#if creditHref}<a href={creditHref}>{credit}</a>{:else}{credit}{/if}
    </p>
  {/if}
</section>

<style>
  .band {
    position: relative;
    display: grid;
    place-items: center;
    min-block-size: var(--band-min-height);
    padding: var(--space-xl) var(--gutter);
    background-image: var(--band-image);
    background-size: cover;
    background-position: center;
    border-block: var(--stroke);
  }

  /* Fixed backgrounds are jumpy on touch devices, so only use them with a mouse
     and when the visitor hasn't asked for less motion. */
  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    .band {
      background-attachment: fixed;
    }
  }

  .band__box {
    inline-size: min(100%, 48rem);
    padding: var(--space-xl) var(--space-l);
    background: var(--color-ink);
    color: var(--color-air);
    border: var(--stroke);
    border-radius: var(--radius-m);
    box-shadow: var(--shadow-pop);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-m);
  }

  .band__credit {
    position: absolute;
    inset-block-end: var(--space-xs);
    inset-inline-end: var(--space-xs);
    max-inline-size: none;
    padding: 0.2em 0.7em;
    background: var(--color-ink);
    color: var(--color-air);
    border-radius: 999px;
    font-size: var(--size-step-000);
  }

  .band__credit a {
    color: inherit;
  }

  .band__box :global(h2) {
    color: var(--color-air);
    max-inline-size: 22ch;
  }

  .band__box :global(p) {
    font-size: var(--size-step-1);
    margin-inline: auto;
  }
</style>
