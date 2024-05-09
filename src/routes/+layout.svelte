<script>
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import Footer from '$components/Footer.svelte';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<slot />
<!-- <Footer /> -->