<script>
  import { page } from '$app/state';
  import { base } from '$app/paths';

  /** @type {{ label?: string, links?: { href: string, label: string }[], children?: import('svelte').Snippet }} */
  let { label = 'Main', links = [], children } = $props();

  const pathname = $derived(page.url.pathname.slice(base.length) || '/');
  const isCurrent = (href) => (href === `${base}/` ? pathname === '/' : pathname.startsWith(href.slice(base.length)));
</script>

<nav aria-label={label} class="nav">
  <ul role="list" class="cluster nav__list">
    {#each links as link}
      <li>
        <a
          href={link.href}
          class="nav__link"
          aria-current={isCurrent(link.href) ? 'page' : undefined}
        >
          {link.label}
        </a>
      </li>
    {/each}
    {@render children?.()}
  </ul>
</nav>

<style>
  .nav__list {
    --gutter: var(--space-xs);
  }

  .nav__link {
    display: block;
    color: var(--color-air);
    text-decoration: none;
    font-weight: var(--font-bold);
    padding: var(--space-xs) var(--space-s);
    border-radius: 999px;
    border: 2px solid transparent;
    transition: background-color var(--transition-base);
  }

  .nav__link:hover {
    background: var(--color-violet-light);
    color: var(--color-ink);
  }

  .nav__link[aria-current='page'] {
    color: var(--color-ink);
    background: var(--color-sun);
    border-color: var(--color-ink);
  }

  @media (prefers-reduced-motion: reduce) {
    .nav__link {
      transition: none;
    }
  }
</style>
