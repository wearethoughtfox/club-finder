<script>
  import '../app.css';
  import { base } from '$app/paths';
  import { afterNavigate } from '$app/navigation';
  import { onMount } from 'svelte';
  import SkipLink from '$lib/components/blocks/SkipLink.svelte';
  import SiteHead from '$lib/components/blocks/SiteHead.svelte';
  import SiteFoot from '$lib/components/blocks/SiteFoot.svelte';
  import { site } from '$lib/content/site.js';

  const navLinks = [
    { href: `${base}/`, label: 'Home' },
    { href: `${base}/about/`, label: 'About' },
    { href: `${base}/clubs/`, label: 'Clubs' }
  ];

  onMount(() => {
    afterNavigate(() => {
      const heading = document.querySelector('main h1');
      if (heading) {
        heading.setAttribute('tabindex', '-1');
        heading.focus({ preventScroll: false });
      }
    });
  });
</script>

<SkipLink />
<SiteHead siteName={site.name} homeHref={`${base}/`} {navLinks} />

<main id="main-content" tabindex="-1">
  <slot />
</main>

<SiteFoot siteName={site.name} />

<style>
  :global(body) {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
  }

  main:focus,
  :global(main h1:focus) {
    outline: none;
  }
</style>
