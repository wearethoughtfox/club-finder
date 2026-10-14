<script>
  import { base } from '$app/paths';
  import Stack from '$lib/components/layout/Stack.svelte';
  import Cluster from '$lib/components/layout/Cluster.svelte';
  import Grid from '$lib/components/layout/Grid.svelte';
  import Wrapper from '$lib/components/layout/Wrapper.svelte';
  import Region from '$lib/components/layout/Region.svelte';
  import Button from '$lib/components/blocks/Button.svelte';
  import Card from '$lib/components/blocks/Card.svelte';
  import { site } from '$lib/content/site.js';
  import { clubs } from '$lib/content/clubs.js';

  const featured = clubs.slice(0, 3);
  const tints = ['var(--color-mint)', 'var(--color-violet-light)', 'var(--color-sun)'];
</script>

<svelte:head>
  <title>{site.name}: {site.tagline}</title>
  <meta name="description" content={site.description} />
</svelte:head>

<section class="hero">
  <Region space="var(--space-3xl)">
    <Wrapper>
      <div class="switcher hero__layout" style:--switcher-target-container-width="48rem">
        <Stack space="var(--space-m)">
          <p class="hero__badge">Made by a kid, for kids</p>
          <h1>Find a club you will <span class="hero__mark">love.</span></h1>
          <p class="hero__lede">
            Sport, art, robots, chess and more. All the best clubs for kids, in one simple list.
          </p>
          <Cluster gap="var(--space-s)">
            <Button href="{base}/clubs/">See the clubs</Button>
            <Button href="{base}/about/" variant="secondary">About us</Button>
          </Cluster>
        </Stack>

        <div class="hero__art" aria-hidden="true">
          <span class="blob blob--violet"></span>
          <span class="blob blob--sun"></span>
          <span class="blob blob--coral"></span>
          <span class="blob blob--mint"></span>
        </div>
      </div>
    </Wrapper>
  </Region>
</section>

<Region>
  <Wrapper>
    <Stack space="var(--space-l)">
      <h2>Fresh from the list</h2>
      <Grid minItemSize="17rem" gap="var(--space-l)" role="list">
        {#each featured as club, i}
          <Card href="{base}/clubs/" tint={tints[i % tints.length]}>
            <h3 slot="heading">{club.name}</h3>
            <p slot="body">{club.description}</p>
            <p slot="footer" class="meta">{club.when} &middot; {club.where}</p>
          </Card>
        {/each}
      </Grid>
      <Button href="{base}/clubs/" variant="sun">View every club</Button>
    </Stack>
  </Wrapper>
</Region>

<Region space="var(--space-xl)">
  <Wrapper>
    <div class="cta">
      <Stack space="var(--space-s)">
        <h2>Know a great club?</h2>
        <p>Tell us about it and we will add it to the list.</p>
      </Stack>
      <Button href="{base}/about/" variant="sun">Get in touch</Button>
    </div>
  </Wrapper>
</Region>

<style>
  .hero {
    background: var(--color-sun);
    border-block-end: var(--stroke);
    overflow: hidden;
  }

  .hero__layout {
    --gutter: var(--space-xl);
    align-items: center;
  }

  .hero__badge {
    display: inline-block;
    width: fit-content;
    background: var(--color-ink);
    color: var(--color-paper);
    font-weight: var(--font-bold);
    font-size: var(--size-step-00);
    padding: var(--space-xs) var(--space-s);
    border-radius: 999px;
    transform: rotate(-3deg);
  }

  .hero__mark {
    color: var(--color-violet);
    text-decoration: underline wavy var(--color-coral) 0.12em;
    text-underline-offset: 0.12em;
  }

  .hero__lede {
    font-size: var(--size-step-2);
    font-weight: var(--font-medium);
  }

  .hero__art {
    position: relative;
    aspect-ratio: 1;
    max-inline-size: 24rem;
    inline-size: 100%;
    margin-inline: auto;
  }

  .blob {
    position: absolute;
    border: var(--stroke);
    box-shadow: var(--shadow-pop);
  }

  .blob--violet {
    inset: 5% 25% 35% 0;
    background: var(--color-violet);
    border-radius: 50%;
  }

  .blob--coral {
    inset: 40% 0 0 40%;
    background: var(--color-coral);
    border-radius: 2rem;
    transform: rotate(8deg);
  }

  .blob--mint {
    inset: 55% 60% 5% 5%;
    background: var(--color-mint);
    border-radius: 999px 999px 0 0;
    transform: rotate(-10deg);
  }

  .blob--sun {
    inset: 0 0 70% 70%;
    background: var(--color-paper);
    border-radius: 50%;
  }

  @media (prefers-reduced-motion: no-preference) {
    .blob--violet {
      animation: float 6s ease-in-out infinite;
    }
    .blob--coral {
      animation: float 7s ease-in-out infinite reverse;
    }
  }

  @keyframes float {
    50% {
      translate: 0 -0.6rem;
    }
  }

  .meta {
    font-size: var(--size-step-00);
    font-weight: var(--font-medium);
    color: var(--color-ink-soft);
  }

  .cta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-m);
    background: var(--color-violet);
    color: var(--color-air);
    border: var(--stroke);
    border-radius: var(--radius-m);
    box-shadow: var(--shadow-pop);
    padding: var(--space-l);
  }
</style>
