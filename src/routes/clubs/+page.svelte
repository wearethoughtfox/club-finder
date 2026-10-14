<script>
  import Stack from '$lib/components/layout/Stack.svelte';
  import Cluster from '$lib/components/layout/Cluster.svelte';
  import Grid from '$lib/components/layout/Grid.svelte';
  import Wrapper from '$lib/components/layout/Wrapper.svelte';
  import Region from '$lib/components/layout/Region.svelte';
  import { site } from '$lib/content/site.js';
  import { clubs, categories } from '$lib/content/clubs.js';

  let selected = $state('All');
  const shown = $derived(selected === 'All' ? clubs : clubs.filter((c) => c.category === selected));

  const tints = {
    Tech: 'var(--color-violet-light)',
    Sport: 'var(--color-mint)',
    Creative: 'var(--color-sun)',
    Games: 'var(--color-air)'
  };
</script>

<svelte:head>
  <title>Clubs: {site.name}</title>
  <meta name="description" content="Every club in one list: when, where and who it is for." />
</svelte:head>

<Region space="var(--space-2xl)">
  <Wrapper>
    <Stack space="var(--space-l)">
      <Stack space="var(--space-s)">
        <h1>The clubs</h1>
        <p class="lede">Pick a type of club, or scroll to see them all.</p>
      </Stack>

      <Cluster gap="var(--space-xs)" role="group" aria-label="Filter clubs by type">
        {#each categories as category}
          <button
            type="button"
            class="chip"
            aria-pressed={selected === category}
            onclick={() => (selected = category)}
          >
            {category}
          </button>
        {/each}
      </Cluster>

      <p class="count" aria-live="polite">
        Showing {shown.length} {shown.length === 1 ? 'club' : 'clubs'}
      </p>

      <Grid as="ul" minItemSize="18rem" gap="var(--space-l)" role="list">
        {#each shown as club (club.name)}
          <li class="club" style:--tint={tints[club.category] ?? 'var(--color-air)'}>
            <p class="club__tag">{club.category}</p>
            <h2>{club.name}</h2>
            <p>{club.description}</p>
            <dl class="club__facts">
              <div><dt>When</dt><dd>{club.when}</dd></div>
              <div><dt>Where</dt><dd>{club.where}</dd></div>
              <div><dt>Ages</dt><dd>{club.ages}</dd></div>
            </dl>
          </li>
        {/each}
      </Grid>
    </Stack>
  </Wrapper>
</Region>

<style>
  .lede {
    font-size: var(--size-step-2);
    font-weight: var(--font-medium);
  }

  .chip {
    font: inherit;
    font-weight: var(--font-bold);
    padding: var(--space-xs) var(--space-m);
    border: var(--stroke);
    border-radius: 999px;
    background: var(--color-air);
    color: var(--color-ink);
    cursor: pointer;
  }

  .chip:hover {
    background: var(--color-violet-light);
  }

  .chip[aria-pressed='true'] {
    background: var(--color-violet);
    color: var(--color-air);
  }

  .count {
    font-size: var(--size-step-00);
    color: var(--color-ink-soft);
  }

  .club {
    background: var(--tint);
    border: var(--stroke);
    border-radius: var(--radius-m);
    box-shadow: var(--shadow-pop);
    padding: var(--space-m);
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
  }

  .club h2 {
    font-size: var(--size-step-3);
  }

  .club__tag {
    align-self: flex-start;
    background: var(--color-ink);
    color: var(--color-paper);
    font-size: var(--size-step-000);
    font-weight: var(--font-bold);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: 0.2em 0.8em;
    border-radius: 999px;
  }

  .club__facts {
    margin-block-start: auto;
    padding-block-start: var(--space-s);
    display: grid;
    gap: 0.25rem;
    font-size: var(--size-step-00);
  }

  .club__facts div {
    display: flex;
    gap: var(--space-s);
  }

  .club__facts dt {
    inline-size: 4rem;
    font-weight: var(--font-black);
  }

  .club__facts dd {
    margin: 0;
  }
</style>
