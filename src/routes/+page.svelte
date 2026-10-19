<script>
  import { base } from '$app/paths';
  import Stack from '$lib/components/layout/Stack.svelte';
  import Cluster from '$lib/components/layout/Cluster.svelte';
  import Grid from '$lib/components/layout/Grid.svelte';
  import Wrapper from '$lib/components/layout/Wrapper.svelte';
  import Region from '$lib/components/layout/Region.svelte';
  import Button from '$lib/components/blocks/Button.svelte';
  import Card from '$lib/components/blocks/Card.svelte';
  import ImageBand from '$lib/components/blocks/ImageBand.svelte';
  import hillsImage from '$lib/images/hills.jpg';
  import heroImage from '$lib/images/hero.jpg';
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
          <p class="hero__badge">Made by kids for kids</p>
          <h1>Find a club you will <span class="hero__mark">love.</span></h1>
          <p class="hero__lede">
            Find all the best sports clubs in the Holme Valley.
          </p>
          <Cluster gap="var(--space-s)">
            <Button href="{base}/clubs/">See the clubs</Button>
            <Button href="{base}/about/" variant="secondary">About us</Button>
          </Cluster>
        </Stack>

        <img
          class="hero__photo"
          src={heroImage}
          width="1024"
          height="1024"
          alt="Kids in bright football kits laughing and running after a ball on a sunny pitch"
          fetchpriority="high"
        />
      </div>
    </Wrapper>
  </Region>
</section>

<Region>
  <Wrapper>
    <Stack space="var(--space-l)">
      <h2 class="featured__heading">Fresh from the list</h2>
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

<ImageBand
  image={hillsImage}
  credit="Photo: Tim Hoggarth, CC BY-NC-SA 2.0"
  creditHref="https://creativecommons.org/licenses/by-nc-sa/2.0/"
>
  <h2>Get out there and play</h2>
  <p>
    Every club on this list is run by people who love their sport and want you to love it too.
    Try something new, bring a friend and see where it takes you.
  </p>
  <Button href="{base}/clubs/" variant="sun">Find your sport</Button>
</ImageBand>

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
    color: var(--color-air);
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

  .hero__photo {
    inline-size: 100%;
    max-inline-size: 28rem;
    block-size: auto;
    margin-inline: auto;
    aspect-ratio: 1;
    object-fit: cover;
    border: var(--stroke);
    border-radius: var(--radius-m);
    box-shadow: var(--shadow-pop);
    transform: rotate(2deg);
  }

  .featured__heading {
    color: var(--color-air);
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
    background: var(--color-sun);
    color: var(--color-air);
    border: var(--stroke);
    border-radius: var(--radius-m);
    box-shadow: var(--shadow-pop);
    padding: var(--space-l);
  }
</style>
