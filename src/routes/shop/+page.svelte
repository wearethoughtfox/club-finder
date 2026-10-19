<script>
  import Stack from '$lib/components/layout/Stack.svelte';
  import Grid from '$lib/components/layout/Grid.svelte';
  import Wrapper from '$lib/components/layout/Wrapper.svelte';
  import Region from '$lib/components/layout/Region.svelte';
  import { site } from '$lib/content/site.js';
  import { products } from '$lib/content/products.js';

  const tints = [
    'var(--color-mint)',
    'var(--color-violet-light)',
    'var(--color-sun)',
    'var(--color-coral)'
  ];
</script>

<svelte:head>
  <title>Shop: {site.name}</title>
  <meta name="description" content="Kit and gear from {site.name}." />
</svelte:head>

<Region space="var(--space-2xl)" data-page="shop">
  <Wrapper>
    <Stack space="var(--space-l)">
      <Stack space="var(--space-s)">
        <h1>The shop</h1>
        <p class="lede">Kit and gear to help you get stuck in.</p>
      </Stack>

      <Grid minItemSize="15rem" gap="var(--space-l)" role="list">
        {#each products as product, i}
          <article class="product">
            <div class="product__image" style:--tint={tints[i % tints.length]}>
              <p class="product__price">{product.price}</p>
            </div>
            <div class="product__body">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
            </div>
          </article>
        {/each}
      </Grid>

      <p>You buy our products at our headquarters on Dunford Road, Holmfirth.</p>
    </Stack>
  </Wrapper>
</Region>

<style>
  /* Shop-only page colour. Change this one line to try another colour.
     :has([data-page='shop']) means it only applies while this page is showing. */
  :global(body:has([data-page='shop'])) {
    --shop-bg: #55BCC2;
    background: var(--shop-bg);
  }

  /* Loose text sits straight on the page colour, so keep it dark on this light teal. */
  :global(body:has([data-page='shop'])) h1,
  :global(body:has([data-page='shop'])) .lede,
  :global(body:has([data-page='shop'])) .note {
    color: var(--color-ink);
  }

  .lede {
    font-size: var(--size-step-2);
    font-weight: var(--font-medium);
  }

  .product {
    display: flex;
    flex-direction: column;
    background: var(--color-air);
    border: var(--stroke);
    border-radius: var(--radius-m);
    box-shadow: var(--shadow-pop);
    overflow: hidden;
  }

  .product__image {
    display: grid;
    place-items: center;
    aspect-ratio: 4 / 3;
    background: var(--tint);
    border-block-end: var(--stroke);
  }

  .product__price {
    padding: 0.2em 0.8em;
    background: var(--color-ink);
    color: var(--color-air);
    border-radius: 999px;
    font-size: var(--size-step-4);
    font-weight: var(--font-black);
    transform: rotate(-4deg);
  }

  .product__body {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    padding: var(--space-m);
  }

  .product h2 {
    font-size: var(--size-step-2);
  }

  .note {
    font-size: var(--size-step-1);
  }
</style>
