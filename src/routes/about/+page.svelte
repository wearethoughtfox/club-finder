<script>
  import { base } from '$app/paths';
  import Stack from '$lib/components/layout/Stack.svelte';
  import Grid from '$lib/components/layout/Grid.svelte';
  import Wrapper from '$lib/components/layout/Wrapper.svelte';
  import Region from '$lib/components/layout/Region.svelte';
  import Button from '$lib/components/blocks/Button.svelte';
  import { site } from '$lib/content/site.js';

  // Replace these with the real reasons.
  const reasons = [
    { title: 'Easy to find', text: 'Every club is on one page, so you do not need to search all over town.' },
    { title: 'Made for kids', text: 'Each club shows who it is for, when it runs and where to go.' },
    { title: 'Always growing', text: 'New clubs are added all the time, so check back often.' }
  ];
  const tints = ['var(--color-mint)', 'var(--color-violet-light)', 'var(--color-sun)'];
</script>

<svelte:head>
  <title>About: {site.name}</title>
  <meta name="description" content="Why we made {site.name} and who is behind it." />
</svelte:head>

<Region space="var(--space-2xl)">
  <Wrapper>
    <Stack space="var(--space-xl)">
      <Stack space="var(--space-m)">
        <h1>About us</h1>
        <p class="lede">
          {site.name} is a business started by a 10-year-old who got tired of never knowing which
          clubs were on. So he made a list.
        </p>
        <p>
          Our idea is simple: bring all the clubs together in one place, so any kid can find
          something they enjoy, and any parent can see the days, times and places at a glance.
        </p>
      </Stack>

      <Stack space="var(--space-m)">
        <h2>Why use {site.name}?</h2>
        <Grid minItemSize="15rem" gap="var(--space-l)" role="list">
          {#each reasons as reason, i}
            <div class="reason" style:--tint={tints[i]}>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </div>
          {/each}
        </Grid>
      </Stack>

      <Stack space="var(--space-m)">
        <h2>Meet the founders</h2>
        <p>
          Hi, we are Otto, William, Max, Ben and Aurora. We're all 10 years old and we love playing sports in the Holme Valley. 
        </p>
        <Button href="{base}/clubs/">Explore the clubs</Button>
      </Stack>
    </Stack>
  </Wrapper>
</Region>

<style>
  .lede {
    font-size: var(--size-step-2);
    font-weight: var(--font-medium);
  }

  .reason {
    background: var(--tint);
    border: var(--stroke);
    border-radius: var(--radius-m);
    box-shadow: var(--shadow-pop);
    padding: var(--space-m);
  }

  .reason h3 {
    margin-block-end: var(--space-xs);
  }
</style>
