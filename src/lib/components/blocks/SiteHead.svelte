<script>
  import Nav from './Nav.svelte';

  /** @type {string} Site name / logo text */
  export let siteName = 'Site Name';
  /** @type {string} Home link href */
  export let homeHref = '/';
  /** @type {{ href: string, label: string }[]} */
  export let navLinks = [];
</script>

<header class="site-head">
  <div class="wrapper">
    <div class="repel">
      <a href={homeHref} class="site-head__logo">
        <span class="site-head__dot" aria-hidden="true"></span>
        {siteName}
      </a>
      <Nav label="Main" links={navLinks} />
    </div>
  </div>
</header>

<style>
  .site-head {
    padding-block: var(--space-s);
    border-block-end: var(--stroke);
    background: var(--color-paper);
  }

  .site-head__logo {
    display: inline-flex;
    align-items: center;
    gap: var(--space-xs);
    font-weight: var(--font-black);
    font-size: var(--size-step-2);
    letter-spacing: -0.03em;
    text-decoration: none;
    color: var(--color-air);
  }

  .site-head__dot {
    inline-size: 1.1em;
    block-size: 1.1em;
    border-radius: 50%;
    background: var(--color-violet);
    border: var(--stroke);
    box-shadow: 2px 2px 0 var(--color-sun);
  }
</style>
