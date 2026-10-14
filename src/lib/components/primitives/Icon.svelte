<script>
  /** @type {{ name: string, size?: string }} name matches a file in src/lib/icons, e.g. "football" */
  let { name, size = '1.25em' } = $props();

  const icons = import.meta.glob('$lib/icons/*.svg', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  const svg = $derived(icons[`/src/lib/icons/${name.toLowerCase()}.svg`]);
</script>

{#if svg}
  <span class="icon" style:--icon-size={size} aria-hidden="true">{@html svg}</span>
{/if}

<style>
  .icon {
    display: inline-flex;
    flex-shrink: 0;
  }

  .icon :global(svg) {
    inline-size: var(--icon-size);
    block-size: var(--icon-size);
    fill: currentColor;
  }
</style>
