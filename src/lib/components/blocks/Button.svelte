<script>
  /** @type {'button'|'submit'|'reset'} */
  export let type = 'button';
  /** @type {'primary'|'secondary'|'sun'} */
  export let variant = 'primary';
  /** @type {string|undefined} Renders as an <a> when provided */
  export let href = undefined;
</script>

{#if href}
  <a {href} class="button" data-variant={variant} {...$$restProps}>
    <slot />
  </a>
{:else}
  <button {type} class="button" data-variant={variant} {...$$restProps}>
    <slot />
  </button>
{/if}

<style>
  .button {
    display: inline-flex;
    align-items: center;
    gap: var(--space-xs);
    padding: var(--space-xs) var(--space-m);
    border-radius: 999px;
    border: var(--stroke);
    box-shadow: 3px 3px 0 var(--color-ink);
    font: inherit;
    font-weight: var(--font-bold);
    line-height: var(--leading-flat);
    text-decoration: none;
    cursor: pointer;
    color: var(--color-ink);
    transition:
      transform var(--transition-movement),
      box-shadow var(--transition-movement);
  }

  .button:hover {
    transform: translate(-1px, -1px);
    box-shadow: 5px 5px 0 var(--color-ink);
  }

  .button:active {
    transform: translate(2px, 2px);
    box-shadow: 1px 1px 0 var(--color-ink);
  }

  .button[data-variant='primary'] {
    background: var(--color-violet);
    color: var(--color-air);
  }

  .button[data-variant='secondary'] {
    background: var(--color-air);
  }

  .button[data-variant='sun'] {
    background: var(--color-sun);
  }

  @media (prefers-reduced-motion: reduce) {
    .button {
      transition: none;
    }
  }
</style>
