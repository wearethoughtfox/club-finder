import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { generateTokens } from './scripts/generate-tokens.js';

export default defineConfig({
  plugins: [
    sveltekit(),
    {
      name: 'tokens',
      buildStart: generateTokens,
      // Regenerate the CSS whenever a design-token JSON file is saved in dev,
      // so colour experiments show up straight away.
      configureServer(server) {
        const isToken = (file) => file.includes('/design-tokens/') && file.endsWith('.json');
        server.watcher.on('change', (file) => {
          if (isToken(file)) generateTokens();
        });
      }
    }
  ]
});
