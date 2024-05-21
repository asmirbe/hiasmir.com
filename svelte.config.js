import adapter from '@sveltejs/adapter-vercel'
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex'
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Ensures both .svelte and .md files are treated as components (can be imported and used anywhere, or used as pages)
	extensions: ['.svelte', '.md'],
	preprocess: [
		mdsvex({
			// The default mdsvex extension is .svx; this overrides that.
			extensions: ['.md'],
		}),
		sveltePreprocess({
			scss: {
				prependData: `@import './src/style/shared.scss';`
		}
		}),
	],
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		prerender: {
      entries: [
        '*'
      ]
    },
		alias: {
			$lib: './src/lib',
      $style: './src/style',
      $postcomp: './src/lib/posts/components',
			$components: './src/components',
		},
	}
};

export default config;
