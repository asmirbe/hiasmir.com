import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		port: 51752,
		strictPort: true,
		hmr: {
			port: 51752,
		},
	},
	plugins: [sveltekit()],
});
